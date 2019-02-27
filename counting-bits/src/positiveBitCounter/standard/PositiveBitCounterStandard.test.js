const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterStandard = require('./PositiveBitCounterStandard')

describe('PositiveBitCounterStandard', () => {
  test.RunCheckToBinaryArrayCalled(input => PositiveBitCounterStandard.Count(input))
  test.RunUseCases(input => PositiveBitCounterStandard.Count(input))
})
