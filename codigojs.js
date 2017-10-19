$('.trigger').click(function() {
  var rel = $(this).attr('rel');
  $('#contenido-' + rel).toggleClass("open")
});
