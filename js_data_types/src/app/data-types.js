// String
const text = 'My text';

// Number
const digit = 135;

// BigInt
let largeDigit = 9007199254740991n;
largeDigit = BigInt(9007199254740991);

// Boolean
const boolTrue = true;
const boolFalse = false;

// Null
const nullValue = null;

// Undefined
let undefinedValue;

// Symbol
const symbolFirstId = Symbol('id');
const symbolSecondId = Symbol('id');

// Array
const arrayOfNumbers = [1, 2, 3];

// Object
const person = {
    name: 'John',
    speak() {
        console.log(`${this.name} is speaking`);
    }
};
