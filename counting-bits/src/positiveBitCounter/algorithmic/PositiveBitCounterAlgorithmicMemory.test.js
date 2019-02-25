const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterAlgorithmicMemory = require('./PositiveBitCounterAlgorithmicMemory')

describe('PositiveBitCounterAlgorithmicMemory', () => {
  test.Run(input => PositiveBitCounterAlgorithmicMemory.Count(input))
})
