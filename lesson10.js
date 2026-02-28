// const numbers1 = [1, 2, 3]
// const numbers2 = [4, 5, 6]

// 1
// for (const number of numbers2) {
//     numbers1.push(number)
// }
// console.log(numbers1)


// 2
// const numbers3 = [...numbers1, ...numbers2]
// const numbers3 = [...numbers2, ...numbers1]
// console.log(numbers3)

// 3
// const numbers3 = numbers1.concat(numbers2)
// const numbers3 = numbers2.concat(numbers1)
// console.log(numbers3)

// JOIN
// const numbers1 = [1, 2, 3, 4, 5, 6, 7]
// console.log(numbers1)
// console.log(numbers1.join('_'))

// slice - immutable
// console.log(numbers1)
// console.log(numbers1.slice(0, 2))
// console.log(numbers1.slice(2, 5))
// console.log(numbers1.slice(2))

// splice - mutable
// console.log(numbers1.splice(2, 2))
// console.log(numbers1.splice(0, 4))
// console.log(numbers1)


// toSpliced
// console.log(numbers1.toSpliced(4, 3))
// console.log(numbers1)


// ЗАДАНИЕ 1
// const ingredients = ['Мука', 'Сахар', 'Яйца', 'Молоко'];

// 1. Соедини элементы массива ingredients в одну строку,
// где продукты разделены запятой и пробелом ", ".

// 2. Соедини их же так, чтобы они были разделены плюсом +.


// const ingredients = ['Мука', 'Сахар', 'Яйца', 'Молоко'];

// console.log(ingredients.join(', '))
// console.log(ingredients.join(' + '))


// ЗАДАНИЕ 2

// const queue = ['Ivan', 'Alice', 'Kate', 'Petr', 'Alex'];

// // vipQueue
// // Создай новый массив VIP, в который попадут первые два человека из очереди (Ivan и Alice).
// // slice

// const vipQueue = queue.slice(0, 2)
// console.log(vipQueue)


// ЗАДАНИЕ 3
// Ты проводишь инвентаризацию на складе.

// Удали из массива tools второй элемент (Hammer).

// Выведи массив в консоль и посмотри, как он изменился.

// splice

// const tools = ['Saw', 'Hammer', 'Drill', 'Screwdriver'];
// tools.splice(1, 1)
// console.log(tools)


// ЗАДАНИЕ 5
// const parts = ['https', 'mysite', 'com', 'shop', 'clothes', 'shirts'];

// // https://mysite.com/shop/clothes/shirts


// Методы строк

// includes, startsWith, endsWith
// const text = 'Frontend - это круто'

// console.log(text.includes('Frontend'))
// console.log(text.includes('-'))

// console.log(text.startsWith('Frontend'))
// console.log(text.startsWith('это'))

// console.log(text.endsWith('круто'))
// console.log(text.endsWith('Frontend'))


// toUpperCase, toLowerCase, trim
// const email = "      OlzHas@Mail.ru    "

// console.log(email.toLowerCase())
// console.log(email.toUpperCase())
// console.log(email.trim())
// console.log(email.toLowerCase().trim())



// Задание 1: Чистка данных (Trim + LowerCase)

// Представь, что пользователь ввел свой логин в форму, 
// но случайно добавил лишние пробелы и нажал Caps Lock.

// Удали пробелы по краям строки input.

// Приведи всё к нижнему регистру.

// Сравни результат со строкой "admin". Если они совпадают, выведи true.

// const input = "  ADMIN  ";

// const correctInput = input.trim().toLowerCase()
// console.log(correctInput)
// console.log(correctInput === 'admin')


// ЗАДАНИЕ 2

// Тебе нужно проверить, безопасна ли ссылка.

// Напиши условие: если строка url начинается с https://, выведи в консоль: "Соединение защищено".

// В противном случае выведи: "Небезопасно!".

// const url = "https://my-site.com";

// // https://
// // http://

// if (url.startsWith('https://')) {
//     console.log('Соединение защищено')
// }
// else {
//     console.log('Небезопасно')
// }

// console.log(url.startsWith('https://') ? 'Соединение защищено' : 'Небезопасно')


// slice, substring, at
// const text = 'Javascript'
// console.log(text[-1])
// console.log(text.at(-3))
// console.log(text.slice(0, 4))
// console.log(text.slice(4))
// console.log(text.slice(0, -3))
// console.log(text.substring(0, 4))
// console.log(text.substring(0, -3))


// SPLIT, REPLACE, REPLACE ALL
// const names = 'Aisultan, Altair, Sagynysh, Kairat, Denis, Aisultan'
// // console.log(names.split(', '))
// // console.log(names.replace('Aisultan', 'Tolkyn'))
// console.log(names.replaceAll('Aisultan', 'Tolkyn'))


// ЗАДАНИЕ 5
// В чате нельзя ругаться!

// Замени в строке message слово "плохой" на "хороший".

// Замени все вхождения слова "ошибка" на слово "успех".

const message = "Это плохой код. Ошибка здесь и ошибка там.";

const filteredMessage = message.replaceAll('плохой', 'хороший').replaceAll('ошибка', 'успех').replaceAll('Ошибка', 'Успех')
console.log(filteredMessage)