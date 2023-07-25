const plugin = require('tailwindcss/plugin');
const name = 'input';

const types = ['filter', 'text', 'textarea'];

const states = ['DEFAULT', 'focused', 'disabled', 'valid', 'invalid'];

const modifiers = ['inline'];

const addOns = ['prefix', 'suffix'];

const elements = ['label', 'icon'];

const sizes = ['sm', 'md', 'lg'];

const inputPlugin = function ({ addComponents, theme }) {
  console.log('running');

  const styles = {
    // colors
    inputLeftIconColor: theme('colors.onSurface.subtle'),
    inputRightIconColor: theme('colors.onSurface.subdued'),
    inputTextFieldColor: theme('colors.onSurface.default'),
    inputPlaceholderColor: theme('colors.onSurfaceSubtler'),
    inputBorderColor: theme('border.highContrast'),
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
  };

  const baseStyles = {
    display: 'flex',
    backgroundColor: styles.inputBackGroundColor,
    //text
    color: styles.inputTextFizeldColor,
    fontWeight: styles.inputFontWeight,
    lineHeight: styles.inputLineHeight,
    //borders
    borderWidth: styles.inputBorderWidth,
    borderStyle: 'solid',
    borderColor: styles.inputBorderColor,
    borderRadius: styles.inputBorderRadius,
  };
  const focusStyles = {
    '&:focus': {
      borderColor: styles.inputFocusBorderColor,
    },
    '&::placeholder': {
      color: styles.inputPlaceholderColor,
    },
  };
  // const iconStyles = {};
  addComponents({
    [`.text-${name}`]: {
      ...baseStyles,
      ...focusStyles,
      padding: styles.inputPadding,
      fontSize: styles.inputFontSize,
    },
    [`.text-${name}-lg`]: {
      ...baseStyles,
      ...focusStyles,
      fontSize: styles.inputFontSizeLg,
      padding: styles.inputPaddingLg,
    },
    [`.text-${name}-sm`]: {
      ...baseStyles,
      ...focusStyles,
      fontSize: styles.inputFontSizeSm,
      padding: styles.inputPaddingSm,
    },
    [`.${name}-prefix:has(~ input[type="text"])`]: {
      borderInlineEnd: '0',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
    },
    [`.${name}-prefix ~ input[type="text"]`]: {
      borderInlineStart: '0',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    [`.${name}-suffix:has(~ input[type="text"])`]: {
      borderInlineStart: '0',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    [`.${name}-suffix ~ input[type="text"]`]: {
      borderInlineStart: '0',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
  });

  const elements = {
    [`.${name}-label`]: {
      display: 'flex',
      color: theme('textColor.DEFAULT'),
      fontSize: theme('fontSize.md'),
      lineHeight: theme('lineHeight.snug'),
      paddingBottom: theme('padding.2'),
    },
    [`.${name}-icon`]: {
      width: '1em',
      borderRadius: theme('borderRadius.xs'),
      border: `${theme('borderWidth.DEFAULT')} solid ${theme(
        'borderColor.dim'
      )}`,
      color: theme('textColor.muted'),
      fill: theme('textColor.muted'),
    },
  };
  // addComponents(elements);
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
