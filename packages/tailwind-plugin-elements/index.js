const plugin = require('tailwindcss/plugin');
const modalPlugin = require('./lib/tailwind-plugin-modal');
const buttonPlugin = require('./lib/tailwind-plugin-button');
const chipPlugin = require('./lib/tailwind-plugin-chip');
const radioPlugin = require('./lib/tailwind-plugin-radio');
const tabPlugin = require('./lib/tailwind-plugin-tab');
const tooltipPlugin = require('./lib/tailwind-plugin-tooltip');
module.exports = plugin.withOptions(function (options = {
  strategy: undefined,
  prefix: undefined,
  parent: undefined,
  jit: true
}) {

  return function ({ addBase, addVariant, addComponents, theme }) {
    const strategy = options.strategy === undefined ? ['base', 'class'] : [options.strategy];
    const prefix = options.prefix === undefined ? 'prism-' : options.prefix;
    const parent = options.parent ? `${options.parent} ` : '';

    function withPrefix(classArr) {
      return classArr.map(cls => `${parent}.${prefix}${cls}`);
    }


    const rules = [{
      base: ['h1'],
      class: withPrefix(['heading-1']),
      styles: {
        fontFamily: theme('fontFamily.alt'),
        fontSize: theme('fontSize.3xl'),
        lineHeight: theme('leading.tight'),
        fontWeight: theme('fontWeight.bold'),
      },
    }, {
      base: ['h2'],
      class: withPrefix(['heading-2']),
      styles: {
        fontSize: theme('fontSize.2xl'),
        lineHeight: theme('leading.tight'),
        fontWeight: theme('fontWeight.bold'),
      },
    }, {
      base: ['h3'],
      class: withPrefix(['heading-3']),
      styles: {
        fontSize: theme('fontSize.xl'),
        lineHeight: theme('leading.snug'),
        fontWeight: theme('fontWeight.semibold'),
      },
    }, {
      base: ['h4'],
      class: withPrefix(['heading-4']),
      styles: {
        fontSize: theme('fontSize.lg'),
        lineHeight: theme('leading.snug'),
        fontWeight: theme('fontWeight.medium'),
      },
    }, {
      base: ['h5'],
      class: withPrefix(['heading-5']),
      styles: {
        fontSize: theme('fontSize.DEFAULT'),
        lineHeight: theme('leading.snug'),
        fontWeight: theme('fontWeight.semibold'),
      },
    }, {
      base: ['h6'],
      class: withPrefix(['heading-6']),
      styles: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('leading.snug'),
        fontWeight: theme('fontWeight.semibold'),
      },
    },
    {
      base: ['abbr','dfn','accronym'],
      class: withPrefix(['tt']),
      styles: {
        fontStyle: 'normal'
      }
    },
    {
      base: ['dl'],
      class: withPrefix(['def']),
      styles: {
        'dt' : {
          fontSize: theme('fontSize.xs'),
          transform: 'translateY(1px)',
          color: theme('colors.muted'),
          fontWeight: theme('fontWeight.medium')
        },
        'dd' : {
          // fontSize: theme('fontSize.base'),
        },
      },
    },
    {
      base: ['table'],
      class: withPrefix(['table']),
      styles: {
        ['tr,td,thead,th']: {
          borderColor: theme('colors.gray.300'),
          borderWidth: '1px',
          borderStyle: 'solid',
          padding: theme('spacing.3'),
        },
        'th': {
          backgroundColor: theme('colors.blue.800'),
          borderColor: theme('colors.blue.800'),
          color: theme('colors.white'),
          borderWidth: '1px',
          borderStyle: 'solid',
        },
        'caption,tfoot': {
          fontStyle: 'italic',
          padding: theme('spacing.2'),
          color: theme('colors.muted'),
          fontSize: theme('fontSize.sm'),
        },
      }
    },
    {
      base: ['ul, li'],
      class: [`*[class^=${prefix}list]`],
      styles: {
        listStyle: 'disc',
        listStylePosition: 'inside',
        paddingLeft: theme('spacing.4'),
        'li > ul, li > ol': {
          paddingTop: theme('spacing[0.5]'),
        },
      },
    },
    ].map(rule => ({
      ...rule,
      base: rule.base.map(b => `${parent}${b}`),
    }));


    const getStrategyRules = (stratName) => rules
      .map((rule) => {
        if (rule[stratName] === null) return null;
        return { [rule[stratName]]: rule.styles };
      })
      .filter(Boolean);

    if (strategy.includes('base')) {
      addBase(getStrategyRules('base'));
    }

    if (strategy.includes('class')) {
      addComponents(getStrategyRules('class'));
    }

    const proseRules = { // prose
      [`*[class^=${prefix}prose]`]: {
        color: theme('colors.body'),
        '--tw-prose-links': theme('colors.blue.700'),
        '--tw-space-y-reverse': '0!important',
        '--tw-prose-rhythm': theme('spacing[4]'),
        '>:not([hidden])~:not([hidden])': {
          'margin-bottom': 'calc(var(--tw-prose-rhythm)*var(--tw-space-y-reverse))!important',
          'margin-top': 'calc(var(--tw-prose-rhythm)*(1 - var(--tw-space-y-reverse)))!important',
        },
      },
      [`.${prefix}prose`]: {
        fontSize: theme('fontSize.base'),
        lineHeight: theme('fontSize.2xl'),
        '--tw-space-y-reverse': '0!important',
        '--tw-prose-rhythm': theme('spacing[4]'),
        '>:not([hidden])~:not([hidden])': {
          'margin-bottom': 'calc(var(--tw-prose-rhythm)*var(--tw-space-y-reverse))!important',
          'margin-top': 'calc(var(--tw-prose-rhythm)*(1 - var(--tw-space-y-reverse)))!important',
        },
        ['a:link']: {
          color: theme('colors.blue.700'),
          fontWeight: theme('fontWeight.medium'),
          textDecoration: 'none'
        },
        ['a:visited']: {
          color: theme('colors.fuchsia.800'),
        }
      },
      [`.${prefix}prose-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.xl'),
      },
      [`.${prefix}prose-xs`]: {
        '--tw-prose-rhythm': theme('spacing.2'),
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.lg'),
      },
      [`.${prefix}prose-xxs`]: {
        '--tw-prose-rhythm': theme('spacing[1.5]'),
        fontSize: theme('fontSize.xxs'),
        lineHeight: theme('fontSize.md'),
      },
    }

    const typographyRules = {
      [`.font-alt`]: {
        "font-variation-settings": `'GRAD' -64`
      },
      [`*[class^=${prefix}caption]`]: {
        color: theme('colors.muted'),
      },
      [`.${prefix}caption, .${prefix}caption-sm`]: {
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('fontSize.lg'),
      },
      [`.${prefix}caption-xs`]: {
        fontSize: theme('fontSize.xs'),
        lineHeight: theme('fontSize.base'),
      },

      [`*[class^=${prefix}link]`]: {
        color: theme('colors.blue.700'),
        fontWeight: theme('fontWeight.semibold'),
      },
      [`.${prefix}link`]: {
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.semibold'),
      },
      [`.${prefix}link-sm`]: {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.semibold'),
      },
      [`.${prefix}link-xs`]: {
        fontSize: theme('fontSize.xs'),
        fontWeight: theme('fontWeight.normal'),
        textDecoration: 'underline',
      },
      [`.${prefix}link-xxs`]: {
        fontSize: theme('fontSize.xxs'),
        color: theme('colors.muted'),
        textDecoration: 'underline',
      },
    }

    const formsRules = {
      [`.${prefix}combobox`]: {
        borderRadius: theme('borderRadius.xs'),
        position: 'relative',
        '&:focus-within': {
          boxShadow: theme('boxShadow.DEFAULT'),
        },
        [`.${prefix}input`]: {
          width: '100%',
        },
      },
      [`.${prefix}menu`]: {
        width: '100%',
        overflowY: 'auto',
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.md'),
        paddingTop: theme('padding.1'),
        paddingBottom: theme('padding.1'),
        boxShadow: theme('boxShadow.lg'),
        borderWidth: theme('borderWidth.DEFAULT'),
        marginTop: '-1px',
        ['&:focus']: {
          outline: 'none'
        }
      },

      [`.${prefix}menu-item, ${prefix}menu option`]: {
        // padding: theme('spacing.2'),
        // width: '100%',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // gap: theme('spacing.2'),
        // backgroundColor: theme('colors.white'),
        // color: theme('colors.body'),
      },
      [`.${prefix}label, .${prefix}form-control`]: {
        fontSize: theme('fontSize.sm'),
        color: theme('colors.gray.400'),
        display: 'flex',
        flexDirection: 'column',
        '&.inline': {
          flexDirection: 'row',
          gap: theme('spacing.2'),
        },
      },
      [`.${prefix}label-xs`]: {
        fontSize: theme('fontSize.xs'),
        color: theme('colors.gray.400'),
      },
      // Input Box ---------------------------------
      [`.${prefix}select`]: {
        borderColor: theme('colors.gray.300'),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme('borderRadius.xs'),
        outline: 'none',
        backgroundColor: theme('colors.white'),
        padding: theme('spacing[2.5]'),
        backgroundPositionY: '-40px',
      },
      [`.${prefix}input`]: {
        borderColor: theme('colors.gray.300'),
        outlineWidth: '1px',
        outlineStyle: 'solid',
        outlineColor: theme('colors.gray.300'),
        borderWidth: '0',
        borderStyle: 'solid',
        borderRadius: theme('borderRadius.sm'),
        backgroundColor: theme('colors.white'),
        padding: theme('spacing.2'),
        overflow:'hidden',
        fontSize: theme('fontSize.base'),
        [`&[aria-invalid='true']`]: {
          outlineColor: theme('colors.red.400'),
          outlineWidth: theme('borderWidth[1.5]')
        },
        '&::placeholder': {
          color: theme('colors.gray.300'),
        },
        '&:focus': {
          boxShadow: theme('boxShadow.sm'),
          outlineColor: theme('colors.blue.600'),
          outlineWidth: theme('borderWidth[1.5]')
        },
        '&:focus-within': {
          boxShadow: theme('boxShadow.lg'),
          outlineColor: theme('colors.blue.600'),
          outlineWidth: theme('borderWidth[1.5]')
        },
        ['& svg']: {
          color: theme('colors.gray.600'),
          height: '1em'
        },
        [`& .append, & .prepend`]: {
          position: 'absolute',
          borderColor: theme('colors.gray.100'),
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme('padding.2'),
          paddingRight: theme('padding.2'),
          top: 0,
          bottom: 0,
        },
        '& .append': {
          right: 0,
        },
        '& .prepend': {
          left: 0,
        }
      },
    }

    addComponents(proseRules);
    addComponents(typographyRules);
    addComponents(formsRules);

    modalPlugin({ addComponents, theme });
    buttonPlugin(({ addComponents, theme }));
    chipPlugin(({ addComponents, theme }));
    radioPlugin(({ addComponents, theme }));
    tabPlugin(({ addComponents, theme }));
    tooltipPlugin(({ addComponents, theme }));



  };
});
