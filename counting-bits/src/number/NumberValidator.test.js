const NumberValidator = require('./NumberValidator')
const assert = require('assert')

const MAX_RANGE_NUMBER = 2147483647

describe('NumberValidator', () => {
  describe('Positive', () => {
    it('Should return a TypeError when a null value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive(),
        error => error instanceof TypeError
      )
    })

    it('Should return a TypeError when a non numeric value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive('non numeric'),
        error => error instanceof TypeError
      )
    })

    it('Should return a TypeError when an array value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive([]),
        error => error instanceof TypeError
      )
    })

    it('Should return a TypeError when an object value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive({}),
        error => error instanceof TypeError
      )
    })

    it('Should return a RangeError when a negative value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive(-2),
        error => error instanceof RangeError
      )
    })

    it('Should return a RangeError when a grater than ' + MAX_RANGE_NUMBER + ' (max range number) value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive(MAX_RANGE_NUMBER + 1),
        error => error instanceof RangeError
      )
    })

    it('0 should be a valid positive number', () => {
      NumberValidator.Positive(0)
    })

    it('1 should be a valid positive number', () => {
      NumberValidator.Positive(1)
    })

    it(MAX_RANGE_NUMBER + ' (max range number) should be a valid positive number', () => {
      NumberValidator.Positive(MAX_RANGE_NUMBER)
    })
  })
})
