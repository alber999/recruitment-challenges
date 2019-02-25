const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterStandard = require('./PositiveBitCounterStandard')

describe('PositiveBitCounterStandard', () => {
  test.Run(input => PositiveBitCounterStandard.Count(input))
})
