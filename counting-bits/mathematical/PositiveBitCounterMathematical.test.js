const PositiveBitCounterTestDefinition = require('./../test/PositiveBitCounterTestDefinition')
const PositiveBitCounterMathematical = require('./PositiveBitCounterMathematical')
const assert = require('assert')

describe('PositiveBitCounterMathematical', function () {
  PositiveBitCounterTestDefinition.TestDefinition().forEach(test => {
    it(test.title, function () {
      if (test.error != null) {
        assert.throws(
          () => PositiveBitCounterMathematical.Count(test.input),
          error => {
            return error.constructor.name === test.error
          })
      } else {
        assert.deepEqual(PositiveBitCounterMathematical.Count(test.input), test.expected)
      }
    })
  })
})
