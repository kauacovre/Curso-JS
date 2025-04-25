// Basic Calculator Code

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Example usage
console.log("Addition: " + add(5, 3));       // Output: 8
console.log("Subtraction: " + subtract(5, 3)); // Output: 2
console.log("Multiplication: " + multiply(5, 3)); // Output: 15
console.log("Division: " + divide(5, 3));     // Output: 1.666...