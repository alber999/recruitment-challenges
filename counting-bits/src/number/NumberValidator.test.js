const NumberDefinition = require('./NumberDefinition')
const NumberValidator = require('./NumberValidator')
const assert = require('assert')

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

    it('Should return a RangeError when a grater than ' + NumberDefinition.MAX_32BIT_INTEGER + ' (max 32 bit integer) value is supplied', () => {
      assert.throws(
        () => NumberValidator.Positive(NumberDefinition.MAX_32BIT_INTEGER + 1),
        error => error instanceof RangeError
      )
    })

    it('0 should be a valid positive number', () => {
      NumberValidator.Positive(0)
    })

    it('1 should be a valid positive number', () => {
      NumberValidator.Positive(1)
    })

    it(NumberDefinition.MAX_32BIT_INTEGER + ' (max 32 bit integer) should be a valid positive number', () => {
      NumberValidator.Positive(NumberDefinition.MAX_32BIT_INTEGER)
    })
  })
})
