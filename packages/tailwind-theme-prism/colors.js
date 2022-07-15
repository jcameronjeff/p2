const Color = require('color');

/**
 * @name getClosest
 * @abstract Given a number, returns the index of the nearest value in a range.
 * @param {number} num - any number
 * @param {number[]} range - an array of numbers
 * @returns {number}
 */

  function getClosest(num, range) {
    let closest = range.reduce((prev, curr) => {
      return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
    })
    return range.indexOf(closest);
  };

/**
 * @name makeScale
 * @abstract Extracts the hue+saturation of a given hex color and
 * returns an array of hex values with the same hue+saturation scaled
 * across 10 luminostiy values. The provided hex value will be inserted
 * to the closest luminostiry step, replacing the generated value.
 * @param {string} hex - hex value of input color
 * @returns {Object} 10 shades of matching hue with scaled lightness.
 */
const gray = {
      // 50: '#f6f6f6',
      // 100: '#eeeeee',
      // 200: '#dfe0e0',
      // 300: '#babcbe',
      // 400: '#98999b',
      // 500: '#808080',
      // 600: '#6a6a6a',
      // 700: '#5b5b5b',
      // 800: '#4a4a4a',
      // 900: '#333333',
      // https://www.figma.com/file/jMD7uT6CNr2fxIuHb8ClYU/Winnie-Playground?node-id=1933%3A19218
      50: '#F4F4F4',
      100: '#E3E3E3',
      200: '#CCCCCC',
      300: '#B2B2B2',
      400: '#999999',
      500: '#828282',
      600: '#6D6D6D',
      700: '#5A5A5A',
      800: '#4A4A4A',
      900: '#333333',
    }
  function makeScale(hex) {
    // reference colors

    // hsl lightness of each value.
    const luminosityMap = Object.values(gray)
      .map(i => Color(i).lightness().toFixed(1))

    // create Color object from input
    let base = Color(hex);
    // extract hue and saturation
    let [hue, sat, lum] = base.hsl().array()
    // where does the provided color go on our output list?
    let selfIndex = getClosest(lum, luminosityMap);
    // map over them and apply our base luminosity.
    const output = {};
    luminosityMap.map((l, idx) => {
      // get a hex color by combining our base hue+saturation with this luminosity step
      let impliedColor = Color.hsl([hue, sat, parseInt(l)]);
      // insert the provided color instead if this is the nearest match luminosity.
      let val = idx === selfIndex ? hex : impliedColor.hex()
      // Hack to start at 50 then iterate by 100.
      let key = idx === 0 ? 50 : idx*100;
      Object.assign(output, {
        [key]: val
      })
    })
    return output;
  }

/**
 * Create an object with contrast ranges of our base colors.
 */
const colors = {
  // blue: makeScale('#005ba8'),
  // https://www.figma.com/file/jMD7uT6CNr2fxIuHb8ClYU/Winnie-Playground?node-id=1933%3A19218
  blue: {
    50: '#F2F4FA',
    100: '#DDE2F1',
    200: '#C3CCE6',
    300: '#A4B2D9',
    400: '#8399CB',
    500: '#6282BF',
    600: '#406DB3',
    700: '#005ba8', // <-- brand color, formula: '#045BA8',
    800: '#004986', // <-- brand color, formula: '#134A88',
    900: '#003468',// <-- brand color, formula: '#18345B',
    1000: '#001b35' // <-- prism navy-dark
  },
  // yellow: {
  //   50: '#FFF0C3', // formula, '#FFF3D6',
  //   100: '#FFDF93',
  //   200: '#FFC20E', // formula, #FFC318
  //   300: '#EBB000', // formula #E0AA15
  //   400: '#C09218',
  //   500: '#A37C19',
  //   600: '#896819',
  //   700: '#715718',
  //   800: '#5D4716',
  //   900: '#403113',
  // },
  // sky: makeScale('#2c90cc'),
  sky: {
    50: '#EFF4FA',
    100: '#C1DFF2', // formula: #D5E4F3
    200: '#B4CFEA',
    300: '#8BB7DF',
    400: '#5B9FD4',
    500: '#2c90cc', // formula: #2C89C2
    600: '#2372A2', // formula: #2B73A2
    700: '#285F85',
    800: '#244D6B',
    900: '#1E3649'
  },
  gray,
  navy: makeScale('#013468'),
  yellow: {
    ...makeScale('#ffc20e'),
    600: '#ebb000'
  },
  amber: makeScale('#EB9114'),
  red: makeScale('#c33a01'),
  red: {
    50: '#FFF1EC',
    100: '#FDDCD0',
    200: '#F8C0AA',
    300: '#EF9F80',
    400: '#E27E57',
    500: '#D45E31',
    600: '#C53F07',
    700: '#A53305',
    800: '#852C09',
    900: '#5B220B',
  },
  green: makeScale('#e3fad1'),
  emerald: makeScale('#0d8240'),
  teal: makeScale('#01aaa8'),
  fuschia: makeScale('#8c1d58')
}

/**
 * Re-export our colors with a few aliased names
 */
const extendedColors = {
  ...colors,
  cerulean: colors.sky,
  saffron: colors.amber,
  gold: colors.yellow,
  meadow: colors.green,
  jungle: colors.emerald,
  ocean: colors.teal
}

module.exports = {
  colors, extendedColors
}
