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

//function to determine indices of each letter
const letterPositions = function(sentence) {
  const results = {};
  let noSpace = '';

  for (let j = 0; j < sentence.length; j++) {
    if (sentence[j] !== ' ') {
      noSpace += sentence[j];
    }
  }
   
  for (let i = 0; i < noSpace.length; i++) {
    const letter = noSpace[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }

  console.log(results);
  return results;
};


assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 13, 15]);