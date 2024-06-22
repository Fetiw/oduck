import Swiper from 'swiper';
import { Autoplay, Keyboard, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const swiperItem = document.querySelector('.swiper');

if  (swiperItem) {
  const swiper = new Swiper(swiperItem, {
    modules: [Navigation, Keyboard, Autoplay],
    direction: 'horizontal',
    speed: 800,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 42,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        navigation: false,
        slidesPerView: 'auto',
        spaceBetween: 26,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 46,
      }
    }
  });
}
