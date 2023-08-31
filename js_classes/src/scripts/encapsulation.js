class User {
    get isAdult() {
        return this._age > 18;
    }

    constructor(age) {
        this._age = age;
    }

    grow() {
        this._age++;
    }
}

const dima = new User(17);
const john = new User(25);
/*console.log(dima._age);
// dima.grow();
console.log(john._age);

if (dima.isAdult) {
    console.log('allow');
}

if (john.isAdult) {
    console.log('allow');
}*/
