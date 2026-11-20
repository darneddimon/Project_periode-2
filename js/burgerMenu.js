const burgerBtn = document.getElementById("burger_menu");
const rightNav = document.getElementById("right_nav");

burgerBtn.addEventListener("click", function() {
    rightNav.classList.toggle("open")
})

