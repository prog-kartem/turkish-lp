let utilitySlider = new Swiper('.utility__slider', {
  wrapperClass: 'utility__wrapper',
  slideClass: 'utility__slide',
  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.utility__btns .slider-btns__btn:last-child',
    prevEl: '.utility__btns .slider-btns__btn:first-child',
  },
});

let skillsSlider = new Swiper('.skills__slider', {
  wrapperClass: 'skills__wrapper',
  slideClass: 'skills__slide',
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.skills__btns .slider-btns__btn:last-child',
    prevEl: '.skills__btns .slider-btns__btn:first-child',
  },
});