// BOM - Browser Object Model


// LOCATION
// console.log(location)
// console.log(location.href)
// location.reload()
// location.replace('https://youtube.com')

// NAVIGATOR
// console.log(navigator)
// console.log(navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position)
// }))

// HISTORY
// console.log(history)

// if (history.length > 1) {
//     history.forward()
// }

// SCREEN
// console.log(screen)


// Задание 1

// Просмотрите в консоли браузера объект navigator.
//  Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location.
//  Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

// const browsers = ['Chrome', 'Brave', 'Safari', 'Firefox', 'Microsoft Edge']


// console.log("Browser mine is " + navigator.userAgentData.brands.find(b => browsers.includes(b.brand)).brand + " OS mine is " + navigator.userAgentData.platform + " Link is " +location.href)



// DOM - Document Object Model
// console.log(document.querySelector('h1'))
// console.dir(document.querySelector('h1'))
// console.dir(document.querySelectorAll('h1'))

// console.dir(document.querySelector('.link'))
// console.dir(document.querySelector('#heading2'))

// console.dir(document.getElementById('heading2')) // и есть -> console.dir(document.querySelector('#heading2'))

// const heading1 = document.querySelector('#heading1')
// console.dir(heading1.innerText)
// heading1.innerText = 'Sagynysh'


// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const listItems = document.querySelectorAll('#list li')

// console.log(listItems)

// for (const li of listItems) {
//     console.log(li.innerText)
// }

// let count = 0
// for (const li of listItems) {
//     li.innerText = count //li.innerText = 3
//     count++
// }

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].innerText = i
// }


// УДАЛЕНИЕ DOM элементов
// const a = document.querySelector('.link')
// console.log(a)
// a.remove()


// Задание 3

// Добавить к нескольким тегам на странице класс "forRemove". 
// Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.


const elementsForRemove = document.querySelectorAll('.forRemove')

for (const el of elementsForRemove) {
    el.remove()
}