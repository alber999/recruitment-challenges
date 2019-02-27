const NumberDefinition = require('./NumberDefinition')

function Positive (input) {
  if (!Number.isSafeInteger(input)) {
    throw TypeError()
  }

  if (input < 0 || input > NumberDefinition.MAX_32BIT_INTEGER) {
    throw RangeError()
  }
}

module.exports = { Positive }
