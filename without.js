// check if arrays are equal
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

// check if assertion is passed
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🥳🥳💚Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// remove unwanted items
const without = function(source, itemsToRemove) {
  let newArr = source.filter((item) => !itemsToRemove.includes(item));
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"])
let words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 5], [1, 2, 5]), []);
