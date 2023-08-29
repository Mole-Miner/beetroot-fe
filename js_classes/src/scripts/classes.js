/*class Employee {
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

/!*john.work();
liza.work();*!/
/!*john.age = 30;
console.log(john.age);*!/*/

class Human {
    firstname;
    lastname;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    talk() {
        console.log(`${this.firstname} ${this.lastname} is talking`);
    }

    eat() {
        console.log(`${this.firstname} ${this.lastname} is eating`);
    }
}

class Liza extends Human {
    studio;

    constructor(firstname, lastname, studio) {
        super(firstname, lastname);
        this.studio = studio;
    }

    sing() {
        console.log(this.firstname + ' is singing in ' + this.studio);
    }

    eat() {
        console.log(`${this.firstname} ${this.lastname} is vegetarian`);
    }
}

class Alex extends Human {
    work() {
        console.log(this.firstname + ' is working');
    }
}

const liza = new Liza('Liza', 'Liza lastname', 'super studio');
liza.talk();
liza.sing();
liza.eat();
const alex = new Alex('Alex', 'Alex lastname');
alex.talk();
alex.work();
alex.eat();
