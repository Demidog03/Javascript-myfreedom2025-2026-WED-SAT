// Принципы ООП - четыре столпа ООП

// 1. ИНКАПСУЛЯЦИЯ - INCAPSULATION - Скрыть детали
// class KaspiBankAccount {
//     // balance = 0; // Публичное поле
//     #balance = 0;

//     deposit(amount) {
//         // идет процесс перевода денег на ваш аккаунт
//         if (amount > 0) {
//             this.#balance += amount
//             console.log(`Баланс пополнен на ${amount} тг`)
//         }
//     }

//     showBalance() {
//         console.log(this.#balance)
//     }
// }

// const myAccount = new KaspiBankAccount()
// myAccount.deposit(100_000)
// myAccount.showBalance()


// // Поставили запрет
// // myAccount.#balance += 1_000_000 // Можно пополнять баланс свободно
// // console.log(myAccount.#balance) // Посмотреть баланс можно тоже свободно

// console.log(myAccount)



// Задача: «Охранная система дома» (Smart Alarm)
// Представь, что ты пишешь код для умного дома. У сигнализации есть секретный пин-код,
// который никто не должен видеть или менять просто так.

// Что нужно сделать:
// Создай класс AlarmSystem:
// Сделай приватное свойство #pinCode (задай его при создании объекта через конструктор).
// Сделай приватное свойство #isArmed (статус: включена ли охрана, изначально false).

// Добавь метод arm(pin) (Включить охрану):
// Метод принимает пин-код.
// Если введенный пин совпадает с #pinCode, то статус #isArmed становится true и выводится: "Охрана включена".

// Если пин неверный: "Ошибка! Неверный код".

// Добавь метод disarm(pin) (Выключить охрану):
// Если пин совпадает — статус #isArmed становится false и выводится: "Охрана снята".
// Если нет — "Тревога! Попытка взлома!".

// Добавь возможность смены кода changePin(oldPin, newPin):
// Сменить код можно только если введен правильный oldPin.
// Новый код должен быть строкой и иметь длину ровно 4 символа
//  Если условие не соблюдено — пиши "Некорректный формат кода".

// class AlarmSystem {
//     #pinCode;
//     #isArmed = false;

//     constructor(initialPin) {
//         this.#pinCode = initialPin
//     }

//     arm(pin) {
//         if (pin === this.#pinCode) {
//             this.#isArmed = true
//             console.log('Охрана включена')
//         }
//         else {
//             console.log('Ошибка! Неверный код')
//         }
//     }

//     disarm(pin) {
//         if (pin === this.#pinCode) {
//             this.#isArmed = false
//             console.log('Охрана снята')
//         }
//         else {
//             console.log('Тревога! Попытка взлома!')
//         }
//     }

//     changePin(oldPin, newPin) {
//         if (oldPin !== this.#pinCode) {
//             console.log('Неправильный старый пинкод!')
//             return
//         }
//         if (newPin.length !== 4) {
//             console.log('Ошибка, неверный формат пинкода!')
//             return
//         }
//         this.#pinCode = newPin
//         console.log('Код успешно изменен')
//     }
// }

// // Как проверить код:
// const myHomeAlarm = new AlarmSystem("5566");

// myHomeAlarm.arm("0000");   // Ошибка!
// myHomeAlarm.arm("5566");   // Охрана включена

// myHomeAlarm.disarm('1111') // Трегова!
// myHomeAlarm.disarm('5566') // Охрана снята

// // console.log(myHomeAlarm.#pinCode); // ТУТ ДОЛЖНА БЫТЬ ОШИБКА (доступ запрещен)

// myHomeAlarm.changePin("1111", "4444"); // Неправильный старый пинкод!
// myHomeAlarm.changePin("5566", "12"); // Ошибка (слишком короткий)
// myHomeAlarm.changePin("5566", "4444"); // Код успешно изменен



// Наследование - Inheritance - Подвид

// Задача: «IT-Компания»
// Представь, что ты пишешь систему для HR-отдела.
// У тебя есть разные сотрудники, но у всех них есть общие свойства (имя, зарплата).

// 1. Создай базовый класс Employee (Сотрудник)
// Свойства в конструкторе: name (имя) и baseSalary (базовая зарплата).

// Метод getDetails(): должен возвращать строку: "Сотрудник [name], базовая зарплата: [baseSalary]".

// 2. Создай класс Developer, который наследует Employee
// Дополнительное свойство: language (основной язык программирования, например, "JavaScript").

// Переопредели метод getDetails(): он должен использовать данные родителя, но добавлять свою деталь.

