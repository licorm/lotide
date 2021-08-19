// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//find key using a callback function
const findKey = function(object, callback) {
  for (const value in object) {
    if (callback(object[value])) {
      return value;
    }
  }
};

//tester codes
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);

assertEqual(result1, undefined);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

assertEqual(result2, 'Akaleri');

const result3 = findKey({
  Name: 'Lisa',
  Age: 26,
  FavouritePet: 'cat',
  Height: 160
}, x => x === 26);

assertEqual(result3, 'Age');

const result4 = findKey({
  Name: 'Lisa',
  Age: 26,
  FavouritePet: 'cat',
  Height: 160
}, x => x === 'cat');

assertEqual(result4, 'FavouritePet');