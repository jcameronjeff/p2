const plugin = require('tailwindcss/plugin');

const tokens = function ({ theme }) {
  // Some values need refinement

  return {
    inputLeftIconColor: theme('textColor.muted'),
    filterInputRightIconColor: theme('textColor.muted'),
    inputTextFieldColor: theme('textColor.DEFAULT'),
    inputPlaceholderColor: theme('textColor.dim'),
    inputBorderColor: theme('borderColor.subtle'),
    inputLabelColor: theme('textColor.muted'),
    inputPrefixSuffixColor: theme('textColor.subtle'),
    //text
    inputLineHeight: theme('lineHeight.none'),
    inputFontWeight: theme('medium'),
    //borders:
    inputBorderWidth: theme('borderWidth.default'),
    inputBorderRadius: '4px',
    //sizing
    inputFontSize: '16px',
    inputPadding: theme('padding.3'),
    inputFontSizeLg: '20px',
    inputPaddingLg: theme('padding.4'),
    inputFontSizeSm: '14px',
    inputPaddingSm: theme('padding.2'),
    inputIconWidthSmall: theme('space.3'),
    // TODO Fix this sizing
    inputIconWidth: theme('space.4'),
    inputIconLg: theme('space.5'),
    //
    // states
    // focus
    inputFocusBorder: '1px solid #005BA8',
    // valid
    inputValidBorderColor: theme('borderColor.interactive.success'),
    inputValidMessageColor: theme('success'),
    // invalid
    inputInvalidBorderColor: theme('borderColor.interactive.error'),
    inputErrorMessageColor: theme('textColor.error'),
    inputFocusBoxShadow: theme('boxShadow.primary'),

    // disabled
    inputDisabledBorderColor: theme('borderColor.interactive.subtle'),
    inputDisabledTextColor: theme('textColor.subtle'),
    inputDisabledBackgroundColor: theme('backgroundColor.muted'),
    inputDisabledLeftIconColor: theme('colors.onSurfaceSubtler'),
    inputDisabledSuffix: theme('textColor.subdued'),
    inputDisabledPrefixColor: theme('textColor.subtle'),

    // read-only
    inputReadOnlyBackgroundColor: 'transparent',
    inputReadOnlyBorderColor: 'transparent',
    inputReadOnlyIconColor: 'transparent',
    inputReadOnlyTextColor: theme('textColor.subtle'),
  };
};

module.exports = tokens;
