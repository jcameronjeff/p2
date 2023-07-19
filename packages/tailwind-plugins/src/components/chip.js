const plugin = require('tailwindcss/plugin');
const name = 'chip'

const chipPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      gap: theme('gap.1'),
      cursor: theme('cursor.pointer'),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: theme('borderWidth.DEFAULT'),
      borderStyle: 'solid',
      borderRadius: theme('borderRadius.full'),
      fontWeight: theme('fontWeight.medium'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.none'),
      padding: `${theme('padding.1')} ${theme('padding[2.5]')}`,
      [`.icon`]: {
        width: '1em',
        height: '1em',
      },
    },
    [`.${name}-link`]: {
      backgroundColor: theme('backgroundColor.interactive.rest'),
      color: theme('textColor.interactive.rest'),
      borderColor: theme('borderColor.interactive.rest'),
      ['&:hover, &:visited:hover']: {
        backgroundColor: theme('backgroundColor.interactive.hover'),
        color: theme('textColor.interactive.rest'),
        borderColor: theme('borderColor.interactive.rest'),
        textDecoration: 'none',
      },
      ['&:visited']: {
        backgroundColor: theme('backgroundColor.interactive.rest'),
        color: theme('textColor.interactive.rest'),
        borderColor: theme('borderColor.interactive.rest'),
      },
      ['&:disabled, &[disabled]']: {
        backgroundColor: theme('backgroundColor.interactive.disabled'),
        color: theme('textColor.interactive.disabled'),
        borderColor: theme('borderColor.interactive.disabled'),
      },
    },
    [`.${name}-toggle`]: {
      backgroundColor: theme('backgroundColor.interactive.rest'),
      color: theme('textColor.default'),
      borderColor: theme('borderColor.interactive.rest'),
      ['&:hover']: {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
      [`&.${name}-selected, &[selected]`]: {
        backgroundColor: theme('backgroundColor.interactive.selected'),
        color: theme('textColor.interactive.inverse.selected'),
        borderColor: theme('borderColor.interactive.selected'),
      },
      ['&:disabled, &[disabled]']: {
        backgroundColor: theme('backgroundColor.interactive.disabled'),
        color: theme('textColor.interactive.disabled'),
        borderColor: theme('borderColor.interactive.disabled'),
      },
      ['input']: {
        display: 'none',
      }
    },
    [`.${name}-filter`]: {
      backgroundColor: theme('backgroundColor.interactive.rest'),
      color: theme('textColor.default'),
      borderColor: theme('borderColor.dim'),
      ['.icon']:{
        color: theme('textColor.subdued'),
        width: theme('width.3'),
        height: theme('height.3'),
      },
      ['&:hover']: {
        backgroundColor: theme('backgroundColor.interactive.hover'),
      },
      ['&:disabled, &[disabled]']: {
        backgroundColor: theme('backgroundColor.interactive.disabled'),
        color: theme('textColor.interactive.disabled'),
        borderColor: theme('borderColor.interactive.disabled'),
      },
    },
  });
};

module.exports = {
  name,
  fn: chipPlugin,
  plugin: plugin(chipPlugin)
}
