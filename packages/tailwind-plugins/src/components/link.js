const plugin = require('tailwindcss/plugin')
const name = 'link'

const linkPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'medium',
      color: theme('textColor.link.rest'),
      '.icon': {
        width: theme('width.40'),
        height: theme('height.40'),
      },
    },
    [`.${name}-inline`]: {
      display: 'inline',
      textDecoration: 'underline',
    },
    [`.${name}-xxs`]: {
      fontSize: theme('fontSize.xxs'),
      '.icon': {
        width: theme('width.25'),
        height: theme('height.25'),
      },
    },
    [`.${name}-xs`]: {
      fontSize: theme('fontSize.xs'),
      '.icon': {
        width: theme('width.30'),
        height: theme('height.30'),
      },
    },
    [`.${name}-sm`]: {
      fontSize: theme('fontSize.sm'),
      '.icon': {
        width: theme('width.35'),
        height: theme('height.35'),
      },
    },
    [`.${name}-md`]: {
      fontSize: theme('fontSize.md'),
      '.icon': {
        width: theme('width.40'),
        height: theme('height.40'),
      },
    },
    [`.${name}-lg`]: {
      fontSize: theme('fontSize.lg'),
      '.icon': {
        width: theme('width.45'),
        height: theme('height.45'),
      },
    },
    [`.${name}-xl`]: {
      fontSize: theme('fontSize.xl'),
      '.icon': {
        width: theme('width.50'),
        height: theme('height.50'),
      },
    },
    [`.${name}-2xl`]: {
      fontSize: theme('fontSize.2xl'),
      '.icon': {
        width: theme('width.55'),
        height: theme('height.55'),
      },
    },
    [`.${name}-3xl`]: {
      fontSize: theme('fontSize.3xl'),
      '.icon': {
        width: theme('width.70'),
        height: theme('height.70'),
      },
    },
    [`.${name}-visited`]: {
      color: theme('textColor.link.visited'),
    },
    [`.${name}:hover`]: {
      color: theme('textColor.link.active'),
    },
  });
};

module.exports = {
  name,
  fn: linkPlugin,
  plugin: plugin(linkPlugin)
}
