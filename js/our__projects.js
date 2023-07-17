
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