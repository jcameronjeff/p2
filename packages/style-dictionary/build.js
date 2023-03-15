// const StyleDictionary = require('style-dictionary')
const StyleDictionary = require('style-dictionary-utils')
const baseConfig = require('./config.json')
const { transform } = require('@divriots/style-dictionary-to-figma');
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')
const { w3cTokenJsonParser } = require('style-dictionary-utils/dist/parser/w3c-token-json-parser')

const transformer = StyleDictionary.transform['attribute/cti'].transformer;

const propertiesToCTI = {
  'width': {category: 'size', type: 'dimension'},
  'min-width': {category: 'size', type: 'dimension'},
  'max-width': {category: 'size', type: 'dimension'},
  'height': {category: 'size', type: 'dimension'},
  'min-height': {category: 'size', type: 'dimension'},
  'max-height': {category: 'size', type: 'dimension'},
  'border-width': {category: 'size', type: 'border', item: 'width'},
  'border-radius': { category: 'size', type: 'border', item: 'width' },
  'border-color': {category: 'color', type: 'border'},
  'background-color': {category: 'color', type: 'background'},
  'color': {category: 'color', type: 'font'},
  'text-color': { category: 'color', type: 'font' },
  'padding': {category: 'size', type: 'padding'},
  'padding-vertical': {category: 'size', type: 'padding'},
  'padding-horizontal': {category: 'size', type: 'padding'},
  'icon': {category: 'content', type: 'icon'},
  'font-size': {category: 'size', type: 'font'},
  'line-height': { category: 'size', type: 'line-height' },
  'size': {category: 'size', type: 'icon'}
}


const ApplyType = {
  type: 'type',
  transformer: (prop) => {
    if (props.path[0] !== 'component') {
      return prop.attributes.type || prop.path[0]
    } else {
      return transformer(prop)
    }
  }
}


const CTITransform = {
  type: `attribute`,
  transformer: (prop) => {
    // Only do this custom functionality in the 'component' top-level namespace.
    if (prop.path[0] === 'component') {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]];
    } else {
      // Fallback to the original 'attribute/cti' transformer
      return transformer(prop);
    }
  }
}



StyleDictionary.registerParser(w3cTokenJsonParser)

StyleDictionary.registerFormat({
  name: 'figmaTokensPlugin',
  formatter: ({ dictionary }) => {
    const transformedTokens = transform(dictionary.tokens);
    return JSON.stringify(transformedTokens, null, 2);
  },
});


// We can call .registerTransform here
// or apply the custom transform directly in the configuration below
//
StyleDictionary.registerTransform({
  name: 'attribute/cti',
  type: 'attribute',
  transformer: CTITransform.transformer
});
StyleDictionary.registerTransform({
  name: 'applyType',
  type: 'attribute',
  transformer: (prop) => {
    if (props.path[0] !== 'component') {
      return prop.attributes.type || prop.path[0]
    } else {
      return transformer(prop)
    }
  }
});


StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: token => {
    return (token.unit === 'pixel' || token.type === 'dimension') && token.value !== 0
  },
  transformer: token => {
    return `${token.value}px`
  }
})

StyleDictionary.registerTransform({
  name: 'size/percent',
  type: 'value',
  matcher: token => {
    return token.unit === 'percent' && token.value !== 0
  },
  transformer: token => {
    return `${token.value}%`
  }
})

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: StyleDictionary.transformGroup['css'].concat([
    'size/px',
    'size/percent'
  ])
})

StyleDictionary.registerTransformGroup({
  name: 'custom/less',
  transforms: StyleDictionary.transformGroup['less'].concat([
    'size/px',
    'size/percent'
  ])
})

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  transforms: StyleDictionary.transformGroup['less'].concat([
    'size/px',
    'size/percent'
  ])
})

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  transforms: StyleDictionary.transformGroup['less'].concat([
    'size/px',
    'size/percent'
  ])
})

StyleDictionary.registerFilter({
  name: 'validToken',
  matcher: function(token) {
    // return ['dimension', 'string', 'number', 'color'].includes(token.type)
    return typeof token.value !== 'object'
  }
})

StyleDictionary.registerFilter({
  name: 'isComponent',
  matcher: function(token) {
    return token.path[0] === 'component'
  },
})

StyleDictionary.registerFilter({
  name: 'prismTheme',
  matcher: function(token) {
    return ['typography','color'].includes(token.attributes.category)
  }
})

StyleDictionary.registerTransform({
  name: 'nakedDefaultKey',
  type: 'name',
  transformer: function(token, options) {
    return token.name.replace(/-default/, '')
  }
})



const SD = StyleDictionary.extend(baseConfig)
SD.buildAllPlatforms()
