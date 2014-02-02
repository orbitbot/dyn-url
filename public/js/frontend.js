var socket = io.connect();

socket.on('page-update', function(currentPages) {
  if ($.isEmptyObject(currentPages)) {
    $(".clear-btn").hide();
    $("#status").hide();
    $("#welcome").show();
  } else
    $(".clear-btn").show();

  $("#pages ul").empty();
  $.each( currentPages, function( key, value ) {
    $("#pages ul").append('<a href="/pages/' + key +'"><li>' + key +'</li></a>');
  });
});

$(document).ready(function() {
  $("#status").hide();
  $(".create-btn").click(function() {
    socket.emit('create', function(pageId) {
      $("#welcome").hide();
      var newText = "<p>You've just created a new page with the id " + pageId + "!</p>";
      newText += "<p>Click on the page id links below to visit the invidual pages</p>";
      $("#status").show().html(newText);
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