var socket = io.connect();

socket.on('connect', function() {
  socket.emit('msg');
});