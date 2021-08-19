// Function for asserting if two arrays are identical
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🥳🥳💚Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//implement our own map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 4, 6, 3];
const passingGrade = [50, 80, 99, 69, 40];
const indexList = [1, 2, 3, 4, 5];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number * 2);
const results3 = map(passingGrade, grade => grade > 70);
const results4 = map(indexList, num => indexList.indexOf(num));

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [2, 8, 12, 6]);
assertArraysEqual(results3, [false, true, true, false, false]);
assertArraysEqual(results4, [0, 1, 2, 3, 4]);