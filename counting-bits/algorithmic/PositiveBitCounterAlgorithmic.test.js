const PositiveBitCounterAlgorithmic = require('./PositiveBitCounterAlgorithmic')
const assert = require('assert')

describe('PositiveBitCounterAlgorithmic', function () {
  it('CountNoMemoryApproach: Should return zero occurrences for input = 0', function () {
    let expected = [0]
    let actual = PositiveBitCounterAlgorithmic.CountNoMemoryApproach(0)
    assert.deepEqual(actual, expected)
  })

  it('CountNoMemoryApproach: Should return the expected count for input = 1', function () {
    let expected = [1, 0]
    let actual = PositiveBitCounterAlgorithmic.CountNoMemoryApproach(1)
    assert.deepEqual(actual, expected)
  })

  it('CountNoMemoryApproach: Should return the expected count for input = 161 (even binary array length)', function () {
    let expected = [3, 0, 5, 7]
    let actual = PositiveBitCounterAlgorithmic.CountNoMemoryApproach(161)
    assert.deepEqual(actual, expected)
  })

  it('CountNoMemoryApproach: Should return the expected count for input = 92 (odd binary array length)', function () {
    let expected = [4, 2, 3, 4, 6]
    let actual = PositiveBitCounterAlgorithmic.CountNoMemoryApproach(92)
    assert.deepEqual(actual, expected)
  })

  it('CountMemoryApproach: Should return zero occurrences for input = 0', function () {
    let expected = [0]
    let actual = PositiveBitCounterAlgorithmic.CountMemoryApproach(0)
    assert.deepEqual(actual, expected)
  })

  it('CountMemoryApproach: Should return the expected count for input = 1', function () {
    let expected = [1, 0]
    let actual = PositiveBitCounterAlgorithmic.CountMemoryApproach(1)
    assert.deepEqual(actual, expected)
  })

  it('CountMemoryApproach: Should return the expected count for input = 161 (even binary array length)', function () {
    let expected = [3, 0, 5, 7]
    let actual = PositiveBitCounterAlgorithmic.CountMemoryApproach(161)
    assert.deepEqual(actual, expected)
  })

  it('CountMemoryApproach: Should return the expected count for input = 92 (odd binary array length)', function () {
    let expected = [4, 2, 3, 4, 6]
    let actual = PositiveBitCounterAlgorithmic.CountMemoryApproach(92)
    assert.deepEqual(actual, expected)
  })
})
