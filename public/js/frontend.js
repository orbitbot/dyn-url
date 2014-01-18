var socket = io.connect();

socket.on('room-update', function(currentRooms) {
  if ($.isEmptyObject(currentRooms))
    $(".clear-btn").hide();
  else
    $(".clear-btn").show();

  $("#allRooms ul").empty();
  $.each( currentRooms, function( key, value ) {
    $("#allRooms ul").append('<a href="/rooms/' + key +'"><li>' + key +'</li></a>');
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