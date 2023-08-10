let todos = [
    {
        title: 'Todo 1',
        task: 'Todo smth 1',
        count: 3,
        completed: false
    },
    {
        title: 'Todo 2',
        task: 'Todo smth 2',
        count: 4,
        completed: true
    },
    {
        title: 'Todo 3',
        task: 'Todo smth 3',
        count: 5,
        completed: false
    },
    {
        title: 'Todo 4',
        task: 'Todo smth 4',
        count: 2,
        completed: true
    }
];

/*
Мінімум
Функція виводить спочатку завершені тудушки, а потім не завершені.
Функція приймає назву тудушки і відзначає її як завершену.*/
function displayTodos() {
    function displayTodosByCompletion(todoCompleted) {
        todos
            .filter((todo) => todo.completed === todoCompleted)
            .forEach((todo) => console.log(todo));
    }
    displayTodosByCompletion(true);
    displayTodosByCompletion(false);
}

// displayTodos();

function updateTodoStatus(todoTitle) {
    const todo = todos.find((todo) => todo.title === todoTitle);
    if (todo) {
        todo.completed = true;
    }
}

// updateTodoStatus('Todo 1');

/*Норма

Видалення туду зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому туду, що ми шукаємо, буде відсутнім)
Додавання туду в список. Враховуй, що при додаванні туду з уже існуючим в списку туду, необхідно збільшувати кількість в існуючих туду, а не додавати нову.*/
function removeTodo(todoTitle) {
    todos = todos.filter((todo) => todo.title !== todoTitle);
}

// removeTodo('Todo 1');

function addTodo(newTodo) {
    const todoExist = todos.find((todo) => todo.title === newTodo.title);
    if (todoExist) {
        todoExist.count += 1;
    } else {
        todos.push(newTodo);
    }
}

// new todo
/*addTodo({
    title: 'Todo 5',
    task: 'Todo smth 5',
    count: 6,
    completed: false,
});*/
// todo with title 4 already exist
/*addTodo({
    title: 'Todo 4',
    task: 'Todo smth 4',
    count: 10,
    completed: true,
});*/

/*Максимум
Підрахунок суми всіх туду (враховуючи кількість кожного) в списку.
Підрахунок суми всіх (не) виконаних туду.
Показати туду в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)*/
function countAllTodos() {
    return todos.reduce((acc, todo) => acc + todo.count, 0);
}

// console.log(countAllTodos());

function countTodosByCompletion(todoCompleted) {
    return todos
        .filter((todo) => todo.completed === todoCompleted)
        .reduce((acc, todo) => acc + todo.count, 0);
}

function displayTodosByCount(dsc = false) {
    todos.sort((a, b) => dsc ? b.count - a.count : a.count - b.count);
    console.log(todos);
}

// console.log(countTodosByCompletion(false));
// console.log(countTodosByCompletion(true));
// displayTodosByCount(true);
