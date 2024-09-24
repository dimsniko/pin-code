const table__btn = document.querySelector('.table__btn')
const wrapper__table__pm = document.querySelector('.wrapper__table__pm')

function showMore(){
    wrapper__table__pm.classList.toggle('show-more')
    console.log(wrapper__table__pm)
    if (wrapper__table__pm.classList.contains('show-more')) {
        
        table__btn.innerText = 'Скрыть подробные цены'
        
    }else
        table__btn.innerText = 'Показать подробные цены'
    
}

table__btn.addEventListener('click', showMore)