// Подсказка: используй super.getDetails(), чтобы получить строку от родителя и приклеить к ней: ", пишет на [language]".

// 3. Создай класс Manager, который наследует Employee
// Дополнительное свойство: bonus (премия).

// Новый метод calculateFinalSalary(): он должен возвращать сумму baseSalary + bonus.

// Переопредели метод getDetails(): должен выводить: "Менеджер [name], базовая зарплата: [baseSalary], итоговая зарплата с бонусом: [результат метода calculateFinalSalary]".

// class Employee {
//     constructor(name, salary) {
//         this.name = name
//         this.salary = salary
//     }

//     getDetails() {
//         return `Сотрудник: ${this.name}, базовая зарплата: ${this.salary}`
//     }
// }

// class Developer extends Employee {
//     constructor(name, salary, language) {
//         super(name, salary)
//         this.language = language
//     }

//     getDetails() {
//         console.log(`${super.getDetails()}, пишет на ${this.language}`)
//     }
// }

// class Manager extends Employee {
//     constructor(name, salary, bonus) {
//         super(name, salary)
//         this.bonus = bonus
//     }

//     getDetails() {
//         console.log(`${super.getDetails()}, зарплата с бонусом: ${this.salary + this.bonus}`)
//     }
// }

// const empl1 = new Employee('Altair', 700_000)
// console.log(empl1)
// console.log(empl1.getDetails())

// const dev1 = new Developer('Aisultan', 750_000, 'Python')
// console.log(dev1)
// dev1.getDetails()

// const mang1 = new Manager('Sagynysh', 1_000_000, 200_000)
// console.log(mang1)
// mang1.getDetails()

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     eat() {
//         console.log(`${this.name} ест...`)
//     }
//     live() {
//         console.log(`${this.name} живет...`)
//     }
//     move() {
//         console.log(`${this.name} двигается...`)
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} лает...`)
//         console.log('Гав-гав!')
//     }
//     move() {
//         super.move() // console.log(`${this.name} двигается...`)s
//         console.log(`${this.name} бегает...`)
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log(`${this.name} летает...`)
//     }
// }

// const dog = new Dog('Собака')
// const bird = new Bird('Птица')

// dog.eat()
// bird.eat()

// dog.live()
// bird.live()

// dog.bark()

// dog.move()
// bird.move()

// bird.fly()



// 3. Polymorphism - Полиморфизм

// class Shape {
//     draw() {
//         console.log('Рисуем фигуру!')
//     }
// }

// class Circle extends Shape {
//     draw() {
//         super.draw()
//         console.log('Рисуем круг!')
//     }
// }

// class Square extends Shape {
//     draw() {
//         super.draw()
//         console.log('Рисуем квадрат!')
//     }
// }

// const shape = new Shape()
// const circle = new Circle()
// const square = new Square()

// shape.draw()
// circle.draw()
// square.draw()


// 4. Abstraction - Абстракция

// Отправка SMS
// class SmsService {
//     #connectToNetwork() {
//         console.log('Установка связи с оператором...')
//     }
//     #validateNumber() {
//         console.log('Проверяем начинается ли номер на "+7')
//     }
//     #checkBalance() {
//         console.log('Проверяем баланс')
//     }

//     send(number, text) {
//         this.#connectToNetwork()
//         this.#validateNumber()
//         this.#checkBalance()
//         console.log(`Сообщение '${text}' отправлено на номер ${number}`)
//     }
// }

// const smsService = new SmsService()
// smsService.send("+7777_777_77_77", 'Привет!')


// AudioPlayer / VideoPlayer
// class Player {
//     play() {
//         throw new Error('Не реализован метод play()!')
//     }
//     pause() {
//         throw new Error('Не реализован метод pause()!')
//     }
// }

// class AudioPlayer extends Player {
//     play() {
//         console.log('Начинаем воспроизведение аудио!')
//     }
//     pause() {
//         console.log('Ставим на паузу Аудио плеер')
//     }
// }

// class VideoPlayer extends Player {
//     play() {
//         console.log('Начинаем воспроизведение видео!')
//     }
//     pause() {
//         console.log('Ставим на паузу Видео плеер')
//     }
// }

// class Database {
//     createProduct() {
//         console.error('Класс Database: Не реализован метод createProduct')
//     }
// }

// class PostgreSQLDatabase extends Database {
//     createProduct() {
//         console.log('в PostgreSQL создается товар')
//     }
// }

// class MongoDBDatabase extends Database {
//     createProduct() {
//         console.log('в MongoDB создается товар')
//     }
// }

// const audioPlayer = new AudioPlayer()
// audioPlayer.play()
// audioPlayer.pause()

// const videoPlayer = new VideoPlayer()
// videoPlayer.play()
// videoPlayer.pause()

// const postgreSQLDatabase = new PostgreSQLDatabase()
// postgreSQLDatabase.createProduct()


// Задача: «Автомат с напитками»
// Представь, что ты программируешь умную кофемашину. 
// У неё есть разные программы, но для пользователя всё выглядит одинаково: он нажимает кнопку, 
// и машина что-то готовит.

// Задание:
// Создай базовый класс Beverage (Напиток).

// В конструкторе он должен принимать название (name).

// Добавь в него «абстрактный» метод prepare(). 
// Пусть он выбрасывает ошибку: throw new Error("Метод prepare() должен быть реализован"). 
// Это заставит нас прописать логику в дочерних классах.

// Добавь обычный метод serve(), который выводит в консоль: 
// "Ваш [название напитка] готов! Приятного аппетита!". (Это общая логика для всех напитков).

// Создай два подкласса:

// Coffee: в методе prepare() выводит: "Молотим зерна, варим эспрессо...".

// Tea: в методе prepare() выводит: "Завариваем чайные листья кипятком...".


// class Beverage {
//     constructor(name) {
//         this.name = name
//     }

//     prepare() {
//         throw new Error("Метод prepare() должен быть реализован")
//     }

//     serve() {
//         console.log(`Ваш ${this.name} готов! Приятного аппетита!`)
//     }
// }

// class Coffee extends Beverage {
//     prepare() {
//         console.log('Молотим зерна, варим эспрессо...')
//     }
// }

// class Tea extends Beverage {
//     prepare() {
//         console.log('Завариваем чайные листья кипятком...')
//     }
// }

// const coffee = new Coffee('Капучино')
// coffee.prepare()
// coffee.serve()

// const tea = new Tea('Марроканский')
// tea.prepare()
// tea.serve()


// SOLID

// S - Single Responsibility Principle - Принцип единственной ответственности

// class User {
//     constructor(name, email, password) {
//         this.name = name
//         this.email = email
//         this.password = password
//     }

//     login(email, password) {
//         if (email !== this.email || password !== this.password) {
//             console.log('Неправильные данные!')
//             return 
//         }
//         console.log(`Добро пожаловать, ${this.name}!`)
//         const emailService = new EmailService()
//         emailService.sendEmailAboutLogin(this.name)
//     }
// }

// class EmailService {
//     sendEmailAboutLogin(name) {
//         // вся логку отправки сообщения на почту
//         console.log('Отправляем сообщение на почту...')
//         console.log(`${name}, кто то зашел на ваш аккаунт!`)
//     }
// }

// const user1 = new User('Olzhas', 'olzhas@gmail.com', 'Qwerty123!')

// user1.login('olzhas@gmail.com', 'Qwerty123!')


// God Class
// class OrderManager {
//     async proccessOrder(order) {
//         // 1. Логика оплаты
//         const isPaid = await fetch(`https://halykbank.api/pay`, {
//             body: order.amount
//         })

