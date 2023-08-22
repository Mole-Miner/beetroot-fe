const todosService = {
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
    createTodo(data) {
        let id = this.getId();
        const todo = {id: id++, task: data.task, completed: false};
        const todos = this.getTodos();
        todos.push(todo);
        this.setTodos(todos);
        this.setId(id);
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
};

/*todosService.setTodos([]);
todosService.setId(1);*/
/*todosService.createTodo({task: 'Buy milk'});
todosService.createTodo({task: 'Buy potato'});*/
// todosService.deleteTodo(7);
todosService.updateTodo(2, {task: 'Buy carrot'});
console.log(todosService.getTodos());
