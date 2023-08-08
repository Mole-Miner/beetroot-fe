function RNGArray(length) {
    const arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = Math.round(Math.random() * 10);
    }
    return arr;
}

/*Create an array of 10 random numbers and write a few functions for working with it.
    A function takes the array and displays it on the screen.
    A function takes the array and only puts out even elements.
    A function takes the array and returns the sum of all array elements.
    A function takes the array and returns its max element.
    A function for adding a new element to the array via given index.
    A function for removing an element from the array via given index.*/
function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    for (let item of array) {
        console.log(item);
    }
}

function evenNumbers(nums) {
    for (let num of nums) {
        if (!(num % 2)) {
            console.log(num);
        }
    }
}

function numbersSum(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

function maxNumber(nums) {
    let max = nums[0];
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function addElementByIndex(array, index, value) {
    array[index] = value;
}

function removeElementByIndex(array, index) {
    delete array[index];
}

const firstNums = RNGArray(10);
// displayArray(firstNums);
// evenNumbers(firstNums);
// console.log(numbersSum(firstNums));
// console.log(firstNums, maxNumber(firstNums));
/*addElementByIndex(firstNums, 3, 114);
console.log(firstNums);*/
/*removeElementByIndex(firstNums, 3);
console.log(firstNums);*/

/*Create another array of 5 random numbers and write the following functions:
    A function takes 2 arrays and returns a new array with all the elements of those two without repetition.
    A function takes 2 arrays and returns a new array of those elements found in both previous arrays without repetition.
    A function takes 2 arrays and returns a new array of all the elements from the first array that cannot be found in the second one.*/
function combiningElements(firstArr, secondArr) {
    const temp = [...firstArr, ...secondArr];
    const result = [];
    outer: for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp.length; j++) {
            if (temp[i] === temp[j] && i !== j) {
                continue outer;
            }
        }
        result.push(temp[i]);
    }
    return result;
}

/*function combiningElements(firstArr, secondArr) {
    const temp = [...firstArr, ...secondArr];
    const result = [];
    const dict = {};
    for (let item of temp) {
        if (!dict[item]) {
            dict[item] = 1;
            result.push(item);
        }
    }
    return result;
}*/

function intersectionElements(firstArr, secondArr) {
    const result = [];
    const dict = {};
    for (let a of firstArr) {
        for (let b of secondArr) {
            if (!dict[a] && a === b) {
                dict[a] = 1;
                result.push(a);
            }
        }
    }
    return result;
}

function uniqueElements(firstArr, secondArr) {
    const result = [];
    const dict = {};
    outer: for (let a of firstArr) {
        for (let b of secondArr) {
            if (a === b) {
                continue outer;
            }
        }
        if (!dict[a]) {
            dict[a] = 1;
            result.push(a);
        }
    }
    return result;
}

const secondNums = RNGArray(5);
console.log(firstNums, secondNums, combiningElements(firstNums, secondNums));
// console.log(firstNums, secondNums, intersectionElements(firstNums, secondNums));
// console.log(firstNums, secondNums, uniqueElements(firstNums, secondNums));
