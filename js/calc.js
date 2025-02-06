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

document.querySelectorAll('.wrapper__calc_check').forEach(wrapper => {
    wrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('calc__check__three')) {
            wrapper.querySelectorAll('.calc__check__three').forEach(check => {
                check.classList.remove('button__check');
            });
            
            event.target.classList.add('button__check');
        }
    });
});

// Синхронизация ползунков и цифр в окошках ввода

document.addEventListener("DOMContentLoaded", function () {
    function syncInputWithRange(inputId, rangeId) {
        const input = document.getElementById(inputId);
        const range = document.getElementById(rangeId);

        input.addEventListener("input", function () {
            range.value = this.value;
        });
        
        range.addEventListener("input", function () {
            input.value = this.value;
        });
    }

    syncInputWithRange("cameraInput", "cameraRange");
    syncInputWithRange("cableInputOut", "cableMetrOut");
    syncInputWithRange("cableInputIn", "cableMetrIn");
}
);

// Сбор значений

const inputs = document.querySelectorAll('input[type="number"], input[type="range"]');
let inputValues = {};

inputs.forEach(input => {
    inputValues[input.id] = Number(input.value);
});

console.log(inputValues)