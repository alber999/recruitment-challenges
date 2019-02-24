const PositiveBitCounterTestDefinition = require('./../test/PositiveBitCounterTestDefinition')
const PositiveBitCounterAlgorithmicNoMemory = require('./PositiveBitCounterAlgorithmicNoMemory')
const assert = require('assert')

describe('PositiveBitCounterAlgorithmicNoMemory', function () {
  PositiveBitCounterTestDefinition.TestDefinition().forEach(test => {
    it(test.title, function () {
      if (test.error != null) {
        assert.throws(
          () => PositiveBitCounterAlgorithmicNoMemory.Count(test.input),
          error => {
            return error.constructor.name === test.error
          })
      } else {
        assert.deepEqual(PositiveBitCounterAlgorithmicNoMemory.Count(test.input), test.expected)
      }
    })
  })
})
