const plugin = require('tailwindcss/plugin');
const twToken = require('../../themeConfig.json');

const tokens = function ({ theme }) {
  const t = (token) => theme(`${token}`);
  return {
    inputLeftIconColor: t(twToken.colors.slate['50']),
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
};

module.exports = tokens;
