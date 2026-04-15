// ООП - Обьектно- Ориентированное Программирование
// ОБЬЕКТЫ
// КЛАССЫ

// class Cat {
//     // const this = {}

//     // Если создаем поле снаружи конструктора this писать нельзя
//     hasFur = true

//     constructor(name, color, age) {
//         this.name = name
//         this.color = color
//         this.age = age
//     }

//     meow() {
//         console.log(`${this.name} говорит: Мяу!`)
//     }

//     // const this = {
//     //     name: 'Барсик',
//     //     color: 'рыжий',
//     //     age: 6
//     // }

//     // return this
// }


// const cat1 = new Cat('Барсик', 'рыжий', 6)
// const cat2 = new Cat('Мурка', 'белый', 3)
// const cat3 = new Cat('Ақтөс', 'черный', 0)

// console.log(cat1)
// console.log(cat2)
// console.log(cat3)

// cat1.meow()
// cat2.meow()
// cat3.meow()



// Задача 1: Создание «Чертежа» (Классы и Объекты)
// Создай класс Smartphone.

// Свойства: brand (марка), model (модель) и price (цена).
// Метод: showInfo(), который выводит в консоль фразу: "Смартфон [brand] [model] стоит [price] тенге".

// Задание: Создай два разных смартфона и вызови для каждого метод showInfo().


// class Smartphone {
//     constructor(brand, model, price) {
//         this.brand = brand
//         this.model = model
//         this.price = price
//     }

//     showInfo() {
//         console.log(`Смартфон ${this.brand} ${this.model} стоит ${this.price} тенге`)
//     }
// }

// const smartphone1 = new Smartphone('Apple', 'iPhone 13 pro max', 450000)
// const smartphone2 = new Smartphone('Samsung', 'Samsung s25 FE', 350000)

// console.log(smartphone1)
// console.log(smartphone2)

// smartphone1.showInfo()
// smartphone2.showInfo()



// ВЗАИМОДЕЙСТВИЕ ДВУХ ОБЬЕКТОВ
// Система Библиотеки

class Book {
    constructor(title, author, isAvailable) {
        this.title = title
        this.author = author
        this.isAvailable = isAvailable
    }

    makeAvailable() {
        this.isAvailable = true
    }
}

class Library {
    books = []

    addBook(book) {
        this.books.push(book)
    }

    showAllBooks() {
        console.log(this.books)
    }

    showAvailableBooks() {
        console.log(this.books.filter(b => b.isAvailable))
    }
}

// const library1 = new Library()

// const book1 = new Book('Гарри Поттер', 'Дж.К. Роулинг', true)
// const book2 = new Book('Маленькие женщины', 'Луиза Мэй', false)
// const book3 = new Book('Five nights at Freddies - Неправильные', 'Скотт Коутон', false)

// library1.addBook(book1)
// library1.addBook(book3)

// book3.makeAvailable()

// library1.showAllBooks()
// library1.showAvailableBooks()



// Задача 1: Взаимодействие объектов (Корзина товаров)
// Здесь важно понять, как один объект может содержать массив других объектов и работать с ними.

// Класс Product:
// Свойства: name, price.

// Класс Cart (Корзина):
// Свойство: items (пустой массив при создании).
// Метод add(product, quantity): добавляет товар в корзину. Если товар уже есть, увеличивает его количество.
// Метод getTotal(): считает общую сумму всех товаров в корзине.
// Задание: Создай 3 товара, добавь их в корзину (некоторые по 2-3 штуки) и выведи финальную стоимость.

// item = {
//     product: {
//         name: 'Хлеб',
//         price: 300
//     },
//     quantity: 4
// }

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Cart {
    items = []

    add(newProduct, quantity) {
        // Есть ли уже этот продукт
        const foundProduct = this.items.find(item => item.product.name === newProduct.name)

        if (foundProduct) {
            foundProduct.quantity += quantity
        }
        else {
            this.items.push({
                product: newProduct,
                quantity: quantity
            })
        }
    }

    getTotalPrice() {
        let sum = 0

        for (const item of this.items) {
            sum += item.product.price * item.quantity 
            // 1) sum += 300 * 9 => sum += 2700 => sum = 0 + 2700 => 2700 -> sum = 2700 -> Общая сумма всех кока кол
            // 2) sum += 350 * 6 => sum += 2100 => sum = 2700 + 2100 => 4800 -> sum = 4800 -> Общая сумма всех кока кол + всех твиксов
        }

        console.log(sum)
    }
}

const cocaCola = new Product('Coca Cola Zero 0.5', 300)
const twix = new Product('Twix', 350)
const kitkat = new Product('Kitkat', 970)

const cart = new Cart()

cart.add(cocaCola, 3)
cart.add(cocaCola, 1)
cart.add(cocaCola, 5)

cart.add(twix, 2)
cart.add(twix, 4)

cart.add(kitkat, 1)

console.log(cart.items)
cart.getTotalPrice()