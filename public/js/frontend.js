var socket = io.connect();

socket.on('page-update', function(currentPages) {
  if ($.isEmptyObject(currentPages))
    $(".clear-btn").hide();
  else
    $(".clear-btn").show();

  $("#pages ul").empty();
  $.each( currentPages, function( key, value ) {
    $("#pages ul").append('<a href="/pages/' + key +'"><li>' + key +'</li></a>');
  });
});

$(document).ready(function() {
  $(".create-btn").click(function() {
    socket.emit('create', function(pageId) {
      console.log(pageId);
    });
  });

  $(".destroy-btn").click(function() {
    socket.emit('destroy', pageId, function(result) {
      console.log(result);
    });
  });

  $(".clear-btn").click(function() {
    socket.emit('clear', function(result) {
      console.log(result);
    });
  });
});