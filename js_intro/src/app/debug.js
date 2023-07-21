function factorial(n) {
    // debugger;
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= n - i;
    }
    return result;
}

const input = 5;
const computed = factorial(input);
console.log(`Factorial of ${input} is ${computed}`);
