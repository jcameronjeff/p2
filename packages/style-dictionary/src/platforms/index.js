const StyleDictionary = require('style-dictionary')
const css = require('./css')
const scss = require('./scss')
const tailwind = require('./tailwind')
const figma = require('./figma')

const platforms = { css, scss, tailwind, figma }

const buildPlatform = ({ name, destination }) => {
  const platform = Object.assign({}, platforms[name])

  if (!platform) {
    return null
  }

  if (destination) {
    platform.files = platform.files.map((file) => ({ ...file, destination }))
  }

  return platform
}

module.exports = { ...platforms, platforms, buildPlatform }
