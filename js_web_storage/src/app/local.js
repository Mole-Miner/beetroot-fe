const user = {
    firstname: 'User 1',
    lastname: 'User 1',
}

localStorage.setItem('user', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user')));
