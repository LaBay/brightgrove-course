"use strict"
var element_input = document.getElementById('data-input-1');
var element_b = document.getElementById('output1');
var element_kb = document.getElementById('output2');

function count(argument) {
	element_b.innerHTML = element_input.value.length;
	element_kb.innerHTML = element_input.value.length/1024;
}
