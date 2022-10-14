let mode = localStorage.getItem("mode");

const selectLightMode = () =>{
	document.body.classList.add('light-mode');
	localStorage.setItem('mode', 'light')
}

const selectDarktMode = () =>{
	document.body.classList.remove('light-mode');
	localStorage.setItem('mode', 'dark')
}

if (mode === 'light'){selectLightMode();}
else selectDarktMode();


function toggleTheme(){
	changeBackground();
	changeText();
}

function changeBackground(){
	var element = document.body;
	element.classList.toggle("light-mode");
}

function changeText(){
	var switchbutton = document.getElementById("changeTheme");
	if (switchbutton.innerText === "Toggle light mode"){ switchbutton.innerText = "Toggle dark mode";}
	else switchbutton.innerText = "Toggle light mode";
}
