"use strict"


var a, b, c;

$(".operator").click(function(){
	c = this.id;
	count();
})

$("#monitor").keyup(function(event){
	a = +$("#frstOperand").val();
	b = +$("#scndOperand").val();
	count();
});

function count(result){
	if(a && b && c){
		if(c == "addition") result = a + b;
		if(c == "subtraction") result = a - b;
		if(c == "multiplication") result = a * b;
		if(c == "division") result = a / b;
		$("#output").text(result);
	}
}

