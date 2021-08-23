//importing our functions
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');

//export our functions as objects
module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly
};