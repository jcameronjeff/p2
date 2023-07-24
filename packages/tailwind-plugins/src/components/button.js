const plugin = require('tailwindcss/plugin');
const name = 'btn';

const buttonPlugin = function ({
  addBase,
  addComponents,
  addUtilities,
  theme,
}) {
  const variants = ['primary', 'secondary', 'tertiary'];
  const states = ['rest', 'hover', 'active', 'focus', 'disabled'];
  const base = {
    borderWidth: `${theme('borderWidth.DEFAULT')}`,
    padding: `${theme('padding[3.5]')} ${theme('padding.4')}`,
    fontWeight: theme('fontWeight.semibold'),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.2'),
    borderRadius: theme('borderRadius.sm'),
    cursor: theme('cursor.pointer'),
    whiteSpace: 'nowrap',
    overflow: 'hidden', // is this needed?
    textOverflow: 'ellipses',
  };
  const buttons = variants.reduce((allVariants, variant) => {
    return states.reduce((allStates, state) => {
      let selector =
        state === 'rest'
          ? `.${name}-${variant}`
          : `.${name}-${variant}:${state}`;
      allStates[selector] = {
        backgroundColor: theme(`backgroundColor.button.${variant}.${state}`),
        color: theme(`textColor.button.${variant}.${state}`),
        borderColor: theme(`borderColor.button.${variant}.${state}`),
        borderStyle: 'solid',
        borderWidth: '1px',
      };
      return allStates;
    }, allVariants);
  }, {});
  addBase({ button: base }); // unspecified <button /> styles
  addComponents({
    // these classnames can be added to <span.btn> or <button> and get same results
    [`.${name}`]: base, // unspecified .btn styles
    ...buttons, // all primary, secondary, tertiary styles as `.btn-[variant]`
    [`.${name}-icon`]: {
      // icon only makes all padding equal and rounds
      padding: theme('padding.3'),
      svg: {
        width: '1em',
        height: '1em',
      },
      [`.interstate-icon`]: {
        width: '1em',
        height: '1em',
      },
      [`.${name}-sm`]: {
        padding: theme('padding.2'),
      },
      [`.${name}-md`]: {
        padding: theme('padding.3'),
      },
      [`.${name}-lg`]: {
        padding: theme('padding[3.5]'),
      },
    },
    [`.${name}-float`]: {
      // float buttons get rounded ends
      borderRadius: theme('borderRadius.full'),
      boxShadow: theme('boxShadow.md'),
    },
    [`.${name}-aux`]: {
      padding: `${theme('padding[1.5]')} ${theme('padding.1')}`,
      fontSize: theme('fontSize.xs'),
      textTransform: 'uppercase',
      fontFamily: theme('fontFamily.alt'),
    },
    [`.${name}-sm`]: {
      padding: `${theme('padding.2')} ${theme('padding.2')}`,
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.tight'),
      svg: {
        width: '1em',
        height: '1em',
      },
      '.interstate-icon': {
        width: '1em',
        height: '1em',
      },
    },
    [`.${name}-md`]: {
      padding: `${theme('padding.3')} ${theme('padding.3')}`,
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.tight'),
      svg: {
        width: '1em',
        height: '1em',
      },
      [`.interstate-icon`]: {
        width: '1em',
        height: '1em',
      },
    },
    [`.${name}-lg`]: {
      padding: `${theme('padding[3.5]')} ${theme('padding.4')}`,
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.tight'),
      svg: {
        width: '1em',
        height: '1em',
      },
      [`.interstate-icon`]: {
        width: '1em',
        height: '1em',
      },
    },
  });
};

module.exports = {
  name,
  fn: buttonPlugin,
  plugin: plugin(buttonPlugin),
};
