// Enable setInterval when multiple device feature is available
// setInterval(function () {
$.get(baseURL + "/states", function (states) {
    for (let room in states) {
        for (let deviceType in states[room]["devices"]) {
            let idNum = 1;

            if (deviceType !== 'ac') {
                for (let device in states[room]["devices"][deviceType]) {
                    let state = states[room]["devices"][deviceType][device];
                    let id = deviceType + "-" + room + "-" + idNum;

                    if (state === 0) {
                        $('input[id="' + id + '"]').prop('checked', false);
                    } else {
                        $('input[id="' + id + '"]').prop('checked', true);
                    }

                    idNum++;
                }
            } else {
                for (let ac in states[room]["devices"][deviceType]) {
                    for (let option in states[room]["devices"][deviceType][ac]) {
                        let state = states[room]["devices"][deviceType][ac][option];
                        let id = deviceType + "-" + option + "-" + room + "-" + idNum;

                        if (option === 'state') {
                            if (state === 0) {
                                $('input[id="' + id + '"]').prop('checked', false);
                            } else {
                                $('input[id="' + id + '"]').prop('checked', true);
                            }
                        } else {
                                $('#' + id).text(state);
                        }
                    }
                    idNum++;
                }
            }
        }
    }
});
// }, 5000);