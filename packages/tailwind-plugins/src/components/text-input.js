const plugin = require('tailwindcss/plugin');
const name = 'text-input';

const tokens = require('./tokens.js');

const inputPlugin = function ({ addBase, addComponents, theme }) {
  const t = tokens({ theme });

  const inputStyles = {
    flexGrow: '1',
    fontSize: '1em',
    border: 'none !important',
    padding: '0',
    outline: '0 !important',
  };

  const groupBaseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: t.inputBackGroundColor,
    //text
    color: t.inputTextFieldColor,
    fontWeight: t.inputFontWeight,
    lineHeight: t.inputLineHeight,
    //borders
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: t.inputBorderColor,
    borderRadius: t.inputBorderRadius,
    gap: '.5em',
    fontSize: t.inputFontSize,
    padding: t.inputPadding,
  };

  const groupSizes = {
    sm: {
      fontSize: t.inputFontSizeSm,
      padding: t.inputPaddingSm,
    },
    lg: {
      fontSize: t.inputFontSizeLg,
      padding: t.inputPaddingLg,
    },
  };

  // Apply styles to each size so we don't need additional size modifiers.
  const groupSelector = `.${name}-group`;
  const inputSelector = `${groupSelector} > input, text-input`;
  const subElementsSelector = `.${name}-icon, .${name}-decorator, .${name}-prefix, .${name}-suffix`;

  const disabledStyles = {
    borderColor: t.inputDisabledBorderColor,
    backgroundColor: t.inputDisabledBackgroundColor,
  };

  const readOnlyStyles = {
    backgroundColor: t.inputReadOnlyBackgroundColor,
    borderColor: t.inputReadOnlyBorderColor,
    boxShadow: 'none',
  };

  // apply sizing styles
  Object.entries(groupSizes).forEach(([suffix, sizeStyles]) => {
    addComponents({
      [`${groupSelector}${groupSelector}-${suffix}`]: sizeStyles,
    });
  });

  // apply base and state styles/classes
  addComponents({
    [groupSelector]: {
      ...groupBaseStyles,
      [`&:focus-within:not(${groupSelector}-read-only)`]: {
        border: t.inputFocusBorder,
        boxShadow: t.inputFocusBoxShadow,
      },
      '&::placeholder': { color: t.inputPlaceholderColor },
    },
    [`${groupSelector}-disabled`]: {
      ...disabledStyles,
      [`.${name}-icon, .${name}-decorator, & > *`]: {
        backgroundColor: t.inputDisabledBackgroundColor,
      },
    },
    [`${groupSelector}-read-only`]: {
      ...readOnlyStyles,
      [`> .${name}-icon, > .${name}-decorator`]: { display: 'none' },
    },

    [inputSelector]: {
      ...inputStyles,
      '&:disabled': {
        ...disabledStyles,
        [`& ~ ${subElementsSelector}`]: {
          color: t.inputDisabledTextColor,
          backgroundColor: t.inputDisabledBackgroundColor,
        },
      },
      '&:read-only:not(:disabled)': {
        backgroundColor: t.inputReadOnlyBackgroundColor,
        [`& ~ ${subElementsSelector}`]: { display: 'none' },
      },
    },
    [subElementsSelector]: { fontSize: '1em' },
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
      color: t.inputDecoratorColor,
    },
  });
};

module.exports = {
  name,
  fn: inputPlugin,
  plugin: plugin(inputPlugin),
};
