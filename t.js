
var allButton = document.getElementById("allButtonId");
var esl  = document.getElementById("eslId");
var firefox = document.getElementById("firefoxId");
var fcc = document.getElementById("fccId");





$(document).on('click','#allButtonId',function(){
    var esl = document.getElementById("eslId");
    var firefox = document.getElementById("firefoxId");
    var fcc = document.getElementById("fccId");
    esl.style.display = 'block';
    firefox.style.display = 'block';
    fcc.style.display = 'block';

    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
    console.log(data);
    });

});

$(document).on('click','#offlineButtonId',function(){
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
	console.log(data);
	if (data['stream']==null){
	    var esl = document.getElementById("eslId");
	    esl.style.display = 'block';
    	    document.getElementById("statusEslId").innerHTML = "Offline"
	}
	else{
	    var esl = document.getElementById("eslId");
	    esl.style.display = 'none';
	   document.getElementById("eslId").innerHTML = data["stream"]["game"]+' '+ data["stream"]["channel"]["status"];
	}
    });
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/omgitsfirefoxx?callback=?', function(data) {
	console.log(data);
	if (data['stream']==null){
	    var firefox = document.getElementById("firefoxId");
	    firefox.style.display = 'block';
	    document.getElementById("statusFirefoxId").innerHTML = "Offline"
	    
	}
	else{
	    var firefox = document.getElementById("firefoxId");
	    firefox.style.display = 'none';
	}
    });
    
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
	console.log(data);
	if (data['stream']==null){
	    var fcc = document.getElementById("fccId");
	    fcc.style.display = 'block';
    	    document.getElementById("statusFccId").innerHTML = "Offline"
	}
	else{
	    var fcc = document.getElementById("fccId");
	    fcc.style.display = 'none';
	}
    });
});

function eslOnClick(){
    console.log("Bear chill");
}

$(document).on('click','#onlineButtonId',function(){
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
	console.log(data["stream"]["channel"]["url"]);
	if (data['stream']==null){
	    var esl = document.getElementById("eslId");
	    esl.style.display = 'none';
	}
	else{
	    var esl = document.getElementById("eslId");
	    document.getElementById("statusEslId").innerHTML = data["stream"]["game"]+' '+ data["stream"]["channel"]["status"];
	}
    });
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/omgitsfirefoxx?callback=?', function(data) {
	console.log(data);
	if (data['stream']==null){
	    var firefox = document.getElementById("firefoxId");
	    firefox.style.display = 'none';
	}
	else{
	    var firefox = document.getElementById("firefoxId");
	    firefox.style.display = 'block';
	    	    document.getElementById("statusFirefoxId").innerHTML = data["stream"]["game"]+' '+ data["stream"]["channel"]["status"];
	}
    });
    
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
	console.log(data);
	if (data['stream']==null){
	    var fcc = document.getElementById("fccId");
	    fcc.style.display = 'none';
	}
	else{
	    var fcc = document.getElementById("fccId");
	    fcc.style.display = 'block';
	    	    document.getElementById("statusFccId").innerHTML = data["stream"]["game"]+' '+ data["stream"]["channel"]["status"];
	}
    });
});
