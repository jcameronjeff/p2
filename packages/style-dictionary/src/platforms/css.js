const css = {
  transformGroup: 'css',
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
