let server = 'localhost';
let port = '1880';
let baseURL = 'http://' + server + ':' + port;

$('input[class="device"]').change(function(){
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