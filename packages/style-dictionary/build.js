const { registerTransforms } = require('@tokens-studio/sd-transforms')
const { base, themes } = require('./src/dictionaries')
const { registerFormats } = require('./src/formats')
const { registerTransforms: regTransforms } = require('./src/transforms')

registerTransforms(base)
regTransforms(base)
registerFormats(base)
base.buildAllPlatforms()

themes.forEach(theme => {
  registerTransforms(theme)
  regTransforms(theme)
  registerFormats(theme)
  theme.buildAllPlatforms()
})
