//import functions
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//test code
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 4]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);