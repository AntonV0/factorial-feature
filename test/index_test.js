var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it ('returns 120 when you pass in 5!', () => {
      // Setup
      const input = 5;
      const expectedResult = 120;
      // Exercise
      const actualResult = Calculate.factorial(input);
      // Verify
      assert.equal(actualResult, expectedResult);
    });
    it ('returns 6 when you pass in 3!', () => {
      // Setup
      const input = 3;
      const expectedResult = 6;
      // Exercise
      const actualResult = Calculate.factorial(input);
      // Verify
      assert.equal(actualResult, expectedResult);
    });
    it ('returns 1 when you pass in 0!', () => {
      // Setup
      const input = 0;
      const expectedResult = 1;
      // Exercise
      const actualResult = Calculate.factorial(input);
      // Verify
      assert.equal(actualResult, expectedResult);      
    })
  });
});

/* npm test output:
Calculate
.factorial
  ✔ returns 120 when you pass in 5!
  ✔ returns 6 when you pass in 3!
  ✔ returns 1 when you pass in 0!


3 passing (4ms)
*/