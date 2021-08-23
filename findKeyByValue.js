// find key by value function
const findKeyByValue = function(object, search) {
  for(const value in object) {
    if(object[value] === search) {
      return value;
    }
  }
};

//export function
module.exports = findKeyByValue;



