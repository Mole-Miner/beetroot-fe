/*
Create a working TODO list.
    When clicking “Add”, a new list item is added to the TODO section.
    When clicking the checkbox, the item is moved to the “Completed” field.
    Edit/Delete edits or deletes an item.
*/
const addTodoForm = document.querySelector('form');
const [todoInput, addTodoBtn] = addTodoForm.elements;

const todoList = document.querySelector('#todo-list');
const todos = [];

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInput.value) {
        addTodo(todoInput.value);
        todoInput.value = '';
        renderTodoList();
    }
});

function addTodo(task) {
    // todos.push({ task: task, completed: false });
    todos.push({task, completed: false});
}

// function addTodo(todoTask) {
//     todos.push({ task: todoTask, completed: false });
//     console.log(todos);
// }

function renderTodoList() {
    todos.forEach(({task: todoTask, completed}) => {
        // const { task, completed } = todo;
        // const todoTask = todo.task;
        // const { task: todoTask, completed } = todo;
        const li = document.createElement('li');
        li.textContent = `${todoTask} Completed: ${completed}`;
        todoList.appendChild(li);
    });
}

