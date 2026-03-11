// const newHeading = document.createElement('h1')

// document.body.appendChild(newHeading)
// newHeading.innerText = 'Hello'
// newHeading.style.color = 'pink'

// const container = document.querySelector('#container')
// container.appendChild(newHeading)


// Задание 4

// Создать с помощью js абзац (тег p). 
// Добавить в него контент. 
// Добавить к нему стили: размер 36px, жирный шрифт. 
// Добавить абзац с текстом на страницу. (body)

// const newParagraph = document.createElement('p')
// newParagraph.innerText = 'Hello'
// newParagraph.style.fontSize = '36px'
// newParagraph.style.fontWeight = 'bold'
// document.body.appendChild(newParagraph)


// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: 
// название тега, название цвета, содержимое. 
// Функция должна сформировать необходимый тег, 
// добавить необходимый стиль с цветом и внести содержимое.
//  Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

// function generateElement(tag, color, text) {
//     const newElement = document.createElement(tag)
//     newElement.style.color = color
//     newElement.innerText = text
//     return newElement
// }

// const h1 = generateElement('h1', 'green', 'Hello')
// console.log(h1)
// document.body.appendChild(h1)

// const p = generateElement('p', 'red', 'Goodbye')
// console.log(p)
// document.body.appendChild(p)

// const a = generateElement('a', 'red', 'Link1')
// console.log(a)
// document.body.appendChild(a)

// const img = generateElement('img', 'red', 'image1')
// console.log(img)
// document.body.appendChild(img)


// Задание 6
// Вставить в страницу (в html документ) тег <select>. 
// С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// const select = document.querySelector('#select1')

// for (let i = 1960; i <= 2020; i++) {
//     const option = document.createElement('option')
//     option.innerText = i
//     select.appendChild(option)
// }




// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ",
//  где имя - свойство объекта (а объект здесь - это текущая ячейка массива), 
//  статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
// ]

// const ul = document.createElement('ul')

// for (const client of clients) {
//     const li = document.createElement('li')
//     if (client.order === true) {
//         li.innerText = `Клиент ${client.name} оплатил/а заказ`
//     }
//     else {
//         li.innerText = `Клиент ${client.name} отменил/а заказ`
//     }
//     ul.appendChild(li)
// }

// document.body.appendChild(ul)


// РАБОТА С КЛАССАМИ в JS

// const select = document.querySelector('#select1')
// select.className = 'hidden'
// select.classList.remove('hidden')

// const container = document.querySelector('#container')
// container.classList.add('hidden')

// const h2 = document.querySelector('#h2')
// h2.classList.toggle('hidden')


// Задание 10

// Есть верстка: https://teenscool1.notion.site/fc50f58cd3e34d27a024d57567d60463

// С помощью JavaScript:

// 1) Найти в коде список ul и добавить ему класс “list”.

// 2) На li через один (начиная с самого первого) установить класс “item”

// 3) На все ссылки в примере установить класс “custom-link”

// const ul = document.querySelector('ul')
// ul.classList.add('list')

// const listItems = document.querySelectorAll('ul li')
// for (let i = 0; i < listItems.length; i+=2) {
//     listItems[i].classList.add('item')
// }

// const aTags = document.querySelectorAll('a')
// for (const a of aTags) {
//     a.classList.add('custom-link')
// }