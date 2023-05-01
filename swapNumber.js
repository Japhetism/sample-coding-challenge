// Write a program to swap two numbers without using a temp variable

// Write a function, name it swap number that will accept two numbers as parameters

function swapNumber(number1, number2) {
    // Sum the two numbers
    number1 = number1 + number2; // 10 + 5

    // Subtract number2 from number1
    number2 = number1 - number2; // 15 - 5

    // Subtract swapped number2 from number 1
    number1 = number1 - number2; // 15 - 10

    // Return the swapped numbers
    return "Swapped numbers are number1 = " + number1 + " and number2 = " + number2; 
}

// To print on the terminal because we use return in the function
console.log(swapNumber(60, 72));