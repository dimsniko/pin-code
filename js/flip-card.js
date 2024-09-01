const flipButtons = document.querySelectorAll('.flip-button');
console.log(flipButtons)

flipButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const card = this.closest('.card'); // Находим родительскую карточку кнопки
        card.classList.toggle('flipped'); // Переключаем класс для переворота
        const cardFront = card.querySelector('.card-front');
        const cardBack = card.querySelector('.card-back');
        
        if (card.classList.contains('flipped')) {
            cardFront.style.display = 'none';
            cardBack.style.display = 'block';
        } else {
            cardFront.style.display = 'block';
            cardBack.style.display = 'none';
        }
    });
});