//         if (isPaid) {
//             // 2. Логика базы
//             database.save(`INSERT INTO orders ...`, order)

//             // 3. Логика уведомления
//             console.log(`Письмо на ${order.email}: Ваш заказ оформлен!`)
//         }
//     }
// }

// class PaymentService {
//     async charge(amount) {
//         const isPaid = await fetch(`https://halykbank.api/pay`, {
//             body: order.amount
//         })
//         return isPaid
//     }
// }

// class OrderRepository {
//     save(order) {
//         database.save(`INSERT INTO orders ...`, order)
//     }
// }

// class EmailService {
//     sendEmail(email, message) {
//         console.log(`Email отправлен на ${email}: ${message}`);
//     }
// }

// class OrderManager {
//     constructor(paymentService, repository, emailService) {
//         this.paymentService = paymentService
//         this.repository = repository
//         this.emailService = emailService
//     }

//     async processOrder() {
//         const isPaid = await this.paymentService.charge(order.amount)
//         if (isPaid) {
//             this.repository.save(order)
//             this.emailService.sendEmail(order.email, "Ваш заказ успешно оплачен!")
//         }
//     }
// }


// class Note {
//     constructor(text, date) {
//         this.text = text;
//         this.date = date;
//     }

//     // Логика форматирования: что если мы захотим выводить заметку в HTML 
//     // или в файл, а не просто в консоль? Придется менять сам класс Note.
//     displayNote() {
//         console.log(`--- ЗАМЕТКА ---`);
//         console.log(`Дата: ${this.date}`);
//         console.log(`Текст: ${this.text}`);
//         console.log(`---------------`);
//     }
// }

