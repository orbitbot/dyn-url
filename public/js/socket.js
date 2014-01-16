var socket = io.connect();

socket.on('room-update', function(currentRooms) {
  console.log(currentRooms);
});

$(document).ready(function() {
  $(".create-btn").click(function() {
    socket.emit('create', function(roomId) {
      console.log(roomId);
    });
  });

  $(".destroy-btn").click(function() {
    socket.emit('destroy', roomId, function(result) {
      console.log(result);
    });
  });
});