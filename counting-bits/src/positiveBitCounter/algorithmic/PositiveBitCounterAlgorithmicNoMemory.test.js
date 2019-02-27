const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterAlgorithmicNoMemory = require('./PositiveBitCounterAlgorithmicNoMemory')

describe('PositiveBitCounterAlgorithmicNoMemory', () => {
  test.RunCheckToBinaryArrayCalled(input => PositiveBitCounterAlgorithmicNoMemory.Count(input))
  test.RunUseCases(input => PositiveBitCounterAlgorithmicNoMemory.Count(input))
})
