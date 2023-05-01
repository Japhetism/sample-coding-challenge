// Find all prime factors of a number

// Prime factor is a natural number other than 1 whose only factors are 1 and itself

// Write a function, name it get prime factors that will accept number as a parameter
function getPrimeFactors(number) {

    // Declare an array variable to save all the prime factor
    let factors = [];

    // Since 1 is neither a prime or composite number
    // We  start diving from 2
    // Declare a divisor variable to be 2
    let divisor = 2;

    // Iterate through the number using while loop
    while (number >= 2) {
        // Check that number divided by the divisor does not have a remainder
        if (number % divisor === 0) {
            // Add the divisor into factors array using array.push method
            factors.push(divisor);

            // Divide number by the divisor to get the next prime factor
            number = number / divisor;
        } else {
            // Increment the divisor by 1
            divisor++;
        }
    }
    // return all the gotten prime factors
    return factors;
}

// To print on the terminal because we use return in the function
console.log(getPrimeFactors(69));