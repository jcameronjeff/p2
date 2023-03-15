#!/usr/bin/env node

const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const prettier = require("prettier");
const { toRgba } = require("color2k");
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
const hexColors = require('@prism2/style-dictionary/build/js/colors-hex.cjs.js').default.color.palette


// rename all keys in an object to replace '/' with '-d-'
// Here we are denoting divsors as '2-d-3' instead of '2/3', '1-d-2' instead of '1/2', etc.
// This is because style-dictionary treats '12' and '1/2' as the same token
function renameKeys(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      acc[key.replace(/\//g, "-d-")] = renameKeys(value);
    } else {
      acc[key.replace(/\//g, "-d-")] = value;
    }
    return acc;
  }, {});
}

// convert all values in the theme object to an object with a key of "value" and a value of the original value
// this is so that we can use the "value" key in the template to get the value of the token
// in typescript, we can use the "value" key to get the type of the token
function convertValuesToObjects(obj) {
  let renamed = renameKeys(obj)
  return Object.entries(renamed).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      acc[key] = convertValuesToObjects(value);
    } else {
      acc[key] = { value };
    }
    return acc;
  }, {});
}


const { sizing, spacing, colors, borderRadius, borderWidth, opacity, boxShadow, fontFamily, fontWeight, lineHeight, fontSize, letterSpacing } = convertValuesToObjects(theme)

const designTokenMeta = {
    sizing: {
      "type": "sizing",
      ...spacing
    },
    padding: {
      "type": "sizing",
      ...spacing,
    },
    margin: {
      "type": "sizing",
      ...spacing,
    },
    spacing: {
      "type": "sizing",
      ...spacing,
    },
    color: {
      "type": "color",
      ...colors
    },
    borderRadius,
    borderWidth,
    opacity: {
      type: "opacity",
      ...opacity,
    },
    boxShadow: {
      type: "boxShadow",
      ...boxShadow,
    },
    fontFamily: {
      type: 'typography',
      ...fontFamily,
    }, fontWeight: {
      type: 'typography',
      ...fontWeight,
    }, lineHeight: {
      type: 'typography',
      ...lineHeight,
    },
    fontSize: {
      type: 'typography',
      ...fontSize,
    },
    letterSpacing: {
      type: 'typography',
      ...letterSpacing,
    }
}



const designTokenStr = JSON.stringify(designTokenMeta, null, 2);
const themeStr = JSON.stringify(theme, null, 2);

let allColors = Object.entries(hexColors).map(([name, value]) => {
  if (name === 'prism') return;
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
    return `| ${token} | ${hex} | ${toRgba(hex)} | ${img} |`
  })

  const tableMd = `
  | token | hex | rgba | sample |
  | ----- | --- | ---- | ------ |
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

  try {
    // write the file to src/theme.js after
    // having prettier format the string for us
    fs.writeFileSync(
      path.resolve(process.cwd(), "./generated/tokens.json"),
      prettier.format(designTokenStr, { parser: "json" }),
      "utf-8"
    );
  } catch (err) {
    // uh-oh, something happened here!
    console.log(err.message);
  }

}

generateColorTable()
main()
