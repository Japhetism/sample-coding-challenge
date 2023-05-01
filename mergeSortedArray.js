// Write a program to merge two sorted array

// Write a function, name it merge sorted array that will accept two arrays (arr1, arr2) as parameters
function mergeSortedArray(arr1, arr2) {
    // Iterate through arr2 and store all arr2 elements into arr1
    for (let i = 0;  i < arr2.length; i++) {
        // add arr2 element into arr1
        arr1.push(arr2[i]);
    }

    // Sort arr1 because it holds the result
    let sortedArray = arr1.sort((a, b) => { return a - b });

    // Return sorted array
    return sortedArray;
}

// To print on the terminal because we use return in the function
console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]));