const twPlugins = require('./src');

module.exports = Object.values(twPlugins).reduce((acc, cur) => {
  const { name, fn, plugin } = cur

  acc.fn[name] = fn
  acc.plugins.push(plugin)

  return acc
}, { plugins: [], fn: {} })
