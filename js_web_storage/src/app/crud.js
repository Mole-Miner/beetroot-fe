const todoService = {
    idKey: 'id',
    todosKey: 'todos',
    setId(id) {
        localStorage.setItem(this.idKey, JSON.stringify(id));
    },
    setTodos(todos) {
        localStorage.setItem(this.todosKey, JSON.stringify(todos));
    },
    getId() {
        return JSON.parse(localStorage.getItem(this.idKey));
    },
    getTodos() {
        return JSON.parse(localStorage.getItem(this.todosKey));
    },
    init() {
        this.setId(0);
        this.setTodos([]);
    },
    createTodo(data) {
        let id = this.getId();
        const todos = this.getTodos();
        todos.push({id: ++id, task: data.task, completed: false});
        this.setId(id);
        this.setTodos(todos);
    },
    updateTodo(id, data) {
        const todos = this.getTodos();
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) {
            return;
        }
        const todoIndex = todos.indexOf(todo);
        todos.splice(todoIndex, 1, {...todo, ...data});
        this.setTodos(todos);
    },
    deleteTodo(id) {
        let todos = this.getTodos();
        todos = todos.filter((todo) => todo.id !== id);
        this.setTodos(todos);
    }
}

todoService.init();
todoService.createTodo({task: 'Buy milk'});
todoService.createTodo({task: 'Buy cheese'});
todoService.updateTodo(1, {completed: true});
todoService.updateTodo(2, {task: 'Buy carrot'});
todoService.deleteTodo(1);
console.log(todoService.getTodos());
