// BLOCK-SCOPED VARIABLES - Переменные ограниченные блоком

// let text = 'Hello'

// if (true) {
//     // text = 'Bye' // можно

//     const text = 'if'
//     if (true) {
//         const text = 'if 2'
//     }
//     console.log(text)
// }

// console.log(text) // hello

// for(let i = 0; i < 10; i++) {
//     const text = 'for'
//     console.log(text)
// }

// function hello() {
//     const text = 'function'
//     console.log(text)
// }

// hello()

// while(true) {
//     const text = 'while'
//     console.log(text)
// }


// VAR НЕ BLOCK-SCOPED
// var text = 'Hello'

// if (true) {
//     if (true) {
//         if (true) {
//             if (true) {
//                 var text = 'if'
//             }
//         }
//     }
// }

// console.log(text)

// VAR FUNCTION-SCOPED
// var text = 'hello'

// function someFunc() {
//     var text = 'someFunc'
//     console.log(text)
// }
// someFunc()

// console.log(text)



// CLOSURES - ЗАМЫКАНИЯ
// function outerFunc() { // function factory
//     let counter = 0
    
//     return function () {
//         counter++
//         console.log(counter)
//     }
// }

// const innerFunc1 = outerFunc() // let counter = 0, return f () {}
// const innerFunc2 = outerFunc()


// innerFunc1()
// innerFunc1()
// innerFunc1()
// innerFunc1()
// innerFunc1()
// console.log('-------------------')
// innerFunc2()
// innerFunc2()
// innerFunc2()
// innerFunc2()
// innerFunc2()




// Задание 9


// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. 
// На каждой итерации цикла выводить в консоль текущее 
// число (i) и информацию о том, целое ли оно.

// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.

// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

// function func() {

// }

// const func = function () {}

// const func = () => {}

// Number.isInteger()


// function showDecimalOrInteger(n) {
//     for (let i = 1; i < n; i += 0.5) {
//         if (Number.isInteger(i)) {
//             console.log(i + ' integer')
//         }
//         else {
//             console.log(i + ' decimal')
//         }
//     }
// } 

// showDecimalOrInteger(10)


// OBJECTS - ОБЬЕКТЫ

// const phoneName = 'Iphone 15'
// const color = 'blue'
// const memorySize = 256
// const inStock = true

// const phoneName2 = 'Samsung'
// const color2 = 'gray'
// const memorySize2 = 128
// const inStock2 = false

// field, properties, key: value
// поле, свойство, ключ: значение
// const phone1 = {
//     'name': 'Iphone 15',
//     'color': 'blue',
//     'memorySize': 256,
//     'inStock': true,
//     'is broken': false
// }

// const phone2 = {
//     name: 'Samsung s25',
//     color: 'gray',
//     memorySize: 128,
//     inStock: false
// }

// console.log(phone1)
// console.log(phone2)

// console.log(phone1.memorySize)
// console.log(phone2.name)

// console.log(phone1['color']) // phone1.color
// console.log(phone1["is broken"])



// Как менять обьект
const phone1 = {
    name: 'Iphone 15',
    color: 'blue',
    memorySize: 256,
    inStock: true,
    'is broken': false
}

phone1.color = 'red'
phone1['is broken'] = true
// новое поле
phone1.screenSize = 6.7
// удалять просто значение
phone1.memorySize = null
phone1.memorySize = undefined
// удалять поля с значения
delete phone1['is broken']
delete phone1.name

console.log(phone1)





