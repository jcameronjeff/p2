const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options = { prefix: undefined }) {
  return function ({ addBase, addComponents, theme }) {
    const prefix = options.prefix === undefined ? 'prism-' : options.prefix
    addComponents({
      // Labels ------------------------------------
      [`.${prefix}label`]: {
        fontSize: theme('fontSize.sm'),
        color: theme('colors.gray.400'),
      },
      [`.${prefix}label-xs`]: {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.gray.400'),
      },
      // Links ------------------------------------
      [`.${prefix}link`]: {
        fontSize: theme('fontSize.base'),
        color: theme('colors.cerulean-dark'),
        fontWeight: theme('fontWeight.medium')
      },
      [`.${prefix}link-sm`]: {
        fontSize: theme('fontSize.sm'),
        color: theme('colors.cerulean-dark'),
        fontWeight: theme('fontWeight.medium')
      },
      [`.${prefix}link-xs`]: {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.cerulean-dark'),
        fontWeight: theme('fontWeight.normal'),
        textDecoration: 'underline'
      },
      [`.${prefix}link-xxs`]: {
        fontSize: theme('fontSize.xxs'),
        color: theme('colors.gray.400'),
        textDecoration: 'underline'
      },
      // Prose (Body Text) --------------------------
      [`.${prefix}prose`]: {
        fontSize: theme('fontSize.base'),
        lineHeight: theme('fontSize.xl')
      },
      [`.${prefix}prose-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.lg')
      },
      [`.${prefix}prose-xs`]: {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.base')
      },
      [`.${prefix}prose-xxs`]: {
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('fontSize.sm')
      },
      // Tables ------------------------------------
      [`.${prefix}table`]: {
        ['tr,td,thead,th']: {
          borderColor: theme('colors.gray.350'),
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: theme('spacing.3')
        },
        'th': {
          backgroundColor: theme('colors.navy'),
          borderColor: theme('colors.navy'),
          color: theme('colors.white'),
          borderWidth: '1px',
          borderStyle: 'solid',
        },
        'caption,tfoot': {
          fontStyle: 'italic',
          padding: theme('spacing.2'),
          color: theme('colors.gray.500'),
          fontSize: theme('fontSize.sm')
        }
      },
      // Input Box ---------------------------------
      [`.${prefix}input`]: {
        borderColor: theme('colors.gray.350'),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme('borderRadius.xs'),
        outline: 'none',
        backgroundColor: theme('colors.white'),
        padding: theme('spacing[2.5]'),
        fontSize: theme('fontSize.base'),
        '&::placeholder': {
          color: theme('colors.gray.400')
        },
        '&:focus': {
          boxShadow: theme('boxShadow.md'),
          outline: 'none'
        }
      }
    })
  }
})
