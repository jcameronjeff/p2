const css = {
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'color/css',
    'math/calc',
    'math/eval',
    'ts/shadow/css/shorthand',
  ],
  // transformGroup: 'css',
  buildPath: 'build/css/',
  files: [{
    destination: 'base.css',
    format: 'css/variables',
    options: {
      outputReferences: true
    }
  }],
}

module.exports = css
