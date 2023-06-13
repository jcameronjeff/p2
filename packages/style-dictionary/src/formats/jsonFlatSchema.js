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
 * The keys are flattened to a string.
 * @returns string
 */
const formatter = ({ dictionary, options }) => {
  return '{\n' + dictionary.allTokens.map(function(token) {
    return `  "${token.name}": ${JSON.stringify(minify(token, options))}`;
  }).join(',\n') + '\n}' + '\n';
}

const jsonSchema = {
  name: 'json/flat-schema',
  formatter
}

module.exports = jsonSchema
