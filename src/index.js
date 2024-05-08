import "./styles/scss/main.scss";
import "./app";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper(".projects__swiper", {
  modules: [Navigation],
  watchOverflow: false,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
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
