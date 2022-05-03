const Color = require('color');

// luminosity of grays
function getClosest(goal, counts) {
  let closest = counts.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  })
  return counts.indexOf(closest);
};

/**
 *
 * @param {string} hex - hex value of input color
 * @returns {Object} 10 shades of matching hue with scaled lightness.
 */
function makeScale(hex) {

  const gray = {
    50: '#f6f6f6',
    100: '#eeeeee',
    200: '#dfe0e0',
    300: '#babcbe',
    400: '#98999b',
    500: '#808080',
    600: '#6a6a6a',
    700: '#5b5b5b',
    800: '#4a4a4a',
    900: '#333333',
  }
  const luminosityMap = Object.values(gray)
    .map(i => Color(i).lightness().toFixed(1))

  // create Color object from input
  let base = Color(hex);
  // extract hue and saturation
  let [hue, sat, lum] = base.hsl().array()
  let selfIndex = getClosest(lum, luminosityMap);
  // map over them and apply our base luminosity.
  const output = {};

  luminosityMap.map((l, idx) => {
    let impliedColor = Color.hsl([hue, sat, parseInt(l)]);
    let val = idx === selfIndex ? hex : impliedColor.hex()
    let key = idx === 0 ? 50 : idx*100;
    Object.assign(output, {
      [key]: val
    })
  })
  return output;
}


const colors = {
  blue: makeScale('#005ba8'),
  sky: makeScale('#2c90cc'),
  navy: makeScale('#003468'),
  yellow: makeScale('#ffc20e'),
  amber: makeScale('#EB9114'),
  red: makeScale('#c33a00'),
  green: makeScale('#e3fad1'),
  emerald: makeScale('#0d8240'),
  teal: makeScale('#00aaa8'),
  fuschia: makeScale('#8c1d58')
}

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
