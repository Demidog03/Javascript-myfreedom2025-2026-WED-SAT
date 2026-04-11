// let todosData = []

// fetch('http://localhost:6767/api/todos').then(response => {
//     return response.json()
// }).then(data => {
//     console.log('todosData меняется')
//     todosData = data
// })

// console.log(todosData)

let todosData = [] // хочу сохранить ответ от асинхронного (запрос)

async function fetchTodos() {
    try {
        const response = await fetch('http://localhost:6767/api/todos')
        const data = await response.json()
        todosData = data
    }
    catch(error) {
        console.log('Ошибка с запросом')
        console.log(error)
    }
    finally {
        console.log('Запрос завершился')
    }
}

await fetchTodos()

console.log(todosData)


try {
    const name = 'Saga'
    name = 'Ais'
}
catch(error) {
    console.log(error)
}

console.log('Дальнейший код')

