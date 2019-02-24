const Utils = require('./../util/Utils')

function Count (input) {
  let binaryArray = Utils.NumberToBinaryArray(input)

  /* first position of result array reserved to avoid unshift operation when adding total to first position */
  let result = [0]
  let binaryArrayLength = binaryArray.length
  let i = binaryArrayLength - 1

  while (i > -1) {
    if (binaryArray[i] === '1') {
      result.push(binaryArrayLength - i - 1)
    }
    i--
  }

  result[0] = result.length - 1
  return result
}

module.exports = { Count }
