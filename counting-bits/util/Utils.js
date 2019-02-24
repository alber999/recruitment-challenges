function NumberToBinaryArray (input) {
  if (input === null || isNaN(input)) {
    throw TypeError()
  }

  if (input < 0) {
    throw RangeError()
  }

  return (input >>> 0).toString(2).split('')
}

module.exports = { NumberToBinaryArray }
