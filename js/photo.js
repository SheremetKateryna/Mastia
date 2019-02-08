$(document).ready(function () {
$('.project_photo__modifier').click(function(event) {
    alert('hello');
    var path = $(this).attr('src');
    $('body').append('<div class="_overlay"></div><div class="_magnify"><img src="'+path+'"><div class="_close-popup"><i></i></div></div>');
    $('._magnify').css({
        left: ($(document).width() - $('._magnify').outerWidth())/2,
        top: ($(window).height() - $('._magnify').outerHeight())/2
      });
    $('._overlay, ._magnify').fadeIn('fast');
  });
  $('body').on('click', '._close-popup, ._overlay', function(event) {
    event.preventDefault();
    $('._overlay, ._magnify').fadeOut('fast', function() {
      $('._close-popup, ._magnify, ._overlay').remove();
    });
  });
});