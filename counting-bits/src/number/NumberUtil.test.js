const Number = require('./NumberDefinition')
const NumberUtil = require('./NumberUtil')
const assert = require('assert')

describe('NumberUtil', () => {
  describe('ToBinaryArray', () => {
    it('Should return [0] for input = 0', () => {
      assert.deepEqual(
        NumberUtil.ToBinaryArray(0),
        [0])
    })

    it('Should return [1] for input = 1', () => {
      assert.deepEqual(
        NumberUtil.ToBinaryArray(1),
        [1])
    })

    it('Should return [1, 0] for input = 2', () => {
      assert.deepEqual(
        NumberUtil.ToBinaryArray(2),
        [1, 0])
    })

    it('Should return [1, 0, 1, 1, 1, 0, 0] for input = 92', () => {
      assert.deepEqual(
        NumberUtil.ToBinaryArray(92),
        [1, 0, 1, 1, 1, 0, 0])
    })

    it('Should return [1, 0, 1, 0, 0, 0, 0, 1] for input = 161', () => {
      assert.deepEqual(
        NumberUtil.ToBinaryArray(161),
        [1, 0, 1, 0, 0, 0, 0, 1])
    })

    it('Should return 31 (1) bits for input (max 32 bit integer) = ' + Number.MAX_32BIT_INTEGER, () => {
      assert.deepEqual(
        NumberUtil.ToBinaryArray(Number.MAX_32BIT_INTEGER),
        Array(31).fill(1))
    })
  })
})
