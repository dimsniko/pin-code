// Больше текста

const allMoreBtn = document.querySelectorAll('.moreBtn')
const more = document.querySelectorAll('.more')

allMoreBtn.forEach(button => {
    button.addEventListener('click', toogleText);
});

function toogleText(event) {
    const projectItem = event.target.closest('.item');
    projectItem.classList.toggle('show-more');

    const buttonText = event.target.textContent;
    if (buttonText === 'Больше текста') {
        event.target.textContent = 'Меньше текста'
    } else {
        event.target.textContent = 'Больше текста'
    }
}


// SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    mousewheel: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
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