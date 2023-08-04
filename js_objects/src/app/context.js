/*const user = {
    firstname: 'John',
    talks: function () {
        console.log(`${this.firstname} talks`);
    }
}
user.talks();*/

/*const user = {
    firstname: 'John',
    talks() {
        console.log(`${this.firstname} talks`);
    }
}
user.talks();*/

/*const user = {
    firstname: 'John',
    talks: () => {
        console.log(`${this.firstname} talks`)
    }
}
user.talks();
const talks = user.talks.bind({firstname: 'Carl'});
talks();*/

/*function getUserFirstName(user) {
    console.log(user.firstname);
}*/

const user = {
    firstname: 'John',
    lastname: 'Wick'
}

/*function userFullName() {
    console.log(this.firstname, this.lastname);
}

user['fullName'] = userFullName.bind(user);
user.fullName();*/

// function userFullName(firstProperty, secondProperty) {
//     console.log(this[firstProperty], this[secondProperty]);
// }
//
// userFullName.call(user, 'firstname', 'lastname');

// function userFullName(firstProperty, secondProperty) {
//     console.log(this[firstProperty], this[secondProperty]);
// }
//
// userFullName.apply(user, ['firstname', 'lastname']);
