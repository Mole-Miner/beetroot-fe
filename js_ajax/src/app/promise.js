import '@scss/styles.scss';

/*
console.log('1');
console.log('2');
console.log('3');
*/

/*console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');*/

/*const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rnd = Math.round(Math.random() * 100 + 1);
        if (rnd < 50) {
            resolve([
                {
                    firstname: `User ${rnd} firstname`,
                    lastname: `User ${rnd} lastname`,
                }
            ]);
        } else {
            reject(`Error ${rnd}`);
        }
    }, 2000);
});*/

/*task
    .then((data) => {
       console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Finalize');
    });*/

/*Promise
    .resolve([{
        firstname: `User firstname`,
        lastname: `User lastname`,
    }])
    .then((data) => {
       console.log(data);
    })
    .finally(() => {
        console.log('Finalize');
    });*/

/*Promise
    .reject('Some error')
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Finalize');
    });*/

/*async function handleTask() {
    try {
        const data = await task;
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Finalize');
    }
}

handleTask();*/

/*function task() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.round(Math.random() * 100 + 1);
            if (rnd >= 50) {
                resolve([
                    {
                        firstname: `User ${rnd} firstname`,
                        lastname: `User ${rnd} lastname`,
                    }
                ]);
            } else {
                reject(`Error ${rnd}`);
            }
        }, 2000);
    });
}*/

/*Promise
    .all([task(), task()])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Finalize');
    });*/

/*Promise
    .allSettled([task(), task()])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Finalize');
    });*/

/*async function handleMultipleTasks() {
    try {
        // const [data1, data2] = await Promise.all([task(), task()]);
        const [data1, data2] = await Promise.allSettled([task(), task()]);
        console.log(data1, data2);
    } catch (err) {
        console.log(err);
    }
}

handleMultipleTasks();*/
