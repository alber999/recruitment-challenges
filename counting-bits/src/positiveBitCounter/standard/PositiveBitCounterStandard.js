const NumberUtil = require('../../number/NumberUtil')

function Count (input) {
  let result = NumberUtil.ToBinaryArray(input).reverse()
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
