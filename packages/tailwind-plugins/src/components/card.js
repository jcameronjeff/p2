const plugin = require('tailwindcss/plugin');
const name = 'card'

const cardPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      backgroundColor: theme('backgroundColor.DEFAULT'),
      border: `${theme('borderWidth.DEFAULT')} solid ${theme('borderColor.dim')}`,
      borderRadius: theme('borderRadius.sm'),
      color: theme('textColor.muted'),
      fontWeight: theme('medium'),
      lineHeight: theme('lineHeight.none'),
    },
    [`.${name}-title`]: {
      display: 'flex',
      color: theme('textColor.DEFAULT'),
      fontSize: theme('fontSize.md'),
      lineHeight: theme('lineHeight.snug'),
      paddingBottom: theme('padding.2'),
    },
    [`.${name}-body`]: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.loose'),
      padding: theme('padding.4'),
    },
    [`.${name}-footer`]: {
      display: 'inline-flex',
      borderTop: `${theme('borderWidth.DEFAULT')} solid ${theme('borderColor.dim')}`, 
      gap: theme('gap.4'),
      lineHeight: theme('lineHeight.snug'),
      padding: `${theme('padding[2.5]')} ${theme('padding.4')}`,
    },
    [`.${name} .${name}-media`]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundClip: 'border-box',
    },
    [`.${name}-horizontal`]: {
      [`.${name}-layout`]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      [`.${name}-media`]: {
        width: '30%',
      },
      [`.${name}-body`]: {
        display: 'inline-flex',
        padding: theme('padding.2'),
        width: '70%',
      },
      [`.${name}-title`]: {
        paddingBottom: theme('padding.1'),
      },
    },
  });
};

module.exports = {
  name,
  fn: cardPlugin,
  plugin: plugin(cardPlugin)
}
