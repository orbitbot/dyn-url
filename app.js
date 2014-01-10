var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(function(req, res, next) {
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { title: 'Express Dynamic URLs - no such page' });
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

app.get('/(rooms)?/?', function(req, res) {
  res.render('index', { title: 'Express Dynamic URLs' });
});

app.get('/rooms/:id', function(req, res) {
  var roomId = req.params.id;
  if (true) {
    res.render('room', { title: 'Room id: ' + roomId, name: roomId });
  }
  res.render('no_room', { title: 'Couldn\'t find that room', name: roomId });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
