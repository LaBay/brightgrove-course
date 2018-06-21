"use strict"

var states = ["Танзания", "Непал", "Науру", "Белиз", "Андорра"];
var populations = [46912768, 28825709, 14019, 291500, 69150]

var string = "";

for (let i = 0;  i < states.length; i++) {
	string += "<p>" + states[i] + " " + populations[i] + "</p>";
}

	document.open();
	document.write(string);
	document.close();