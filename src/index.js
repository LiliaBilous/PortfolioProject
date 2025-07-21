import "./styles/scss/main.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./app";

// Animate On Scroll Library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Resume button for pdf 
import resume from "./assets/CV_BilousLiliia.pdf";
const resumeButtons = document.getElementById("resume");

resumeButtons.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(resume);
});

// Swiper.js
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper(".projects__swiper", {
  modules: [Navigation],
  loop: true,
  watchOverflow: false,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  breakpoints: {
    // when window width is >= 280px
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
