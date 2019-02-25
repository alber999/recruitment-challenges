function Positive (input) {
  if (input === null || isNaN(input)) {
    throw TypeError()
  }

  if (input < 0) {
    throw RangeError()
  }
}

module.exports = { Positive }
