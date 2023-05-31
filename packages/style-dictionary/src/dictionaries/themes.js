const fs = require('fs')
const path = require('path')
const StyleDictionary = require('style-dictionary')

const { buildPlatform } = require('../platforms')

// export const themes = fs.readdirSync(path.join('.',  'tokens', 'themes'))
const themes = ['default']
// console.log('themes', themes)

const configs = themes.map(theme => ({
  source: [`tokens/themes/${theme}/${theme}.json`],
  include: ['tokens/base/**/*.json', `tokens/themes/${theme}/*.json`],
  platforms: {
    css: buildPlatform({ 
      name: 'css', 
      dest: `${theme}.css`,
    }),
    tailwind: buildPlatform({
      name: 'tailwind',
      dest: `${theme}.js`,
    })
  }
}))

module.exports = configs.map(config => StyleDictionary.extend(config))
