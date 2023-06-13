const figma = {
  transforms: [
    'attribute/cti', 
    'name/cti/kebab',
    'name/replace',
    'color/hex', 
    'math/calc',
    'math/eval',
  ],
  buildPath: 'build/figma/',
  files: [{
    destination: 'base.json',
    format: 'json/flat-schema',
    // format: 'json/schema',
    options: {
      outputReferences: true,
      schema: ['value', 'type', 'description'],
    }
  }],
  basePxFontSize: 10,
  nameReplace: [
    {
      matcher: (token) => /^color-/.test(token.name),
      replace: (token) => token.name.replace(/^color-/, '')
    },
    {
      matcher: (token) => /^space-font-leading-/.test(token.name),
      replace: (token) => token.name.replace(/^space-font-leading-/, 'leading-')
    },
    {
      matcher: (token) => /^space-font-tracking-/.test(token.name),
      replace: (token) => token.name.replace(/^space-font-tracking-/, 'tracking-')
    },
    {
      matcher: (token) => /^style-font-family-/.test(token.name),
      replace: (token) => token.name.replace(/^style-font-family-/, 'font-')
    },
    {
      matcher: (token) => /^style-font-decoration-/.test(token.name),
      replace: (token) => token.name.replace(/^style-font-decoration-/, 'decoration-')
    },
    {
      matcher: (token) => /^style-font-transform-/.test(token.name),
      replace: (token) => token.name.replace(/^style-font-transform-/, 'transform-')
    },
  ]
}

module.exports = figma
