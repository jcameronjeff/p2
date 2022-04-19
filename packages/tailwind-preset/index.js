
const defaultTheme = require('tailwindcss/defaultTheme')
/**
 * @name @prism2/tailwind-preset
 * @abstract Tailwind3 theme preset for fonts, colors, sizing and more based on PRISM design system.
 * @see https://www.figma.com/file/s6JUhCoI4VK6RGNyDFWc2z/%F0%9F%A7%B0-PRISM-Component-Library
 */
module.exports = {
  theme: {
    extend: {
      screens: {
        // source: https://prism.coxautoinc.com/foundation/grid/grid--usage
        xs: '480px',
        sm: '680px',
        md: '960px',
        lg: '1168px',
        xl: '1360px',
        '2xl': '1460px'
      },
      maxWidth: {
        // source: https://prism.coxautoinc.com/foundation/grid/grid--usage
        'xs': '24.5rem', // 392px
        'sm': '36.5rem', // 584px
        'md': '49rem', // 784px
        'lg': '61rem', // 976px
        'xl': '73rem', // 1168px
        '2xl': '85rem' // 1360px
      },
      fontFamily: {
        // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        alt: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        // source: https://prism.coxautoinc.com/foundation/colors/colors
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
        gray: {
          100: '#f6f6f6',
          200: '#eeeeee',
          300: '#dfe0e0',
          350: '#babcbe',
          400: '#babcbe',
          500: '#98999b',
          600: '#6a6a6a',
          700: '#5b5b5b',
          800: '#4a4a4a',
          900: '#333333',
        }
      },
      // This will set the color for `.border` out of the box.
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        // #babcbe
        DEFAULT: theme('colors.gray.400', 'currentColor'),
      }),
      borderOpacity: ({ theme }) => theme('opacity'),
      borderRadius: {
        'lg': '7px',
        'sm': '4px',
        'xs': '2px'
      },
      fontSize: {
        // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
        "xxs": '10px',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms')
  ],
}
