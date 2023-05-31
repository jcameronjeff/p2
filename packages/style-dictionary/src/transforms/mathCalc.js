const matcher = (token) => {
  return (/^\d.*[*+\-\\].*\d$/).test(token.value)
}

const transformer = (token) => {
  return `calc(${token.value})`
}

module.exports = { 
  type: 'value',
  transitive: true,
  name: 'math/calc',
  matcher, 
  transformer 
}
