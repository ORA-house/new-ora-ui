$('#menu').click(function () {
  $('.menu-container').toggleClass('active');
  $('#menu').toggleClass('active');
});

$('#login').click(function() {
  detectFace();
  $('#home-vid').toggleClass('login-bg');
});