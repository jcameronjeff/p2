const plugin = require('tailwindcss/plugin');
const name = 'cbox';

const checkboxPlugin = function({ addBase, addComponents, theme }) {

  const states = ['rest', 'hover', 'active', 'focus', 'disabled'];

  addComponents({
    [`.${name}.${name}-label`]: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
    },
    [`.${name} input[type="checkbox"]`]: {
      display: 'inline-block',
      width: '2rem',
      height: '2rem',
      borderRadius: theme('borderRadius.sm'),
      color: theme('colors.primary.900'),
    },
    [`.${name} input[type="checkbox"]:hover`]: {
      cursor: 'pointer',
      backgroundColor: theme('backgroundColor.interactive.hover'),
      borderColor: theme('borderColor.subtle')
    },
    [`.${name} input[type="checkbox"]:focus`]: {
      boxShadow: 'none',
    },
    [`.${name} input[type="checkbox"]:indeterminate,
    .${name} input[type="checkbox"]:indeterminate:hover,
    .${name} input[type="checkbox"].indeterminate,
    .${name} input[type="checkbox"].indeterminate:hover`]: {
      backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzcuOCAxODkuOWwtLjEgOTIuNCAzNzAuNy0uNi4xLTkwLjktMzcwLjcuNyIvPjwvc3ZnPg==)',
      backgroundColor: theme('backgroundColor.interactive.selected'),
      backgroundSize: '80% 80%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
    },
    [`.${name} input[type="checkbox"]:not(:disabled):not(:indeterminate):checked`]: {
      backgroundColor: theme('backgroundColor.interactive.selected'),
    },
    [`.${name}.disabled`]: {
      color: theme('textColor.subdued'),
      cursor: 'default',
    },
    [`.${name} input[type="checkbox"][disabled],
    .${name} input[type="checkbox"].indeterminate[disabled],`]: {
      borderColor: theme('borderColor.interactive.disabled'),
      backgroundColor: theme('backgroundColor.interactive.disabled'),
      cursor: 'default',
    },
    [`.${name} input[type="checkbox"][disabled]:not([disabled]):not(:indeterminate)`]: {
      borderColor: theme('borderColor.interactive.disabled'),
      backgroundColor: 'brown',
    },
  })
}

module.exports = {
  name,
  fn: checkboxPlugin,
  plugin: plugin(checkboxPlugin)
}