// const myNote = new Note("Купить хлеб", "2026-04-22");
// myNote.displayNote();

// 📝 Твоя задача:
// Раздели этот код на два независимых класса:

// Класс Note: должен отвечать только за хранение данных (текст и дата).

// Класс NotePrinter: должен отвечать только за вывод заметки. Он должен принимать объект заметки и печатать его.

// class Note {
//     constructor(text, date) {
//         this.text = text;
//         this.date = date;
//     }
// }

// class ConsolePrinter {
//     print(note) {
//         console.log(`--- ЗАМЕТКА ---`);
//         console.log(`Дата: ${note.date}`);
//         console.log(`Текст: ${note.text}`);
//         console.log(`---------------`);
//     }
// }

// class TelegramPrinter {
//     print(note) {
//         console.log(`Заметка отправлена в Телеграм`);
//         console.log(`Дата: ${note.date}`);
//         console.log(`Текст: ${note.text}`);
//     }
// }

// const note1 = new Note('Заметка 1', '22.04.2026')
// const consolePrinter = new ConsolePrinter()
// const tgPrinter = new TelegramPrinter()

// tgPrinter.print(note1)


// O = Open/Closed Principle

// class DiscountManager {
//     calculate(amount, type) {
//         if (type === 'standard') {
//             return amount * 0.05
//         }
//         else if (type === 'vip') {
//             return amount * 0.1
//         }
//         else if (type === 'premium') {
//             return amount * 0.3
//         }
//     }
// }

// const discountManager = new DiscountManager()

// console.log(discountManager.calculate(10_000, 'vip'))

// class Discount {
//     apply(amount) {
//         throw new Error('Метод apply не реализован!')
//     }
// }

// class StandartDiscount extends Discount {
//     apply(amount) {
//         return amount * 0.05
//     }
// }

// class VipDiscount extends Discount {
//     apply(amount) {
//         return amount * 0.1
//     }
// }

// class PremiumDiscount extends Discount {
//     apply(amount) {
//         return amount * 0.3
//     }
// }

// class DiscountCalculator {
//     calculate(amount, discount) {
//         console.log(`Оригинальная цена: ${amount}, цена со скидкой: ${amount - discount.apply(amount)}`)
//     }
// }

// const standard = new StandartDiscount()
// const vip = new VipDiscount()
// const premium = new PremiumDiscount()

// const discountCalculator = new DiscountCalculator()
// discountCalculator.calculate(10_000, premium)



// 📄 Задача: «Экспорт отчетов»
// Представь, что ты разрабатываешь корпоративную систему. Тебе поручили написать класс,
//  который берет данные отчета и конвертирует их в нужный формат. 
//  Сначала попросили сделать только экспорт в HTML и PDF.

// ❌ Исходный код (с нарушением OCP):
// Разработчик написал вот такой код. Он работает, но нарушает принцип OCP:

// class ReportGenerator {
//   generate(data, format) {
//     if (format === 'html') {
//       console.log(`Генерируем HTML отчет из данных: ${data}`);
//       // Сложная логика генерации HTML...
//     } else if (format === 'pdf') {
//       console.log(`Генерируем PDF отчет из данных: ${data}`);
//       // Сложная логика генерации PDF...
//     } else {
//       throw new Error("Неизвестный формат!");
//     }
//   }
// }

// const report = new ReportGenerator();
// report.generate("Отчет за май", "pdf");

// В чем проблема?
// Завтра начальник придет и скажет: "Нам срочно нужен экспорт в Excel (CSV) и JSON!".
//  Тебе придется лезть внутрь метода generate и дописывать новые else if. 
//  Класс ReportGenerator открыт для модификации, а это нарушение принципа.


// 📝 Твоя цель: Переписать код по OCP
// Сделай так, чтобы при добавлении нового формата (например, CSV),
//  нам вообще не нужно было трогать класс ReportGenerator.

// Шаги для реализации:

// Создай отдельные классы для каждого формата: HtmlExporter и PdfExporter.

// В каждом из них реализуй метод (например, export(data)), 
// который будет выводить нужную строку в консоль.

// Перепиши ReportGenerator так, чтобы метод generate принимал два аргумента: 
// сами данные (data) и готовый объект-экспортер (экземпляр HtmlExporter или PdfExporter).

// Внутри generate просто вызывай метод export() у переданного объекта.

// Для проверки: добавь новый класс CsvExporter и передай его в ReportGenerator,
//  не меняя код самого ReportGenerator.

// class Exporter {
//     export(data) {
//         throw new Error('Метод export не реализован')
//     }
// }

