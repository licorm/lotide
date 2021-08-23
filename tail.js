//tail function
const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

//export
module.exports = tail;