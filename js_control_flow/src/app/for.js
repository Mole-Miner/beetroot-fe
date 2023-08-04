// debugger;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// for (let i = 0; i < 5; i++)
//     console.log(i);
//
// for (let i = 0; i < 5; i++) console.log(i);

// debugger;
myLoop: for (let i = 0; i < 7; i++) {
    if (i === 2) {
        continue myLoop;
    }
    if (i === 4) {
        break myLoop;
    }
    console.log(i);
}

/*for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++)
    console.log(i);

for (let i = 0; i < 5; i++) console.log(i);*/

/*for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    } else if (i === 4) {
        break;
    }
    console.log(`Counter: ${i}`);
}*/

/*for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 3) {
            continue;
        } else if (j === 4) {
            break;
        }
        console.log(`${i} ${j}`);
    }
}*/

/*let counter = 0;
for (;counter < 5; counter++) {
    console.log(counter);
}*/

/*
for (;;) {}
for (let i = 0;;i++) {}*/

/*outer: for(let i = 0; i < 5; i++) {
    debugger;
    inner: for(let j = 0; j < 5; j++) {
        if (j === 2) {
            continue outer;
        } else if (i === 3) {
            break inner;
        }
        console.log(`${i} ${j}`);
    }
}*/
