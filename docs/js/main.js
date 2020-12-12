let utilitySlider = new Swiper('.utility__slider', {
  wrapperClass: 'utility__wrapper',
  slideClass: 'utility__slide',
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: '.utility__btns .slider-btns__btn:last-child',
    prevEl: '.utility__btns .slider-btns__btn:first-child',
  },
});