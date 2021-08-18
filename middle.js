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

//function to find the middle index of an array
//could split into multiple functions (isEven and middle and midIndex)
const middle = function(array) {
  midIndex = Math.floor(array.length/2);
  isEven = !(array.length % 2);
  newArr = [];
  if (isEven && array.length > 2) {
    newArr.push(array[midIndex - 1]);
    newArr.push(array[midIndex]);
    return newArr;
  } else if (array.length <= 2) {
    return newArr;
  } else {
    newArr.push(array[midIndex]);
    return newArr;
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 4]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
