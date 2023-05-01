// Write a program to reverse a string

// Write a function, name it string reversal that will accept a string as a parameter

function stringReversal(str) {

    // Declare a variable to store the reversed string
    let strRev = "";

    // A string is also in form of an array
    // Iterate through the string starting from the string length
    // Looping through an array make use of index which is 1 shorter than the array length
    // Because index always start from 0 while length is from 1
    for (let i = str.length - 1; i >= 0; i--) {

        // Concatenate the string element to the strRev variable declared above
        strRev += str[i];
    }

    // Return the reversed string
    return strRev;
}

// To print on the terminal because we use return in the function
console.log(stringReversal("you are a nice dude"));