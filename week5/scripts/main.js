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

function squareListItems(){
	// shoppinglistElement.setAttribute("class", squareList);
	shoppinglistElement.classList.add("squareList");
}

squareListItems();

function greenItems(){
	let listItems = document.querySelectorAll(".shopping li");
	for (let item of listItems){
		if (item.innerTextincludes("green")){
			item.classList.add("greenText");
		}
	}
}

// greenItems();

// function changeButtonText(){
// 	if (clickButton.innerText === "Click Me!"){
// 		clickButton.innerText = "Clicked!";
// 	} else if (clickButton.innerText === "Clicked!"){
// 		clickButton.innerText = "Click Me!";
// 	}
// }
// clickButton.addEventListener("click", changeButtonText);

// let shoppingCartImage = document.querySelector("#shoppingCart");
// clickButton.addEventListener("click", updateImage);

// function updateImage(){
// 	shoppingCartImage.src = "../images/shoppingCart.png"
// 	shoppingCartImage.alt = "shopping cart"
// 	shoppingCartImage.width = 50;
// 	shoppingCartImage.height = 50;

// }

let buttons = document.querySelectorAll("img ~button")
for (let button of buttons){
	button.addEventListener("mouseover", changeButtonBGColor)
}

function changeButtonBGColor(event){
	event.target.style.backgroundColor =event.target.innerText;
}