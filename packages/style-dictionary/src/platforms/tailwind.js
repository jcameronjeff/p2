const tailwind = {
  transforms: [
    'attribute/cti', 
    'name/cti/kebab', 
    'color/hsl', 
    'math/calc',
    'size/rem',
 ],
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
