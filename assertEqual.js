// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Lighthouse Labs");
//assertEqual(1, 2);

//export
module.exports = assertEqual;