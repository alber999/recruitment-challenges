const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterAlgorithmicMemory = require('./PositiveBitCounterAlgorithmicMemory')

describe('PositiveBitCounterAlgorithmicMemory', () => {
  test.RunCheckToBinaryArrayCalled(input => PositiveBitCounterAlgorithmicMemory.Count(input))
  test.RunUseCases(input => PositiveBitCounterAlgorithmicMemory.Count(input))
})
