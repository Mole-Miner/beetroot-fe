const nums = [34, 11, 11, 45, 64];

nums.forEach((num, index, array) => {
    console.log(num, index, array);
});

const mappedNums = nums.map((num) => num ** 2);
console.log(nums, mappedNums);

const foundNum = nums.find((num) => num === 11);
console.log(foundNum);

const filteredNums = nums.filter((num) => num > 20);
console.log(filteredNums);

const concatedNums = nums.concat([98, 101, 17]);
console.log(concatedNums);

let includesNum = nums.includes(11);
console.log(includesNum);
includesNum = nums.includes(11, 3);
console.log(includesNum)

const everyNums = nums.every((num) => num > 34);
console.log(everyNums);

const someNums = nums.some((num) => num < 34);
console.log(someNums);

const indexOfNum = nums.indexOf(11, 1);
console.log(indexOfNum);

const lastIndexOfNum = nums.lastIndexOf(11, 2);
console.log(lastIndexOfNum);

nums.reverse();
console.log(nums);

const joinedNums = nums.join(' | ');
console.log(joinedNums);
