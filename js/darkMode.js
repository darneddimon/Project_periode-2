import { setCookie, getCookie } from "./cookies.js";

const darkModeButton = document.getElementById("switch_btn");
const backgroundButton = document.getElementById("background_btn");
const cirkel = document.getElementById("cirkel_btn");
const root = document.documentElement; 

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("darkMode") === "true") {
    backgroundButton.classList.toggle("active")
    cirkel.classList.toggle("active")
    root.classList.toggle("dark")
}
})


darkModeButton.addEventListener("click", function() {
    backgroundButton.classList.toggle("active")
    cirkel.classList.toggle("active")
    root.classList.toggle("dark")
    const isDark = root.classList.contains("dark");
    console.log(document.cookie)

    localStorage.setItem("darkMode", isDark)
})
