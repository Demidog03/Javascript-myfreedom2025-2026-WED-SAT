// // Синхронность
// console.log('HI')
// // ASYNC -> Асинхронность !== Много
// setTimeout(() => {
//     for (let i = 0; i < 5000000000; i++) {

//     }
// }, 1000) // 1000ms = 1s
// console.log('BYE')

// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//     console.log('Кнопка была нажата')
// })


// console.log('Привет')
// setTimeout(() => {
//     console.log('Таймаут 1')
// }, 0)
// setTimeout(() => {
//     console.log('Таймаут 2')
// }, 0)
// console.log('Пока')

// setInterval(() => {
//     console.log('67')
// }, 200)


// const notifications = []

// setTimeout(() => {
//     notifications.push('Пришел ваш заказ в Озон!')
// }, 5000)

// const intervalId = setInterval(() => {
//     console.log('Уведомления: ', notifications.length)
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervalId)
//     // clearTimeout()
// }, 10000)


// Задача 1
// Создайте кнопку которая включает таймер, представьте что вы готовите бешбармак
// И через 10 секунд появляется alert - Выключите огонь у казана!
// P.S. Создайте слева от кнопку input (number) в котором вы можете указать время для таймера
// P.S. setInterval чтобы был обратный отчет (5... 4... 3... 2... 1...)

// const btn = document.querySelector('button')
// const inp = document.querySelector('#input')

// btn.addEventListener('click', () => {
//     let submittedValue = inp.value
//     console.log(`Таймер для бешбармака запущен на ${submittedValue} секунд...`);

//     console.log(submittedValue)
//     submittedValue--

//     const timeIntervalId = setInterval(() => {
//         console.log(submittedValue)
//         submittedValue--
//     }, 1000)

//     setTimeout(() => {
//         clearInterval(timeIntervalId)
//         alert("Выключай!")
//     }, submittedValue * 1000)
// })

// Задача 1

// Вы разрабатываете личный кабинет для банковского приложения.
// По правилам безопасности, если пользователь не проявляет активности,
// сессия должна автоматически закрыться через 10 секунд.
// Напишите таймер, который каждую секунду выводит предупреждение: "Внимание! До автовыхода осталось: X сек".
// Как только счетчик дойдет до нуля, таймер должен остановиться,
// а в консоли появиться: "🔒 Сессия завершена. Авторизуйтесь заново для доступа к вашим счетам в тенге".

let timeAut = 10;

const timer = setInterval(() => {
    if (timeAut > 0) {
        console.log(`Завершение сессии: ${timeAut} сек`);
        timeAut--;
    } else {
        clearInterval(timer);
        console.log("Авторизуйтесь!");
    }
}, 1000);