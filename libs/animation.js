$('#menu').click(function () {
  $('.menu-container').toggleClass('active');
  $('#menu').toggleClass('active');
});

$('#login').click(function() {
  $('.start-txt').css('display', 'none');
  detectFace();
  $('#home-vid').toggleClass('login-bg');
});