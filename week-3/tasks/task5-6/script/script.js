"use strict"

var fruits = ["апельсин", "банан", "груша"];

var output_name = document.getElementById('output_name');
var output_quantity = document.getElementById('output_quantity');
var input =  document.getElementById('input');


function view(arr, string) {
	string = "";
	for(let key in arr){
		string += "<li>" + arr[key] + "</li>"};
	output_name.innerHTML = string;
	output_quantity.innerHTML = arr.length;
};

view(fruits);

function addFirst(){
		fruits.unshift(input.value);
		view(fruits);
		console.log(input.value)
};

function addLast(){
		fruits.push(input.value);
		view(fruits);
};


function deleteFirst(){
	fruits.shift();
	view(fruits);
}

function deleteLast(){
	fruits.splice(fruits.length-1);
	view(fruits);
}

function change(){
	if(fruits.length-2 >= 0){
		fruits.splice(fruits.length-2, 1, "ананас");
		view(fruits);
	}
}