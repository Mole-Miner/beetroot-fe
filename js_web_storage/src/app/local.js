/*const user = {
    firstname: 'User 1',
    lastname: 'User 1',
}

localStorage.setItem('user', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user')));*/

const users = [
    {
        firstname: 'User 1',
        lastname: 'User 1',
    },
    {
        firstname: 'User 2',
        lastname: 'User 2',
    }
];

localStorage.setItem('users', JSON.stringify(users));
console.log(JSON.parse(localStorage.getItem('users')));
