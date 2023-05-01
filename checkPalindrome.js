// Write a program to check if a string or word is palindrome

// Palindrome is a word or a phrase or a sequence that reads the same backwards as forwards

// Write a function, name it is palindrome that will accept a string as a parameter
function isPalindrome(str) {
    // Declare a variable to store the reversed string
    let strRev = "";

    // Iterate through the string starting from the string length - 1
    for (let i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }

    // Check if the input string and the reversed string are the same return true else return false
    if (str === strRev) {
        return true;
    } else {
        return false;
    }
}

// To print on the terminal because we use return in the function
console.log(isPalindrome("madam"));