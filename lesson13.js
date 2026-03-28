// function clickButton() {
//     console.log('Кнопка была нажата!')
// }

// 2. Способ
// const btn = document.querySelector('#btn')
// btn.onclick = clickButton

// 3. Способ
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', clickButton)
// btn.addEventListener('click', clickButton)

// 1 отличие
// btn.removeEventListener('click', clickButton)

// 2 отличие
// btn.addEventListener('click', (event) => {
//     console.log(event)
// })


// ЗАДАНИЕ 1
// При нажатий на кнопку нужно вывести alert с сообщением "Я нажал кнопку!"
// 3 разными способами

// 1
// function clickMe() {
//     alert('Я нажал кнопку!')
// }

// // 2
// const btn1 = document.querySelector('#btn1')
// btn1.onclick = () => {
//     alert('Я нажал кнопку!')
// }

// // 3
// const btn2 = document.querySelector('#btn2')
// btn2.addEventListener('click', () => {
//     alert('Я нажал кнопку!')
// })


//
// const input1 = document.querySelector('#input1')
// const btn1 = document.querySelector('#btn1')

// btn1.addEventListener('click', () => {
//     console.log(input1.value)
// })

// ЗАДАНИЕ 2
// Создайте форму авторизации - поля Email и Password
// Создайте кнопку подтверждения и 
// при нажатии чтобы в консоли появлялись данные из инпутов
// Данные должны сохранится и появится ввиде обьекта

// const emailInput = document.querySelector('#emailInput')
// const passwordInput = document.querySelector('#passwordInput')
// const submitBtn = document.querySelector('#submitBtn')

// submitBtn.addEventListener('click', function () {
//     const email = emailInput.value
//     const password = passwordInput.value

//     const loginData = {
//         email: email,
//         password: password
//     }

//     console.log(loginData)

//     const loginDataJSON = JSON.stringify(loginData)
//     console.log(loginDataJSON)
// })


// ЗАДАНИЕ 3
// Описать в html тег input, кнопка и тег ul. 
// По нажатии на кнопку в список ul должен добавляться элемент li. 
// Содержимое li - содержимое инпута.

const input = document.querySelector('#input')
const button = document.querySelector('#button')
const ul = document.querySelector("#list")

button.addEventListener('click', () => {
    const value = input.value
    const li = document.createElement('li')
    li.innerText = value
    ul.appendChild(li)
    input.value = ''
})