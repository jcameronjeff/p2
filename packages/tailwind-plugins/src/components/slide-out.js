const plugin = require('tailwindcss/plugin');
const name = 'slideout'

const slideOutPlugin = function({ addComponents, theme }) {
  const pinFooter = {
    root: {
      paddingBottom: 0,
    },
    body: {
      flexGrow: 1,
      overflowY: 'scroll',
    },
    footer: {
      backgroundColor: theme('backgroundColor.subdued'),
      borderColor: theme('borderColor.dim'),
      borderTopWidth: theme('borderWidth.DEFAULT'),
      padding: `${theme('padding.2')} ${theme('padding.6')}`,
      margin: `0 -${theme('padding.6')}`,
      justifyContent: 'space-evenly',

      button: {
        flexGrow: 1,
      }
    }
  }

  addComponents({
    [`.${name}`]: {
      backgroundColor: theme('backgroundColor.DEFAULT'),
      boxShadow: theme('shadow.xl'),
      display: 'flex',
      flexDirection: 'column',
      padding: theme('padding.6'),
      position: 'absolute',
      bottom: 0,
      top: 0,
    },
    [`.${name}-left`]: {
      left: 0,
    },
    [`.${name}-right`]: {
      right: 0,
    },
    [`.${name}-header`]: {
      display: 'flex',
      gap: theme('gap.6'),
      paddingBottom: theme('padding.6'),
      alignItems: 'flex-start',
    },
    [`.${name}-title`]: {
      color: theme('textColor.primary.DEFAULT'),
      fontWeight: theme('typography.fontWeight.h3'),
      lineHeight: theme('typography.lineHeight.h3'),
      fontSize: theme('typography.fontSize.h3'),
      flexGrow: 1,
    },
    [`.${name}-close`]: {
      width: theme('width.6'),
      minWidth: theme('width.6'),
      height: theme('height.6'),
    },
    [`.${name}-footer`]: {
      display: 'flex',
      gap: theme('gap.4'),
      justifyContent: 'flex-end',
      paddingTop: theme('padding.5'),
    },
    [`@media (max-width: ${theme('screens.sm')})`]: {
      [`.${name}`]: {
        ...pinFooter.root,
        [`.${name}-body`]: {
          ...pinFooter.body
        },
        [`.${name}-footer`]: {
          ...pinFooter.footer
        },
      },
    },
    [`.${name}.${name}-pin-footer`]: {
      ...pinFooter.root,
      [`.${name}-body`]: {
        ...pinFooter.body
      },
      [`.${name}-footer`]: {
        ...pinFooter.footer
      },
    },
  });
};

module.exports = {
  name,
  fn: slideOutPlugin,
  plugin: plugin(slideOutPlugin)
}
