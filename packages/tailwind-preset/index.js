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
      // This will set the color for `.border` out of the box.
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor'),
      }),
      borderOpacity: ({ theme }) => theme('opacity'),
      borderRadius: {
        'lg': '7px',
        'sm': '4px',
        'xs': '2px'
      },
      fontSize: {
        "xs": "12px",
        "sm": "14px",
        base: "16px",
        "lg": "18px",
        "xl": "20px",
        "2xl": "22px",
        "3xl": '26px',
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.blue.500', '#3b82f6'),
        ...theme('colors'),
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
