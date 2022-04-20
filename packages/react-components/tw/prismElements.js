const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options = { prefix: undefined }) {
  return function ({ addBase, addComponents, theme }) {
    const prefix = options.prefix === undefined ? 'prism-' : options.prefix
    addComponents({

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
        lineHeight: theme('fontSize.2xl')
      },
      [`.${prefix}prose-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.xl')
      },
      [`.${prefix}prose-xs`]: {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.lg')
      },
      [`.${prefix}prose-xxs`]: {
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('fontSize.md')
      },
      // Lists -------------------------------------
      [`.${prefix}combobox`]: {
        borderRadius: theme('borderRadius.xs'),
        position: 'relative',
        '&:focus-within': {
          boxShadow: theme('boxShadow.DEFAULT'),
        },
        [`.${prefix}input`]: {
          width: '100%'
        }
      },
      [`.${prefix}menu`]: {
        width: '100%',
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.xs'),
        boxShadow: theme('boxShadow.sm'),
        borderWidth: theme('borderWidth.DEFAULT'),
        marginTop: '-1px'
      },

      [`.${prefix}menu-item, ${prefix}menu option`]: {
        padding: theme('spacing.2'),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme('spacing.2'),
        backgroundColor: theme('colors.white'),
        color: theme('colors.gray.700'),
        '&.active, &:hover': {
          backgroundColor: theme('colors.navy'),
          color: theme('colors.white')
        },
        '&.selected': {
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.black')
        }
      },
      // Tables ------------------------------------
      [`.${prefix}table, .prism table`]: {
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
      // Buttons -----------------------------------
      [`.${prefix}btn`]: {
        padding: theme('spacing[2.5]'),
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.4'),
        backgroundColor: 'transparent',
        color: theme('colors.cerulean-dark'),
        outline: 'none',
        border: 'none',
        fontWeight: theme('fontWeight.bold'),
        textTransform: 'uppercase',
        borderColor: 'transparent',
        borderRadius: theme('borderRadius.sm'),
        whiteSpace: 'nowrap',
        textOverflow: 'ellipses',
        overflow: 'hidden',
        cursor: 'pointer',

        '&.outline': {
          borderColor: theme('colors.cerulean-dark'),
          outlineWidth: '1px',
        },
        '&.fill': {
          backgroundColor: theme('colors.navy'),
          color: theme('colors.white'),
        },
        '&:hover:not(:disabled):not([type="submit"]), &.active': {
          backgroundColor: theme('colors.cerulean-light'),
          color: theme('colors.cerulean-dark')
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: theme('colors.gray.700'),
          color: theme('colors.white')
        },
        '&[type="submit"]': {
          backgroundColor: theme('colors.gold'),
          color: theme('colors.gray.900'),
          '&:hover': {
            backgroundColor: theme('colors.gold-dark')
          }
        }
      },
      // Labels ------------------------------------
      [`.${prefix}label, .${prefix}form-control`]: {
        fontSize: theme('fontSize.sm'),
        color: theme('colors.gray.400'),
        display: 'flex',
        flexDirection: 'column',
        '&.inline': {
          flexDirection: 'row',
          gap: theme('spacing.2')
        }
      },
      [`.${prefix}label-xs`]: {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.gray.400'),
      },
      // Input Box ---------------------------------
      [`.${prefix}select`]: {
        borderColor: theme('colors.gray.350'),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme('borderRadius.xs'),
        outline: 'none',
        backgroundColor: theme('colors.white'),
        padding: theme('spacing[2.5]'),
        backgroundPositionY: '-40px'
      },
      [`.${prefix}input, ${prefix}select, .prism input:not([type='button']):not([type='submit']):not([type='reset'])`]: {
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
          boxShadow: theme('boxShadow.sm'),
          outline: 'none'
        }
      }
    })
  }
})
