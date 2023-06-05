const plugin = require('tailwindcss/plugin');
const twPlugins = require('./src/index')


module.exports = Object.entries(twPlugins).reduce((acc, cur) => {
  const [name, fn] = cur

  acc.fn[name] = fn
  acc.plugins.push(plugin(fn))

  return acc
}, { plugins: [], fn: {} })
