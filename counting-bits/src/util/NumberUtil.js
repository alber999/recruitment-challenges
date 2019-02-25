const NumberValidator = require('../validator/NumberValidator')

function ToBinaryArray (input) {
  NumberValidator.Positive(input)
  return (input >>> 0).toString(2).split('')
}

module.exports = { ToBinaryArray }
