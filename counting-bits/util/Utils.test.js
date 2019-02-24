const Utils = require('./Utils')
const assert = require('assert')

describe('NumberToBinaryArray', function () {
  it('Should return a TypeError when a non numeric value is supplied', function () {
    assert.throws(
      () => Utils.NumberToBinaryArray('non numeric'),
      function isRangeError (error) {
        return (error instanceof TypeError)
      })
  })

  it('Should return a RangeError when a negative value is supplied', function () {
    assert.throws(
      () => Utils.NumberToBinaryArray(-2),
      function isRangeError (error) {
        return (error instanceof RangeError)
      })
  })

  it('Should return the expected binary array for input = 0', function () {
    let expected = [0]
    let actual = Utils.NumberToBinaryArray(0)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected binary array for input = 1', function () {
    let expected = [1]
    let actual = Utils.NumberToBinaryArray(1)
    assert.deepEqual(actual, expected)
  })

  it('Should return the expected binary array for input = 161', function () {
    let expected = [1, 0, 1, 0, 0, 0, 0, 1]
    let actual = Utils.NumberToBinaryArray(161)
    assert.deepEqual(actual, expected)
  })
})
