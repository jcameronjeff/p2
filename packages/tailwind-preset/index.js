const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        alt: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        accent: '#ff5ba8',
        'navy': '#003468',
        'navy-dark': '#001b35',
        'primary': '#005ba8',
        'primary-dark': '#004986',
        'cerulean-light': '#c1dff2',
        'cerulean': '#2c90cc',
        'cerulean-dark': '#2372a2',
        'gold-light': '#fff0c3',
        'gold': '#ffc20e',
        'gold-dark': '#ebb000',
        'meadow-light': '#e3fad1',
        'scarlet-light': '#fcccc0',
      },
      borderRadius: {
        'lg': '7px',
        'sm': '4px',
        'xs': '2px'
      },
      fontSize: {
        "3xl": '26px',
        "2xl": "22px",
        "xl": "20px",
        "lg": "18px",
        base: "16px",
        "sm": "14px",
        "xs": "12px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
