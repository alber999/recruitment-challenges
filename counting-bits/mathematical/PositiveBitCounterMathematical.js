function Count (input) {
  if (input === null || isNaN(input)) {
    throw TypeError()
  }

  if (input < 0) {
    throw RangeError()
  }

  if (input === 0) {
    return [0]
  }

  /* first position of result array reserved to avoid unshift operation when adding total to first position */
  let result = [0]
  let totalBits = Math.floor(Math.log2(input)) + 1
  let i = totalBits
  let current = input
  while (i > 0) {
    let bit = current % 2 === 0 ? 0 : 1
    if (bit === 1) {
      result.push(totalBits - i)
    }
    current = Math.floor(current / 2)
    i--
  }
  result[0] = result.length - 1
  return result
}

module.exports = { Count }
