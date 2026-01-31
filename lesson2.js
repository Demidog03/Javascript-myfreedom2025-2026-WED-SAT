/*Задача 1*/
// Создайте переменные для хранения следующей информации:
// - имя пользователя (строка)
// - возраст (число)
// - статус онлайн (булево значение)
// Выведите все переменные в консоль

// var, let, const
// console.log()


// ОПЕРАТОР TYPEOF
// const book = 'Harry Potter'
// console.log(typeof book)
// console.log(typeof 20)
// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof undefined)


// Задача 2: Типы данных
// Создайте по одной переменной каждого типа:
// string, number, boolean, undefined, null
// Используйте typeof для проверки типа каждой переменной



// Арифметические операторы
// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 / 5)
// console.log(10 * 5)
// console.log(10 % 9) // % - модуль
// console.log(10 ** 3)

// console.log((10 + 5) * 5)
// console.log(10 / 0)


// console.log('Hello' + 'World')
// console.log('10' + 10) // '10' + '10' = '1010'
// console.log(10 + '10') // '10' + '10' = '1010'
// console.log(10 / '10') // 10 / 10 = 1
// console.log('10' / 10) // 10 / 10 = 1
// console.log(10 * '5') // 10 * 5 = 50
// console.log('10' * 5) // 10 * 5 = 50
// console.log('10' - 5) // 10 - 5 = 5
// console.log(10 - '5') // 10 - 5 = 5
// console.log('10' - '10') // 10 - 10 = 0


// CONVERT STRING TO NUMBER
// console.log(+'10') // => 10
// console.log(Number('10')) // 10
// console.log(parseInt('10')) // 10
// console.log(parseFloat('10')) // 10

// console.log(parseInt('10.5')) // 10
// console.log(parseFloat('10.5')) // 10.5

// console.log(+'Timur')
// console.log(typeof NaN)
// console.log(typeof Infinity)
// console.log(NaN + 20)


// ++, --, +=, -=
// let num1 = 7
// num1 = num1 + 1 // 7 + 1 = 8
// num1++ // num1 = num1 + 1
// num1-- // num1 = num1 - 1
// num1 = num1 + 2
// num1+=2 // num1 = num1 + 2
// num1-=2 //num1 = num1 - 2
// num1*=2
// num1/=2
// console.log(num1)

// let num1 = 10
// // num1 = num1 + 1
// // num1++
// // num1+=20

// num1 = num1 ** 3
// console.log(num1)



// Задача 5: Конкатенация с числами
// Создайте переменные: productName и price
// Создайте строку вида: "Товар: [название], Цена: [цена] тенге."
// Вывести в консоль созданную строку



// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ 
// И, ИЛИ
// && - AND, И
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// || - OR, ИЛИ
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


// ОПЕРАТОРЫ СРАВНЕНИЯ
// console.log(5 > 10)
// console.log(5 < 10)
// console.log(15 >= 15)
// console.log(10 <= 11)
// console.log(10 == 10)
// console.log(10 === 10)

// console.log('10' == 10)
// console.log('10' === 10) // всегда используйте ===

// != - ==
// !== - ===
// console.log(20 !== 30)
// console.log(!true)
// console.log(!false)

// console.log(!(5 < 2)) // !false => true
// console.log(!!!true)


// falsy values и конвертация на булеан
// Falsy values - значения которые в конечном итоге конвертируются в false
// 1. число 0
// 2. строка пустая ''
// 3. булевый False
// 4. undefined
// 5. null
// 6. NaN

// console.log(Boolean(10)) // true
// console.log(Boolean(0)) // false
// console.log(Boolean('Aisultan')) // true
// console.log(Boolean(' ')) // true
// console.log(Boolean('')) // false
// console.log(Boolean(true)) // true
// console.log(Boolean(false)) // false
// console.log(Boolean(undefined)) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(NaN)) // false


// IF ELSE statement

// Проверку при котором мы будем отказывать выдавать права людям младше 18 лет
// Если людям больше 18 то права мы выдаем

// const answer = prompt('Сколько вам лет?')
// const age = Number(answer) // 22
// console.log(age)

// if (isNaN(age)) { // isNaN(17) = false
//     alert('Пожалуйста, напишите правильный возраст!')
// }
// else if (age >= 18) { // 17 >= 18 = false
//     alert('Вот ваши водительские права!')
// }
// else {
//     alert('Вам нет 18. Не могу дать водительские права!')
// }

// Сделайте проверку на паспорт контроля. 
// Если человек гражданин Казахстана можно пройти
// Если нет то нельзя

// P.S. Попросите пользователя назвать родную страну


// const country = prompt('Напишите вашу страну!')
// if (country === 'Казахстан' || country === 'Kazakhstan') {
//     alert('Можете проходить!')
// }
// else {
//     alert('Вам вход воспрещен!')
// }



// Нужно определить является ли человек подростком
// 13 - 20

// const userAnswer = prompt('Введите ваш возраст:')
// const userAge = Number(userAnswer)
// console.log(userAge)

// if (userAge >= 13 && userAge <= 19) { // true && false = false
//     // && - всегда используйте при проверке интервала - от 13 до 20
//     console.log('Вы подросток!')
// }
// else if (userAge < 13) {
//     console.log('Вы ребенок. Играйте и развлекайтесь')
// }
// else if (userAge > 19) {
//     console.log('Вы взрослый! Идите работать')
// }



// Задание 2

// Запросите у пользователя число. Затем запросите степень, 
// в которую нужно возвести это число. Выведите в консоль результат.

// const userAnswer1 = prompt('Введите число:')
// const userNumber1 = Number(userAnswer1)

// const userAnswer2 = prompt('Введите степень:')
// const userNumber2 = Number(userAnswer2)


// console.log(userNumber1 ** userNumber2)



// Задание 4

// Создать произвольную переменную, 
// присвоить ей произвольное строковое значение (например, "my text"). 
// C помощью if написать условие: 
// если значение переменной равно “some text”, 
// присвоить ей значение “another text”, иначе - “some text”.

// let myText = 'some text'

// if (myText === 'some text') { // 'some text' === 'some text' => true
//     myText = 'another text'
// }
// else {
//     myText = 'some text'
// }
// console.log(myText) // 'another text'


// Задание 5

// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// num = num + 10
// num += 10


// let peremen = 5
// if (peremen === 0) {
//     peremen = 1
// }
// else if (peremen < 0) {
//     peremen = 'less than zero'
// }
// else if (peremen > 0) {
//     peremen *= 10
// }
// console.log(peremen)
