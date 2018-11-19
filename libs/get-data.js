var date = new Date();
var curMinute = date.getMinutes();
var curSec = date.getSeconds();

var documents = msg.payload;
var powerCon = [];
var co2 = [];
var humidity = [];
var temp = [];

var days = [];
var i=0;

var numRecordsPower = 0;
var numRecordsCo2 = 0;
var numRecordsHumidity = 0;
var numRecordsTemp = 0;

var totalPowerCon = 0;
var totalCo2 = 0;
var totalHumidity = 0;
var totalTemp = 0;

var averagePower = 0.0;
var averageCo2 = 0.0;
var averageHumidity = 0.0;
var averageTemp = 0.0;

var currentDate = documents[0].date;

for(i = 0; i < documents.length; i++)
{
    var nextDate = documents[i].date;
    
    if(nextDate != currentDate)
    {
        //from this record, the data of the next day begins
        //so add whatever calculated so far to the labels and values 
        //and reset everything to calculate the next day's averagePower

        averagePower = totalPowerCon/numRecordsPower;
        averageCo2 = totalPowerCon/numRecordsCo2;
        averageHumidity = totalPowerCon/numRecordsHumidity;
        averageTemp = totalPowerCon/numRecordsTemp;
        
        // console.log("total: "+totalPowerCon);
        // console.log("numRecordsPowerPower: "+numRecordsPower);
        // console.log("averagePower: "+averagePower);
        //console.log("\n");
        days.push(currentDate);
        powerCon.push(averagePower);
        humidity.push(averageHumidity);
        temp.push(averageTemp);
        co2.push(averageCo2);

        //reset values
        averagePower = 0;
        totalPowerCon = 0;
        numRecordsPower = 0;
        currentDate = nextDate;
    }

    var minutes = documents[i].minutes;

    for(var minute in minutes)
    {
        for(var second in minutes[minute])
        {
            if(!isNaN(minutes[minute][second].power))
            {
                totalPowerCon += minutes[minute][second].power;
                numRecordsPower += 1;
            }
            
            if(!isNaN(minutes[minute][second].co2))
            {
                totalCo2 += minutes[minute][second].co2;
                numRecordsCo2 += 1;
            }
            
            if(!isNaN(minutes[minute][second].humidity))
            {
                totalHumidity += minutes[minute][second].humidity;
                numRecordsHumidity += 1;
            }
            
            if(!isNaN(minutes[minute][second].temp))
            {
                totalTemp += minutes[minute][second].temp;
                numRecordsTemp += 1;
            }
            //console.log("totalPowerCon:"+totalPowerCon);
        }
    }
}

console.log("total: "+totalPowerCon);
console.log("numRecordsPower: "+numRecordsPower);
averagePower = totalPowerCon/numRecordsPower;
console.log("averagePower: "+averagePower);

days.push(currentDate);
powerCon.push(averagePower);
humidity.push(averageHumidity);
temp.push(averageTemp);
co2.push(averageCo2);

console.log("days:");
console.log(days);
console.log("co2:");
console.log(co2);
console.log("powerCon:");
console.log(powerCon);
console.log("humidity:");
console.log(humidity);



var data = {
     type: 'line',
     data: {
		 labels: days,
		 datasets: [{
		 label: 'Power',
		 data: powerCon,
		 borderColor: '#324463',
		 borderWidth: 1,
		 fill: false,
		 pointRadius: 0.5
	 }]
 }};
var options =  {
	 legend: {
		 display: false,
			 labels: {
				 display: false
			 }
	 },
	 scales: {
		 yAxes: [{
			 ticks: {
				 beginAtZero:false,
				 fontSize: 10,
				 min: 10,
				 max: 30
			 }
		 }],
		 xAxes: [{
			 ticks: {
				 beginAtZero:true,
				 fontSize: 8
			 }
		 }]
	 },
	 animation: {
	     duration: 0
	 },
	 //Boolean - If we want to override with a hard coded scale
// 	 scaleOverride: true,
// 	 //** Required if scaleOverride is true **
// 	 //Number - The number of steps in a hard coded scale
//  	 scaleSteps: 10,
// // 	 //Number - The value jump in the hard coded scale
//  	 scaleStepWidth: 10,
// // 	 //Number - The scale starting value
//  	 scaleStartValue: 0
};

msg.payload.date = documents[documents.length - 1].date;
msg.payload.data = JSON.stringify(data);
msg.payload.options = JSON.stringify(options);

return msg;