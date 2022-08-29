/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */


const extend = {
  fontFamily: {
    sans: ['Arial'],
    alt: ['Georgia']
  },
  fontSize: {
    xs: '9px',
    sm: '10px',
    base: '13px',
    lg: '15px',
    xl: '15px',
    '2xl': '27px',
    '3xl': '40px',
    '4xl': '55px'
  },
  padding: {
    "2": '20px',
    "4": "60px",
  },
  borderRadius: {
    sm: '20px',
    lg: '2px',
    xl: '2px',
    full: '5px'
  },
  rotate: {
    1: 0,
    2: 0,
    3: 0
  },
  width: {
    'icon': '48px'
  },
  colors: (theme) => ({
    blue: theme.colors.green,
    navy: theme.colors.green,
    slate: theme.colors.purple,
    gray: theme.colors.violet,
    gold: theme.colors.purple,
    white: '#fef',
    cx: theme.colors.red['300'],
    black: '#234'
  })
}



module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/react-components/src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/ui-shared/*.tsx'
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ],
  theme: {
    // extend: {
    //   width: {
    //     'icon': '25px'
    //   }
    // }
    // extend
  }

}
