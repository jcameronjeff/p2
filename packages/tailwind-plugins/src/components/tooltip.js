const plugin = require('tailwindcss/plugin')
const name = 'tooltip'

const tooltipPlugin = function({ addComponents, theme }) {

  addComponents({
    [`.${name}-wrapper`]: {
      display: 'inline-flex',
      position: 'relative',
      alignItems: 'center',
      margin: theme('margin.0'),
      flexWrap: 'wrap',
      gap: theme('gap.4'),
    },
    [`.${name}-trigger`]: {
      display: 'inline-flex',
      cursor: 'default',
      padding: theme('padding.1'),
      ['&:not(span)']: {
        lineHeight: theme('lineHeight.none'),
        margin: theme('margin.2'),
        padding: theme('padding.0'),
        width: theme('width.4'),
        height: theme('height.4'),
      },
    },
    [`.${name}-wrapper .tooltip-content`]: {
      position: 'absolute',
      backgroundColor: theme('backgroundColor.inverse'),
      color: theme('textColor.inverse'),
      cursor: 'default',
      borderRadius: theme('borderRadius.sm'),
      boxShadow: theme('boxShadow.md'),
      fontFamily: theme('fontFamily.sans'),
      fontSize: theme('fontSize.xs'),
      textAlign: 'center',
      padding: `${theme('padding[1.5]')} ${theme('padding.2')}`,
      width: '20rem',
      opacity: theme('opacity.0'),
      transition: 'opacity 1s',
      zIndex: '1',

      ['&.tooltip--sm']: {
        whiteSpace: 'nowrap',
        lineHeight: theme('lineHeight.none'),
      },
      ['&.tooltip-sm > span']: {
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      ['&.tooltip-lg']: {
        height: 'auto',
        fontSize: theme('fontSize.sm'),
        lineHeight: theme('lineHeight.loose'),
        textAlign: 'left',
        whiteSpace: 'normal',
        padding: theme('spacing.2'),
      }
    },
    [`.${name}-trigger:hover ~ .tooltip-content`]: {
      opacity: theme('opacity.100'),
    },
    // top position
    [`.${name}-wrapper.${name}-t .tooltip-content,
      .${name}-wrapper.${name}-t-end .tooltip-content,
      .${name}-wrapper.${name}-t-start .tooltip-content`]: {
      bottom:' 115%',
      left: '50%',
      marginLeft: '-100px',
    },
    [`.${name}-wrapper.${name}-t-end .tooltip-content`]: {
      marginLeft: '-184px',
    },
    [`.${name}-wrapper.${name}-t-start .tooltip-content`]: {
      marginLeft: '-16px',
    },
    [`.${name}-wrapper.${name}-t .tooltip-content::after,
      .${name}-wrapper.${name}-t-end .tooltip-content::after,
      .${name}-wrapper.${name}-t-start .tooltip-content::after`]: {
      borderColor: `${theme('colors.gray.800')} ${theme('colors.transparent')} ${theme('colors.transparent')} ${theme('colors.transparent')}`,
      borderStyle: 'solid',
      borderWidth: '6px',
      content: ' ',
      left: '50%',
      marginLeft: '-6px',
      position: 'absolute',
      top: '100%', /* At the bottom of the ttip */
    },
    [`.${name}-wrapper.${name}-t-end .tooltip-content::after`]: {
      left: '92%',
    },
    [`.${name}-wrapper.${name}-t-start .tooltip-content::after`]: {
      left: '8%',
    },
    /* right position */
    [`.${name}-wrapper.${name}-r .tooltip-content`]: {
      left: '105%',
      alignSelf: 'center',
    },
    [`.${name}-wrapper.${name}-r .tooltip-content::after`]: {
      content: ' ',
      position: 'absolute',
      top: '50%',
      right: '100%', /* To the left of the tooltip */
      marginTop: '-6px',
      borderWidth: '6px',
      borderStyle: 'solid',
      borderColor: `${theme('colors.transparent')} ${theme('colors.gray.800')} ${theme('colors.transparent')} ${theme('colors.transparent')}`,
    },
    // bottom position
    [`.${name}-wrapper.${name}-b .tooltip-content,
      .${name}-wrapper.${name}-b-end .tooltip-content,
      .${name}-wrapper.${name}-b-start .tooltip-content`]: {
      top: '115%',
      left: '50%',
      marginLeft: '-100px',
    },
    [`.${name}-wrapper.${name}-b-end .tooltip-content`]: {
      marginLeft: '-184px',
    },
    [`.${name}-wrapper.${name}-b-start .tooltip-content`]: {
      marginLeft: '-16px',
    },
    [`.${name}-b .tooltip-content::after,
      .${name}-b-end .tooltip-content::after,
      .${name}-b-start .tooltip-content::after`]: {
      borderColor: `${theme('colors.transparent')} ${theme('colors.transparent')} ${theme('colors.gray.800')} ${theme('colors.transparent')}`,
      borderStyle: 'solid',
      borderWidth: '6px',
      content: ' ',
      left: '50%',
      marginLeft: '-6px',
      position: 'absolute',
      bottom: '100%', /* At the bottom of the ttip */
    },
    [`.${name}-wrapper.${name}-b-end .tooltip-content::after`]: {
      left: '92%',
    },
    [`.${name}-wrapper.${name}-b-start .tooltip-content::after`]: {
      left: '8%',
    },
    /* left position */
    [`.${name}-wrapper.${name}-l .tooltip-content`]: {
      right: '105%',
      alignSelf: 'center',
    },
    [`.${name}-wrapper.${name}-l .tooltip-content::after`]: {
      borderColor: `${theme('colors.transparent')} ${theme('colors.transparent')} ${theme('colors.transparent')} ${theme('colors.gray.800')}`,
      borderStyle: 'solid',
      borderWidth: '6px',
      content: ' ',
      left: '100%', /* To the right of the tooltip */
      marginTop: '-6px',
      position: 'absolute',
      top:' 50%',
    },
    // texttip sizes
    [`.${name}-wrapper.${name}-lg .tooltip-content`]: {
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.loose'),
      height: 'auto',
      minWidth: '20rem',
      textAlign: 'left',
      whiteSpace: 'normal',
    },
  })
};

module.exports = {
  name,
  fn: tooltipPlugin,
  plugin: plugin(tooltipPlugin),
}
