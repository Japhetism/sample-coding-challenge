// Write a program to find the greatest common divisor

// The greatest common divisor of any two numbers which are not all zero,
// is the largest positive number that divides each of the given numbers

// Write a function, name it greatest common divisor that will accept two numbers as a parameter
function greatestCommonDivisor(number1, number2) {

    // Declare a variable to save the greatest common divisor
    let gcd;
    
    // Loop through from 1 to number1 and number2
    for (let i = 1; i <= number1 && i <=number2; i++) {

        // Check if i is factor of both numbers
        if (number1 % i === 0 && number2 % i === 0) {
            // The last common divisor is the greatest common divisor for the two numbers
            gcd = i;
        }
    }

    // Return gcd
    return gcd;
}

// To print on the terminal because we use return in the function
console.log(greatestCommonDivisor(60, 72));