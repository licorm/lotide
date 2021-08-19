// Assert Equal Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// find key by value function
const findKeyByValue = function(object, search) {
  for(const value in object) {
    if(object[value] === search) {
      return value;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);