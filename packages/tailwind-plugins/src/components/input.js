const plugin = require('tailwindcss/plugin');
const name = 'card';

// text: 'flex text-slate-700 px-1 items-baseline relative rounded-xs border w-full focus:outline-none placeholder:text-slate-500/50',
// label: 'prism-label',
// inline: 'flex-row items-center gap-1',

const inputPlugin = function ({ addComponents, theme }) {
  addComponents({
    [`.${name}`]: {
      display: 'flex',
      backgroundColor: theme('backgroundColor.DEFAULT'),
      border: `${theme('borderWidth.DEFAULT')} solid ${theme(
        'borderColor.dim'
      )}`,
      borderRadius: theme('borderRadius.xs'),
      color: theme('textColor.muted'),
      fontWeight: theme('medium'),
      lineHeight: theme('lineHeight.none'),
    },
    [`.${name}:focus`]: {
      outline: 'none',
    },
    [`.${name}-label`]: {
      display: 'flex',
      color: theme('textColor.DEFAULT'),
      fontSize: theme('fontSize.md'),
      lineHeight: theme('lineHeight.snug'),
      paddingBottom: theme('padding.2'),
    },
    [`.${name}-inline`]: {
      display: 'inline-flex',
    },
    [`.${name}-prepend:has(~ input[type="text"])`]: {
      border: '1px solid black;',
      // borderInlineEnd: "0";
    },
    [`.${name}-append`]: {
      display: 'inline-flex',
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
