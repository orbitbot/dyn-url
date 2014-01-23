var express = require('express');
var http = require('http');
var path = require('path');
var io = require('socket.io');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/libs', express.static('bower_components'));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(function(req, res, next) {
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { title: 'Dynamic URL Example - no such page' });
  } else if (req.accepts('json')) {
    res.send({ error: 'Not found' });
  } else {
    res.type('txt').send('Not found');
  }
});

var pages = {};

app.get('/(pages)?/?', function(req, res) {
  res.render('index', { title: 'Dynamic URL Example' });
});

app.get('/pages/:id', function(req, res) {
  var pageId = req.params.id;
  if (pages[pageId]) {
    res.render('page', { title: 'page id: ' + pageId, name: pageId });
  } else {
    res.render('no_page', { title: 'Couldn\'t find that page', name: pageId });
  }
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var sockets = io.listen(server);

sockets.on('connection', function(socket) {
  socket.emit('page-update', pages);

  socket.on('create', function(ack) {
    var randomUrl = Math.random().toString(36).slice(2);
    pages[randomUrl] = true;
    ack(randomUrl);
    socket.emit('page-update', pages);
    socket.broadcast.emit('page-update', pages);
  });

  socket.on('destroy', function(pageId, ack) {
    if (pages[pageId]) {
      delete pages[pageId];
      ack(true);
    } else {
      ack(false);
    }
    socket.emit('page-update', pages);
    socket.broadcast.emit('page-update', pages);
  });

  socket.on('clear', function(ack) {
    pages = {};
    ack(true);
    socket.emit('page-update', pages);
    socket.broadcast.emit('page-update', pages);
  });
});