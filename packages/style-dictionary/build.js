const { base, themes } = require('./src/dictionaries')
const { jsTailwind } = require('./src/formats')
const { mathCalc } = require('./src/transforms')

base.registerTransform(mathCalc)
base.registerFormat(jsTailwind)

base.buildAllPlatforms()
themes.forEach(theme => {
  theme.registerTransform(mathCalc)
  theme.registerFormat(jsTailwind)
  theme.buildAllPlatforms()
})
