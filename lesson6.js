// ССЫЛОЧНЫЙ ТИП ДАННЫХ

// 1. Примитивные типы данных
// let text = 'Some text'
// let text2 = text // let text2 = 'Some text'
// text = 'Another text'
// console.log('text: ', text)
// console.log('text2: ', text2)


// const student1 = {
//     name: 'Vladimir',
//     lessonType: 'online'
// }

// const student2 = {
//     name: 'Tolkyn',
//     lessonType: 'offline'
// }

// student1.lessonType = 'offline'
// student2.lessonType = 'online'

// console.log(student1)
// console.log(student2)


// 2. ССЫЛОЧНЫЙ ТИП ДАННЫХ - Object, array
// const studentOriginal = {
//     name: 'Kairat',
//     lessonType: 'offline'
// }

// const studentCopy = studentOriginal

// studentOriginal.lessonType = 'Online'
// studentCopy.name = 'Aisultan'

// console.log(studentOriginal)
// console.log(studentCopy)



// Как скопировать данные
// const studentOriginal = {
//     name: 'Kairat',
//     lessonType: 'offline',
//     address: {
//         country: 'Kazakhstan',
//         city: 'Astana',
//     }
// }

// // spread оператор
// const studentCopy = { ...studentOriginal } // { name: 'Kairat', lessonType: 'offline',  address: { country: 'Kazakhstan',city: 'Astana' } }

// // studentOriginal.lessonType = 'Online'
// // studentCopy.name = 'Aisultan'

// studentOriginal.address.city = 'Almaty'

// console.log(studentOriginal)
// console.log(studentCopy)


// Как скопировать обьект - 100% гарантия даю слово жб
// const studentOriginal = {
//     name: 'Kairat',
//     lessonType: 'offline',
//     address: {
//         country: 'Kazakhstan',
//         city: 'Astana',
//     }
// }

// // JSON - Javascript Object Notation

// const studentOriginalJSON = JSON.stringify(studentOriginal)

// const studentCopy = JSON.parse(studentOriginalJSON)

// studentOriginal.address.city = 'Almaty'

// console.log(studentOriginal)
// console.log(studentCopy)
// console.log(studentCopy.address.country)


// ЦИКЛ ДЛЯ ОБЬЕКТА
// const car = {
//     model: 'Kia',
//     color: 'black',
//     price: 7_000_000,
//     isNew: false,
//     isSale: true,
// }

// // FOR IN
// for (const key in car) {
//     console.log(key, car[key]) // car['price']
// }

// // Как понять есть ли в обьекте определнное поле
// console.log('color' in car)
// console.log('fsdfsdfds' in car)
// console.log(car.hasOwnProperty('isSale'))
// console.log(car.hasOwnProperty('vxcvxcvxc'))



// ЗАМОРОЗКА ОБЬЕКТА
// const student = {
//     name: 'Timur',
//     phone: 'Iphone 15'
// }

// Object.freeze(student)

// student.phone = 'Xiaomi mi 15'
// student.name = 'Tima'

// console.log(student)



// Задание 2

// Дан объект с именами и заработными платами:

// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }

// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх USD.

// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!

// for (const key in car) {
//     console.log(key, car[key]) // car['price']
// }



// const engineers = {
//     "Den": 1000,
//     "Matt": 5000,
//     "Steve": 2000
// }
// console.log(engineers['Steve'])

// for (const key in engineers) {
//     console.log(`Заработная плата ${key} составляет ${engineers[key]} USD.`)
// }



// const suspects = {
//   Vladimir: { age: 34, isGuilty: false, alibi: "At work" },
//   Altair: { age: 28, isGuilty: true, alibi: "Unknown" },
//   Aisultan: { age: 41, isGuilty: false, alibi: "At gym" }
// };

// Вывести в консоль всех подозревамых

// Suspect: john
// Age: 34
// Status: Невиновен/Виновен

