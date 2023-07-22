/*
* Request a three-digit number from a user and display it backward.
* You will need the % operator (the remainder in division) for this task.
* */
function threeDigitBackward() {
    const input = +prompt('Enter three digit number');
    const dozens = input % 100;
    const lastDigit = dozens % 10;
    const firstDigit = (input - dozens) / 100;
    const middleDigit = (dozens - lastDigit) / 10;
    console.log(+`${lastDigit}${middleDigit}${firstDigit}`);
}

// threeDigitBackward();

/*
* Request current time from a user (hh:mm),
* and display how many hours and minutes are left until tomorrow.
* */
function timeUntilTomorrow() {
    const hours = +prompt('Enter hours');
    const minutes = +prompt('Enter minutes');
    const hoursLimit = 23;
    const minutesLimit = 60;
    const remainHours = hoursLimit - hours;
    const remainMinutes = minutesLimit - minutes;
    console.log(`Current time: ${hours}:${minutes}\nTime left until tomorrow: ${remainHours}:${remainMinutes}`);
}

// timeUntilTomorrow();

/*
* Request a three-digit number from a user and type out its second digit.
* Use the % operator (the remainder in division) for this task.
* */
function threeDigitMiddle() {
    const input = +prompt('Enter three digit number');
    const dozens = input % 100;
    const lastDigit = dozens % 10;
    const middleDigit = (dozens - lastDigit) / 10;
    console.log(`Your number: ${input}\nSecond digit: ${middleDigit}`);
}

// threeDigitMiddle();

/*
* Request a five-digit number from a user and move the last digit to the beginning
* (so if the user typed in 12345, the result should be 51234)
* */
function moveLastDigit() {
    const input = +prompt('Enter five digit number');
    const dozens = input / 10;
    const lastDigit = input % 10;
    const inputWithoutUnits = dozens - lastDigit / 10;
    const modifiedInput = +`${lastDigit}${inputWithoutUnits}`;
    console.log(`Your number: ${input}\nModified number: ${modifiedInput}`);
}

// moveLastDigit();

/*
* Request a year from a user and check whether it is a leap year.
* A leap year is either divisible by 400 or by 4, and not divisible by 100.
* */
function isLeapYear() {
    const input = +prompt('Enter year');
    const isLeap = input % 400 === 0 || (input % 4 === 0 && input % 100 !== 0);
    console.log(isLeap);
}

// isLeapYear();
