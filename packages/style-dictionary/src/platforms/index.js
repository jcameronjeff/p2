const StyleDictionary = require('style-dictionary')
const css = require('./css')
const scss = require('./scss')
const tailwind = require('./tailwind')

const platforms = { css, scss, tailwind }

const buildPlatform = ({ name, dest, transforms }) => {
  const p = JSON.parse(JSON.stringify(platforms[name] || {}))

  if (transforms) {
    let ts = []

    if (p.transformGroup) {
      const transformsByGroup = StyleDictionary.transformGroup[p.transformGroup] || []
      ts = [...transformsByGroup]
    }

    if (p.transforms) {
      ts = [...ts, ...p.transforms]
    }

    p.transforms = [...ts, ...transforms]
  }

  p.files = p.files.map((file) => ({ ...file, destination: dest }))
  return p
}

module.exports = { ...platforms, platforms, buildPlatform }
