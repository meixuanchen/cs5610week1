// function getNumber(){
// 	let num;

// 	do {
// 		num = prompt("get a number");
// 	} while (isNan(num));
// 	return num;
// }

// let number = getNumber();
// let radius = document.querySelector("#radius");
// radius.innerText += `${number}`;

// function calculateArea(rad){
// 	let area = Math.PI* Math.pow(rad,2);
// 	return area;
// }

// let area = calculateArea(number);
// let result = document.querySelector("#result");
// result.innerText += `${area}`;


let shoppinglistElement = document.querySelector(".shopping");

let shoppingItems = ["bread", "cheese", "green pepper"];

function populateList(arr){
	for (let item of arr){
		let listItem = document.createElement("li");
		listItem.innerText = item;
		shoppinglistElement.appendChild(listItem);
	}
}
populateList(shoppingItems);