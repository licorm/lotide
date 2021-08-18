// assert equal function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳💚Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😰😰💔Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//count letters function
const countLetters = function(string) {
  let compare = {};
  let result = {};

  for (const letters of string) {
    compare[letters] += string[letters];
    compare[letters] = true;
    if (compare[letters]) {
      if (result[letters]) {
        result[letters] += 1;
      } else {
        result[letters] = 1;
      }
    }
  }

  return result;
};

//test code
const stringOne = 'lighthouse labs';
const stringTwo = 'next few steps';
const stringThree = 'CapiTal LetTerS';

const result1 = countLetters(stringOne);

assertEqual(result1['l'], 2);
assertEqual(result1['f'], undefined);

const result2 = countLetters(stringTwo);

assertEqual(result2['e'], 3);
assertEqual(result2['f'], 1);

const result3 = countLetters(stringThree);

assertEqual(result3['C'], 1);
assertEqual(result3['t'], 1);
assertEqual(result3['T'], 2);