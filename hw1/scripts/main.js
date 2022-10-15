const themeToggle = document.querySelector("#changeTheme");

const currentTheme = localStorage.getItem("theme");
const pageTheme = document.body;

let isDark = false;

if (currentTheme === "light") {
  pageTheme.classList.add("light-theme");
  themeToggle.innerText="Toggle dark theme";
} else {
    themeToggle.innerText = "Toggle light theme"
}

function themeMode() {
    isDark = !isDark;
    isDark ? themeToggle.innerText = "Toggle light theme" : themeToggle.innerText = "Toggle dark theme";
    pageTheme.classList.toggle("light-theme");

    let theme = "dark";
    if (pageTheme.classList.contains("light-theme")) {
      theme = "light";
    }
    localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", themeMode)

function displaydate(){
	const date = new Date();
	const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
	const day = days[ date.getDay() ];
	const month = months[ date.getMonth() ];

	const display = day + " " + month + " "+ date.getDay() + " " + date.getFullYear();

	if (!document.getElementById("datedisplay").innerHTML) {
		document.getElementById("datedisplay").innerHTML += "<p>Today's date is </p>" + display;
	} else {
		document.getElementById("datedisplay").innerHTML = null;
	}
}

function displaytime(){
	const date = new Date();
	hour = date.getHours();

	display = hour + ":" + date.getMinutes() + ":" + date.getSeconds() + "AM";

	if (hour > 12) {
		hour -= 12;
		display = hour + ":" + date.getMinutes() + ":" + date.getSeconds() + "PM";
	}
	

	if (!document.getElementById("timedisplay").innerHTML) {
		document.getElementById("timedisplay").innerHTML += "<p>Current time is </p>" + display;
	} else {
		document.getElementById("timedisplay").innerHTML = null;
	}
}

