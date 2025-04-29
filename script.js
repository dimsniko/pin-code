// SWIPER SLIDER

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    340: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// BURGER

const navbarMore = document.querySelectorAll('.navbar__list-item-more');

navbarMore.forEach(function (el) {
  el.addEventListener('click', function (ev) {
    ev.stopPropagation()
    navbarMore.forEach(el => { if (el != this) { el.classList.remove('open') } })
    this.classList.toggle('open')
  });
});

document.addEventListener('click', () => {
  navbarMore.forEach(el => el.classList.remove('open'))
});

const burger = document.querySelector('.menu__burger')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')

function menuBurgeropen() {
  burger.classList.toggle('active')
  navbar.classList.toggle('active')
  body.classList.toggle('lock')
}

burger.addEventListener('click', menuBurgeropen)



