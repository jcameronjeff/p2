const plugin = require('tailwindcss/plugin');
const tokens = require('./componentTokens');
const name = 'input';

const types = ['filter', 'text', 'textarea'];
const states = ['rest', 'focused', 'disabled', 'valid', 'invalid'];
const sizes = ['sm', 'md', 'lg'];

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const baseStyles = {
    display: 'inline-flex',
    backgroundColor: tokens.inputBackGroundColor,
    //text
    color: tokens.inputTextFieldColor,
    fontWeight: tokens.inputFontWeight,
    lineHeight: tokens.inputLineHeight,
    //borders
    borderWidth: tokens.inputBorderWidth,
    borderStyle: 'solid',
    borderColor: tokens.inputBorderColor,
    borderRadius: tokens.inputBorderRadius,
  };

  const stateStyles = {
    '&:focus': {
      borderColor: tokens.inputFocusBorderColor,
      boxShadow: tokens.inputFocusBoxShadow,
    },
    '&:valid': {
      borderColor: tokens.inputValidBorderColor,
    },
    '&:invalid': {
      borderColor: tokens.inputInvalidBorderColor,
    },
    '&::placeholder': {
      color: tokens.inputPlaceholderColor,
    },
    '&:read-only': {
      backgroundColor: tokens.inputReadOnlyBackgroundColor,
      borderColor: tokens.inputReadOnlyBorderColor,
    },
  };
  const messages = {
    valid: {
      color: tokens.inputValidMessageColor,
    },
    error: {
      color: tokens.inputErrorMessageColor,
    },
    help: {
      color: tokens.inputHelpMessageColor,
    },
    // TODO: Icon Styles
  };
  const noBorderRight = {
    borderColor: tokens.inputBorderColor,
    borderWidth: '1px 0px 1px 1px',
    borderStyle: 'solid none solid solid',
    borderRadius: '4px 0px 0px 4px',
    borderInlineEnd: '0',
  };

  const noBorderLeft = {
    borderColor: tokens.inputBorderColor,
    borderWidth: '1px 1px 1px 0px',
    borderStyle: 'solid solid solid none',
    borderRadius: '0px 4px 4px 0px',
    borderInlineStart: '0',
  };

  const sizes = {
    // TODO: Icon Sizing
    '': {
      fontSize: tokens.inputFontSize,
      padding: tokens.inputPadding,
      '& ~ .input-icon': {
        width: tokens.inputIconWidth,
        padding: tokens.inputPadding,
      },
      '& ~ .input-prefix': {
        fontSize: tokens.inputFontSize,
        padding: tokens.inputPadding,
      },
      '& ~ .input-suffix': {
        fontSize: tokens.inputFontSize,
        padding: tokens.inputPadding,
      },
    },
    '-lg': {
      fontSize: tokens.inputFontSizeLg,
      padding: tokens.inputPaddingLg,
    },
    '-sm': {
      fontSize: tokens.inputFontSizeSm,
      padding: tokens.inputPaddingSm,
    },
  };

  const textInputStyles = {};
  const filterInputStyles = {};
  const textAreaStyles = {};

  Object.entries(messages).forEach(([message, messageStyles]) => {
    addComponents({
      [`${name}-message${message}`]: {
        // TODO: Base message styles
        ...messageStyles,
      },
    });
  });

  Object.entries(sizes).forEach(([size, sizeStyles]) => {
    addComponents({
      [`input[type="text"].text-${name}${size}`]: {
        ...baseStyles,
        ...stateStyles,
        ...sizeStyles,
      },
      [`input[type="text"].filter-${name}${size}`]: {
        ...baseStyles,
        ...stateStyles,
        ...sizeStyles,
        '& ~ .input-icon': {
          ...sizeStyles,
        },
      },
      [`input[type="textarea"].textarea-${name}${size}`]: {
        ...baseStyles,
        ...stateStyles,
        ...sizeStyles,
        '& ~ .input-icon': {
          ...sizeStyles,
        },
        '& ~ .input-prefix': {
          ...sizeStyles,
        },
        '& ~ .input-suffix': {
          ...sizeStyles,
        },
      },
      [`.${name}-icon, .${name}-prefix, .${name}-suffix`]: {
        ...baseStyles,
        ...stateStyles,
        ...sizeStyles,
      },
    });
  });

  addComponents({
    // prefixes, suffixess, icon left, icon right
    [`.${name}-prefix, .${name}-icon-left, .${name}-prefix:has(~ .text-${name}), .text-${name}:has(~ .${name}-suffix), .${name}-suffix ~ .text-${name}`]:
      {
        ...noBorderRight,
        borderColor: tokens.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-suffix, .${name}-prefix, .${name}-icon-right, .${name}-prefix ~ .text-${name}, .${name}-suffix:has(~ .text-input), .text-${name} ~ .${name}-suffix`]:
      {
        ...noBorderLeft,
        borderColor: tokens.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-icon-left`]: {
      color: tokens.inputLeftIconColor,
      fill: tokens.inputLeftIconColor,
    },
    [`.filter-${name} ~ .${name}-icon-right`]: {
      color: tokens.filterInputRightIconColor,
      fill: tokens.filterInputRightIconColor,
    },
    [`.input-prefix, input-suffix`]: {
      color: tokens.inputPrefixSuffixColor,
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
      color: theme('textColor.muted'),
    },
    [`.text-${name}:focus ~ .${name}-icon, .filter-${name}:focus ~ .${name}-icon, .textarea-${name}:focus ~ .${name}-icon`]:
      {
        borderColor: tokens.inputFocusBorderColor,
      },
    [`.text-${name}:valid ~ .${name}-icon, .text-${name}:valid ~ .${name}-icon-left, .text-${name}:valid ~ .${name}-icon-right`]:
      {
        borderColor: tokens.inputValidBorderColor,
      },
    [`.text-${name}:invalid ~ .${name}-icon, .text-${name}:invalid ~ .${name}-icon-left, .text-${name}:invalid ~ .${name}-icon-right`]:
      {
        borderColor: tokens.inputInvalidBorderColor,
      },
    [`.text-${name}:read-only ~ .${name}-icon`]: {
      fill: tokens.inputReadOnlyBorderColor,
      color: tokens.inputReadOnlyIconColor,
      backgroundColor: tokens.inputReadOnlyBackgroundColor,
      borderColor: tokens.inputReadOnlyBorderColor,
    },
    [`.text-${name}:disabled ~ .${name}-icon,  .filter-${name}:disabled ~ .${name}-icon-left`]:
      {
        color: tokens.inputDisabledTextColor,
        backgroundColor: tokens.inputDisabledBackgroundColor,
        borderColor: tokens.inputDisabledBorderColor,
      },
    [`.filter-${name}:disabled ~ .${name}-icon-right`]: {
      color: 'none',
      backgroundColor: tokens.inputDisabledBackgroundColor,
      borderColor: tokens.inputDisabledBorderColor,
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
