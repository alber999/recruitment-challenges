const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterAlgorithmicNoMemory = require('./PositiveBitCounterAlgorithmicNoMemory')

describe('PositiveBitCounterAlgorithmicNoMemory', () => {
  test.Run(input => PositiveBitCounterAlgorithmicNoMemory.Count(input))
})
