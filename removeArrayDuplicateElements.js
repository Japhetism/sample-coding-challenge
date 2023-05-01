// Write a program to remove duplicate members or elements from an array

// Duplicate members or elements are elements that exist at least twice in an array

// Write a function, name it remove array duplicate members that will accept array as a parameter
function removeArrayDuplicateMembers(arr) {
    // Declare array to store unique elements
    let uniqueElements = [];

    // Iterate through the array elements
    for (let i = 0; i < arr.length; i++) {
        
        // Store the current array element
        let currentElement = arr[i];

        // Check that the current array element does not exist in the unique array elements using array.indexOf method
        // If the indexOf is -1, the array element does not exist
        // else the array element exist
        if (uniqueElements.indexOf(currentElement) === -1) {
            // If it does not exist, add it to the unique array elements
            uniqueElements.push(currentElement);
        }
    }

    // Return the unique elements array
    return uniqueElements;
}

// To print on the terminal because we use return in the function
console.log(removeArrayDuplicateMembers([1, 3, 3, 3, 3, 1, 5, 6, 7, 8, 1]));