const PositiveBitCounterStandard = require('./PositiveBitCounterStandard')
const assert = require('assert')

describe('PositiveBitCounterStandard', function () {
  it('Should return zero occurrences for input = 0', function () {
    let expected = [0]
    let actual = PositiveBitCounterStandard.Count(0)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 1', function () {
    let expected = [1, 0]
    let actual = PositiveBitCounterStandard.Count(1)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 2', function () {
    let expected = [1, 1]
    let actual = PositiveBitCounterStandard.Count(2)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 161 (even binary array length)', function () {
    let expected = [3, 0, 5, 7]
    let actual = PositiveBitCounterStandard.Count(161)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected count for input = 92 (odd binary array length)', function () {
    let expected = [4, 2, 3, 4, 6]
    let actual = PositiveBitCounterStandard.Count(92)
    assert.deepEqual(actual, expected)
  })
})
