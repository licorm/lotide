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

//export function
module.exports = letterPositions;