//importing our functions
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

//export our functions as objects
module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly,
  countLetters,
  letterPositions,
  findKeyByValue,
  eqArrays,
  eqObjects
};