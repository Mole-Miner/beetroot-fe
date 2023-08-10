function taskInvoker(task) {
    const taskData = [1, 2, 3];
    task(taskData);
}

function task(data) {
    let result = 0;
    for (let item of data) {
        result += item;
    }
    console.log(result);
}

taskInvoker(task);

/*function taskInvoker(task) {
    const taskData = [1, 2, 3];
    return task(taskData);
}

function task(data) {
    let result = 0;
    for (let item of data) {
        result += item;
    }
    return result;
}

const sum = taskInvoker(task);
console.log(sum);*/

/*
const sum = taskInvoker((data) => {
    let result = 0;
    for (let item of data) {
        result += item;
    }
    return result;
});*/
