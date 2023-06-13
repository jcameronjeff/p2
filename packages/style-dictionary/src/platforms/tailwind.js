const tailwind = {
  transforms: [
    'attribute/cti', 
    'name/cti/kebab', 
    'color/hsl', 
    'math/calc',
    'math/eval',
    'ts/shadow/css/shorthand'
  ],
  basePxFontSize: 10,
  buildPath: 'build/tailwind/',
  files: [{
    destination: 'base.js',
    format: 'javascript/tailwind',
    options: {
      outputReferences: true
    }
  }],
}

module.exports = tailwind
