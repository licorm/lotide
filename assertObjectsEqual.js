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


// function to check if two seperate objects are equal
const eqObjects = function(object1, object2) {
  //make sure objects have same number of keys
  
  let numOfKeys1 = Object.keys(object1);
  let numOfKeys2 = Object.keys(object2);
  if (numOfKeys1.length !== numOfKeys2.length) {
    return false;
  }

  //make sure values of each key are the same
  for (const value in object1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (eqArrays(object1[value], object2[value]) !== true) {
        return false;
      }
    } else if (object1[value] !== object2[value]) {
      return false;
    }
  }
  return true;
};

//Assert if two objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`🥳🥳💚Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`😰😰💔Assertion Failed:  [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

//test code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
