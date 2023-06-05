const { format } = require('prettier')
const parseBabel = require('prettier/parser-babel')

const tokensMap = {
  spacing: 'size',
  fontSize: 'size.font',
  borderRadius: 'size.border.radius',
}


const formatObj = (obj) => (format(obj, {
  parser: 'babel',
  plugins: [parseBabel]
}))

const getKeyName = (key) => {
  const keyMap = {
    color: 'colors',
    'on-surface': 'onSurface',
  }

  return keyMap[key] || key
}

const blendColors = (colorSet, baseColors) => (
  Object.keys(colorSet).reduce((acc, name) => {
    if (baseColors[name]) {
      const { light, dark, DEFAULT: _default} = baseColors[name]

      acc[name] = {
        light,
        dark,
        base: _default,
        DEFAULT: colorSet[name]
      }
    } else {
      acc[name] = colorSet[name]
    }

    return acc
  }, {})
)

const reduceToValues = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    const key = getKeyName(cur)
    const node = obj[cur]

    if (node.value) {
      acc[key] = node.value
    } else {
      acc[key] = reduceToValues(node)
    }

    return acc
  }, {})
}

const splitTokens = (allTokens) => {
  const { colors, ...tokens} = allTokens
  const { surface, onSurface, border, ...colorTokens } = colors

  return { 
    ...tokens,
    colors: colorTokens,
    backgroundColor: surface,
    textColor: onSurface,
    borderColor: border
  }
}

const findTokens = (allTokens, path = '') => {
  let tokens = JSON.parse(JSON.stringify(allTokens))

  path.split('.').every(p => {
    tokens = tokens[p] || false
    return tokens
  })

  Object.keys(tokens).forEach(token => {
    if (typeof tokens[token] === 'object') {
      delete tokens[token]
    }
  })

  return tokens || {};
}

const updateTokens = (allTokens, tokensMap) => (
  Object.keys(tokensMap).map(key => {
    allTokens[key] = findTokens(allTokens, tokensMap[key])
  })
)

const jsTailwind = {
  name: 'javascript/tailwind',
  formatter: ({ dictionary, platform, options, file }) => {
    let allTokens = Object.keys(dictionary.tokens).reduce((acc, category) => {
      acc[getKeyName(category)] = reduceToValues(dictionary.tokens[category])
      return acc
    }, {})

    const types = ['surface', 'onSurface', 'border']
    types.forEach(type => {
      if (allTokens.colors[type]) {
        allTokens.colors[type] = blendColors(allTokens.colors[type], allTokens.colors)
      }
    })

    allTokens = ['surface', 'onSurface', 'border'].reduce((acc, type) => {
      if (allTokens.colors[type]) {
        acc[type] = blendColors(allTokens.colors[type], allTokens.colors)
      }
      return acc
    }, allTokens)

    allTokens = splitTokens(allTokens)

    updateTokens(allTokens, tokensMap)


    const output = JSON.stringify(allTokens, null, 2)
    return formatObj(`module.exports = ${output};\n`)
  }
}

module.exports = jsTailwind
