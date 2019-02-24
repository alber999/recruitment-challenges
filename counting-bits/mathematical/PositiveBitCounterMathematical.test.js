const PositiveBitCounterMathematical = require('./PositiveBitCounterMathematical')
const assert = require('assert')

describe('PositiveBitCounterMathematical', function () {
  it('Should return a TypeError when a null value is supplied', function () {
    assert.throws(
      () => PositiveBitCounterMathematical.Count(),
      error => {
        return error instanceof TypeError
      })
  })

  it('Should return a TypeError when a non numeric value is supplied', function () {
    assert.throws(
      () => PositiveBitCounterMathematical.Count('non numeric'),
      error => {
        return error instanceof TypeError
      })
  })

  it('Should return a RangeError when a negative value is supplied', function () {
    assert.throws(
      () => PositiveBitCounterMathematical.Count(-2),
      error => {
        return error instanceof RangeError
      })
  })

  it('Should return zero occurrences for input = 0', function () {
    let expected = [0]
    let actual = PositiveBitCounterMathematical.Count(0)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 1', function () {
    let expected = [1, 0]
    let actual = PositiveBitCounterMathematical.Count(1)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 161 (even binary array length)', function () {
    let expected = [3, 0, 5, 7]
    let actual = PositiveBitCounterMathematical.Count(161)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 92 (odd binary array length)', function () {
    let expected = [4, 2, 3, 4, 6]
    let actual = PositiveBitCounterMathematical.Count(92)
    assert.deepEqual(actual, expected)
  })
})
