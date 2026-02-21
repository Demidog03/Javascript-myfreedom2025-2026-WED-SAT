// const numbers = [1, 2, 3, 4, 5]
// const names = ['Kairat', 'Sagynysh', 'Altair', 'Assel', 'Tolkyn', 'Denis']

// console.log(numbers)
// console.log(names) // index => 0, 1, 2, 3, 4 ...

// console.log(names[0])
// console.log(names[2])



// Добавить новый элемент, заменить элемент
// names[4] = 'Denis'
// names[1] = 'Madina'
// // names[9] = 'Vladimir' // не советуется
// names[5] = 'Dulat'

// console.log(names)


// Добавить новый элемент в конец массива

// names.push('Timur')
// names.push('Aisultan')

// console.log(names)


// Добавить новый элемент в начало массива
// names.unshift('Lilya')
// names.unshift('Nurshat')
// console.log(names)


// Удалить из массива последний элемент
// names.pop()
// names.pop()
// console.log(names)


// Удалить из массива первый элемент
// names.shift()
// names.shift()
// console.log(names)


// MUTABLE - МУТАБЕЛЬНЫЙ
// push, pop, unshift, shift - мутабельные методы - меняют оригинальный массив

// NONMUTABLE - НЕМУТАБЕЛЬНЫЙ

// FOR

// names.push('Aisultan')
// console.log(names)

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]) // names[3]
// }



// FOR IN
// for (const index in names) {
//     console.log(index, names[index])
// }


// FOR OF
// for (const name of names) {
//     console.log(name)
// }



// FOR EACH

// функция как переметр передается в другую функцию то это называется - CALLBACK FUNCTION
// for (const name of names) {
//     if (name === 'Altair') {
//         break
//     }
//     console.log(name)
// }

// for each нельзя остановить
// names.forEach((value) => {
//     if (value == 'Altair') {
//         break
//     }
//     console.log(value)
// })


// Задание 3

// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

// const fruits = ['apple', 'banana', 'pineapple', 'orange', 'grape', 'lemon', 'lime']

// // banana // 1 index
// // orange // 3 index
// // lemon // 5 index

// for (let i = 1; i < fruits.length; i+=2) {
//     console.log(i, fruits[i])
// }


// Задание 4

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
// }

// for (const index in numbers) {
//     console.log(`Индексу ${index} соответствует число ${numbers[index]}`)
// }


// Задание 6

// Есть массив произвольных чисел:
// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Вывести в консоль все элементы массива, используя 2 разных цикла:
// for-of и for со счетчиком (простой цикл for)

// 2) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть
// переменную (например, sum) и записать в нее начальное значение
// (в случае с суммой - ноль). Затем уже описать цикл,
// в котором эта сумма будет считаться (в каждой итерации цикла к ней будет
//     прибавляться следующий элемент массива).

// 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.

// 4) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить
// переменную (например, max), записать в нее первый элемент массива,
// а затем уже в цикле искать максимальное значение.

// 5) Определить и вывести в консоль индекс максимального числа массива
// (или индексы, если число встречается более одного раза).
// Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

const numbers = [42, 65, 70, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1
// for (const number of numbers) {
//     console.log(number)
// }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }


// 2
// let sum = 0

// for (const number of numbers) {
//     sum += number // sum = 107 + 49
//     console.log(sum)
// }


//3
// let sum = 0

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         sum += number
//     }
// }

// console.log(sum)



// 4
let max = 0

for (const number of numbers) {
    if (max < number) {
        console.log('Старое максимальное число: ', max)
        max = number
        console.log('Новое максимальное число: ', max)
    }
    else {
        console.log(`Число ${number} меньше чем максимальное число ${max}. Ничего не делаем`)
    }
    console.log('-------------------------------------------')
}

console.log(max) // 70

// 5
const maxIndexes = []

for (const index in numbers) {
    if (max === numbers[index]) { // если в массиве мы нашли число 70 то его индекс сохраняем в новом массиве
        maxIndexes.push(index)
    }
}

console.log(maxIndexes)