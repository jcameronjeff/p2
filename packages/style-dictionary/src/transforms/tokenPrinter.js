const tokenPrinter = (name, returnValue = null) => (token) => { 
  console.log(`${name} token -> ${JSON.stringify(token, null, 2)}`)
  return returnValue !== null ? returnValue : token.value
}

module.exports = tokenPrinter
