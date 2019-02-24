const Utils = require('./../util/Utils')

function Count (input) {
  let result = Utils.NumberToBinaryArray(input).reverse()
    .reduce((r, e, i) => {
      if (e === '1') {
        r.push(i)
      }
      return r
    }, [])
  result.unshift(result.length)
  return result
}

module.exports = { Count }
