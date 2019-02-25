const NumberUtil = require('./NumberUtil')
const assert = require('assert')

describe('NumberUtil', () => {
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

  it('Should return 31 (1) bits for input = 2147483647', () => {
    assert.deepEqual(
      NumberUtil.ToBinaryArray(2147483647),
      Array(31).fill(1))
  })
})