// class HtmlExporter extends Exporter {
//     export(data) {
//         return `HTML Файл готов! <div>${data}</div>`
//     }
// }

// class PdfExporter extends Exporter {
//     export(data) {
//         return `PDF Файл готов! <pdf>${data}</pdf>`
//     }
// }

// class ReportGenerator {
//     generate(data, exporter) {
//         console.log(exporter.export(data))
//     }
// }

// const htmlExporter = new HtmlExporter()
// const pdfExporter = new PdfExporter()

// const reportGenerator = new ReportGenerator()

// reportGenerator.generate('Javascript', pdfExporter)

// L - Liskov Substitution Principle

// class Vehicle {
//     move() {
//         console.log('Мы начали движение!')
//     }
// }

// class MotorizedVehicle extends Vehicle {
//     startEngine() {
//         console.log('Заводим двигатель!')
//     }
// }

// class Car extends MotorizedVehicle {

// }

// class Bus extends MotorizedVehicle {

// }

// class Bicycle extends Vehicle {

// }

// const car1 = new Car()
// car1.startEngine()
// car1.move()

// const bus1 = new Bus()
// bus1.startEngine()
// bus1.move()

// const bicycle1 = new Bicycle()
// bicycle1.move()


// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     setWidth(width) {
//         this.width = width
//     }
//     setHeight(height) {
//         this.height = height
//     }
//     getArea() {
//         return this.width * this.height
//     }
// }

// class Square extends Rectangle {
//     setWidth(width) {
//         this.width = width;
//         this.height = width;
//     }

//     setHeight(height) {
//         this.width = height;
//         this.height = height;
//     }
// }

// const rectangle1 = new Rectangle(10, 20)
// rectangle1.setWidth(5)
// console.log(rectangle1.getArea())

// const square = new Square(20, 20)
// console.log(square)
// square.setWidth(10)
// console.log(square.getArea())


// class Shape {
//     getArea() {
//         throw new Error("Метод должен быть реализован");
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super()
//         this.width = width;
//         this.height = height;
//     }
//     setWidth(width) {
//         this.width = width
//     }
//     setHeight(height) {
//         this.height = height
//     }
//     getArea() { return this.width * this.height; }
// }

// class Square extends Shape {
//     constructor(side) {
//         super()
//         this.side = side;
//     }
//     setSide(side) {
//         this.side = side
//     }
//     getArea() { return this.side * this.side; }
// }

// const rectangle = new Rectangle(10, 20)
// const square = new Square(20)

// console.log(rectangle)
// console.log(square)

// console.log(rectangle.getArea())
// console.log(square.getArea())


// I - Interface Segregation Principle

// interface IPrinter {
//     print(document: string): void
// }

// interface IScanner {
//     scan(document: string): void
// }

// interface IFax {
//     fax(document: string): void
// }

// class BasicPrinter implements IPrinter {
//     print(document: string): void {
//         console.log(`Печатаю: ${document}`);
//     }
// }

// class PrinterWithScanner implements IPrinter, IScanner {
//     print(document: string) {
//         console.log(`Печатаю: ${document}`);
//     }
//     scan(document: string) {
//         console.log(`Сканирую: ${document}`);
//     }
// }

// class MultiFunctionalPrinter implements IPrinter, IScanner, IFax {
//     print(document: string) {
//         console.log(`Печатаю: ${document}`);
//     }
//     scan(document: string) {
//         console.log(`Сканирую: ${document}`);
//     }
//     fax(document: string) {
//         console.log(`Отправляю факс: ${document}`);
//     }
// }

// const printer1 = new MultiFunctionalPrinter()
// printer1.print('123123')
// printer1.scan('123123')
// printer1.fax('123123')


// D - Dependency Inversion Principle
class PaymentProcesser {
    makeTransaction(amount) {
        throw new Error('Метод не реализован')
    }
}

class KaspiPay extends PaymentProcesser{
    makeTransaction(amount) {
        console.log(`Списано ${amount}тг через Kaspi Pay`);
    }
}

class HalykPay extends PaymentProcesser {
    makeTransaction(amount) {
        console.log(`Списано ${amount}тг через Halyk Pay`);
    }
}

class FreedomPay extends PaymentProcesser {
    makeTransaction(amount) {
        console.log(`Списано ${amount}тг через Freedom Pay`);
    }
}

class Store {
    constructor(paymentProcess) {
        this.paymentProcess = paymentProcess
    }

    purchase(amount) {
        this.paymentProcess.makeTransaction(amount)
    }
}

const kaspi = new KaspiPay()
const halyk = new HalykPay()
const freedom = new FreedomPay()

const myStore = new Store(freedom)
myStore.purchase(5000)