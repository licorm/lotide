//import eqArrays
const eqArrays = require(`./eqArrays`);

// function to check if two seperate objects are equal
const eqObjects = function(object1, object2) {
  //make sure objects have same number of keys
  
  let numOfKeys1 = Object.keys(object1);
  let numOfKeys2 = Object.keys(object2);
  if (numOfKeys1.length !== numOfKeys2.length) {
    return false;
  }

  //make sure values of each key are the same
  for (const value in object1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (eqArrays(object1[value], object2[value]) !== true) {
        return false;
      }
    } else if (object1[value] !== object2[value]) {
      return false;
    }
  }
  return true;
};

//export function
module.exports = eqObjects;

