function calculateTime() {
    var date = new Date();
    var day = date.getDate();

    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = monthList[date.getMonth()];

    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = dayList[date.getDay()];

    var year = date.getFullYear();

    //get code for time
    var time = Date();
    time = time.substr(16, 5);
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = day + " " + monthName + " " + year;
    document.getElementById("day").innerHTML = dayName;
}
setInterval(calculateTime, 500);