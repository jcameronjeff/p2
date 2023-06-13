const mathCalc = require('./mathCalc')
const mathEval = require('./mathEval')
const nameReplace = require('./nameReplace')

const allTransforms = {
  mathCalc,
  mathEval,
  nameReplace,
}

const registerTransforms = (sd, transforms) => {
  if (transforms && Array.isArray(transforms)) {
    transforms.forEach((transform) => {
      sd.registerTransform(allTransforms[transform])
    })
  } else {
    Object.values(allTransforms).forEach((transform) => {
      sd.registerTransform(transform)
    })
  }
}

module.exports = { 
  ...allTransforms,
  registerTransforms
}
