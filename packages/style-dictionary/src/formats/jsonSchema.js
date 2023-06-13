/**
 * Reduces the provided object by keys listed in the schema
 * @param {object} obj Any object
 * @param {String[]} schema schema keys
 * @returns object filtered by keys listed in schema
 */
const filterObject = (obj, schema = ['value']) => (
  schema.reduce((filteredObj, key) => {
    if (obj.hasOwnProperty(key)) {
      filteredObj[key] = obj[key]
    }
    return filteredObj
  }, {})
)

/**
 * Clone of `minifyDictionary` platform helper, adding in the schema
 * https://amzn.github.io/style-dictionary/#/formats?id=minifydictionary
 * 
 * @param {object} obj 
 * @param {object} options options provided in the platform config
 * @returns object which has been minified
 */
const minify = (obj, options = {}) => {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty('value')) {
    return filterObject(obj, options.schema);
  } else {
    for(var name in obj) {
      if(obj.hasOwnProperty(name)) {
        toRet[name] = minify(obj[name], options);
      }
    }
  }
  return toRet;
}

/**
 * Reduces the dictionary tokens to a provided schema in the format options.
 * If no option is provided, only `value` will be present.
 * @returns string
 */
const formatter = ({ dictionary, options }) => {
  return JSON.stringify(minify(dictionary.tokens, options), null, 2) + '\n';
}

const jsonSchema = {
  name: 'json/schema',
  formatter
}

module.exports = jsonSchema
