const MAX_RANGE_NUMBER = 2147483647

const Items = [
  {
    title: 'Should return [0] for input = 0',
    input: 0,
    expected: [0]
  },
  {
    title: 'Should return [1, 0] for input = 1',
    input: 1,
    expected: [1, 0]
  },
  {
    title: 'Should return [1, 1] for input = 2',
    input: 2,
    expected: [1, 1]
  },
  {
    title: 'Should return [4, 2, 3, 4, 6] for input = 92',
    input: 92,
    expected: [4, 2, 3, 4, 6]
  },
  {
    title: 'Should return [3, 0, 5, 7] for input = 161',
    input: 161,
    expected: [3, 0, 5, 7]
  },
  {
    title: 'Should return 31 (1) bits for input = ' + MAX_RANGE_NUMBER,
    input: MAX_RANGE_NUMBER,
    expected: [31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  }
]

module.exports = { Items }
