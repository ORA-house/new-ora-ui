const AC_MODES = ["Auto", "Cool", "Heat", "Fan"];

$('.minus-ac-temp').click(function () {
    if (parseInt($('#setTemp').text()) > 5) {
        $('#setTemp').text(parseInt($('#setTemp').text()) - 1);
    }
});

$('.add-ac-temp').click(function () {
    if (parseInt($('#setTemp').text()) < 30) {
        $('#setTemp').text(parseInt($('#setTemp').text()) + 1);
    }
});

$('.previous-ac-mode').click(function () {
    let mode = $('#acMode').text();
    if (AC_MODES.indexOf(mode) > 0) {
        $('#acMode').text(AC_MODES[AC_MODES.indexOf(mode) - 1]);
    }
});

$('.next-ac-mode').click(function () {
    let mode = $('#acMode').text();
    if (AC_MODES.indexOf(mode) < 3) {
        $('#acMode').text(AC_MODES[AC_MODES.indexOf(mode) + 1]);
    }
});