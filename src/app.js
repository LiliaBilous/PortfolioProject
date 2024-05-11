// Burger menu
const menuBtn = document.querySelector(".burger-line");
const menu = document.querySelector(".menu__body");
const headerMenu = document.querySelector(".header__menu");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}
function tabMenuToggle(e) {
  if (e.key === "Enter") {
    toggleMenu();
  }
}
menuBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

headerMenu.addEventListener("keydown", tabMenuToggle);
menu.addEventListener("keydown", tabMenuToggle);

// Dark-Light theme toggle
const body = document.querySelector("body");
const btnToggle = document.querySelector(".checkbox");
const themeToggle = document.querySelector(".header__theme-toggle");

btnToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
});

themeToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    btnToggle.click();
  }
});

// Scroll to section
const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetElement = e.target;

    if (targetElement.hasAttribute("data-goto")) {
      const goToSection = document.querySelector(targetElement.dataset.goto);
      if (goToSection) {
        window.scrollTo({
          top: goToSection.offsetTop - 16,
          behavior: "smooth",
        });
      }
    }
  });
});
