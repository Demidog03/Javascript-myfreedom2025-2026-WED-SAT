// const hasVisa = true

// if (hasVisa) { // true === true
//     console.log('Добро пожаловать в Швецарию!')
// }
// else {
//     console.log('У вас нет визы. Не могу пропустить вас в страну!')
// }

// ТЕРНАРНЫЙ ОПЕРАТОР
// hasVisa ? console.log('Добро пожаловать в Швецарию!') : console.log('У вас нет визы. Не могу пропустить вас в страну!')
// console.log(hasVisa ? 'Добро пожаловать в Швецарию!' : 'У вас нет визы. Не могу пропустить вас в страну!')

// Задание 2
// Перепишите код с использованием тернарного оператора

// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
//     access = true;
// } 
// else{
//     access = false;
// }
// // 1
// country == 'Sweden' ? access = true : access = false
// // 2
// access = country == 'Sweden' ? true : false
// // 3
// access = country == 'Sweden' // access = false






// LOOPS = ЦИКЛЫ

// FOR LOOP
// от 0 до 9
// for (let num = 0; num < 200; num++) { // num = 11
//     console.log('Привет!')
// }

// 0, 2, 4, 6, 8, 10, 12, 14
// for (let i = 0; i < 8; i += 2) { // num = 8
//     console.log('Привет!')
// }

// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
// for (let i = 0; i > -10; i--) {
//     console.log('Привет!')
// }



// let counter = 0

// for (let i = 0; i < 10; i++) {
//     counter++
//     // console.log('Привет!')
//     console.log(counter)
// }



// Задание 2

// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Итоговый результат вывести в консоль.

// let num = 10

// for (let i = 0; i < 10; i++) {
//     num++ // 19 + 1 = 20
// }

// console.log(num)



// Задание 3


// Увеличивая счетчик цикла на 2, нужно 5 раз выполнить след. действия:
// - запросить у пользователя ввод числа
// - проверить, равно ли это число 10. Если равно, вывести в консоль "Равно 10". Иначе вывести "Не равно 10"
// В итоге должно получиться 5 запросов и 5 результатов в консоли.

// for (let i = 0; i <= 8; i+=2) {
//     const userAnswer = prompt('Введите число:')
//     const userNumber = Number(userAnswer)

//     if (userNumber === 10) {
//         console.log('Равно 10')
//     }
//     else {
//         console.log('Не равно 10')
//     }
// }


// Задание 4

// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// ** Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

// for (let i = 0; i < 100; i++) {
//     // console.log(i * i)
//     console.log(i ** 2)
// }

// const userAnswer = prompt('Введите максимальное число: ')
// const userNumber = Number(userAnswer) // 0
// for (let i = 0; i < userNumber; i++) { // 0 < 0
//     // console.log(i * i)
//     console.log(i ** 2)
// }