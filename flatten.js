// Function for comparing if two arrays are identical
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || typeof(array1[i]) !== typeof(array2[i])) {
      return false;
    }
  }
  return true;
};

//function to asserting that a test array matches the result
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🥳🥳💚Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//function for flattening multiple arrays
const flatten = function(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j ++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
