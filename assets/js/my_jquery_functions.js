$(window).scroll(function() {
  if ($(window).scrollTop() >= 400) {
    $('nav').css('background-color', 'rgba(217, 217, 217, 0.9)');
  } else {
    $('nav').css('background-color', 'transparent');
  }
});
