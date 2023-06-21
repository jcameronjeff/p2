const plugin = require('tailwindcss/plugin')
const name = 'link'

const linkPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: theme('typography.fontWeight.anchor.base'),
      gap: '0.4em',
      color: theme('textColor.link.rest'),
      cursor: theme('cursor.pointer'),
        '.icon': {
          width: '1em',
          height: '1em',
        },
    },
    [`.${name}-xxs`]: {
      fontSize: theme('fontSize.xxs'),
    },
    [`.${name}-xs`]: {
      fontSize: theme('fontSize.xs'),
    },
    [`.${name}-sm`]: {
      fontSize: theme('fontSize.sm'),
    },
    [`.${name}-md`]: {
      fontSize: theme('fontSize.md'),
    },
    [`.${name}-lg`]: {
      fontSize: theme('fontSize.lg'),
    },
    [`.${name}-xl`]: {
      fontSize: theme('fontSize.xl'),
    },
    [`.${name}-2xl`]: {
      fontSize: theme('fontSize.2xl'),
    },
    [`.${name}-3xl`]: {
      fontSize: theme('fontSize.3xl'),
    },
    [`.${name}:hover`]: {
      color: theme('textColor.link.hover'),
    },
    [`.${name}:active`]: {
      color: theme('textColor.link.active'),
    },
    [`.${name}:visited`]: {
      color: theme('textColor.link.visited'),
    },
    [`.${name}-visited`]: {
      color: theme('textColor.link.visited'),
    },
    [`.${name}-inline`]: {
      textDecoration: 'underline',
    },
    [`.${name}-stand-alone`]: {
      textDecoration: 'none',
    },
  });
};

module.exports = {
  name,
  fn: linkPlugin,
  plugin: plugin(linkPlugin)
}
