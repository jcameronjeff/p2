const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options = { prefix: undefined }) {
  return function ({ addBase, addComponents, theme }) {
    const prefix = options.prefix === undefined ? 'prism-' : options.prefix
    addComponents({ // Headings -------------------------
      [`*[class*=${prefix}heading-], .${prefix}heading`]: {
        color: theme('colors.headings'),
      },
      [`.${prefix}heading-1`]: {
        fontFamily: theme('fontFamily.alt'),
        fontSize: theme('fontSize.3xl'),
        fontWeight: theme('fontWeight.bold'),
        textTransform: 'uppercase'
      },
      [`.${prefix}heading-2`]: {
        color: theme('colors.headings'),
        fontSize: theme('fontSize.2xl'),
        fontWeight: theme('fontWeight.medium'),
      },
      [`.${prefix}heading-3`]: {
        fontSize: theme('fontSize.xl'),
        fontWeight: theme('fontWeight.normal'),
      },
      [`.${prefix}heading-4`]: {
        fontSize: theme('fontSize.lg'),
        fontWeight: theme('fontWeight.light'),
      },
      [`.${prefix}heading-5`]: {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.bold'),
      },
      [`.${prefix}heading-6`]: {
        fontSize: theme('fontSize.xs'),
        textTransform: 'uppercase',
        fontWeight: theme('fontWeight.semibold'),
      },
      [`*[class^=${prefix}caption]`]: {
        color: theme('colors.gray.400'),
      },
      [`.${prefix}caption, .${prefix}caption-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.lg'),
      },
      [`.${prefix}caption-xs`]: {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.base'),
      },
      [`*[class^=${prefix}prose]`]: {
        color: theme('colors.body'),
        '--tw-space-y-reverse': '0!important',
        '--tw-prose-rhythm': theme('spacing[4]'),
        '>:not([hidden])~:not([hidden])': {
          'margin-bottom': "calc(var(--tw-prose-rhythm)*var(--tw-space-y-reverse))!important",
          "margin-top": "calc(var(--tw-prose-rhythm)*(1 - var(--tw-space-y-reverse)))!important"
        }
      },
      [`.${prefix}prose`]: {
        fontSize: theme('fontSize.base'),
        lineHeight: theme('fontSize.2xl'),
      },
      [`.${prefix}prose-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.xl')
      },
      [`.${prefix}prose-xs`]: {
        '--tw-prose-rhythm': theme('spacing.2'),
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.lg')
      },
      [`.${prefix}prose-xxs`]: {
        '--tw-prose-rhythm': theme('spacing[1.5]'),
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('fontSize.md')
      },
      [`*[class*=${prefix}link]`]: {
        color: theme('colors.cerulean-dark'),
      },
      [`.${prefix}link`]: {
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.medium')
      },
      [`.${prefix}link-sm`]: {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium')
      },
      [`.${prefix}link-xs`]: {
        fontSize: theme('fontSize.xs'),
        fontWeight: theme('fontWeight.normal'),
        textDecoration: 'underline'
      },
      [`.${prefix}link-xxs`]: {
        fontSize: theme('fontSize.xxs'),
        color: theme('colors.gray.400'),
        textDecoration: 'underline'
      },
      [`*[class^=${prefix}list]`]: {
        listStyle: 'disc',
        listStylePosition: 'inside',
        paddingLeft: theme('spacing.4'),
        'li > ul, li > ol': {
          paddingTop: theme('spacing[0.5]')
        }
      },
      [`.${prefix}def`]: {
        'dt' : {
          fontSize: theme('fontSize.xs'),
          color: theme('colors.muted')
        } ,
        'dd' : {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('fontSize.lg')
        },
        'dd + dt': {
          marginTop: theme('spacing.2')
        }
      },

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

      [`.${prefix}table, .prism table`]: {
        ['tr,td,thead,th']: {
          borderColor: theme('colors.gray.350'),
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: theme('spacing.2')
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
      [`*[class^=${prefix}btn]`]: {
        fontWeight: theme('fontWeight.bold'),
        textTransform: 'uppercase',
        borderRadius: theme('borderRadius.sm'),
      },
      [`.${prefix}btn`]: {
        padding: theme('spacing[2.5]'),
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.4'),
        backgroundColor: 'transparent',
        color: theme('colors.cerulean-dark'),
        outline: 'none',
        border: 'none',
        borderColor: 'transparent',
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
