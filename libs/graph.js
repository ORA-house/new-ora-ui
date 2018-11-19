window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

window.randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : 2.0) * Math.random() * 100;
};

window.onload = function () {
    var carbonElementDaily = document.getElementById('carbonChartDaily');
    var powerElementDaily = document.getElementById('powerChartDaily');
    var humidityElementDaily = document.getElementById('humidityChartDaily');
    var tempElementDaily = document.getElementById('tempChartDaily');
    //var powerGenElementDaily = document.getElementById('powerGenChartDaily');

    var carbonElementLive = document.getElementById('carbonChartLive');
    var powerElementLive = document.getElementById('powerChartLive');
    var humidityElementLive = document.getElementById('humidityChartLive');
    var tempElementLive = document.getElementById('tempChartLive');
    //var powerGenElementLive = document.getElementById('powerGenChartLive');

    var chartOptions = {
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
                    fontSize: 16,
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize: 16
                }
            }]
        },
        animation: {
            duration: 0
        }
    };

    //**************************************************************/
    //                      Daily Charts
    /***************************************************************/

    if((carbonElementDaily != null) || (powerElementDaily != null) || (humidityElementDaily != null) || (tempElementDaily != null))
    {
        var url = baseURL+"/dailychartdata";
        var data;
        $.get(url, function(response){
            tempData = response.tempData;
            co2Data = response.co2Data;
            humidityData = response.humidityData;
            powerConData = response.powerConData;
            options = response.options;

            if(carbonElementDaily != null)
            {
                var ctxCarbonDaily = carbonElementDaily.getContext('2d');

                var configCarbonDaily = {
                    type: 'line',
                    data: JSON.parse(co2Data),
                    options: chartOptions
                };

                var carbonChartDaily = new Chart(ctxCarbonDaily, configCarbonDaily);
                carbonChartDaily.options.scales.yAxes[0].ticks.suggestedMin = 0;
                carbonChartDaily.options.scales.yAxes[0].ticks.suggestedMax = 100;
                
                carbonChartDaily.update();

            }

            if(powerElementDaily != null)
            {
                var ctxPowerDaily = powerElementDaily.getContext('2d');

                var configPowerDaily = {
                    type: 'line',
                    data: JSON.parse(powerConData),
                    options: chartOptions
                };

                var powerChartDaily = new Chart(ctxPowerDaily, configPowerDaily);
                // powerChartDaily.options.scales.yAxes[0].ticks.suggestedMin = 0;
                // powerChartDaily.options.scales.yAxes[0].ticks.suggestedMax = 100;

                console.log(configPowerDaily);
                
                powerChartDaily.update();
            }

            if(humidityElementDaily != null)
            {
                var ctxHumidityDaily = humidityElementDaily.getContext('2d');

                var configHumidityDaily = {
                    type: 'line',
                    data: JSON.parse(humidityData),
                    options: chartOptions
                };

                var humidityChartDaily = new Chart(ctxHumidityDaily, configHumidityDaily);
                // powerChartDaily.options.scales.yAxes[0].ticks.suggestedMin = 0;
                // powerChartDaily.options.scales.yAxes[0].ticks.suggestedMax = 100;

                console.log(configHumidityDaily);
                
                humidityChartDaily.update();
            }

            if(tempElementDaily != null)
            {
                var ctxTempDaily = tempElementDaily.getContext('2d');

                var configTempDaily = {
                    type: 'line',
                    data: JSON.parse(tempData),
                    options: chartOptions
                };

                var tempChartDaily = new Chart(ctxTempDaily, configTempDaily);
                // powerChartDaily.options.scales.yAxes[0].ticks.suggestedMin = 0;
                // powerChartDaily.options.scales.yAxes[0].ticks.suggestedMax = 100;

                console.log(configTempDaily);
                
                tempChartDaily.update();

                window.myLine = new Chart(ctxTempDaily, configTempDaily);
            }
        });
    }

    

    /***************************************************************/
    //                      Live Charts
    /***************************************************************/

    if(carbonElementLive != null)
    {
        var ctxCarbonLive = carbonElementLive.getContext('2d');

        var configCarbonLive = {
            type: 'line',
            options: chartOptions
        };
        
        var carbonChart = new Chart(ctxCarbonLive, configCarbonLive);
        carbonChart.options.scales.yAxes[0].ticks.suggestedMin = 400;
        carbonChart.options.scales.yAxes[0].ticks.suggestedMax = 850;  
        
        carbonChart.update();

        function getco2data(){
            var url = baseURL+"/getco2data";
            var newData;
            $.get(url, function(response){
                newData = (JSON.parse(response)).data;
                console.log(newData);
                // if(newData.labels[newData.labels.length - 1] != data.labels[data.labels.length - 1])
                // {
                    data = newData;
                    carbonChart.config.data = newData;
                    carbonChart.options.animation.duration = 0;
                    
                    carbonChart.options.scales.yAxes[0].ticks.suggestedMin = 400;
                    carbonChart.options.scales.yAxes[0].ticks.suggestedMax = 850;  
                    
                    carbonChart.update();
                //}
            });
        }
        getco2data();
        setInterval(getco2data,1000);
    }

    if(powerElementLive != null)
    {
        var ctxPowerLive = powerElementLive.getContext('2d');

        var configPowerLive = {
            type: 'line',
            options: chartOptions
        };
        
        var powerChart = new Chart(ctxPowerLive, configPowerLive);
        powerChart.options.scales.yAxes[0].ticks.suggestedMin = 400;
        powerChart.options.scales.yAxes[0].ticks.suggestedMax = 850;  
        
        powerChart.update();

        function getpowerdata(){
            var url = baseURL+"/getpowerdata";
            var newData;
            $.get(url, function(response){
                newData = (JSON.parse(response)).data;
                console.log(newData);
                // if(newData.labels[newData.labels.length - 1] != data.labels[data.labels.length - 1])
                // {
                    data = newData;
                    powerChart.config.data = newData;
                    powerChart.options.animation.duration = 0;
                    
                    powerChart.options.scales.yAxes[0].ticks.suggestedMin = 400;
                    powerChart.options.scales.yAxes[0].ticks.suggestedMax = 850;  
                    
                    powerChart.update();
                //}
            });
        }
        getpowerdata();
        setInterval(getpowerdata,1000);
    }

    if(humidityElementLive != null)
    {
        var ctxHumidityLive = humidityElementLive.getContext('2d');

        var configHumidityLive = {
            type: 'line',
            options: chartOptions
        };
        
        var humidityChart = new Chart(ctxHumidityLive, configHumidityLive);
        humidityChart.options.scales.yAxes[0].ticks.suggestedMin = 0;
        humidityChart.options.scales.yAxes[0].ticks.suggestedMax = 65;  
        
        humidityChart.update();

        function gethumiditydata(){
            var url = baseURL+"/gethumidity";
            var newData;
            $.get(url, function(response){
                newData = (JSON.parse(response)).data;
                console.log(newData);
                // if(newData.labels[newData.labels.length - 1] != data.labels[data.labels.length - 1])
                // {
                    data = newData;
                    humidityChart.config.data = newData;
                    humidityChart.options.animation.duration = 0;
                    
                    humidityChart.options.scales.yAxes[0].ticks.suggestedMin = 400;
                    
                    humidityChart.update();
                //}
            });
        }
        gethumiditydata();
        setInterval(gethumiditydata,1000);
    }

    if(tempElementLive != null)
    {
        var ctxTempLive = tempElementLive.getContext('2d');

        var configTempLive = {
            type: 'line',
            options: chartOptions
        };
        
        var tempChart = new Chart(ctxTempLive, configTempLive);
        tempChart.options.scales.yAxes[0].ticks.suggestedMin = 5;
        tempChart.options.scales.yAxes[0].ticks.suggestedMax = 50;  
        
        tempChart.update();

        function gettempdata(){
            var url = baseURL+"/gettempdata";
            var newData;
            $.get(url, function(response){
                newData = (JSON.parse(response));
                console.log(newData);
                // if(newData.labels[newData.labels.length - 1] != data.labels[data.labels.length - 1])
                // {
                    data = newData;
                    tempChart.config.data = newData;
                    tempChart.options.animation.duration = 0;
                    
                    tempChart.options.scales.yAxes[0].ticks.suggestedMin = 5;
                    tempChart.options.scales.yAxes[0].ticks.suggestedMax = 50; 
                    
                    tempChart.update();
                //}
            });
        }
        gettempdata();
        setInterval(gettempdata,1000);
    }
};