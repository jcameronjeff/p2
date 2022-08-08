const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function (options = {
  strategy: undefined,
  prefix: undefined,
  parent: undefined,
}) {

  return function ({ addBase, addComponents, theme }) {
    const strategy = options.strategy === undefined ? ['base', 'class'] : [options.strategy];
    const prefix = options.prefix === undefined ? 'prism-' : options.prefix;
    const parent = options.parent ? `${options.parent} ` : '';

    function withPrefix(classArr) {
      return classArr.map(cls => `${parent}.${prefix}${cls}`);
    }


    const rules = [{
      base: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      class: [`${parent}*[class*=heading-]`],
      styles: {
        color: theme('colors.headings'),
      },
    }, {
      base: ['h1'],
      class: withPrefix(['heading-1']),
      styles: {
        fontFamily: theme('fontFamily.sans'),
        fontSize: theme('fontSize.3xl'),
        fontWeight: theme('fontWeight.bold'),
        textTransform: 'uppercase',
      },
    }, {
      base: ['h2'],
      class: withPrefix(['heading-2']),
      styles: {
        fontSize: theme('fontSize.2xl'),
        fontWeight: theme('fontWeight.medium'),
      },
    }, {
      base: ['h3'],
      class: withPrefix(['heading-3']),
      styles: {
        fontSize: theme('fontSize.xl'),
        fontWeight: theme('fontWeight.normal'),
      },
    }, {
      base: ['h4'],
      class: withPrefix(['heading-4']),
      styles: {
        fontSize: theme('fontSize.lg'),
        fontWeight: theme('fontWeight.light'),
      },
    }, {
      base: ['h5'],
      class: withPrefix(['heading-5']),
      styles: {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.bold'),
      },
    }, {
      base: ['h6'],
      class: withPrefix(['heading-6']),
      styles: {
        fontSize: theme('fontSize.xs'),
        textTransform: 'uppercase',
        fontWeight: theme('fontWeight.semibold'),
      },
    }, {
      base: ['button', 'input[type="button"]'],
      class: withPrefix(['btn']),
      styles: {
        fontWeight: theme('fontWeight.bold'),
        textTransform: 'uppercase',
        borderRadius: theme('borderRadius.sm'),
        padding: theme('spacing.2'),
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.4'),
        backgroundColor: 'transparent',
        color: theme('colors.sky.600'),
        outline: 'none',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipses',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:focus-within': {
          boxShadow: theme('boxShadow.lg'),
        },
        '&.outlined': {
          borderColor: theme('colors.sky.600'),
          outlineWidth: '1px',
        },
        '&.fill': {
          backgroundColor: theme('colors.navy.900'),
          color: theme('colors.white'),
        },
        '&:hover:not(:disabled):not([type="submit"]), &.active': {
          backgroundColor: theme('colors.cerulean-light'),
          color: theme('colors.sky.600'),
        },
        '&:disabled': {
          cursor: 'not-allowed',
          opacity: '50%',
          // backgroundColor: theme('colors.gray.700'),
          // color: theme('colors.white'),
        },
        '&[type="submit"]': {
          backgroundColor: theme('colors.gold.500'),
          color: theme('colors.gray.900'),
          '&:hover': {
            backgroundColor: theme('colors.gold.600'),
          },
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

    const enableModals = () => addComponents({ // modals
      [`.${prefix}dialog-frame`]: {
        position: 'fixed',
        zIndex: 10,
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        overflowY: 'auto',
      },
      [`.${prefix}dialog-backdrop`]: {
        '--tw-backdrop-blur': 'blur(4px) !important',
        '--tw-backdrop-opacity': 'opacity(0.95) !important',
        '--tw-backdrop-grayscale': 'grayscale(100%) !important',
        'display': 'flex',
        'justify-content': 'center',
        'min-height': '100vh',
        'align-items': 'center',
        'backdrop-filter': 'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important',
      },
      [`.${prefix}dialog-overlay`]: {
        '--tw-bg-opacity': '1',
        'bottom': '0',
        'left': '0',
        'opacity': '.25',
        'position': 'fixed',
        'overflow': 'hidden',
        'maxHeight': '100vh',
        'maxWidth': '100vw',
        'right': '0',
        'top': '0',
        'background-color': 'rgb(0 0 0/var(--tw-bg-opacity))',
      },
      [`.${prefix}slideout-box`]: {
        'margin-left': 'auto',
        'margin-right': '0',
        'margin-top': 0,
        position: 'relative',
        height: '100vh',
        boxShadow: theme('boxShadow.sm'),
        borderWidth: theme('borderWidth.DEFAULT'),
        backgroundColor: theme('colors.white'),
        padding: theme('spacing.8'),
        maxWidth: '90%',
        width: theme('columns.xl'),
        '&.from-left': {
          'margin-left': 0,
          'margin-right': 'auto',
        },
      },
      [`.${prefix}dialog-box`]: {
        'margin-left': 'auto',
        'margin-right': 'auto',
        'position': 'relative',
        padding: theme('spacing.8'),
        width: theme('spacing.96'),
        maxWidth: '90%',
        borderRadius: theme('borderRadius.DEFAULT'),
        boxShadow: theme('boxShadow.sm'),
        borderWidth: theme('borderWidth.DEFAULT'),
        backgroundColor: theme('colors.white'),
      },
    });

    const enableProse = () => addComponents({ // prose
      [`*[class^=${prefix}prose]`]: {
        color: theme('colors.body'),
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
    });

    const enableTypography = () => addComponents({
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
        color: theme('colors.links'),
      },
      [`.${prefix}link`]: {
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.medium'),
      },
      [`.${prefix}link-sm`]: {
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
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
    });


    const enableForms = () => addComponents({
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
        backgroundColor: theme('colors.white'),
        borderRadius: theme('borderRadius.xs'),
        boxShadow: theme('boxShadow.sm'),
        borderWidth: theme('borderWidth.DEFAULT'),
        marginTop: '-1px',
      },

      [`.${prefix}menu-item, ${prefix}menu option`]: {
        padding: theme('spacing.2'),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme('spacing.2'),
        backgroundColor: theme('colors.white'),
        color: theme('colors.body'),
        '&.active, &:hover': {
          backgroundColor: theme('colors.blue.800'),
          color: theme('colors.white'),
        },
        '&.selected': {
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.black'),
        },
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
      [`.${prefix}input, ${prefix}select, .prism input:not([type='button'])input:not([type='radio']):not([type='submit']):not([type='reset'])`]: {
        borderColor: theme('colors.gray.300'),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: theme('borderRadius.xs'),
        outline: 'none',
        backgroundColor: theme('colors.white'),
        padding: theme('spacing[2.5]'),
        fontSize: theme('fontSize.base'),
        '&::placeholder': {
          color: theme('colors.gray.400'),
        },
        '&:focus': {
          boxShadow: theme('boxShadow.sm'),
          outline: 'none',
        },
        '&:focus-within': {
          boxShadow: theme('boxShadow.lg'),
          outline: 'none',
        },
      },
    });

    const enableDataViews = () => addComponents({ // Headings -------------------------

      [`*[class^=${prefix}list]`]: {
        listStyle: 'disc',
        listStylePosition: 'inside',
        paddingLeft: theme('spacing.4'),
        'li > ul, li > ol': {
          paddingTop: theme('spacing[0.5]'),
        },
      },
      [`.${prefix}def`]: {
        'dt' : {
          fontSize: theme('fontSize.xs'),
          color: theme('colors.muted'),
        },
        'dd' : {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('fontSize.lg'),
        },
        'dd + dt': {
          marginTop: theme('spacing.2'),
        },
      },



      [`.${prefix}table, .prism table`]: {
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
      },


    });

    const enableCheckboxes = () => addComponents({//Checkboxes -------------------------
      [`.${prefix}radio-option`]: {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
      },
      [`input[type='radio'], input[type='checkbox'], .${prefix}form-checkbox, .${prefix}form-radio`]: {
        [`&.${prefix}form-checkbox, &.${prefix}form-radio`] :  {
          border: `1px solid ${theme('colors.gray.300')}`,
          backgroundColor: theme('colors.white'),
          '&:focus': {
            outline: 'none',
          '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
          '--tw-ring-offset-width': '0px !important',
          'outline-offset': '0px',
          '--tw-ring-offset-color': 'transparent',
          '--tw-ring-color': 'transparent',
          '--tw-ring-offset-shadow': 'none',
          '--tw-ring-shadow': 'none',
          'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow),',
           },
          '&:hover': {
          '&:not(disabled)': {
              border: `2px solid ${theme('colors.blue.800')}`
            },
           '&:not(checked)': {
            backgroundColor: theme('colors.white'),
           }
          },
          '&:checked': {
            border: `2px solid ${theme('colors.blue.800')}`,
            backgroundColor: theme('colors.blue.800'),
            '&:hover, &:focus' : {
              backgroundColor: theme('colors.blue.800'),
            },
           },
        }

      },
      [`input[type='checkbox'].${prefix}form-checkbox`]: {
        outline: '0px solid transparent',
      },
      [`input[type='radio'].${prefix}form-radio`]: {
       outline: `1px solid transparent`,
        '&:checked, &:hover, &:focus': {
          '&:not(disabled)' : { outline: `1px solid ${theme('colors.blue.800')}`,
          border: `1px solid ${theme('colors.blue.800')}`,}
        },
        '&:checked, &:hover, &:focus': {
        backgroundImage: `url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:%23005ba8;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EradioBtnCircle%3C/title%3E%3Ccircle class='cls-1' cx='8' cy='8' r='7.5'/%3E%3Cpath class='cls-2' d='M8,1A7,7,0,1,1,1,8,7,7,0,0,1,8,1M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z'/%3E%3Ccircle class='cls-2' cx='8' cy='8' r='4.5'/%3E%3C/svg%3E") !important`,
      },
      }
    });

    enableCheckboxes();
    enableModals();
    enableProse();
    enableTypography();
    enableForms();
    enableDataViews();
  };
});
