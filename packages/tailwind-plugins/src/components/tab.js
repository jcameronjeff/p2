const plugin = require('tailwindcss/plugin');

const tabPlugin = function({ addComponents, theme }) {
  addComponents({
    '.int-tab': {
      alignItems: 'center',
      appearance: 'none',
      backgroundColor: 'var(--int-tab-background-color, transparent)',
      borderColor: 'var(--int-tab-border-color, transparent)',
      borderRadius: 'var(--int-tab-border-radius, 0)',
      borderBlockWidth: `var(--int-tab-border-block-width, ${theme('borderWidth.md')})`,
      borderInlineWidth: `var(--int-tab-border-inline-width, 0)`,
      boxSizing: 'border-box',
      color: `var(--int-tab-color, var(--on-surface-primary, ${theme('colors.blue.700')}))`,
      cursor: 'pointer',
      display: 'inline-flex',
      flexDirection: 'var(--int-tab-flex-direction)',
      flexShrink: '0',
      fontSize: 'var(--int-tab-font-size)',
      fontWeight: 'var(--int-tab-font-weight)',
      justifyContent: 'center',
      lineHeight: 'var(--int-tab-line-height)',
      marginBlock: 'var(--int-tab-margin-y, 0)',
      marginInline: 'var(--int-tab-margin-x, 0)',
      marginInlineStart: `var(--int-tab-margin-x, ${theme('spacing.1')})`,
      outline: '0',
      overflow: 'hidden',
      paddingBlock: `var(--int-tab-padding-y, ${theme('spacing.2')})`,
      paddingInline: `var(--int-tab-padding-x, ${theme('spacing.2')})`,
      position: 'relative',
      textAlign: 'var(--int-tab-text-align)',
      textDecoration: 'var(--int-tab-text-decoration, none)',
      textTransform: 'var(--int-tab-text-transform)',
      userSelect: 'none',
      verticalAlign: 'middle',
      '&:last-of-type': {
        marginInlineEnd: `var(--int-tab-margin-x, ${theme('spacing.1')})`
      },
      '&[aria-selected="true"]': {
        '--int-tab-color': `var(--int-tab-selected-color, ${theme('colors.black')})`,
        borderBlockEndColor: `var(--int-tab-selected-border-color, ${theme('colors.black')})`
      },
      '&:not([aria-selected=true]):not([disabled]):hover': {
        '--int-tab-background-color': `var(--int-tab-hover-background-color, ${theme('colors.blue.50')})`
      },
      '&[disabled]': {
        '--int-tab-color': `var(--int-tab-disabled-color, ${theme('colors.gray.400')})`,
        cursor: 'var(--int-tab-disabled-cursor, not-allowed)'
      }
    },
    '.int-tabs-container': {
      alignItems: 'stretch',
      borderBlockEndWidth: 'var(--int-tab-container-border-block-end-width, 1px)',
      borderBlockEndStyle: 'var(--int-tab-container-border-block-end-style, solid)',
      borderBlockEndColor: `var(--int-tab-container-border-block-end-color, ${theme('colors.gray.300')})`,
      display: 'flex',
      position: 'relative'
    },
    '.int-tabs-content-container': {
      paddingInline: 'var(--int-tabs-content-container-padding-inline, 0)',
      paddingBlock: `var(--int-tabs-content-container-padding-block, ${theme('spacing.4')})`
    },
    '.int-tabs-scroller': {
      display: 'flex',
      overflowX: 'auto'
    },
    [`.int-tabs-overflow-prev, .int-tabs-overflow-next`]: {
      backgroundColor: `var(--int-tabs-prevnext-background-color, ${theme('colors.white')})`,
      borderRadius: '50%',
      borderWidth: 'var(--int-tabs-prevnext-border-width, 0)',
      boxShadow: `var(--int-tabs-prevnext-box-shadow, ${theme('boxShadow.md')})`,
      padding: `var(--int-tabs-prevnext-padding, ${theme('spacing.2')})`,
      position: 'absolute',
      display: 'flex',
      alignSelf: 'center',
      'svg' : {
        color: `var(--int-tabs-prevnext-icon-color, ${theme('colors.blue.700')})`
      }
    },
    '.int-tabs-overflow-prev': {
      left: `var(--int-tabs-prevnext-left-offset, ${theme('spacing.2')})`
    },
    '.int-tabs-overflow-next': {
      right: `var(--int-tabs-prevnext-right-offset, ${theme('spacing.2')})`
    }
  })
}

module.exports = {
  name: 'tab',
  fn: tabPlugin,
  plugin: plugin(tabPlugin)
};
