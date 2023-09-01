class User {
    name;

    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(this.name + ' is walking')
    }
}

const user = new User('Dima');
/*user.walk();
console.log(user instanceof User);*/






/*
class Employee {
    firstname;
    lastname;
    _age;

    set age(value) {
        if (value > 50) {
            console.error('This employee too old');
            return;
        }
        this._age = value;
    }

    get age() {
        if (!this._age) {
            return 0;
        }
        return this._age;
    }

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    work() {
        console.log(`${this.firstname} is working...`);
    }
}

const john = new Employee('john', 'doe');
// const employee = new Employee;

const liza = new Employee('liza', 'doe');
/!*console.log(john.firstname, liza.firstname);*!/

/!*console.log(john instanceof Employee);*!/

/!*john.work();
liza.work();*!/
/!*john.age = 30;
console.log(john.age);*!/
*/
