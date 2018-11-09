$('#menu').click(function () {
  $('.menu-container').toggleClass('active');
  $('#menu').toggleClass('active');
});

$('.add').click(function () {
  incTemp();
});

$('.minus').click(function () {
  decTemp();
});

// NAVIGATION
$('#control-nav').click(function () {
  goTo('control.html');
});

$('#mBed-op').click(function () {
  goTo('rooms/master-bedroom.html');
});

$('#cBed-op').click(function () {
  goTo('rooms/children-bedroom.html');
});

$('#kitchen-op').click(function () {
  goTo('rooms/kitchen.html');
});

$('#liv-op').click(function () {
  goTo('rooms/living-room.html');
});

$('#deck-op').click(function () {
  goTo('rooms/deck.html');
});

$('#car-op').click(function () {
  goTo('rooms/car-parking.html');
});