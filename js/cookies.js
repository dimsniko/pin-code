// COOKIES

document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.querySelector('.cookie__popup')
    const cookieAcceptBtn = document.querySelector('.cookie__accept__btn')

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookiePopup.style.display = 'block';
        }, 1000)
    }

    cookieAcceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true')
        cookiePopup.style.display = 'none'
    })
})