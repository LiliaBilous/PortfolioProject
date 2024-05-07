// Burger menu
let menuBtn = document.querySelector(".burger-line");
let menu = document.querySelector(".menu__body");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// Dark-Light theme toggle
const body = document.querySelector("body");
const btnToggle = document.querySelector(".checkbox");

btnToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});
