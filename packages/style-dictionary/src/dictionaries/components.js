const fs = require('fs')
const path = require('path')
const StyleDictionary = require('style-dictionary')

const { buildPlatform } = require('../platforms')

const components = fs.readdirSync(path.join('.',  'tokens', 'components')).map(c => c.replace('.json', ''))
// const components = ['tB']
console.log('components', components)

const theme = 'cais'

const configs = components.map(component => ({
  source: [`tokens/components/${component}.json`],
  include: ['tokens/base/**/*.json', `tokens/themes/${theme}/*.json`],
  platforms: {
    css: buildPlatform({ 
      name: 'css', 
      dest: `components/${component}.css`
    })
  }
}))

module.exports = configs.map(config => StyleDictionary.extend(config))
