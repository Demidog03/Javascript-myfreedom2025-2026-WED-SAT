// setTimeout(() => {
//     for (let i = 0; i < 5000000000; i++) {

//     }   
// }, 0)
// console.log('1')
// console.log('2')


// PROMISE - Обещание - Көреміз

// 1. Pending - Ожидание (Процесс оформления телефона)
// 2. Fulfilled - Успешно (Телефон удачно оформлен. Деньги списались)
// 3. Rejected - Отказ (Не смогли оформить телефон. Причины разные)
// const moneyInBalance = 350_000
// const phone = {
//     name: 'Iphone 17 pro max 1tb',
//     price: 1_200_000
// }
// const hasGoodCreditHistory = true

// const buyPhoneFromKaspy = new Promise((resolve, reject) => {
//     console.log('🛒 Заказ оформляется...')

//     setTimeout(() => {
//         if (moneyInBalance < phone.price) {
//             reject('Извините, недостаточно средств на балансе. Покупка отклонена')
//         }
//         else {
//             resolve('Поздравляю! Телефон оформлен и ждет доставку на ваш адрес!')
//         }
//     }, 1000)
// })

// buyPhoneFromKaspy.then((result) => {
//     console.log(result)
//     alert(result)
// }).catch((result) => {
//     console.log(`Отказ. Причина: ${result}`)
//     if (hasGoodCreditHistory) {
//         alert(`Отказ. Причина: ${result}. Предлагаем оформить рассрочку`)
//     }
//     else {
//         alert(`Отказ. Причина: ${result}.`)
//     }    

// }).finally(() => {
//     console.log('Ваш запрос обработан!')
// })

// 1. Поставить задержку после "console.log('🛒 Заказ оформляется...')"
// 2. Создать новую переменную типа hasGoodCreditHistory, 
// и если кредитная история хорошая рядом с сообщением отказа предлагаем оформить рассрочку


// Задание 1

// Вы хотите купить билет на самолет в Актау/Астану на выходные. 
// Билеты разлетаются быстро. Напишите функцию bookFlight(), которая возвращает Promise.
// Имитируйте поиск билета в течение 2 секунд (используйте setTimeout). 
// Внутри таймера используйте Math.random(), чтобы с вероятностью 50/50 
// билет либо нашелся (resolve('✅ Билет в Актау успешно забронирован!')), 
// либо места закончились (reject('❌ Мест нет, попробуйте на другие даты')).
// Вызовите функцию и обработайте результат через .then() и .catch().

// const isAvailable = Math.random() > 0.5; // 0.78 > 0.5

// function bookFlight() {
//     return new Promise()
// }

// function bookFlight() {
//     const isAvailable = Math.random() > 0.5

//     return new Promise((res, rej) => {
//         console.log('Ищем билеты...')

//         setTimeout(() => {
//             if (isAvailable) {
//                 res('✅ Билет в Актау успешно забронирован!')
//             }
//             else {
//                 rej('❌ Мест нет, попробуйте на другие даты')
//             }
//         }, 2000)
//     })
// }

// const newPromise1 = bookFlight()

// newPromise1.then((result) => {
//     console.log(result)
// }).catch((result) => {
//     console.log(result)
// }).finally(() => {
//     console.log('Поиск завершен!')
// })


// Задание 2

// Пользователь заходит в наш интернет-магазин
// Мы делаем запрос за товарами (имитация запроса) (используем setTimeout на 2 секунды).
// Затем с шансом 50/50 показываем Товары: любой товар - телефон, техника, ювелирка (ul)
// Или показываем текст ошибки: "❌ Ошибка при загрузке товаров!"
// Во время загузки (когда работает timeout) нужно показать на экране надпись span "⏳ Загрузка товаров..."
// При этом в конце запроса (когда finally) надпись скрываем

// P.S. Вместе с Загрузка товаров... вы можете показать spinner 

const resultContainer = document.querySelector('#resultContainer')
const fullscreenSpinner = document.querySelector('#fullscreenSpinner')

function loadProducts() {
    const isAvailable = Math.random() > 0.5

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAvailable) {
                resolve(['MacBook Neo', 'Рыба', 'Шоколад'])
            }
            else {
                reject({
                    message: 'Ошибка при загрузке товаров!'
                })
            }
        }, 2000)
    })
}

loadProducts().then((products) => {
    const ul = document.createElement('ul')
    for (const product of products) {
        const li = document.createElement('li')
        li.innerText = product
        ul.appendChild(li)
    }
    resultContainer.appendChild(ul)
}).catch((error) => {
    const span = document.createElement('span')
    span.innerText = error.message
    resultContainer.appendChild(span)
}).finally(() => {
    fullscreenSpinner.classList.add('hidden')
})