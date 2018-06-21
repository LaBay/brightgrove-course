"use strict"

var students = ["Сергей", "Матвей", "Лейла", "Алина",  "Иоган", "Виктор"];

var output = document.getElementById('output');
var output_cond_1 = document.getElementById('output_condition_1');
var output_cond_2 = document.getElementById('output_condition_2');
var input =  document.getElementById('input');


function view(arr) {
	
	output.innerHTML = arr;

	if(arr.length >= 3){
		output_cond_1.innerHTML = "Это большой массив! " + "В нём " + arr.length + " эл.";	
	}else{
		output_cond_1.innerHTML = "Это маленький массив! " + "В нём " + arr.length + " эл.";
	}

	if((arr.length == 4) && (arr[3] == "Виктор")){
		output_cond_2.innerHTML = "<span style=color:green> Этот массив нам подходит </span>";
	}else{
		output_cond_2.innerHTML = "Этот массив нам не подходит";
	}
};

view(students);

function addFirst(){
		students.unshift(input.value);
		view(students);
};

function addLast(){
		students.push(input.value);
		view(students);
};


function deleteFirst(){
	students.shift();
	view(students);
}

function deleteLast(){
	students.splice(students.length-1);
	view(students);
}
