const StyleDictionary = require('style-dictionary')
const { css, tailwind } = require('../platforms')

const source = ['tokens/base/**/*.json']

const sd = StyleDictionary.extend({
  source,
  platforms: { css, tailwind }
})

module.exports = sd
