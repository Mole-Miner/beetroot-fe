/*
Create a working TODO list.
    When clicking “Add”, a new list item is added to the TODO section.
    When clicking the checkbox, the item is moved to the “Completed” field.
    Edit/Delete edits or deletes an item.
*/
const todosService = {
    count: 0,
    todos: [],
    createTodo(task) {
        const todo = {id: ++this.count, task, completed: false};
        this.todos.push(todo);
        return todo;
    },
    updateTodo(data) {
        const target = this.todos.find((todo) => todo.id === data.id);
        if (target) {
            target.task = data.task;
            target.completed = data.completed;
        }
    },
    deleteTodo(todoId) {
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
    }
}

function TodoForm() {
    const formData = {
        todo: null,
        action: 'create'
    }

    const form = document.createElement('form');

    const input = document.createElement('input');
    input.type = 'text';

    const createButton = document.createElement('button');
    createButton.textContent = 'Create';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';

    form.append(input, createButton);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formData.action = 'create';
        if (input.value) {
            if (formData.action === 'create') {
                const todo = todosService.createTodo(input.value);
                todoList.addListItem(todo);
            } else {

                // todosService.updateTodo()
            }
            form.reset();
        }
    });

    function setForm(todo) {
        formData.action = 'Update';
        formData.todo = todo;
        input.value = formData.todo.task;
        form.replaceChild(saveButton, createButton);
        console.log(formData);
    }

    return {
        setForm,
        view: form
    };
}

const todoForm = TodoForm();
document.body.appendChild(todoForm.view);

function TodoListItem(todo) {
    const div = document.createElement('div');
    div.innerText = `${todo.id} ${todo.task}`;

    const input = document.createElement('input');
    input.type = 'checkbox';

    const remove = document.createElement('button');
    remove.textContent = 'Delete';
    remove.addEventListener('click', () => {
        todosService.deleteTodo(todo.id);
        todoList.deleteListItem(div);
    });

    const update = document.createElement('button');
    update.textContent = 'Update';
    update.addEventListener('click', () => {
        todoForm.setForm(todo);
    });

    div.append(input, update, remove);
    return div;
}

function TodoList() {
    const section = document.createElement('section');
    section.style.width = '400px';

    function addListItem(todo) {
        section.appendChild(TodoListItem(todo));
    }

    function updateListItem(todo, newListItem, oldListItem) {
        section.replaceChild(newListItem, oldListItem);
    }

    function deleteListItem(listItem) {
        section.removeChild(listItem);
    }

    return {
        addListItem,
        updateListItem,
        deleteListItem,
        view: section
    };
}

const todoList = TodoList();
document.body.appendChild(todoList.view);

