const assert = require('assert')
const sinon = require('sinon')
const testDefinition = require('./PositiveBitCounterTestDefinition')
const NumberUtil = require('../../number/NumberUtil')

function RunUseCases (cb) {
  testDefinition.Items.forEach(test => {
    it(test.title, () => {
      if (test.error != null) {
        assert.throws(() => cb(test.input), error => {
          return error.constructor.name === test.error
        })
      } else {
        assert.deepStrictEqual(cb(test.input), test.expected)
      }
    })
  })
}

function RunCheckToBinaryArrayCalled (cb) {
  it('Should call NumberUtil.ToBinaryArray', () => {
    let input = 0
    sinon.spy(NumberUtil, 'ToBinaryArray')
    cb(input)
    assert(NumberUtil.ToBinaryArray.calledOnce)
    NumberUtil.ToBinaryArray.restore()
  })
}

module.exports = { RunUseCases, RunCheckToBinaryArrayCalled }
