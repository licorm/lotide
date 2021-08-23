//import letterPositions
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

//test code
describe("#letterPositions", () => {
  it("returns [3, 5, 13, 15] for 'lighthouse in the house' and item 'h", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, [3, 5, 13, 15]);
  });
});

