const assert = require('assert');

function testAdd() {
    let result = calculator('add', 5, 3);
    assert.strictEqual(result, 'The result is 8');
}

function testSubtract() {
    let result = calculator('subtract', 5, 3);
    assert.strictEqual(result, 'The result is 2');
}

function testMultiply() {
    let result = calculator('multiply', 5, 3);
    assert.strictEqual(result, 'The result is 15');
}

function testDivide() {
    let result = calculator('divide', 5, 3);
    assert.strictEqual(result, 'The result is 1.6666666666666667');
}

function testDivideByZero() {
    let result = calculator('divide', 5, 0);
    assert.strictEqual(result, 'Error: Division by zero is not allowed');
}

function testInvalidOperation() {
    let result = calculator('mod', 5, 3);
    assert.strictEqual(result, 'Error: Invalid operation');
}

// Run the tests
testAdd();
testSubtract();
testMultiply();
testDivide();
testDivideByZero();
testInvalidOperation();