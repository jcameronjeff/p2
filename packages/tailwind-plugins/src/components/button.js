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
    padding: `${theme('padding.2')} ${theme('padding.4')}`,
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
        backgroundColor: theme(`backgroundColor.cta.${variant}.${state}`),
        color: theme(`textColor.cta.${variant}.${state}`),
        borderColor: theme(`borderColor.cta.${variant}.${state}`),
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
      padding: theme('padding.2'),
      borderRadius: theme('borderRadius.DEFAULT'),
      width: '1em',
      height: '1em',
      svg: {
        width: theme('fontSize.base'),
        height: theme('fontSize.base'),
      },
      [`.interstate-icon`]: {
        width: theme('fontSize.base'),
        height: theme('fontSize.base'),
      },
    },
    [`.${name}-float`]: {
      // float buttons get rounded ends
      borderRadius: theme('borderRadius.full'),
    },
    [`.${name}-aux`]: {
      // small button that's fancy for no reason ¯\_(ツ)_/¯
      fontSize: theme('fontSize.sm'),
      textTransform: 'uppercase',
      fontFamily: theme('fontFamily.alt'),
    },
    [`.${name}-sm`]: {
      padding: `${theme('padding.1')} ${theme('padding.2')}`,
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.sm'),
      height: '3.2rem',
      svg: {
        width: theme('fontSize.sm'),
        height: theme('fontSize.sm'),
      },
      '.interstate-icon': {
        width: theme('fontSize.sm'),
        height: theme('fontSize.sm'),
      },
    },
    [`.${name}-md`]: {
      padding: `${theme('padding.2')} ${theme('padding.4')}`,
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.base'),
    },
    [`.${name}-lg`]: {
      padding: `${theme('padding.3')} ${theme('padding.6')}`,
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.lg'),
      height: '4.8rem',
      svg: {
        width: theme('fontSize.lg'),
        height: theme('fontSize.lg'),
      },
      [`.interstate-icon`]: {
        width: theme('fontSize.lg'),
        height: theme('fontSize.lg'),
      },
    },
  });
};

module.exports = {
  name,
  fn: buttonPlugin,
  plugin: plugin(buttonPlugin),
};
