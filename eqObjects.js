//import eqArrays
const eqArrays = require('./eqArrays');

// function to check if two seperate objects are equal
const eqObjects = function(object1, object2) {

  //make sure objects have same number of keys
  let numOfKeys1 = Object.keys(object1);
  let numOfKeys2 = Object.keys(object2);
  if (numOfKeys1.length !== numOfKeys2.length) {
    console.log("keys don't equal")
    return false;
  }

  //make sure values of each key are the same
  for (const value in object1) {
    
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (eqArrays(object1[value], object2[value]) !== true) {
        
        return false;
      }
    } 

    //if the value is an object, call function
    if (Object.prototype.toString.call(object1[value]) === '[object Object]') {
      
      return eqObjects(object1[value], object2[value])
    }

    if (object1[value] !== object2[value]) {
     
      return false;
    }
  }
  return true;
};

//export function
module.exports = eqObjects;

