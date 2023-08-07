const plugin = require('tailwindcss/plugin');
const name = 'text-input';

const tokens = require('./tokens.js');

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const t = tokens({ theme });

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
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
    border: 'none !important',
    padding: '0',
    outline: '0 !important',
  }
 
  const sizes = {
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

  // Apply styles to each size so we don't need additional size modifiers.
  Object.entries(sizes).forEach(([size, sizeStyles]) => {
    addComponents({
      // style the input group class name and children
      [`.${name}-group${size}`]: {
        ...baseStyles,
        ...sizeStyles,
        [`&:focus-within`]: {
          borderColor: t.inputFocusBorderColor,
          boxShadow: t.inputFocusBoxShadow,
        },
        '&::placeholder': {
          color: t.inputPlaceholderColor,
        },
        [`&.disabled`]: {
          borderColor: t.inputDisabledBorderColor,
          backgroundColor: t.inputDisabledBackgroundColor,
          '.text-input-icon, .text-input-decorator, & > *': {
            backgroundColor: t.inputDisabledBackgroundColor,
          },
        },
        [`&.read-only`]: {
          backgroundColor: t.inputReadOnlyBackgroundColor,
          borderColor: t.inputReadOnlyBorderColor,
          boxShadow: 'none',
        },
        [`&.read-only > .text-input-icon, &.read-only > .text-input-decorator`]: {
          display: 'none'
        },
      },
      // style the input element, siblings, and pseudo classes
      [`.${name}-group${size} > input`]: {
        ...inputStyles,
        [`&:disabled`]: {
          backgroundColor: t.inputDisabledBackgroundColor,
          color: t.inputDisabledTextColor,
        },
        [`&:read-only:not(:disabled)`]: {
          backgroundColor: t.inputReadOnlyBackgroundColor,
          [`& ~ .${name}-icon, & ~ .${name}-decorator, & ~ *`]: {
            display: 'none'
          },
        }
      },
      [`.${name}-icon, .${name}-decorator, .${name}-prefix, .${name}-suffix`]: {
        fontSize: '1em'
      },
    });
  });

  addComponents({
    // labels
    [`.${name}-label`]: {
      display: 'flex',
      color: theme('textColor.muted'),
      lineHeight: theme('lineHeight.snug'),
      paddingBottom: theme('padding.2'),
    },
    // icons
    [`.${name}-icon, svg.${name}-icon`]: {
      width: t.inputIconWidth,
      color: theme('textColor.subtle'),
    },
    [`.${name}-decorator`]: {
      color: t.inputDecoratorColor
    },
    [`${name}:disabled ~ ${name}-icon, ${name}:disabled ~ .${name}-decorator`]:
    {
      color: t.inputDisabledTextColor,
      backgroundColor: t.inputDisabledBackgroundColor,
  }
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
