const user = {
    firstname: 'User name',
    lastname: 'User lastname'
};

/*for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}*/

/*if ('firstname' in user) {
    console.log(user.firstname, user['firstname']);
}*/

/*const userCopy = {};
for (let key in user) {
    userCopy[key] = user[key];
}
console.log(userCopy);*/

const userCopy = {...user};
console.log(userCopy);
