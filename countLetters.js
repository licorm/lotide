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

//export functions
module.exports = countLetters;

