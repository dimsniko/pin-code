// Кнопка Help скртыие, открытие. Динамическое позиционирование



function toggleTooltip(helpElement) {    
    const tooltip = helpElement.querySelector('.tooltip');
    helpElement.classList.toggle('active');

    const helpRect = helpElement.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    if (helpElement.classList.contains('active')) {
        if (helpRect.right + tooltipRect.width > window.innerWidth) {
            tooltip.style.left = 'auto';
            tooltip.style.right = '110%';
        } else {
            tooltip.style.left = '110%';
            tooltip.style.right = 'auto';
        }
    } else {
        tooltip.style.left = '';
        tooltip.style.right = '';
    }
};

document.addEventListener('click', (event) => {
    const helpElement = event.target.closest('.calc__help');

    if (helpElement) {
        toggleTooltip(helpElement);
    } else {
        document.querySelectorAll('.calc__help.active').forEach(activeHelp => {
            activeHelp.classList.remove('active');
            const tooltip = activeHelp.querySelector('.tooltip');
            tooltip.style.left = '';
            tooltip.style.right = '';
        });
    }

});



// Чекбокс галочка

const calcCheck = document.querySelector('.calc__check');

calcCheck.addEventListener('click', () => {
    calcCheck.classList.toggle('button__check')
})
