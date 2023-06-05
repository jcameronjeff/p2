const name = 'avatar'

const avatarPlugin = function({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme('colors.black'),
      backgroundColor: theme('backgroundColor.subtle'),
      border: `${theme('borderWidth.DEFAULT')} solid ${theme('colors.transparent')}`,
      borderRadius: theme('borderRadius.full'),
    },
    [`.${name}-xs`]: {
      width: theme('width.6'),
      height: theme('height.6'),
      fontSize: theme('fontSize.xxs'),
      svg: {
        width: theme('width[3.5]'),
        height: theme('height[3.5]'),
      },
    },
    [`.${name}-sm`]: {
      width: theme('width.8'),
      height: theme('height.8'),
      fontSize: theme('fontSize.sm'),
      svg: {
        width: theme('width.5'),
        height: theme('height.5'),
      },
    },
    [`.${name}-md`]: {
      width: theme('width.10'),
      height: theme('height.10'),
      fontSize: theme('fontSize.lg'),
      svg: {
        width: theme('width.7'),
        height: theme('height.7'),
      },
    },
    [`.${name}-lg`]: {
      width: theme('width.12'),
      height: theme('height.12'),
      fontSize: theme('fontSize.2xl'),
      svg: {
        width: theme('width.8'),
        height: theme('height.8'),
      },
    },
    [`.${name}-clickable`]: {
      backgroundColor: theme('backgroundColor.white'),
      borderColor: theme('borderColor.primary.DEFAULT'),
      color: theme('textColor.primary.DEFAULT'),
      cursor: theme('cursor.pointer'),
    },
    [`.${name}-clickable:hover`]: {
      backgroundColor: theme('backgroundColor.hover'),
    },
    [`.${name}-img`]: {
      backgroundImage: 'var(--bg-img)',
      backgroundSize: theme('backgroundSize.cover'),
    },
    [`.${name}-img.${name}-clickable`]: {
      boxShadow: `inset 0 0 0 2px ${theme('colors.white')}`,
    },
  });
};

module.exports = avatarPlugin
