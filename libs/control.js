let baseURL = 'http://localhost:1880';

$('input[class="device"]').change(function(){
    this.value = +this.checked;

    let words = this.id.split("-");

    $.ajax({
        url: baseURL + '/command',
        type: "GET",
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
    
//     var words = this.name.split("-");
    
//     $.ajax({
//         url: window.location.protocol + "//" + window.location.hostname + ":1880/ora", 
//         type: "GET",
//         async: true,
//         cache: false,
//         data: ({
//             room: words[1],
//             device: words[0],
//             name: this.id,
//             state: this.value
//         }),
//         dataType: "json"
//     });

// if(this.id == "la"){
//         if ($("#la").is(':checked')) {
//             $('input[name="' + words[0] + '-' + words[1] + '"]').prop("checked", true);
//         } else {
//             $('input[name="' + words[0] + '-' + words[1] + '"]').prop("checked", false);
//         }
//     }        

//     if(words[0] != "light"){
//         var stat = "off";
        
//         if(this.value == 1){
//             stat = "on";    
//         }
        
//         alert(words[0] + " in " + words[1] + " is now " + stat)
//     }

// });

// $('input[class="slide"]').change(function(){
    
//     var words = this.name.split("-");
    
//     $.ajax({
//         url: window.location.protocol + "//" + window.location.hostname + ":1880/ora", 
//         type: "GET",
//         async: true,
//         cache: false,
//         data: ({
//             room: words[1],
//             device: words[0],
//             name: this.id,
//             state: this.value
//         }),
//         dataType: "json"
//     });
    
//     if(words[0] == "televisionVol"){
//         alert(words[0] + " of television in " + words[1] + " is now set to " + this.value);
//     }else{
//         alert(words[0] + " in " + words[1] + " is now set to " + this.value);
//     }
});