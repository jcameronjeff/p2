// plugins/button.js

const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, theme }) => {
  const buttonVariants = {
    base: {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme('colors.blue.500'),
      },
    },
    primary: {
      backgroundColor: theme('colors.blue.500'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.blue.600'),
      },
    },
    secondary: {
      backgroundColor: theme('colors.gray.500'),
      color: theme('colors.white'),
      '&:hover': {
        backgroundColor: theme('colors.gray.600'),
      },
    },
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      '&:hover': {
        backgroundColor: theme('colors.gray.300'),
      },
    },
  }

  const buttonSizes = {
    sm: {
      fontSize: '.875rem',
      padding: '.25rem .5rem',
    },
    md: {
      fontSize: '1rem',
      padding: '.5rem 1rem',
    },
    lg: {
      fontSize: '1.125rem',
      padding: '.75rem 1.5rem',
    },
  }

  const buttons = Object.entries(buttonVariants).reduce((acc, [variant, styles]) => {
    acc[`.btn-${variant}`] = styles
    Object.entries(buttonSizes).forEach(([size, sizeStyles]) => {
      acc[`.btn-${variant}.${size}`] = {
        ...styles,
        ...sizeStyles,
      }
    })
    return acc
  }, {})

  addComponents(buttons)
})