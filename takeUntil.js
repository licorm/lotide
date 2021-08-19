//function comparing two arrays
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

//assert arrays equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`🥳🥳💚Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//takeUntil function
const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
};

//example tester code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

//my tester code
const data3 = [6, 2, 9, 8];
const result3 = takeUntil(data3, x => x === 9);

assertArraysEqual(result3, [6, 2]);

const data4 = ['guess', 'my', 'index', 'please'];
const result4 = takeUntil(data4, x => data4.indexOf(x) === 2);

assertArraysEqual(result4, ['guess', 'my']);