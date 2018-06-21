"use strict"

function getText(color, act){
	if(color == "red"){
		act = "STOP!"
		}else{
			if(color == "yellow"){
				act = "READY!"
			}else{
				if(color == "green") act = "GO!";
			}
		}
	document.getElementById('input').innerHTML = act;
}