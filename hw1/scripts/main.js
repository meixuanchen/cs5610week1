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
