const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./colors.json');


module.exports = {
  colors: ({ theme }) => ({
    // source: https://prism.coxautoinc.com/foundation/colors/colors
    ...colors,
    gold: colors.yellow,
  }),
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
    4: '1rem',
    5: '1.25rem'
  },
  boxShadow: {
    // DEFAULT: '0 0 0.4rem #babcbe',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none',
  },
  fontFamily: {
    // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
    sans: ['Roboto Flex', 'Roboto', ...defaultTheme.fontFamily.sans],
    alt: ['Roboto Flex',  ...defaultTheme.fontFamily.sans],
    serif: ['Merriweather', 'serif'],
  },

  // This will set the color for `.border` out of the box.
  borderColor: ({ theme }) => ({
    ...theme('colors'),
    // #babcbe
    DEFAULT: theme('colors.gray.300', 'currentColor'),
  }),
  // @TODO - Tese are pretty tight.
  borderWidth: ({ theme }) => ({
    ...theme.borderWidth,
    DEFAULT: '1px',
    '1.5': '1.5px',
    2: '2px'
  }),
  borderOpacity: ({ theme }) => theme('opacity'),
  borderRadius: {
    'xs': '2px',
    'sm': '4px',
    base: '6px',
    'lg': '8px',
    'xl': '12px',
    '2xl': '16px',
    '3xl': '24px',
  },
  fontSize: ({ theme }) => ({
    // source: https://prism.coxautoinc.com/foundation/typography/typography--usage
    xxs: ["0.625rem", { lineHeight: theme('lineHeight.snug')}],
    xs: ["0.75rem", { lineHeight: theme('lineHeight.snug') }],
    sm: ["0.875rem", { lineHeight: theme('lineHeight.normal') }],
    base: ["16px", { lineHeight: theme('lineHeight.normal') }],
    lg: ["1.125rem", { lineHeight: theme('lineHeight.normal') }],
    xl: ["1.25rem", { lineHeight: theme('lineHeight.normal') }],
    '2xl': ["1.375rem", { lineHeight: theme('lineHeight.normal') }],
    '3xl': ['1.75rem', { lineHeight: theme('lineHeight.normal') }],
    '4xl': ['2.25rem', { lineHeight: theme('lineHeight.snug') }],
    '5xl': ['3rem', { lineHeight: theme('lineHeight.snug') }],
    '6xl': ['3.75rem', { lineHeight: theme('lineHeight.snug') }],
    '7xl': ['4.5rem', { lineHeight: theme('lineHeight.snug') }],
    '8xl': ['6rem', { lineHeight: theme('lineHeight.tight') }],
    '9xl': ['8rem', { lineHeight: theme('lineHeight.tight') }],
  }),
  lineHeight: {
    none: '1',
    tight: '1.15',
    snug: '1.20',
    normal: '1.25',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.01em',
    normal: '0em',
    wide: '0.02em',
    wider: '0.04em',
    widest: '0.1em',
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
}
