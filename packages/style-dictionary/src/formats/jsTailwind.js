const { minifyDictionary } = require('style-dictionary-utils').formatHelpers
const { format } = require('prettier')
const parseBabel = require('prettier/parser-babel')

/**
 * Formats the given object using Prettier.format
 * 
 * @param {object} obj 
 * @returns 
 */
const formatObj = (obj) => (format(obj, {
  parser: 'babel',
  plugins: [parseBabel]
}))

/**
 * Merges two color sets together. Default remains the incoming color set value 
 * for the name, and the other color set values are placed next to it.
 * @param {*} colorSet 
 * @param {*} baseColors 
 * @returns Blended color set
 */
const mergeColorValues = (colorSet, baseColors) => (
  Object.keys(colorSet).reduce((acc, name) => {
    if (baseColors[name]) {
      acc[name] = {
        ...baseColors[name],
        DEFAULT: colorSet[name]
      }
    } else {
      acc[name] = colorSet[name]
    }

    return acc
  }, {})
)

/**
 * For each src,dest pair, will crawl the tokens object down the src path to locate
 * the item to be moved. If found and it is requested to remove the item found,
 * the found item will be delete from the original token set. Then it will crawl 
 * the tokens down the dest path, creating empty objects along the way if 
 * necessary, and storey the found item at the end of the dest path. 
 * 
 * @param {object} tokens Style Dictionary Tokens
 * @param {array[array[string, string]]} paths List of arrays with source path and destination path [src, dest]
 * @param {boolean} removeWhenFound if true, will remove the item from the tokens object
 * @returns new set of Style Dictionary Tokens
 * 
 * @example
 * Given the paths `[ ['size.font', 'fontSize'] ]`, the before tokens object is
 * transformed into the after tokens object.
 * 
 * Before:
 * {
 *   color: {
 *     blue: #0000ff
 *   },
 *   size: {
 *     border: {
 *       width: {
 *         sm: 1,
 *         md: 2,
 *         lg: 4,
 *       }
 *     },
 *     font: {
 *       sm: .5rem,
 *       md: 1rem,
 *       lg: 1.5rem,
 *       xl: 2rem
 *     }
 *   }
 * }
 * 
 * After:
 * {
 *   color: {
 *     blue: #0000ff
 *   },
 *   fontSize: {
 *     sm: .5rem,
 *     md: 1rem,
 *     lg: 1.5rem,
 *     xl: 2rem
 *   },
 *   size: {
 *     border: {
 *       width: {
 *         sm: 1,
 *         md: 2,
 *         lg: 4,
 *       }
 *     },
 *   }
 * }
 */
const moveTokens = (tokens, paths, removeWhenFound = false) => (
  paths.reduce((tokenSet, [srcPath, destPath]) => {
    const src = srcPath.split('.').reduce((searchObj, step, i, steps) => {
      if (!searchObj) {
        return
      }
      
      const found = searchObj[step]
      
      if (found && removeWhenFound && steps.length === i + 1) {
        delete searchObj[step]
      }
      
      return found
    }, tokenSet)
    
    if (!src) {
      return tokenSet
    }

    let dest = tokenSet

    destPath.split('.').forEach((step, i, steps) => {
      if (!dest[step]) {
        dest[step] = {}
      }
      
      if (steps.length === i + 1) {
        dest[step] = src     
      }

      dest = dest[step]
    })
      
    return tokenSet
  }, {...tokens})
)

/**
 * Offsets the numeric values of token names. Returns the modified object. 
 * @param {object} tokens Design Tokens object
 * @returns Modified Design Tokens
 * 
 * @example
 * Given { 5: 2px, 40: 10px, px: 1px }
 * Returns { 0.5: 2px, 4: 10px, px: 1px }
 */
const offsetTokens = (tokens, offset = 0.1) => {
  return Object.entries(tokens).reduce((acc, [tokenName, tokenValue]) => {
    if (/\d+/.test(tokenName)) {
      let offsetName = parseFloat(tokenName, 16) * offset
      acc[offsetName] = tokenValue
    } else {
      acc[tokenName] = tokenValue
    }
    return acc
  }, {})
}

const jsTailwind = {
  name: 'javascript/tailwind',
  formatter: ({ dictionary, platform, options, file }) => {

    // Flatten values
    let allTokens = Object.keys(dictionary.tokens).reduce((acc, category) => {
      acc[category] = minifyDictionary(dictionary.tokens[category])
      return acc
    }, {})

    // Merge colors across color names (e.g. Primary color values across surface.primary)
    const types = ['surface', 'on-surface', 'border']
    types.forEach(type => {
      if (allTokens.color[type]) {
        allTokens.color[type] = mergeColorValues(allTokens.color[type], allTokens.color)
        if (allTokens.color[type].default) {
          const defaultColor = allTokens.color[type].default
          delete allTokens.color[type].default 
          allTokens.color[type].DEFAULT = defaultColor
        }
      }
    })

    // Space token names are offset by 10. Need to divide names by 10 to correct for tailwind
    allTokens.space = offsetTokens(allTokens.space)

    // move source tokens to new locations
    const paths = [
      ['color.surface', 'backgroundColor'],
      ['color.on-surface', 'textColor'],
      ['color.border', 'borderColor'],
      ['color', 'colors'],
      ['size.border.radius', 'borderRadius'],
      ['typography.default', 'typography.DEFAULT.css'],
      ['size.border', 'borderWidth'],
      ['size.font', 'fontSize'],
      ['space.font.leading', 'lineHeight'],
      ['space', 'spacing'],
    ]
    allTokens = moveTokens(allTokens, paths, true)

    // create output string
    const output = JSON.stringify(allTokens, null, 2)

    // wrap string and format for file
    return formatObj(`module.exports = ${output};\n`)
  }
}

module.exports = jsTailwind
