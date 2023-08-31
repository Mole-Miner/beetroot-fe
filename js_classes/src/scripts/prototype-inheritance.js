const user = {
    name: 'Default',
    talk() {
        console.log(this.name + ' is talking');
    }
}

/*const dima = {
    name: 'Dima',
}*/

const dima = Object.create(user, {name: {value: 'Dima'}});
/*dima.name = 'Dima';*/
console.log(dima);

/*Object.setPrototypeOf(dima, user);
console.log(Object.getPrototypeOf(dima));*/
dima.talk();

/*
class Dima extends User {}
*/
















/*
const human = {
    name: 'Human',
    talk() {
        console.log(this.name + ' is talking');
    }
};

// console.log(human);

/!*console.log(human)
human.talk();*!/

const liza = {
    name: 'Liza',
    __proto__: human
}

/!*const liza = {
    name: 'Liza'
};
Object.setPrototypeOf(liza, human);*!/
// const liza = Object.create(human, { name: {value: 'Liza'} });
// console.log(liza);
/!*liza.talk();*!/
*/
