function getTemp() {
    $.get(baseURL + "/getTemp", function(data){
        $('#temperature-value').text(data.tempc);
        console.log(data.tempc);
    });
}
window.onload = getTemp;
setInterval(getTemp, 60000);