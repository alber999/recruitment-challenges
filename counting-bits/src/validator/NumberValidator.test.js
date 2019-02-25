const NumberValidator = require('./NumberValidator')
const assert = require('assert')

describe('NumberValidator', () => {
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

  it('Should return a RangeError when a negative value is supplied', () => {
    assert.throws(
      () => NumberValidator.Positive(-2),
      error => error instanceof RangeError
    )
  })

  it('0 should be a valid positive number', () => {
    NumberValidator.Positive(0)
  })

  it('1 should be a valid positive number', () => {
    NumberValidator.Positive(1)
  })

  it('25 should be a valid positive number', () => {
    NumberValidator.Positive(25)
  })
})
