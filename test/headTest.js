//import head
const head = require('../head');
const assert = require('chai').assert;

//test code
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns undefined when given an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns '1' for ['1']", () => {
    assert.strictEqual(head(['1']), '1');
  });
});

