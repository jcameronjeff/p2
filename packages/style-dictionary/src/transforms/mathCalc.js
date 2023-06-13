/**
 * Matches all math operations where two numbers have an operation symbol 
 * (`+`, `-`, `*`, `\`) in between them
 * @param {object} token 
 * @returns boolean
 */
const matcher = (token) => (/^\d.*[*+\-\\].*\d$/).test(token.value)

/**
 * Wraps any value with a math operation (number-symbol-number) within a `calc()`
 * @param {object} token 
 * @returns string of `calc(token.value)`
 */
const transformer = (token) => `calc(${token.value})`

module.exports = { 
  type: 'value',
  transitive: true,
  name: 'math/calc',
  matcher, 
  transformer 
}
