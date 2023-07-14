const plugin = require('tailwindcss/plugin');
const name = 'accordion'

const accordionPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      backgroundColor: theme('backgroundColor.DEFAULT'),

      [`&.${name}-contained`]: {
        border: `${theme('borderWidth.DEFAULT')} solid ${theme('borderColor.dim')}`,
        borderRadius: theme('borderRadius.DEFAULT'),
        overflow: 'hidden',
      },
    },
    [`.${name}-item`]: {
      borderRadius: 'none',

      [`+ .${name}-item`]: {
        borderTop: `${theme('borderWidth.DEFAULT')} solid ${theme('borderColor.dim')}`
      },
      [`.${name}::marker`]: {
        display: 'none',
        content: '',
      },
      [`.${name}-trigger`]: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        gap: theme('spacing.2'),
        padding: `${theme('padding[2.5]')} ${theme('padding.1')}`,
        ['&::before']: {
          display: 'none',
          content: '',
        },
        ['&:hover']: {
          backgroundColor: theme('backgroundColor.interactive.hover')
        },
        [`.${name}-label`]: {
          flexGrow: 1,
        },
        [`.${name}-icon`]: {
          flexShrink: 1,
          width: '1em',
          height: '1em',
        },
        [`.${name}-indicator`]: {
          transitionDuration: '0.15s',
          width: '1em',
          height: '1em',
        },
      },
      [`&[open] .${name}-indicator`]: {
        transform: 'rotate(90deg)',
      },
      [`.${name}-filter &`]: {
        [`.${name}-trigger`]: {
          color: theme('textColor.primary.DEFAULT'),
        },
      },

      [`.${name}-menu &`]: {
        [`.${name}-trigger`]: {
          color: theme('textColor.primary.DEFAULT'),
          padding: `${theme('spacing[3.5]')} ${theme('spacing.4')}`,
        },
      },
      [`.${name}-menu &[open]`]: {
        [`.${name}-indicator`]: {
          transform: 'rotate(-180deg)',
        }
      },
    },
  });
};

module.exports = {
  name,
  fn: accordionPlugin,
  plugin: plugin(accordionPlugin)
}
