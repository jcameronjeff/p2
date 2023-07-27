const plugin = require('tailwindcss/plugin');
const name = 'input';

const types = ['filter', 'text', 'textarea'];
const states = ['rest', 'focused', 'disabled', 'valid', 'invalid'];
const sizes = ['sm', 'md', 'lg'];

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const styles = {
    // colors
    inputLeftIconColor: theme('colors.onSurface.subtle'),
    inputRightIconColor: theme('colors.onSurface.muted'),
    inputTextFieldColor: theme('colors.onSurface.default'),
    inputPlaceholderColor: theme('colors.onSurfaceSubtler'),
    inputBorderColor: theme('border.onSurface.subtle'),
    inputLabelColor: theme('colors.onSurface.nuted'),
    //text
    inputLineHeight: theme('lineHeight.none'),
    inputFontWeight: theme('medium'),
    //borders:
    inputBorderWidth: theme('borderWidth.default'),
    inputBorderRadius: '4px',
    //sizing
    inputFontSize: theme('fontSize.base'),
    inputPadding: theme('padding.3'),
    inputFontSizeLg: theme('fontSize.xl'),
    inputPaddingLg: theme('padding.4'),
    inputFontSizeSm: theme('fontSize.sm'),
    inputPaddingSm: theme('padding.2'),
    //states
    inputFocusBorderColor: theme('border.interactive.focus'),
    inputValidBorderColor: theme('border.interactive.success'),
    inputValidTextColor: theme('textColor.success'),
    inputInvalidBorderColor: theme('border.interactive.error'),
    inputInvalidTextColor: theme('textColor.error'),
    inputFocusBoxShadow: `0px 0px 0px 3px ${theme(
      'colors.blue.100'
    )}, 0px 0px 0px 1px ${theme('colors.blue.700')}`,
    inputReadOnlyBorderColor: theme('border.onSurface.subtle'),
    inputReadOnlyTextColor: theme('colors.onSurface.subtle'),
    inputReadOnlyBackgroundColor: theme('surface.muted'),
    inputReadOnlyLeftIconColor: theme('colors.onSurfaceSubtler'),
    inputReadOnlyRightIconColor: theme('colors.subdued'),
    inputReadOnlyPrefixColor: theme('colors.onSurfaceSubtle'),
  };

  const baseStyles = {
    display: 'flex',
    backgroundColor: styles.inputBackGroundColor,
    //text
    color: styles.inputTextFieldColor,
    fontWeight: styles.inputFontWeight,
    lineHeight: styles.inputLineHeight,
    //borders
    borderWidth: styles.inputBorderWidth,
    borderStyle: 'solid',
    borderColor: styles.inputBorderColor,
    borderRadius: styles.inputBorderRadius,
  };

  const stateStyles = {
    '&:focus': {
      borderColor: styles.inputFocusBorderColor,
      boxShadow: styles.inputFocusBoxShadow,
    },
    '&:valid': {
      borderColor: styles.inputValidBorderColor,
    },
    '&:invalid': {
      borderColor: styles.inputInvalidBorderColor,
    },
    '&::placeholder': {
      color: styles.inputPlaceholderColor,
    },
    '&:read-only': {
      color: styles.inputReadOnlyTextColor,
      backgroundColor: styles.inputReadOnlyBackgroundColor,
      borderColor: styles.inputReadOnlyBorderColor,
    },
  };
  const messages = {
    // vailid message
    // valid message icon
    // error message
    // error message icon
    // Help Message
  };
  const noBorderRight = {
    borderColor: styles.inputBorderColor,
    borderWidth: '1px 0px 1px 1px',
    borderStyle: 'solid none solid solid',
    borderRadius: '4px 0px 0px 4px',
    borderInlineEnd: '0',
  };

  const noBorderLeft = {
    borderColor: styles.inputBorderColor,
    borderWidth: '1px 1px 1px 0px',
    borderStyle: 'solid solid solid none',
    borderRadius: '0px 4x 4px 0px',
    borderInlineStart: '0',
  };

  const sizes = {
    '': {
      fontSize: styles.inputFontSize,
      padding: styles.inputPadding,
    },
    '-lg': {
      fontSize: styles.inputFontSizeLg,
      padding: styles.inputPaddingLg,
    },
    '-sm': {
      fontSize: styles.inputFontSizeSm,
      padding: styles.inputPaddingSm,
    },
  };

  const textInputStyles = {};
  const filterInputStyles = {};
  const textAreaStyles = {};

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
      },
      [`input[type="textarea"]`]: {
        ...baseStyles,
        ...stateStyles,
        ...sizeStyles,
      },
    });
  });

  addComponents({
    // prefixes and suffixess
    [`.${name}-prefix, .${name}-prefix:has(~ input[type="text"]), .text-${name}:has(~ .${name}-suffix), .${name}-suffix ~ .text-${name}`]:
      {
        ...noBorderRight,
        borderColor: styles.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-suffix, .${name}-prefix ~ input[type="text"], .${name}-suffix:has(~ .text-input), .text-${name} ~ .${name}-suffix`]:
      {
        ...noBorderLeft,
        borderColor: styles.inputBorderColor,
        display: 'inline-flex',
      },
    // labels
    [`.${name}-label`]: {
      display: 'flex',
      color: theme('textColor.DEFAULT'),
      fontSize: theme('fontSize.md'),
      lineHeight: theme('lineHeight.snug'),
      paddingBottom: theme('padding.2'),
    },
    // icons
    [`.${name}-icon, svg.${name}-icon`]: {
      width: '1em',
      color: theme('textColor.muted'),
      fill: theme('textColor.muted'),
    },
    [`.text-${name}:focus ~ .${name}-icon`]: {
      borderColor: styles.inputFocusBorderColor,
      fill: styles.inputFocusBorderColor,
    },
    [`.text-${name}:valid ~ .${name}-icon`]: {
      borderColor: styles.inputValidBorderColor,
      fill: styles.inputValidBorderColor,
    },
    [`.text-${name}:invalid ~ .${name}-icon`]: {
      borderColor: styles.inputInvalidBorderColor,
      fill: styles.inputInvalidBorderColor,
    },
    [`.text-${name}:read-only ~ .${name}-icon`]: {
      fill: styles.inputReadOnlyBorderColor,
      color: styles.inputReadOnlyTextColor,
      backgroundColor: styles.inputReadOnlyBackgroundColor,
      borderColor: styles.inputReadOnlyBorderColor,
    },
    [`.text-${name}:read-only ~ .${name}-icon-left`]: {
      fill: styles.inputReadOnlyBorderColor,
      color: styles.inputReadOnlyLeftIconColor,
      backgroundColor: styles.inputReadOnlyBackgroundColor,
      borderColor: styles.inputReadOnlyBorderColor,
    },
    [`.text-${name}:read-only ~ .${name}-icon-right`]: {
      fill: styles.inputReadOnlyBorderColor,
      color: styles.inputReadOnlyRightIconColor,
      backgroundColor: styles.inputReadOnlyBackgroundColor,
      borderColor: styles.inputReadOnlyBorderColor,
    },

    // icon left
    // icon right:
    // prefix
    // suffix
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};