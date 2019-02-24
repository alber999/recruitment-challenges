const PositiveBitCounterTestDefinition = require('./../test/PositiveBitCounterTestDefinition')
const PositiveBitCounterStandard = require('./PositiveBitCounterStandard')
const assert = require('assert')

describe('PositiveBitCounterStandard', function () {
  PositiveBitCounterTestDefinition.TestDefinition().forEach(test => {
    it(test.title, function () {
      if (test.error != null) {
        assert.throws(
          () => PositiveBitCounterStandard.Count(test.input),
          error => {
            return error.constructor.name === test.error
          })
      } else {
        assert.deepEqual(PositiveBitCounterStandard.Count(test.input), test.expected)
      }
    })
  })
})
