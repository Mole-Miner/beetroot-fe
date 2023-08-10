function RNGArray(length) {
    return Array.from({length}, () => Math.round(Math.random() * 10));
}

/*Create an array of 10 random numbers and write a few functions for working with it.
    A function takes the array and displays it on the screen.
    A function takes the array and only puts out even elements.
    A function takes the array and returns the sum of all array elements.
    A function takes the array and returns its max element.
    A function for adding a new element to the array via given index.
    A function for removing an element from the array via given index.*/
function displayArray(array) {
    array.forEach((item) => console.log(item));
}

function displayEvenNumbers(nums) {
    nums.filter((num) => !(num % 2)).forEach((num) => console.log(num));
}

function numbersSum(nums) {
    return nums.reduce((acc, curr) => acc + curr);
}

function maxNumber(nums) {
    return nums.reduce((acc, curr) => Math.max(acc, curr));
}

function addValueByIndex(array, index, value) {
    array.splice(index, 1, value);
}

function removeValueByIndex(array, index) {
    array.splice(index, 1);
}

const firstNums = RNGArray(10);

/*Create another array of 5 random numbers and write the following functions:
    A function takes 2 arrays and returns a new array with all the elements of those two without repetition.
    A function takes 2 arrays and returns a new array of those elements found in both previous arrays without repetition.
    A function takes 2 arrays and returns a new array of all the elements from the first array that cannot be found in the second one.*/
function combinationArray(firstArr, secondArr) {
    return [...firstArr, ...secondArr].filter((value, i, array) => i === array.lastIndexOf(value));
}

/*function combinationArray(firstArr, secondArr) {
    return new Set([...firstArr, ...secondArr]);
}*/

function intersectionArray(firstArr, secondArr) {
    return firstArr
        .filter((value) => secondArr.includes(value))
        .filter((value, i, array) => i === array.lastIndexOf(value));
}

function uniqueArray(firstArray, secondArray) {
    return firstArray
        .filter((value) => !secondArray.includes(value))
        .filter((value, i, array) => i === array.lastIndexOf(value));
}

const secondNums = RNGArray(5);
// console.log(firstNums, secondNums, combinationArray(firstNums, secondNums));
// console.log(firstNums, secondNums, intersectionArray(firstNums, secondNums));
// console.log(firstNums, secondNums, uniqueArray(firstNums, secondNums));
