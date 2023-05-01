// Write a program to verify if a number is prime or not

// Prime number is divisible by 1 and itself

// Write a function, name it verify prime number that will accept number as a parameter
function verifyPrimeNumber(number) {

    // Declare a variable call counter to get the count of all numbers that are divisible by user input number
    // Since prime number are divisible 1 and itself. Prime counter should be equal to 2
    // Initializing counter variable to 0
    let counter = 0;

    // Since 1 is neither prime or composite number
    // Check if the number supply is equal to 1
    if (number === 1) {
        return number + " is neither prime or composite number";
    } else if (number > 1) {
        // All prime numbers must be greater than 1
        // Iterate through that number from 1 to number
        for (let i = 1; i <= number; i++) {
            // Use all numbers from 1 to user input number to divide number if the remainder is 0
            if (number % i === 0){
                // Increment the counter by 1
                counter++;
            }
        }
    // Numbers less than one or negative numbers are not prime number
    // Reason for this else condition
    } else {
        return number + " is not a prime number";
    }
    
    // Counter must be 2 for a number to be prime number (number divisible by itself and 1)
    if (counter === 2) {
        return number + " is a prime number";
    } else {
        return number + " is not a prime number";
    }
}

// To print on the terminal because we use return in the function
console.log(verifyPrimeNumber(237));