const name = 'link'

const linkPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'medium',
      color: theme('textColor.link.rest'),
      '.icon': {
        width: theme('width[4]'),
        height: theme('height[4]'),
      },
    },
    [`.${name}-inline`]: {
      display: 'inline',
      textDecoration: 'underline',
    },
    [`.${name}-xxs`]: {
      fontSize: theme('fontSize.xxs'),
      '.icon': {
        width: theme('width[2.5]'),
        height: theme('height[2.5]'),
      },
    },
    [`.${name}-xs`]: {
      fontSize: theme('fontSize.xs'),
      '.icon': {
        width: theme('width[3]'),
        height: theme('height[3]'),
      },
    },
    [`.${name}-sm`]: {
      fontSize: theme('fontSize.sm'),
      '.icon': {
        width: theme('width[3.5]'),
        height: theme('height[3.5]'),
      },
    },
    [`.${name}-md`]: {
      fontSize: theme('fontSize.md'),
      '.icon': {
        width: theme('width[4]'),
        height: theme('height[4]'),
      },
    },
    [`.${name}-lg`]: {
      fontSize: theme('fontSize.lg'),
      '.icon': {
        width: theme('width[4.5]'),
        height: theme('height[4.5]'),
      },
    },
    [`.${name}-xl`]: {
      fontSize: theme('fontSize.xl'),
      '.icon': {
        width: theme('width[5]'),
        height: theme('height[5]'),
      },
    },
    [`.${name}-2xl`]: {
      fontSize: theme('fontSize.2xl'),
      '.icon': {
        width: theme('width[5.5]'),
        height: theme('height[5.5]'),
      },
    },
    [`.${name}-3xl`]: {
      fontSize: theme('fontSize.3xl'),
      '.icon': {
        width: theme('width[7]'),
        height: theme('height[7]'),
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

module.exports = linkPlugin
