const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
  spacing: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1.5rem',
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 0 0.4rem #babcbe',
    // DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
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
      400: '#808080',
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
    DEFAULT: theme('colors.gray.350', 'currentColor'),
  }),
  borderOpacity: ({ theme }) => theme('opacity'),
  borderRadius: {
    'lg': '7px',
    'sm': '4px',
    'xs': '2px'
  },
  fontSize: {
    // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
    "xxs": "10px",
    "xs": "12px",
    "sm": "14px",
    base: "16px",
    "lg": "18px",
    "xl": "20px",
    "2xl": "22px",
    "3xl": '26px',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
}
