const { calc } = require('@csstools/css-calc')

/**
 * Matches any value that begins with a `calc` function
 * @param {object} token 
 * @returns boolean
 */
const matcher = (token) => (/^calc\(/).test(token.value)

/**
 * Evaluates the matched `calc()` CSS value
 * @param {object} token 
 * @returns evaluated value
 */
const transformer = (token) => calc(token.value)

module.exports = { 
  type: 'value',
  transitive: true,
  name: 'math/eval',
  matcher, 
  transformer 
}

