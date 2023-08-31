class Shape {
    perimeter() {}
}

class Rectangle extends Shape {
    width;
    height;
}

class Circle extends Shape {
    r;
}

/*class Human {
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
}*/

/*const liza = new Liza('Liza', 'Liza lastname', 'super studio');
liza.talk();
liza.sing();
liza.eat();
const alex = new Alex('Alex', 'Alex lastname');
alex.talk();
alex.work();
alex.eat();*/
