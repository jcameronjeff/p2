const plugin = require('tailwindcss/plugin');
const name = 'input';

const types = ['filter', 'text', 'textarea'];
const states = ['rest', 'focused', 'disabled', 'valid', 'invalid'];
const sizes = ['sm', 'md', 'lg'];

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const styles = {
    // colors
    inputLeftIconColor: theme('colors.onSurface.subtle'),
    filterInputRightIconColor: theme('colors.onSurface.muted'),
    inputTextFieldColor: theme('colors.onSurface.default'),
    inputPlaceholderColor: theme('colors.onSurfaceSubtler'),
    inputBorderColor: theme('border.onSurface.subtle'),
    inputLabelColor: theme('colors.onSurface.muted'),
    inputPrefixSuffixColor: theme('colors.onSurface.subtle'),
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
    inputIconWidthSmall: theme('space.3'),
    // TODO Fix this sizing
    inputIconWidth: theme('space.4'),
    inputIconLg: theme('space.5'),
    //
    // states
    // focus
    inputFocusBorderColor: theme('border.interactive.focus'),
    // valid
    inputValidBorderColor: theme('border.interactive.success'),
    inputValidMessageColor: theme('textColor.success'),
    // invalid
    inputInvalidBorderColor: theme('border.interactive.error'),
    inputErrorMessageColor: theme('textColor.error'),
    inputFocusBoxShadow: `0px 0px 0px 3px ${theme(
      'colors.blue.100'
    )}, 0px 0px 0px 1px ${theme('colors.blue.700')}`,

    // disabled
    inputDisabledBorderColor: theme('border.onSurface.subtle'),
    inputDisabledTextColor: theme('colors.onSurface.subtle'),
    inputDisabledBackgroundColor: theme('surface.muted'),
    inputDisabledLeftIconColor: theme('colors.onSurfaceSubtler'),
    inputDisabledSuffix: theme('colors.subdued'),
    inputDisabledPrefixColor: theme('colors.onSurfaceSubtle'),

    // read-only
    inputReadOnlyBackgroundColor: 'none',
    inputReadOnlyBorderColor: 'none',
    inputReadOnlyIconColor: 'none',
    inputReadOnlyTextColor: theme('colors.onSurface.subtle'),
  };

  const baseStyles = {
    display: 'inline-flex',
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
      backgroundColor: styles.inputReadOnlyBackgroundColor,
      borderColor: styles.inputReadOnlyBorderColor,
    },
  };
  const messages = {
    valid: {
      color: styles.inputValidMessageColor,
    },
    error: {
      color: styles.inputErrorMessageColor,
    },
    help: {
      color: styles.inputHelpMessageColor,
    },
    // TODO: Icon Styles
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
    borderRadius: '0px 4px 4px 0px',
    borderInlineStart: '0',
  };

  const sizes = {
    // TODO: Icon Sizing
    '': {
      fontSize: styles.inputFontSize, b
      padding: styles.inputPadding,
      '& ~ .input-icon': {
        width: styles.inputIconWidth,
        padding: styles.inputPadding,
      },
      '& ~ .input-prefix': {
        fontSize: styles.inputFontSize,
        padding: styles.inputPadding,
      },
      '& ~ .input-suffix': {
        fontSize: styles.inputFontSize,
        padding: styles.inputPadding,
      },
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
        borderColor: styles.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-suffix, .${name}-prefix, .${name}-icon-right, .${name}-prefix ~ .text-${name}, .${name}-suffix:has(~ .text-input), .text-${name} ~ .${name}-suffix`]:
      {
        ...noBorderLeft,
        borderColor: styles.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-icon-left`]: {
      color: styles.inputLeftIconColor,
      fill: styles.inputLeftIconColor,
    },
    [`.filter-${name} ~ .${name}-icon-right`]: {
      color: styles.filterInputRightIconColor,
      fill: styles.filterInputRightIconColor,
    },
    [`.input-prefix, input-suffix`]: {
      color: styles.inputPrefixSuffixColor,
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
        borderColor: styles.inputFocusBorderColor,
      },
    [`.text-${name}:valid ~ .${name}-icon, .text-${name}:valid ~ .${name}-icon-left, .text-${name}:valid ~ .${name}-icon-right`]:
      {
        borderColor: styles.inputValidBorderColor,
      },
    [`.text-${name}:invalid ~ .${name}-icon, .text-${name}:invalid ~ .${name}-icon-left, .text-${name}:invalid ~ .${name}-icon-right`]:
      {
        borderColor: styles.inputInvalidBorderColor,
      },
    [`.text-${name}:read-only ~ .${name}-icon`]: {
      fill: styles.inputReadOnlyBorderColor,
      color: inputReadOnlyIconColor,
      backgroundColor: styles.inputReadOnlyBackgroundColor,
      borderColor: styles.inputReadOnlyBorderColor,
    },
    [`.text-${name}:disabled ~ .${name}-icon,  .filter-${name}:disabled ~ .${name}-icon-left`]: {
      color: styles.inputDisabledTextColor,
      backgroundColor: styles.inputDisabledBackgroundColor,
      borderColor: styles.inputDisabledBorderColor,
    },
    [`.filter-${name}:disabled ~ .${name}-icon-right`]: {
      color: 'none',
      backgroundColor: styles.inputDisabledBackgroundColor,
      borderColor: styles.inputDisabledBorderColor,
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
