const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,

  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// FORMMAILER

class ItcCollapse {
  constructor(target, duration = 350) {
    this._target = target;
    this._duration = duration;
  }
  show() {
    const el = this._target;
    if (el.classList.contains('collapsing') || el.classList.contains('collapse_show')) {
      return;
    }
    el.classList.remove('collapse');
    const height = el.offsetHeight;
    el.style.height = 0;
    el.style.overflow = 'hidden';
    el.style.transition = `height ${this._duration}ms ease`;
    el.classList.add('collapsing');
    el.offsetHeight;
    el.style.height = `${height}px`;
    window.setTimeout(() => {
      el.classList.remove('collapsing');
      el.classList.add('collapse');
      el.classList.add('collapse_show');
      el.style.height = '';
      el.style.transition = '';
      el.style.overflow = '';
    }, this._duration);
  }
  hide() {
    const el = this._target;
    if (el.classList.contains('collapsing') || !el.classList.contains('collapse_show')) {
      return;
    }
    el.style.height = `${el.offsetHeight}px`;
    el.offsetHeight;
    el.style.height = 0;
    el.style.overflow = 'hidden';
    el.style.transition = `height ${this._duration}ms ease`;
    el.classList.remove('collapse');
    el.classList.remove('collapse_show');
    el.classList.add('collapsing');
    window.setTimeout(() => {
      el.classList.remove('collapsing');
      el.classList.add('collapse');
      el.style.height = '';
      el.style.transition = '';
      el.style.overflow = '';
    }, this._duration);
  }
  toggle() {
    this._target.classList.contains('collapse_show') ? this.hide() : this.show();
  }
};

const collapse = new ItcCollapse(document.querySelector('.collapse'));

document.querySelector('#toggle').onclick = () => {
  collapse.toggle();
}

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

// Центрирование стрелок слайдера по центру

function updateMarginTop() {  
  const btnWidth = document.querySelector('.btn')
  const realWidth = btnWidth.offsetWidth;
  const marginTopValue = `${realWidth / 4.5}px`
  document.documentElement.style.setProperty('--btn-margin-top', marginTopValue);
}

window.addEventListener('load', updateMarginTop);
window.addEventListener('resize', updateMarginTop)