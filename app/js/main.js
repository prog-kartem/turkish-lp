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

let reviewsSlider = new Swiper('.reviews__slider', {
  wrapperClass: 'reviews__wrapper',
  slideClass: 'reviews__slide',
  spaceBetween: 60,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
});

let teachersSlider = new Swiper('.teachers__slider', {
  wrapperClass: 'teachers__wrapper',
  slideClass: 'teachers__slide',
  slideActiveClass: 'teachers__slide--active',
  slidePrevClass: 'teachers__slide--prev',
  slideNextClass: 'teachers__slide--next',
  slidesPerView: '1',
  loop: true,
  centeredSlides: true,
  speed: 0,
  navigation: {
    nextEl: '.teachers__btn:last-child',
    prevEl: '.teachers__btn:first-child',
  },
});

const btnsInfo = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modals__overlay');
const modals = document.querySelectorAll('.modals__modal');
const modalClose = document.querySelectorAll('.modals__close');

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
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modals__overlay--visible');
    document.querySelector('body').style.overflow = 'visible';
    modals.forEach((el) => {
      el.classList.remove('modals__modal--visible');
    });
  }
});

modalClose.forEach((el) => {
  el.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modals__overlay--visible');
    document.querySelector('body').style.overflow = 'visible';
    modals.forEach((el) => {
      el.classList.remove('modals__modal--visible');
    });
  });
});

const price = +document.querySelector('.cost__price').getAttribute('data-price-task');
const costTabs = document.querySelectorAll('.cost__btn');
costTabs.forEach((el) => {
  el.addEventListener('click', (e) => {
    costTabs.forEach((el) => {
      el.classList.remove('cost__btn--active');
    });
    el.classList.add('cost__btn--active');
    let priceTask = document.querySelector('.cost__price--price-task');
    let allTask = document.querySelector('.cost__price--all-tasks');
    let allPrice = document.querySelector('.cost__price--all-price');
    let taskCount = e.currentTarget.getAttribute('data-task-count');
    priceTask.innerHTML = price;
    allTask.innerHTML = taskCount;
    allPrice.innerHTML = 0;
    let maxNum = taskCount * price;
    num = 0;
    let t = Math.round(500 / (maxNum / price));
    let interval = setInterval(() => {
      num = num + price;
      if (num >= maxNum) {
        clearInterval(interval)
      }
      allPrice.innerHTML = num;
    }, t);
  });
});


const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: false,
  live: true
})

wow.init();