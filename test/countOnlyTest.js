//import countOnly
const countOnly = require('../countOnly');
const assert = require('chai').assert;

//test code
describe("#countOnly", () => {
  const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  it('returns 1 for firstNames and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} for item "Jason"', () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Jason"], 1);
  });
  it('returns undefined for firstNames and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} for item "Jason"', () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Karima"], undefined);
  });
  it('returns 2 for firstNames and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} for item "Jason"', () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Fang"], 2);
  });
  it('returns undefined for firstNames and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false} for item "Jason"', () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })["Agouhanna"], undefined);
  });
});

