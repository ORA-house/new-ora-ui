$('#menu').click(function () {
  if ($('#home').css('display') === 'none') {
    $('.content').css('display', 'none');
    $('#home').css('display', 'block');
    $('body').removeClass('bright');
    $('body').addClass('homepage');
    $('body').addClass('grey');
  } else {
    $('.menu-container').toggleClass('active');
    $('#menu').toggleClass('active');
  }
});

$('#control-nav').click(function () {
  window.location.replace('control.html');
});

$('#mBed-op').click(function () {
  goToRoom('master-bedroom.html');
});

$('#cBed-op').click(function () {
  goToRoom($('#mBed'));
  $('#mBed .header h3').html('CHILDREN');
  $('#mBed .header .desc').html('In this page you will be able to control home appliances available in the children bedroom.');
});

$('#kitchen-op').click(function () {
  goToRoom($('#kitchen'));
});

$('#liv-op').click(function () {
  goToRoom($('#living'));
});

$('#deck-op').click(function () {
  goToRoom($('#deck'));
});

$('#car-op').click(function () {
  goToRoom($('#car'));
});

$('.add').click(function () {
  incTemp();
});

$('.minus').click(function () {
  decTemp();
});

function goToRoom($room) {
  $('#control').css('display', 'none');
  $room.css('display', 'block');
  $('body').addClass('bright');
  $('body').removeClass('grey');
}