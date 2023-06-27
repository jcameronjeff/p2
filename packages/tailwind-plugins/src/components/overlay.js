const plugin = require('tailwindcss/plugin');
const name = 'overlay'

const overlayPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      backgroundColor: theme('backgroundColor.dim'),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.8,
    }
  })
}

module.exports = {
  name,
  fn: overlayPlugin,
  plugin: plugin(overlayPlugin)
}
