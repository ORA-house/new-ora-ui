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
    var waterElementDaily = document.getElementById('waterChartDaily');

    var carbonElementLive = document.getElementById('carbonChartLive');
    var powerElementLive = document.getElementById('powerChartLive');
    var humidityElementLive = document.getElementById('humidityChartLive');
    var tempElementLive = document.getElementById('tempChartLive');
    var waterElementLive = document.getElementById('waterChartLive');

    var liveChartOptions = {
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
        }
    };

    //**************************************************************/
    //                      Daily Charts
    /***************************************************************/
        
    if(carbonElementDaily != null)
    {
        var ctxCarbonDaily = carbonElementDaily.getContext('2d');

        var configCarbonDaily = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Carbon',
                    borderColor: window.chartColors.red,
                    backgroundColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.myLine = new Chart(ctxCarbonDaily, configCarbonDaily);
    }

    if(powerElementDaily != null)
    {
        var ctxPowerDaily = powerElementDaily.getContext('2d');

        var configPowerDaily = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Power Consumption',
                    borderColor: window.chartColors.green,
                    backgroundColor: window.chartColors.green,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.myLine = new Chart(ctxPowerDaily, configPowerDaily);
    }

    if(humidityElementDaily != null)
    {
        var ctxHumidityDaily = humidityElementDaily.getContext('2d');

        var configHumidityDaily = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Humidity Level',
                    borderColor: window.chartColors.grey,
                    backgroundColor: window.chartColors.grey,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.myLine = new Chart(ctxHumidityDaily, configHumidityDaily);
    }

    if(tempElementDaily != null)
    {
        var ctxTempDaily = tempElementDaily.getContext('2d');

        var configTempDaily = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Temperature',
                    borderColor: window.chartColors.yellow,
                    backgroundColor: window.chartColors.yellow,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.myLine = new Chart(ctxTempDaily, configTempDaily);
    }

    if(waterElementDaily != null)
    {
        var ctxWaterDaily = waterElementDaily.getContext('2d');

        var configWaterDaily = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Water Consumption',
                    borderColor: window.chartColors.blue,
                    backgroundColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.myLine = new Chart(ctxWaterDaily, configWaterDaily);
    }

    /***************************************************************/
    //                      Live Charts
    /***************************************************************/

    if(carbonElementLive != null)
    {
        var ctxCarbonLive = carbonElementLive.getContext('2d');

        var configCarbonLive = {
            type: 'line',
            options: liveChartOptions
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
            options: liveChartOptions
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
            options: liveChartOptions
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
            options: liveChartOptions
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