// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.includes(3)) // true
// console.log(numbers.some(number => number === 3)) // true
// console.log(numbers.includes(7)) // false


// console.log(numbers.findIndex((value) => {
//     return value === 4 // у числа 4 индекс 3
// }))

// console.log(numbers.findIndex((value) => {
//     return value === 7 // -1 -> элемента нет индекс не найден
// }))

// console.log(numbers.at(0)) // в 0 позиции находится число 1
// console.log(numbers.at(10)) // в 10 позиции ничего нету поэтому undefined

// console.log(numbers.find((value) => {
//     return value === 3
// }))



// MUTABLE - меняют оригинальный массив
// push, shift, pop, unshift, reverse

// IMMUTABLE - не меняют оригинальный массив
// forEach, map, includes, findIndex, at, find, some, filter


// FIND
// const cars = [
//     {
//         model: 'Toyota',
//         color: 'black'
//     },
//     {
//         model: 'Shangan',
//         color: 'silver'
//     },
//     {
//         model: 'Hyundai',
//         color: 'white'
//     },
//     {
//         model: 'Xiaomi',
//         color: 'white'
//     }
// ]

// console.log(cars.find(car => {
//     return car.model === 'Shangan'
// }))
// // {
// //     "model": "Shangan",
// //     "color": "silver"
// // }

// console.log(cars.find(car => car.color === 'white'))
// // {
// //     model: 'Hyundai',
// //     color: 'white'
// // }

// REVERSE
// console.log(cars)
// cars.reverse()
// console.log(cars)


// SOME
// console.log(cars.some(car => {
//     return car.model === 'Toyota' // дайте большие чипсы
// }))

// console.log(cars.some(car => {
//     return car.model === 'BMW' // false
// }))

// console.log(cars.includes({ // дайте чипсы Lays большой со вкусом шашлыка
//         model: 'Toyota',
//         color: 'black'
// }))


// ЗАДАНИЕ 1
// const ids = [1, 5, 10, 15, 12, 6, 32]
// 1. Дать результат есть ли в массиве число 12
// 2. Убедиться в том что в массиве нет отрицательных чисел

// Test cases:
// 1
// [1, 5, 10, 15, 12, 6, 32] => true
// [1, 5, 10, 15, 6, 32] => false

// 2
// [1, 5, 10, 15, 12, 6, 32] => true -> если нет отрицательных чисел
// [1, -5, 10, 15, 6, 32] => false -> есть отрицательные числа

// РЕШЕНИЕ
// 1
// const ids = [1, 5, 10, 15, 6, 32]
// console.log(ids.includes(12))

//2 
// const ids = [1, 5, 10, 15, 6, 32]
// const hasNegativeId = ids.some(id => {
//     return id < 0 // найдено отрицательное число
// })

// console.log(hasNegativeId ? 'Есть отрицательное число' : 'нет отрицательных чисел')


// ЗАДАНИЕ 2
// const users = [
//     { id: 1, name: 'John', email: 'john@example.com' },
//     { id: 2, name: 'Jane', email: 'jane@example.com' },
//     { id: 3, name: 'Charity', email: 'charity@example.com' }
// ];

// // 1. Найди индекс пользователя с email charity@example.com
// // 2. Найди самого пользователя, чье имя John
// // 3. Убедиться в том что есть пользователь с id 3

// // 1
// console.log(users.findIndex((user) => {
//     return user.email === 'charity@example.com'
// }))

// // 2
// console.log(users.find((user) => {
//     return user.name === 'John'
// }))

// // 3
// console.log(users.some((user) => {
//     return user.id === 3
// }))



// FILTER
// const numbers = [23, 46, 7, 32, 1, 2, 7, 32, 7]

// // const filteredNumbers = numbers.filter((number) => {
// //     return number !== 7
// // })

// // const filteredNumbers = numbers.filter((number) => {
// //     return number === 7 && number === 32
// // })

// const filteredNumbers = numbers.filter((number, index) => {
//     return !(number === 7 && index === 2) // отсекаем элемент 2 индекса (третий элемент - 7)
// })

// console.log(numbers)
// console.log(filteredNumbers)


// ЗАДАНИЕ 3
// const temperatures = [-10, -5, 0, 15, 22, -2, 30];

// // Оставь в нем только те значения, которые выше нуля.
// // Ожидаемый результат: [15, 22, 30]

// const positiveTemps = temperatures.filter(degree => {
//     return degree > 0
// })

// console.log(positiveTemps)

// Фильтр по черному списку
// const blacklist = ['spam', 'buy', 'free'];
// const messages = [
//     { text: 'Hello, how are you?', author: 'Max' },
//     { text: 'Get free money now!', author: 'Scammer' },
//     { text: 'Check out this buy link', author: 'AdBot' },
//     { text: 'React is awesome', author: 'Dev' }
// ];

// const text = 'Hello, how are?'
// console.log(text.includes('you'))

// Задача: Оставь только те сообщения, в которых нет ни одного запрещенного слова из списка blacklist

const blacklist = ['spam', 'buy', 'free', 'ad', 'ais'];
const messages = [
    { text: 'Hello, how are you ais?', author: 'Max' },
    { text: 'Get free money now!', author: 'Scammer' },
    { text: 'Check out this buy link', author: 'AdBot' },
    { text: 'React is awesome', author: 'Dev' },
];

const filteredMessages = messages.filter(message => {
    const currentText = message.text // 'Check out this buy link'
    
    for (const blacklistWord of blacklist) { // blacklistWord = 'ais'
        if (currentText.includes(blacklistWord)) { // 'Get free money now!'.includes('free')
            return false
        }
    }

    return true
})

console.log(filteredMessages)