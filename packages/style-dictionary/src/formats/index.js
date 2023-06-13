const jsTailwind = require('./jsTailwind')
const jsonSchema = require('./jsonSchema')
const jsonFlatSchema = require('./jsonFlatSchema')

const allFormats = {
  jsTailwind,
  jsonSchema,
  jsonFlatSchema,
}

const registerFormats = (sd, formats) => {
  if (formats && Array.isArray(formats)) {
    formats.forEach((format) => {
      sd.registerFormat(allFormats[format])
    })
  } else {
    Object.values(allFormats).forEach((format) => {
      sd.registerFormat(format)
    })
  }
}

module.exports = { registerFormats, ...allFormats }
