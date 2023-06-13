const StyleDictionary = require('style-dictionary')
const { css, tailwind, figma } = require('../platforms')

const source = ['tokens/base/**/*.json']

const sd = StyleDictionary.extend({
  source,
  platforms: { css, tailwind, figma }
})

module.exports = sd
