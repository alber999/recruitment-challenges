const PositiveBitCounterTestDefinition = require('./../test/PositiveBitCounterTestDefinition')
const PositiveBitCounterAlgorithmicMemory = require('./PositiveBitCounterAlgorithmicMemory')
const assert = require('assert')

describe('PositiveBitCounterAlgorithmicMemory', function () {
  PositiveBitCounterTestDefinition.TestDefinition().forEach(test => {
    it(test.title, function () {
      if (test.error != null) {
        assert.throws(
          () => PositiveBitCounterAlgorithmicMemory.Count(test.input),
          error => {
            return error.constructor.name === test.error
          })
      } else {
        assert.deepEqual(PositiveBitCounterAlgorithmicMemory.Count(test.input), test.expected)
      }
    })
  })
})
