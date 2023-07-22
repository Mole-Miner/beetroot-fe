const a = 10;
const b = 12;
const c = 8;

// &&
console.log(true && false);

// ||
console.log(false || true);

// !
console.log(!(false && false));

const greaterThanC = (a - b) > c;
const lessThanB = (a + c) > b;

const and = greaterThanC && lessThanB;
const or = greaterThanC || lessThanB;
const not = !(greaterThanC && lessThanB);

console.log(`&& ${and}\n|| ${or}\n! ${not}`);
