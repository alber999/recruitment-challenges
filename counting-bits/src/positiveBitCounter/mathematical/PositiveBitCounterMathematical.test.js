const assert = require('assert')
const sinon = require('sinon')
const NumberValidator = require('./../../number/NumberValidator')
const test = require('../test/PositiveBitCounterTest')
const PositiveBitCounterMathematical = require('./PositiveBitCounterMathematical')

describe('PositiveBitCounterMathematical', () => {
  it('Should call NumberValidator.Positive', () => {
    sinon.spy(NumberValidator, 'Positive')
    PositiveBitCounterMathematical.Count(0)
    assert(NumberValidator.Positive.calledOnce)
    NumberValidator.Positive.restore()
  })

  test.RunUseCases(input => PositiveBitCounterMathematical.Count(input))
})
