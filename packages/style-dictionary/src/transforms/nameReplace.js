/**
 * With the given token, the match-replace object is used to match on the token
 * and, if matched, run the replacer function, returning the value that ought
 * to replace the token name.
 * 
 * By passing the entire token to the matcher and the replacer functions, the 
 * entirety of the token can be used to match or determine the correct replace 
 * value.
 * 
 * As a name transform, it's important to remember the `replace` function will
 * only transform the name, thus the return value must be the full, new name
 * 
 * @example Matching a token name
 * MatchReplaceObject = {
 *   matcher: (token) => token.name === 'foo',
 *   replace: (token) => 'fooga'
 * }
 * 
 * <Token>{ name: 'foo' } -> <Token>{name: 'fooga'}
 * <Token>{ name: 'woo' } -> <Token>{name: 'woo'}
 * <Token>{ name: 'bar' } -> <Token>{name: 'bar'}
 * 
 * @example Matching a token name with regex
 * MatchReplaceObject = {
 *   matcher: (token) => /oo$/.test(token.name),
 *   replace: (token) => `${token.name}ga`
 * }
 * 
 * <Token>{ name: 'foo' } -> <Token>{name: 'fooga'}
 * <Token>{ name: 'woo' } -> <Token>{name: 'wooga'}
 * <Token>{ name: 'bar' } -> <Token>{name: 'bar'}
 * 
 * @example Matching a token type
 * MatchReplaceObject = {
 *   matcher: (token) => token.type === 'size',
 *   replace: (token) => `size-${token.name}`
 * }
 * 
 * <Token>{ name: 'foo', type: 'size' } -> <Token>{name: 'size-fooga', type: 'size'}
 * <Token>{ name: 'woo', type: 'color' } -> <Token>{name: 'woo', type: 'size'}
 * <Token>{ name: 'bar', type: 'fontFamily' } -> <Token>{name: 'bar', type: 'size'}
 * 
 */
const matchReplace = (token) => ({ matcher, replace }) => {
  if (!matcher || !replace) { return }
  if (matcher(token)) { return replace(token) }
}

/**
 * Replaces the name of all tokens. All matchers will run on all tokens in the 
 * order of the `nameReplace` options array.
 * @param {object} token Style Dictionary Token
 * @param {object} options Options object of the platform
 * @param {array} options.nameReplace Array of Match-Replace Objects
 * @param {function} options.nameReplace[].matcher Used to decide if the replace function will run
 * @param {function} options.nameReplace[].replace The return value of this method will replace the name
 * @returns new name or the original token name
 */
const transformer = (token, options) => {
  const { nameReplace = [] } = options

  const name = nameReplace.map(matchReplace(token)).join('')

  return name || token.name
}

const nameReplace = { 
  type: 'name',
  name: 'name/replace',
  transformer 
}

module.exports = nameReplace
