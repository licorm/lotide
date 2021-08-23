// Import eqArrays
const eqArrays = require('./eqArrays'); 

//function for asserting arrays equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🥳🥳💚Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//export function
module.exports = assertArraysEqual;