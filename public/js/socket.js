var socket = io.connect();

socket.on('room-update', function(currentRooms) {
  $("#allRooms ul").empty();
  $.each( currentRooms, function( key, value ) {
    $("#allRooms ul").append('<li><a href="/rooms/' + key +'">' + key +'</a></li>');
  });
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

  $(".clear-btn").click(function() {
    socket.emit('clear', function(result) {
      console.log(result);
    });
  });  
});