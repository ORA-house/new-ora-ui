// Enable setInterval when multiple device feature is available
// setInterval(function () {
$.get(baseURL + "/states", function (states) {
    for (let room in states) {
        // console.log(room);
        for (let deviceType in states[room]["devices"]) {
            // console.log(deviceType);
            let idNum = 1;
            for (let device in states[room]["devices"][deviceType]) {
                let state = states[room]["devices"][deviceType][device];
                let id = deviceType + "-" + room + "-" + idNum;

                if (state == 0) {
                    $('input[id="' + id + '"]').prop('checked', false);
                } else {
                    $('input[id="' + id + '"]').prop('checked', true);
                }

                idNum++;
            }
        }
    }
});
// }, 5000);