const plugin = require('tailwindcss/plugin');
const name = 'card'

const cardPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      backgroundColor: theme('backgroundColor.DEFAULT'),
      border: `${theme('borderWidth.DEFAULT')} solid ${theme('borderColor.muted')}`,
      borderRadius: theme('borderRadius.sm'),
      color: theme('colors.gray.600'),
      fontWeight: theme('medium'),
      lineHeight: theme('lineHeight.none'),
    },
    [`.${name}-horizontal .${name}-layout`]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    [`.${name}-title`]: {
      display: 'flex',
      color: theme('colors.black'),
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
      borderTop: `${theme('borderWidth.DEFAULT')} solid ${theme('borderColor.muted')}`, 
      gap: theme('gap.4'),
      lineHeight: theme('lineHeight.snug'),
      paddingTop: theme('padding.3'),
      paddingBottom: theme('padding.3'),
      paddingRight: theme('padding.4'),
      paddingLeft: theme('padding.4'),
    },
    [`.${name} .${name}-media`]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundClip: 'border-box',
    },
    [`.${name}-horizontal .${name}-media`]: {
      width: '30%',
    },
    [`.${name}-horizontal .${name}-body`]: {
      display: 'inline-flex',
      padding: theme('padding.2'),
      width: '70%',
    },
    [`.${name}-horizontal .${name}-title`]: {
      paddingBottom: theme('padding.1'),
    },
  });
};

module.exports = {
  name,
  fn: cardPlugin,
  plugin: plugin(cardPlugin)
}
