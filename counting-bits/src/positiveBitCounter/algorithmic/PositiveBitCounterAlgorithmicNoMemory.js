const NumberUtil = require('../../util/NumberUtil')

function Count (input) {
  let binaryArray = NumberUtil.ToBinaryArray(input)

  /* first position of result array reserved to avoid unshift operation when adding total to first position */
  let result = [0]
  let binaryArrayLength = binaryArray.length
  let total = 0
  let i = binaryArrayLength - 1

  while (i > -1) {
    if (binaryArray[i] === '1') {
      total++
      result.push(binaryArrayLength - i - 1)
    }
    i--
  }

  result[0] = total
  return result
}

module.exports = { Count }
