// Переменные

let number = document.getElementById('num')
const btnPlus = document.querySelector('button[data-plus="plus"]')
const btnMinus = document.querySelector('button[data-minus="minus"]')
const btnReset = document.querySelector('button[data-reset="reset"]')

//Функция увеличения для счетчика

let count = 0

btnPlus.addEventListener('click', () => {
    count += 1
    number.innerHTML = count
})

//Функция уменьшения для счетчика

btnMinus.addEventListener('click', () => {
    count -= 1
    number.innerHTML = count
})

//Функция сброса для счетчика

btnReset.addEventListener('click', () => {
    count = 0
    number.innerHTML = count
})