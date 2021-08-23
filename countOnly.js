// count only function
//allItems: array of strings that we need to look through
//itemsToCount: an object specifying what to count
//function reports(via object) how many of each string found in allItems array
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

//export function
module.exports = countOnly;
