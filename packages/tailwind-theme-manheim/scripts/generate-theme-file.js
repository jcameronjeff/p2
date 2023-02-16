#!/usr/bin/env node

const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const prettier = require("prettier");
const path = require("path");
// bring in the Tailwind config
const tailwindConfig = {
  theme: {
    extend: require('../index'),
    container: {
      center: true
    }
  },
}

const { theme } = resolveConfig(tailwindConfig);
const themeStr = JSON.stringify(theme, null, 2);

let allColors = Object.entries(theme.colors).map(([name, value]) => {
  if (value && typeof value === 'object') {
    return Object.entries(value).map(([luma, hex]) => {
      return [ `${name}-${luma}`, hex ]
    })
  }
  return null
}).filter(Boolean).flat()




function generateColorTable() {

  let mdColorTable = allColors.map((i) => {
    let [token, hex] = i
    let img = `![${hex}](https://via.placeholder.com/15/${hex.slice(1)}/000000?text=+)`
    return `| ${token} | ${hex} | ${img} |`
  })

  const tableMd = `
  | token | hex | sample |
  | ----- | --- | ------ |
  ${mdColorTable.join('\n')}
  `

  try {
    // write the file to src/theme.js after
    // having prettier format the string for us
    fs.writeFileSync(
      path.resolve(process.cwd(), "./generated/color-table.md"),
      prettier.format(tableMd, { parser: "markdown" }),
      "utf-8"
    );
  } catch (err) {
    // uh-oh, something happened here!
    console.log(err.message);
  }
}

function main() {

  const js = `
  const theme  = ${themeStr}

  export default theme
  `;


  try {
    // write the file to src/theme.js after
    // having prettier format the string for us
    fs.writeFileSync(
      path.resolve(process.cwd(), "./generated/theme.js"),
      prettier.format(js, { parser: "babel" }),
      "utf-8"
    );
  } catch (err) {
    // uh-oh, something happened here!
    console.log(err.message);
  }


  try {
    // write the file to src/theme.js after
    // having prettier format the string for us
    fs.writeFileSync(
      path.resolve(process.cwd(), "./generated/theme.json"),
      prettier.format(themeStr, { parser: "json" }),
      "utf-8"
    );
  } catch (err) {
    // uh-oh, something happened here!
    console.log(err.message);
  }

}

generateColorTable()
main()
