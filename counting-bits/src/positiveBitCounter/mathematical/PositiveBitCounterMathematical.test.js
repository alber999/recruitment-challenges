const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterMathematical = require('./PositiveBitCounterMathematical')

describe('PositiveBitCounterMathematical', () => {
  test.Run((input) => PositiveBitCounterMathematical.Count(input))
})
