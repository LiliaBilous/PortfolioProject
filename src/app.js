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

// Dark-Light theme toggle
const themeToggle = document.querySelector(".header__theme-toggle");
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const toggleBall = document.querySelector('.ball');

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
  toggleBall.style.transform = theme === "dark" ? "translateX(2rem)" : "translateX(0)";
}

updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 
themeToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    button.click();
  }
});