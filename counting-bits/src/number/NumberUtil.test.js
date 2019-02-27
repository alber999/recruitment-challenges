const assert = require('assert')
const sinon = require('sinon')
const NumberUtil = require('./NumberUtil')
const NumberValidator = require('./NumberValidator')

const MAX_RANGE_NUMBER = 2147483647

describe('NumberUtil', () => {
  describe('ToBinaryArray', () => {
    it('Should call NumberValidator.Positive', () => {
      sinon.spy(NumberValidator, 'Positive')
      NumberUtil.ToBinaryArray(0)
      assert(NumberValidator.Positive.calledOnce)
      NumberValidator.Positive.restore()
    })
    it('Should return [0] for input = 0', () => {
      assert.deepStrictEqual(
        NumberUtil.ToBinaryArray(0),
        ['0'])
    })

    it('Should return [1] for input = 1', () => {
      assert.deepStrictEqual(
        NumberUtil.ToBinaryArray(1),
        ['1'])
    })

    it('Should return [1, 0] for input = 2', () => {
      assert.deepStrictEqual(
        NumberUtil.ToBinaryArray(2),
        ['1', '0'])
    })

    it('Should return [1, 0, 1, 1, 1, 0, 0] for input = 92', () => {
      assert.deepStrictEqual(
        NumberUtil.ToBinaryArray(92),
        ['1', '0', '1', '1', '1', '0', '0'])
    })

    it('Should return [1, 0, 1, 0, 0, 0, 0, 1] for input = 161', () => {
      assert.deepStrictEqual(
        NumberUtil.ToBinaryArray(161),
        ['1', '0', '1', '0', '0', '0', '0', '1'])
    })

    it('Should return 31 (1) bits for input (max range number) = ' + MAX_RANGE_NUMBER, () => {
      assert.deepStrictEqual(
        NumberUtil.ToBinaryArray(MAX_RANGE_NUMBER),
        Array(31).fill('1'))
    })
  })
})
