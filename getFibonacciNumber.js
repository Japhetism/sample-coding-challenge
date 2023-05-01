// Write a program to get nth Fibonacci number

// Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

// Write a function, name it get nth Fibonacci number that will accept number as a parameter

/**
 *  Implementation
 *  1. Check if the given number is 0 then return first number
 *  else  if it is 1, return second number
 *  2. If the number is greater than 2, then iterate the given number
 *  and add it with it with its previous number and store the previous number
 * @param {*} number 
 */
function getNthFibonacciNumber(number) {
    // Initialization of the first and second number
    let firstNumber = 0;
    let secondNumber = 1;

    // Initialize the sum to be 0
    let sum = 0;

    // Iterate the given number
    for (let i = 2; i <= number; i++) {
        // Sum the last two numbers
        sum = firstNumber + secondNumber;

        // Assign the last value to the first
        firstNumber = secondNumber;

        // Assign the sum to the last number
        secondNumber = sum;
    }

    // If the number is 0 return first number else return second number
    if (number) {
        return secondNumber;
    } else {
        return firstNumber;
    }

}

// To print on the terminal because we use return in the function
console.log(getNthFibonacciNumber(8));