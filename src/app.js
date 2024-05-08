// Burger menu
const menuBtn = document.querySelector(".burger-line");
const menu = document.querySelector(".menu__body");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

// Dark-Light theme toggle
const body = document.querySelector("body");
const btnToggle = document.querySelector(".checkbox");

btnToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
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
          top: goToSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});
