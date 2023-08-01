/*
Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18),
an adult (19-60) or a senior citizen (60– ...). Print the result to the webpage as a paragraph.
*/
function userAge() {
    const age = +prompt('Enter age');
    if (age < 3) {
        console.log('Infant');
    } else if (age < 12) {
        console.log('Child');
    } else if (age < 19) {
        console.log('Teen');
    } else if (age < 61) {
        console.log('Adult');
    } else {
        console.log('Senior');
    }
}

// userAge();

/*
Ask a user 3 questions, each with 3 answer options. The user gets 2 points for each correct answer.
Show the earned points after the test.
*/
function questions() {
    let score = 0;
    const increase = 2;

    const firstAnswer = prompt('Capital of Austria?');
    if (firstAnswer === 'Vienna') {
        score += increase;
    }

    const secondAnswer = prompt('Capital of Canada?');
    if (secondAnswer === 'Ottawa') {
        score += increase;
    }

    const thirdAnswer = prompt('Capital of Australia?');
    if (thirdAnswer === 'Canberra') {
        score += increase;
    }

    console.log(`Your score: ${score}`);
}

// questions();

/*
Request a number from a user, and define whether it is positive, negative, or zero.
Display a resulting message as an alert.
*/
function analyzeNumber() {
    const input = +prompt('Enter number');
    if (input > 0) {
        alert('Positive');
    } else if (input < 0) {
        alert('Negative');
    } else {
        alert('Zero');
    }
}

analyzeNumber();
