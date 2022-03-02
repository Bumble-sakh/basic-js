const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = n
    .toString()
    .split('')
    .reduce((acc, el, i, digits) => {
      acc.push(digits.slice(0, i).join('') + digits.slice(i + 1).join(''))
      return acc
    }, [])
  return Math.max(...numbers)
}

module.exports = {
  deleteDigit,
}
