//function to find the middle index of an array
const middle = function(array) {
  midIndex = Math.floor(array.length/2);
  isEven = !(array.length % 2);
  newArr = [];
  if (isEven && array.length > 2) {
    newArr.push(array[midIndex - 1]);
    newArr.push(array[midIndex]);
    return newArr;
  } else if (array.length <= 2) {
    return newArr;
  } else {
    newArr.push(array[midIndex]);
    return newArr;
  }
};

//export function 
module.exports = middle;