// Больше текста

const allMoreBtn = document.querySelectorAll('.moreBtn')

allMoreBtn.forEach(button => {
    button.addEventListener('click', toogleText);
});

function toogleText(event) {
    const button = event.target;
    const projectItem = button.closest('.item');
    projectItem.classList.toggle('show-more');

    const buttonText = button.textContent;
    if (buttonText === 'Больше текста') {
        button.textContent = 'Меньше текста'
    } else {
        button.textContent = 'Больше текста'
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

  