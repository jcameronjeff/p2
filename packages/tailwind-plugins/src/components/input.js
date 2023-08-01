const plugin = require('tailwindcss/plugin');
const name = 'input';

const types = ['filter', 'text', 'textarea'];
const states = ['rest', 'focused', 'disabled', 'valid', 'invalid'];
const sizes = ['sm', 'md', 'lg'];

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const t = {
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
  };

  const stateStyles = {
    '&:focus': {
      borderColor: t.inputFocusBorderColor,
      boxShadow: t.inputFocusBoxShadow,
    },
    '&:valid': {
      borderColor: t.inputValidBorderColor,
    },
    '&:invalid': {
      borderColor: t.inputInvalidBorderColor,
    },
    '&::placeholder': {
      color: t.inputPlaceholderColor,
    },
    '&:read-only': {
      backgroundColor: t.inputReadOnlyBackgroundColor,
      borderColor: t.inputReadOnlyBorderColor,
    },
  };
  const messages = {
    valid: {
      color: t.inputValidMessageColor,
    },
    error: {
      color: t.inputErrorMessageColor,
    },
    help: {
      color: t.inputHelpMessageColor,
    },
    // TODO: Icon Styles
  };
  const noBorderRight = {
    borderColor: t.inputBorderColor,
    borderWidth: '1px 0px 1px 1px',
    borderStyle: 'solid none solid solid',
    borderRadius: '4px 0px 0px 4px',
    borderInlineEnd: '0',
  };

  const noBorderLeft = {
    borderColor: t.inputBorderColor,
    borderWidth: '1px 1px 1px 0px',
    borderStyle: 'solid solid solid none',
    borderRadius: '0px 4px 4px 0px',
    borderInlineStart: '0',
  };

  const sizes = {
    // TODO: Icon Sizing
    '': {
      fontSize: t.inputFontSize,
      padding: t.inputPadding,
      '& ~ .input-icon': {
        width: t.inputIconWidth,
        padding: t.inputPadding,
      },
      '& ~ .input-prefix': {
        fontSize: t.inputFontSize,
        padding: t.inputPadding,
      },
      '& ~ .input-suffix': {
        fontSize: t.inputFontSize,
        padding: t.inputPadding,
      },
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
        borderColor: t.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-suffix, .${name}-prefix, .${name}-icon-right, .${name}-prefix ~ .text-${name}, .${name}-suffix:has(~ .text-input), .text-${name} ~ .${name}-suffix`]:
      {
        ...noBorderLeft,
        borderColor: t.inputBorderColor,
        display: 'inline-flex',
      },
    [`.${name}-icon-left`]: {
      color: t.inputLeftIconColor,
      fill: t.inputLeftIconColor,
    },
    [`.filter-${name} ~ .${name}-icon-right`]: {
      color: t.filterInputRightIconColor,
      fill: t.filterInputRightIconColor,
    },
    [`.input-prefix, input-suffix`]: {
      color: t.inputPrefixSuffixColor,
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
    [`.text-${name}:focus ~ .${name}-icon, .filter-${name}:focus ~ .${name}-icon, .textarea-${name}:focus ~ .${name}-icon`]:
      {
        borderColor: t.inputFocusBorderColor,
      },
    [`.text-${name}:valid ~ .${name}-icon, .text-${name}:valid ~ .${name}-icon-left, .text-${name}:valid ~ .${name}-icon-right`]:
      {
        borderColor: t.inputValidBorderColor,
      },
    [`.text-${name}:invalid ~ .${name}-icon, .text-${name}:invalid ~ .${name}-icon-left, .text-${name}:invalid ~ .${name}-icon-right`]:
      {
        borderColor: t.inputInvalidBorderColor,
      },
    [`.text-${name}:read-only ~ .${name}-icon`]: {
      fill: t.inputReadOnlyBorderColor,
      color: t.inputReadOnlyIconColor,
      backgroundColor: t.inputReadOnlyBackgroundColor,
      borderColor: t.inputReadOnlyBorderColor,
    },
    [`.text-${name}:disabled ~ .${name}-icon,  .filter-${name}:disabled ~ .${name}-icon-left`]:
      {
        color: t.inputDisabledTextColor,
        backgroundColor: t.inputDisabledBackgroundColor,
        borderColor: t.inputDisabledBorderColor,
      },
    [`.filter-${name}:disabled ~ .${name}-icon-right`]: {
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
