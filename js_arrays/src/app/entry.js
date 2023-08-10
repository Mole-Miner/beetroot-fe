const users = ['John', 'Liza', 'Leon', 'Lucy'];
let usersLength = users.length;
console.log(users, usersLength);

usersLength = users.push('Dima');
console.log(users, usersLength);

usersLength = users.push('Viktor', 'Lilia');
console.log(users, usersLength);

let lastUser = users.pop();
console.log(lastUser, users, users.length);

lastUser = users.pop();
console.log(lastUser, users, users.length);

lastUser = users.pop();
console.log(lastUser, users, users.length);

usersLength = users.unshift('Dima');
console.log(users, usersLength);

usersLength = users.unshift('Viktor', 'Lilia');
console.log(users, usersLength);

let firstUser = users.shift();
console.log(firstUser, users, users.length);

firstUser = users.shift();
console.log(firstUser, users, users.length);

firstUser = users.shift();
console.log(firstUser, users, users.length);
