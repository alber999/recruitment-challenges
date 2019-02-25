const testDefinition = require('./PositiveBitCounterTestDefinition')
const assert = require('assert')

function Run (cb) {
  testDefinition.Items.forEach(test => {
    it(test.title, () => {
      if (test.error != null) {
        assert.throws(() => cb(test.input), error => {
          return error.constructor.name === test.error
        })
      } else {
        assert.deepEqual(cb(test.input), test.expected)
      }
    })
  })
}

module.exports = { Run }
