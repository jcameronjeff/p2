const plugin = require('tailwindcss/plugin');
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
      lineHeight: theme('space.font.leading.none'),
    },
    [`.${name}-xs`]: {
      width: theme('width.6'),
      height: theme('height.6'),
      fontSize: theme('fontSize.xxs'),
      [`.${name}-icon`]: {
        width: theme('width.3'),
        height: theme('height.3'),
      },
    },
    [`.${name}-sm`]: {
      width: theme('width.8'),
      height: theme('height.8'),
      fontSize: theme('fontSize.sm'),
      [`.${name}-icon`]: {
        width: theme('width.4'),
        height: theme('height.4'),
      },
    },
    [`.${name}-md`]: {
      width: theme('width.10'),
      height: theme('height.10'),
      fontSize: theme('fontSize.lg'),
      [`.${name}-icon`]: {
        width: theme('width.5'),
        height: theme('height.5'),
      },
    },
    [`.${name}-lg`]: {
      width: theme('width.12'),
      height: theme('height.12'),
      fontSize: theme('fontSize.2xl'),
      [`.${name}-icon`]: {
        width: theme('width.6'),
        height: theme('height.6'),
      },
    },
    [`.${name}-clickable`]: {
      backgroundColor: theme('backgroundColor.white'),
      borderColor: theme('borderColor.primary.DEFAULT'),
      boxShadow: `inset 0 0 0 2px ${theme('colors.white')}`,
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
  });
};

module.exports = {
  name,
  fn: avatarPlugin,
  plugin: plugin(avatarPlugin)
}
