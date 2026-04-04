// const email = 'test@gmail.com'
// const password = 'Qwerty123!'

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // проверяем базу или ждем ответ от бэка

//         if (email === 'test@gmail.com' && password === 'Qwerty123!') {
//             resolve('Добро пожаловать!')
//         }
//         else {
//             reject('Неправильные данные!')
//         }
//     }, 1000)
// })

// promise.then((result) => {
//     alert(result)
// }).catch((error) => {
//     alert(error)
// })

// console.log('Привет') // 1
// const promise = new Promise((resolve) => {
//     console.log('Создается промис')
//     resolve('Промис выполнился')
// }) // 2
// setTimeout(() => {
//     console.log('Таймаут')
// }, 0) // 3
// promise.then((result) => { console.log(result) }) // 4 - Выполнение (запуск) промиса является асинхронным
// console.log('Пока') // 5


// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise inside Timeout');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout inside Promise');
//   }, 0);
// });

// console.log('End');

// Пропишите порядок выполнения кода


// ЗАПРОСЫ, API, FETCH
// API - Application Programming Interface - Инструкция (интерфейс) по программированию приложения

// REST API

// ПЕРВЫЙ API ЗАПРОС

const ul = document.querySelector('#products')

fetch('https://api.escuelajs.co/api/v1/products').then((response) => {
    return response.json()
}).then((data) => {
    // data => [] => {}
    if (data?.error) {
        alert(data?.message)
    } else {
        for (const product of data) {
            const img = document.createElement('img')
            img.src = product.images[0]
            img.width = 100

            const li = document.createElement('li')
            li.innerText = product?.title


            ul.appendChild(li)
            ul.appendChild(img)
        }
    }
}).catch((error) => {
    console.log(error)
    if (error) {
        alert('Ошибка при получении продуктов')
    }
})
// callback chain

// ЗАДАЧА создать в HTML ul, пройтись по данным products и отобразить в списке через li названия продуктов

