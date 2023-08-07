const plugin = require('tailwindcss/plugin');
const name = 'text-input';

const tokens = require('./tokens.js');

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const t = tokens({ theme });

  const baseStyles = {
    display: 'inline-flex',
    backgroundColor: t.inputBackGroundColor,
    //text
    color: t.inputTextFieldColor,
    fontWeight: t.inputFontWeight,
    lineHeight: t.inputLineHeight,
    //borders
    borderWidth: t.inputBorderWidth,
    borderStyle: 'solid',
    borderColor: t.inputBorderColor,
    borderRadius: t.inputBorderRadius,
    gap: '.5em'
  };

  const inputStyles = {
    flexGrow: '1',
    fontSize: '1em',
    border: ' none !important',
    padding: 'none',
    outline: 'none !important',
  }

  const stateStyles = {
    '&:focus-within': {
      borderColor: t.inputFocusBorderColor,
      boxShadow: t.inputFocusBoxShadow,
    },
    '&::placeholder': {
      color: t.inputPlaceholderColor,
    },
    '&:readOnly': {
      backgroundColor: t.inputReadOnlyBackgroundColor,
      borderColor: t.inputReadOnlyBorderColor,
    },
  };

  const sizes = {
    // TODO: Icon Sizing
    '': {
      fontSize: t.inputFontSize,
      padding: t.inputPadding,
    },
    '-lg': {
      fontSize: t.inputFontSizeLg,
      padding: t.inputPaddingLg,
    },
    '-sm': {
      fontSize: t.inputFontSizeSm,
      padding: t.inputPaddingSm,
    },
  };


  Object.entries(sizes).forEach(([size, sizeStyles]) => {
    addComponents({
      [`.${name}-group${size}`]: {
        ...baseStyles,
        ...stateStyles,
        ...sizeStyles,
      },
      [`.${name}-group${size} > input`]: {
        ...inputStyles
      },
      [`.${name}-icon, .${name}-decorator, .${name}-prefix, .${name}-suffix`]: {
        fontSize: '1em'
      },
    });
  });

  addComponents({
    // form-GROUP
    [`form-group`]: {
      display: 'inline-flex',
      flexDirection: 'column'
    },
    // labels
    [`label.${name}-label`]: {
      display: 'flex',
      color: theme('textColor.DEFAULT'),
      fontSize: theme('fontSize.md'),
      lineHeight: theme('lineHeight.snug'),
      paddingBottom: theme('padding.2'),
    },
    // icons
    [`.${name}-icon, svg.${name}-icon`]: {
      width: t.inputIconWidth,
      color: theme('textColor.muted'),
    },

    [`${name}:readonly ~ .${name}-icon`]: {
      fill: t.inputReadOnlyBorderColor,
      color: t.inputReadOnlyIconColor,
      backgroundColor: t.inputReadOnlyBackgroundColor,
      borderColor: t.inputReadOnlyBorderColor,
    },
    [`${name}:disabled ~ .${name}-icon,  .filter-${name}:disabled ~ .${name}-icon-left`]:
    {
      color: t.inputDisabledTextColor,
      backgroundColor: t.inputDisabledBackgroundColor,
      borderColor: t.inputDisabledBorderColor,
    },
    [`.${name}:disabled ~ .${name}-icon-right`]: {
      color: 'none',
      backgroundColor: t.inputDisabledBackgroundColor,
      borderColor: t.inputDisabledBorderColor,
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
