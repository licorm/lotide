//import countLetters
const countLetters = require('../countLetters');
const assert = require('chai').assert;

//test code
describe("#countLetters", () => {
  const stringOne = 'lighthouse labs';
  const stringTwo = 'next few steps';
  const stringThree = 'CapiTal LetTerS';

  it("returns 2 for 'lighthouse labs' item 'l'", () => {
    assert.strictEqual(countLetters(stringOne)['l'], 2);
  });
  it("returns undefined for 'lighthouse labs' item 'f'", () => {
    assert.strictEqual(countLetters(stringOne)['f'], undefined);
  });
  it("returns 1 for 'next few steps' item 'f'", () => {
    assert.strictEqual(countLetters(stringTwo)['f'], 1);
  });
  it("returns 3 for 'next few steps' item 'e'", () => {
    assert.strictEqual(countLetters(stringTwo)['e'], 3);
  });
  it("returns 2 for 'CapiTal LetTerS' and item 'T'", () => {
    assert.strictEqual(countLetters(stringThree)['T'], 2);
  });
  it("returns 1 for 'CapiTal LetTerS' and item 'C'", () => {
    assert.strictEqual(countLetters(stringThree)['C'], 1);
  });
});


// assertEqual(result3['C'], 1);
// assertEqual(result3['t'], 1);
// assertEqual(result3['T'], 2);