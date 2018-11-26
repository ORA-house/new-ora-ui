const AC_MODES = ["Auto", "Cool", "Heat", "Fan"];

$('.minus-ac-temp').click(function () {
    if (parseInt($('.ac-temp').text()) > 5) {
        $('.ac-temp').text(parseInt($('.ac-temp').text()) - 1).trigger('change');
    }
});

$('.add-ac-temp').click(function () {
    if (parseInt($('.ac-temp').text()) < 30) {
        $('.ac-temp').text(parseInt($('.ac-temp').text()) + 1).trigger('change');
    }
});

$('.previous-ac-mode').click(function () {
    let mode = $('.ac-mode').text();
    if (AC_MODES.indexOf(mode) > 0) {
        $('.ac-mode').text(AC_MODES[AC_MODES.indexOf(mode) - 1]).trigger('change');
    }
});

$('.next-ac-mode').click(function () {
    let mode = $('.ac-mode').text();
    if (AC_MODES.indexOf(mode) < 3) {
        $('.ac-mode').text(AC_MODES[AC_MODES.indexOf(mode) + 1]).trigger('change');
    }
});
