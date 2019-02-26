const NumberUtil = require('../../util/NumberUtil')

function Count (input) {
  let binaryArray = NumberUtil.ToBinaryArray(input)
  let binaryArrayLength = binaryArray.length

  /* first position of result array reserved to avoid unshift operation when adding total to first position */
  let result = [0]
  let stack = []
  let total = 0
  let start = 0
  let end = binaryArrayLength - 1

  while (start <= end) {
    if (binaryArray[end] === '1') {
      total++
      result.push(binaryArrayLength - end - 1)
    }
    if (start !== end && binaryArray[start] === '1') {
      total++
      stack.push(binaryArrayLength - start - 1)
    }
    start++
    end--
  }

  while (stack.length > 0) {
    result.push(stack.pop())
  }

  result[0] = total
  return result
}

module.exports = { Count }
