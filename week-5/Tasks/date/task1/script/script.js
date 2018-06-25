"use strict"

var output = document.getElementById('screen');
var time;
var elements = [];

function getTime(){
	time = "";
	function addZero(i) {
	    if (i < 10) i = "0" + i;
	    return i;
	}
	let t = new Date();
	let h = addZero(t.getHours());
    let m = addZero(t.getMinutes());
    let s = addZero(t.getSeconds());
    time = h + ":" + m + ":" + s;
    time = time.split('');

};
 
function draw() {
	getTime();
	elements = [];
	let src;
	for(let i in time){
		if(time[i] < 10){ src = "src=\"img/" + time[i] + ".png\"" }
			else{ src = "src=\"img/10.png\"" }
		elements += "<img " + src + " alt=" + time[i] + " >";		
		output.innerHTML = elements;	
	}
};

var intervalID = setInterval(draw, 100);
