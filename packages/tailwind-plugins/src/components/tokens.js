const plugin = require('tailwindcss/plugin');
const twToken = require('../../themeTokens.json');
 
const tokens = function ({ theme }) {
 // Some values need refinement
  return {
    inputLeftIconColor: theme('textColor.subtle'),
    filterInputRightIconColor: theme('textColor.subdued'),
    inputTextFieldColor:  theme('textColor.DEFAULT'),
    inputPlaceholderColor: theme('textColor.dim'),
    inputBorderColor: theme('borderColor.subtle'),
    inputLabelColor: theme('textColor.muted'),
    inputPrefixSuffixColor: theme('textColor.muted'),
    inputDecoratorColor: theme('textColor.muted'),
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
    inputFocusBorderColor: theme('borderColor.interactive.focus'),
    // valid
    inputValidBorderColor: theme('borderColor.interactive.success'),
    inputValidMessageColor: theme('success'),
    // invalid
    inputInvalidBorderColor:  theme('borderColor.interactive.error'),
    inputErrorMessageColor:  theme('textColor.error'),
    inputFocusBoxShadow: theme('boxShadow.primary'),

    // disabled
    inputDisabledBorderColor: theme('borderColor.interactive.subtle'),
    inputDisabledTextColor: theme('textColor.subtle'),
    inputDisabledBackgroundColor: theme('backgroundColor.muted'),
    inputDisabledLeftIconColor: theme('colors.onSurfaceSubtler'),
    inputDisabledSuffix:theme('textColor.subdued'),
    inputDisabledPrefixColor: theme('textColor.subtle'),

    // read-only
    inputReadOnlyBackgroundColor: 'none',
    inputReadOnlyBorderColor: 'none',
    inputReadOnlyIconColor: 'none',
    inputReadOnlyTextColor: theme('textColor.subtle'),
  };
};

module.exports = tokens;