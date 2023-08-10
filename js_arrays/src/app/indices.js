const users = [];

users[0] = 'John';
console.log(users);

users[1] = 'Alex';
console.log(users);

users[2] = 'Steve';
console.log(users);

users[3] = 'Leon';
console.log(users);

console.log(users[0], users[1], users[3], users[users.length - 1]);
console.log(users.at(0), users.at(1), users.at(3), users.at(-1));

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

for (let user of users) {
    console.log(user);
}

for (let key in users) {
    console.log(key);
}
