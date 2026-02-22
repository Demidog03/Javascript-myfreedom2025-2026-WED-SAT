// const students = [
//     {
//         name: 'Aisultan',
//         lessonType: 'online'
//     },
//     {
//         name: 'Altair',
//         lessonType: 'offline'
//     }
// ]

// console.log(students[1].lessonType)

// 1 - spread
// const studentsCopy = [...students]

// 2 - JSON
// const studentsJSON = JSON.stringify(students)
// const studentsCopy = JSON.parse(studentsJSON)

// studentsCopy[0].name = 'Sagynysh'

// console.log(students)
// console.log(studentsCopy)



// Задание 5

// Дан массив объектов, например:

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// // for (let i = 0; i < questions.length; i++) {
// //     const question = questions[i]
// //     question.userAnswer = null
// // }

// for (const question of questions) {
//     question.userAnswer = null
// }

// console.log(questions)




// Задание 7

// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, 
// но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище 
// (например, let newArr = []). Затем пройтись в цикле по массиву arr, 
// и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// const newArr = []

// for (const number of arr) {
//     if (number > 0) {
//         newArr.push(number)
//     }
// }
   
// console.log(newArr)


// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// создать функцию которая принимает параметр limit
// создать новый массив в котором будут числа больше или равно limit

// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// function filterArrayByLimit(array, limit) {
//     const filteredArray = []

//     for (const element of array) {
//         if (element >= limit) {
//             filteredArray.push(element)
//         }
//     }

//     return filteredArray
// }

// console.log(filterArrayByLimit(arr, 3)) // [5, 4, 3, 8]
// console.log(filterArrayByLimit(arr, 5)) // [5, 8]
// console.log(filterArrayByLimit(arr, 0)) // [0, 3, 4, 5, 8]



const numbers = [12, 5, 64, 76, 32]

// for (const number of numbers) {
//     if (number === 64) {
//         break
//     }

//     console.log(number)
// }

// numbers.forEach(function (number, index) {
//     console.log(number, index)
// })


// map
// const numbersCopy = numbers.map(function (number) {
//    return number
// })

// console.log(numbers)
// console.log(numbersCopy)


// Задание 4

// Напишите функцию copyArr(arr), которая копирует массив,
// не изменяя оригинал. Используйте подходящий метод массива - forEach или map.
// const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

// function copyArr(array) {
//     const arrayCopy = array.map(element => {
//         return element
//     })

//     return arrayCopy
// }

// function copyArr(array) {
//     return array.map(element => element)
// }

// console.log(copyArr(arr))
// console.log(copyArr([6, 4, 3]))



// Задание 5

// Напишите функцию, которая принимает массив имен и возвращает новый массив,
// в котором каждое имя будет иметь приставку "Hello, "
// сделать через метод map

// ['Aisultan', 'Denis', 'Vladimir']

// ['Hello, Aisultan', 'Hello, Denis', 'Hello, Vladimir']

const names = ['Aisultan', 'Denis', 'Vladimir']

function generateNewArray(array) {
    return array.map((name) => {
        return `Hello, ${name}`
    })
}

console.log(generateNewArray(names))