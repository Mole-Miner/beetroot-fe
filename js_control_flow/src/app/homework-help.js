// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у
// користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір,
// поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


// 0 .. 100

// 50 > 76 || 50 < 76 || 50 === 76

// 50 .. 100

// 75 .. 100

// 0 .25. 50

// 0  12

function guess() {
    let userInput;
    let start = 0, end = 100, middle;

    while (true) {
        middle = Math.floor((start + end) / 2);
        userInput = prompt(`Is your number ${middle}. Enter y, g, l.`);
        if (userInput === 'y') {
            console.log('Guessed');
            break;
        }
        if (userInput === 'l') {
            end = middle;
        }
        if (userInput === 'g') {
            start = middle;
        }
    }
}

// guess();
