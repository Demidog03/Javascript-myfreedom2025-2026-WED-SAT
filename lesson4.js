// hoisting
// var num
// function sayHi() {}

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }



// Задание 5

// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
// а вместо чисел, кратных пяти, — слово «Buzz».
// Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

// else if
// % => остаток => 3 % 3 = 0, 4 % 3 = 1

// 1 => console.log(1)
// 2 => console.log(2)
// 3 => console.log('Fizz')
// 4 => console.log(4)
// 5 => console.log('Buzz)
// ...
// 15 => console.log('FizzBuzz')
// ...

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) { // 15 % 3 = 0, 15 % 5 = 0
//         console.log('FizzBuzz')
//     }
//     else if (i % 3 === 0) { // 15 % 3 = 0
//         console.log('Fizz')
//     }
//     else if (i % 5 === 0) { // 15 % 3 = 0
//         console.log('Buzz')
//     }
//     else {
//         console.log(i)
//     }
// }


// WHILE LOOP

// for (let i = 0; true; i++) {
//     console.log('Hello')
// }



// while => в то время как, пока
// let i = 0

// while (i < 10) {
//     i++
//     console.log(i)
// }

// Проверка уведомление
// Поставить таймер, секундомер

// while (true) {
//     console.log('Hello')
// }


// Задание 6

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// let i = 0

// while (i < 3) {
//     alert(`number ${i}!`);
//     i++
// }

// let i = 0

// do {
//     console.log('Hello')
// } while (i < 0)


// FUNCTION - ФУНКЦИИ


// console.log('С Новым Годом, Айсултан!')
// console.log('С Новым Годом, Альтаир!')
// console.log('С Новым Годом, Тимур!')
// console.log('С Новым Годом, Рабия!')

// function sayHappyNewYear(personName = 'Пользователь') { // Arguments, Parameters, Params
//     // 1
//     // if (personName === undefined) {
//     //     console.log('С Новым Годом, Пользователь!')
//     // }
//     // else {
//     //     console.log(`С Новым Годом, ${personName}!`)
//     // }

//     //2
//     // if (Boolean(personName) === false) { // Boolean(null) = false
//     //     console.log('С Новым Годом, Пользователь!')
//     // }
//     // else {
//     //     console.log(`С Новым Годом, ${personName}!`)
//     // }

//     // 3
//     // if (!personName) { // !personName = если нет personName-а, если personName что то плохое (falsy)
//     //     console.log('С Новым Годом, Пользователь!')
//     // }
//     // else {
//     //     console.log(`С Новым Годом, ${personName}!`)
//     // }

//     //4
//     // console.log(`С Новым Годом, ${!personName ? 'Пользователь' : personName}!`)

//     //5
//     console.log(`С Новым Годом, ${personName}!`)
// }

// sayHappyNewYear('Айсултан')
// sayHappyNewYear('Альтаир')
// sayHappyNewYear('Тимур')
// sayHappyNewYear('Рабия')
// sayHappyNewYear(null)


// если не передаем параметр sayHappyNewYear() 
// то нужно отображать в консоле `С Новым Годом, Пользователь!`




// function sumTwoNumbers(num1, num2) {
//     // if (num1 === undefined || num2 === undefined) {
//     if (arguments.length < 2) {
//         console.log('Некоторые аргументы отсутсвуют')
//     }
//     else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         console.log('Невалидные параметры')
//     }
//     else {
//         console.log(num1 + num2)
//     }
// }

// sumTwoNumbers(2, 2)
// sumTwoNumbers(5, 10)
// sumTwoNumbers('5', 5)
// sumTwoNumbers(null, undefined)
// sumTwoNumbers()
// sumTwoNumbers(3)

// 1. Нужно проверить переданы ли все аргументы
// Test cases:
// sumTwoNumbers() => console.log('Некоторые аргументы отсутсвуют')
// sumTwoNumbers(2) => console.log('Некоторые аргументы отсутсвуют')

// 2. Нужно убедить что все параметры числа:
// Test cases:
// sumTwoNumbers('5', 5) => console.log('Невалидные параметры')
// sumTwoNumbers(true, 'fdsfds') => console.log('Невалидные параметры')

// typeof








// Задание 4

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - 
// т.е. вывести числа 0, 1, 4, 9, 16...

// ** Задавать количество чисел, которые нужно вывести, при помощи функции prompt.


// Задание 7

// Переписать задание 4 в виде функции. Т.е.
// описать функцию, которая выводит квадраты
// чисел из заданного диапазона (диапазон 
// будет попадать в функцию как аргументы - min и max).

// function showSquareOfNumbers(min, max) {
//     if (min >= max) {
//         console.log('Аргумент min больше или равно аргументу max. Невалидные аргументы!')
//         return
//     }
    
//     for (let i = min; i < max; i++) {
//         console.log(i ** 2)
//     }
    
// }

// // showSquareOfNumbers(0, 10)
// // showSquareOfNumbers(5, 20)
// showSquareOfNumbers(5, 2)
// showSquareOfNumbers(5, 5)
// showSquareOfNumbers(5, 10)



// RETURN - возврат (возвращать)
// function sumTwoNumbers(num1, num2) {
//     // если нет return
//     // если просто return без значения (ответа)
//     // return undefined
//     return num1 + num2
//     console.log('Hello')
// }

// let result = sumTwoNumbers(8, 7) // const result = 15
// console.log(result)
// result++
// console.log(result)

// console.log(sumTwoNumbers(5, 5)) // console.log(10)




// Задание 8
// Написать функцию, которая возвращает строку - случайный цвет в формате rgb.
// Это будет строка вида "rgb(10,55,250)"

// Здесь у вас будет две функции: одна ваша - getRandomRGB,
// а вторая - функция получения случайного числа в диапазоне min - max.
// Вот эта функция (просто скопируйте, она уже готова):

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// getRandomInteger(0, 100) // 98

// Подсказка
// function hello() {
//     getRandomInteger()
// }

// Подсказки: 

// - Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. 
// - Одна функция может вызывать другую функцию


// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function generateRandomRgb() {
//     const r = getRandomInteger(0, 256)
//     const g = getRandomInteger(0, 256)
//     const b = getRandomInteger(0, 256)

//     return `rgb(${r},${g},${b})`
// }

// setInterval(function () {
//     document.body.style.backgroundColor = generateRandomRgb()
// }, 1000)

// var и function подлежать hoisting-у (всплытие)

// console.log(num)
// var num = 5


// sayHi()

// function sayHi() {
//     console.log('Hi')
// }



// Функции могут быть перезаписаны

// 1
// function sayHi() {
//     console.log('Hi')
// }

// function sayHi() {
//     console.log('Hello')
// }

// sayHi()

// 2
// function sayHi() {
//     console.log('Hi')
// }

// var sayHi = 'Hello'

// sayHi()


// Функции ввиде переменных - анонимные и стрелочные функции

// 1
// const sayHi = function () {
//     console.log('Hi')
// }

// // Ошибка
// const sayHi = 'hi'

// sayHi()

//2
// const sayHi = () => {
//     console.log('Hi')
// }

// sayHi()


// Задание 10

// Написать функцию calcPrice, которая рассчитывает и выводит в 
// консоль стоимость аренды авто на кол-во дней, которое приходит в функцию как параметр.

// День аренды автомобиля стоит $40.
// При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. 
// Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

// ИСПОЛЬЗУЙТЕ СТРЕЛОЧНУЮ ИЛИ АНОНИМНУЮ ФУНКЦИЯ

// P.S
// const sayHi = function () {
//     console.log('Hi')
// }

// const sayHi = () => {
//     console.log('Hi')
// }

const rentCost = 40
const calcPrice = (daysForRent) => {
    if (daysForRent >= 7) {
        return rentCost * daysForRent - 50
    }
    else if (daysForRent >= 3) {
        return rentCost * daysForRent - 20
    }
    else {
        return rentCost * daysForRent
    }
}

console.log(calcPrice(8))
console.log(calcPrice(5))
console.log(calcPrice(2))