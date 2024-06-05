function calculator(operation, num1, num2) {
    let result;

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed';
            }
            break;
        default:
            return 'Error: Invalid operation';
    }

    return `The result is ${result}`;
}

console.log(calculator('add', 5, 3));       // Outputs: The result is 8
console.log(calculator('subtract', 5, 3));  // Outputs: The result is 2
console.log(calculator('multiply', 5, 3));  // Outputs: The result is 15
console.log(calculator('divide', 5, 3));    // Outputs: The result is 1.6666666666666667
console.log(calculator('divide', 5, 0));    // Outputs: Error: Division by zero is not allowed
console.log(calculator('mod', 5, 3));       // Outputs: Error: Invalid operation