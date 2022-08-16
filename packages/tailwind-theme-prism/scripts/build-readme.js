const colors = require('../colors.json')
const fs = require('fs');
const path = require('path');

const palette = {
  ...colors,
  cerulean: colors.blue,
  sky: colors.blue,
  navy: colors.blue,
  amber: colors.orange,
  saffron: colors.orange,
  gold: colors.yellow,
  meadow: colors.green,
};

// Output raw markdown for our docs
const mdTable = Object.keys(palette).slice(2).map(hue => (
  Object.values(palette[hue]).map((v, i) => (
    `| .${hue}-${i}00 | ${v} | ![${v}](https://via.placeholder.com/15/${v.slice(1)}/000000?text=+) |`
  ))
)).flatMap(i => i).join('\n')


let head = `
### Manheim Theme Colors

| Token     | Hue     | Preview       |
| --------- | ------- | ------------- |`

const themeColors = [head,mdTable].join('\n')

const setup = `
### Quick Setup

Add the theme as a dependency

\`\`\`
pnpm add @prism2/tailwind-theme
\`\`\`

Then configure Tailwind to use it.

\`\`\`
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: require('@prism2/tailwind-theme)
  },
  plugins: []
}
\`\`\`
`

const sections = [setup, themeColors].join('\n') //?

fs.writeFile( path.resolve(__dirname, '../README.md'), sections, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("File written successfully\n");
    console.log(path.resolve(__dirname, '../README.md'))
  }
})

