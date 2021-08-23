//import modules
const assert = require('chai').assert;
const tail = require('../tail');

//test code
describe("#tail", () => {
  it("returns ['lighthouse', 'labs'] for ['yo yo', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});

