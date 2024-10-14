// Центрирование стрелок слайдера по центру

function updateMarginTop() {
    const btnWidth = document.querySelector('.btn')
    const realWidth = btnWidth.offsetWidth;
    const marginTopValue = `${realWidth / 4.5}px`
    document.documentElement.style.setProperty('--btn-margin-top', marginTopValue);
}

window.addEventListener('load', updateMarginTop);
window.addEventListener('resize', updateMarginTop);


// Слайдер
const slider = document.querySelector('.wrapper__sliders')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('.btn__next')
const btnPrev = document.querySelector('.btn__prev')

sliderItems.forEach(function (slide, index) {

    // Скрываем все слайды, кроме первого
    if (index !== 0) slide.classList.add('hidden')

    // Добавляем индексы
    slide.dataset.index = index

    // Добавляем data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайдам
    slide.addEventListener('click', function () {
        showNextSlide('next')
    })
})

btnNext.onclick = function () {
    showNextSlide('next')
}

btnPrev.onclick = function () {
    showNextSlide('prev')
}

function showNextSlide(direction) {

    // скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    // Рассчитываем следующий индекс в зависимости от направления движения
    let nextSlideIndex

    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    }

    // Показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')


}
















