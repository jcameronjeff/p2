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
    4: '1rem',
    5: '1.5rem'
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
  colors: ({ theme }) => ({
    // source: https://prism.coxautoinc.com/foundation/colors/colors
    'accent': '#ff5ba8',
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
    amber: {
      50: '#fef8f1', // L 97
      100: '#fdf2e3',  // L 94
      200: '#f9e0bd', // L 86
      300 : '#f4c685', // L 74
      400 : '#efa743', // L 60
      500: '#eb9114', // base - hsl(203, 65%, 49%)
      600: '#b77110', // dark - hsl(203, 64%, 39%)
      700: '#965d0d', // L 32%
      800: '#7f4e0b', // 	 hsl(203, 65%, 27%)
      900: '#633d09' // 	hsl(203, 80%, 24%)
    },
    red: {
      50: '#fff4f0',
      100: '#ffeae0',
      200: '#ffd4c2',
      300: '#ffa27a',
      400: '#ff5e1a',
      500: '#fa4b00',
      600: '#c33a00',
      700: '#a33100',
      800: '#902b00', // L 28
      900: '#661f00'
    },
    blue: {
      50: '#f0f8ff',
      100: '#e0f1ff',
      200: '#b8dfff',
      300: '#7ac3ff',
      400: '#33a3ff',
      500: '#0089fa',
      600: '#006dc7',
      700: '#005ba8', // hsl (207, 100, 33)
      800: '#004986', // L 26,
      900: '#003866' // L 20
    },
     navy: {
       50: '#f0f8ff',
      100: '#e0f0ff',
      200: '#c2e1ff', // gold-light - hsl(209, 100%, 88%)
      300: '#7abfff', // hsl(209, 100%, 74%)
      400: '#0f8bff', // gold	hsl(209, 100%, 53%)
      500: '#0081fa',
      600: '#0067c7', // (209, 100, 39)
      700: '#0054a3', // (209, 100, 32)
      800: '#003468', // (209, 100, 27)
      900: '#001b35' //hsl(209, 100%, 10%)
     },
     gold: {
      50: '#fffbf0',
      100: '#fff7e0',
      200: '#fff0c3', // gold-light - hsl(45, 100%, 88%)
      300: '#ffde7a', // hsl(45, 100%, 74%)
      400: '#ffc20e', // gold	hsl(45, 100%, 53%)
      500: '#ebb000',
      600: '#c79500', // (45, 100, 39)
      700: '#a37a00', // (45, 100, 32)
      800: '#8a6700', // (45, 100, 27)
      900: '#664d00', // (45, 100, 20)
    },
    sky: {
      50: '#f2f9fc', // L 97
      100: '#e6f2fa',  // L 94
      200: '#c1dff2', // L 86
      300 : '#92c7e8', // L 74
      400 : '#57a8db', // L 60
      500: '#2c90cc', // base - hsl(203, 65%, 49%)
      600: '#2372a2', // dark - hsl(203, 64%, 39%)
      700: '#1d5e87', // L 32%
      800: '#184f72', // 	 hsl(203, 65%, 27%)
      900: '#154665' // 	hsl(203, 80%, 24%)
    },
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
    },
    cerulean: theme.colors.sky,
    headings: theme.colors.sky['700'],
    links: theme.colors.sky['700'],
    body: theme.colors.gray['800'],
    muted: theme.colors.gray['400'],
  }),
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
    xxs: ['10px', { lineHeight: '13px'}],
    xs: ['12px', { lineHeight: '15px' }],
    sm: ['14px', { lineHeight: '18px' }],
    base: ['16px', { lineHeight: '20px' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }],
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
