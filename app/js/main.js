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

const btnsInfo = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modals__overlay');
const modals = document.querySelectorAll('.modals__modal');
const modalClose = document.querySelector('.modals__close');

btnsInfo.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modals__modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modals__modal--visible');
    document.querySelector('body').style.overflow = 'hidden';
    modalOverlay.classList.add('modals__overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == modalOverlay || e.target == modalClose) {
    modalOverlay.classList.remove('modals__overlay--visible');
    document.querySelector('body').style.overflow = 'visible';
    modals.forEach((el) => {
      el.classList.remove('modals__modal--visible');
    });
  }
});