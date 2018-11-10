let server = window.location.hostname;
let port = '1880';
let protocol = window.location.protocol;
let baseURL = protocol + '//' + server + ':' + port;

$('input[class="device"]').change(function () {
    this.value = +this.checked;

    let words = this.id.split("-");

    $.ajax({
        url: baseURL + '/command',
        type: "POST",
        async: true,
        cache: false,
        data: ({
            device: words[0],
            room: words[1],
            id: words[2],
            state: this.value
        }),
        dataType: "json"
    });
});

$('.ac-control').change(function () {
    let words = this.id.split("-");
    let value;

    switch (words[1]) {
        case "state":
            value = +this.checked;
            break;
        case "temp":
            value = $('.ac-temp').text();
            break;
        case "mode":
            value = $('.ac-mode').text();
            break
    }

    $.ajax({
        url: baseURL + '/command',
        type: "POST",
        async: true,
        cache: false,
        data: ({
            device: words[0],
            option: words[1],
            room: words[2],
            id: words[3],
            state: value
        }),
        dataType: "json"
    });
});