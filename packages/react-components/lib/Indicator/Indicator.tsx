import React, { Children } from 'react';
import { HTMLComponent } from '../types';

export type IndicatorVariantNames = 'asis' | 'caution' | 'guarantee' | 'absent' | 'danger';
export interface IndicatorProps {
  /**
   * named variant value for this Indicator.
   */
  variant?: IndicatorVariantNames,
  /**
   * title text for Indicator
   */
  title?: string
}

export const Indicator: HTMLComponent<IndicatorProps> = ({ variant, as = 'div', title, unstyle, children, className, ...htmlProps }) => {
  const Component = as || 'div';

  let getVariant = () => {
    switch (variant) {
      case 'asis': return 'bg-red-500';
      case 'danger': return 'bg-red-500';
      case 'caution': return 'bg-yellow-500';
      case 'guarantee': return 'bg-green-300';
      case 'absent': return 'bg-sky-500 rounded-none';
      default: return '';
    }
  };

  const ourStyle = [
    'h-8 w-8 rounded-full border-2 border-white shadow-md',
    getVariant(),
    className,
  ].join(' ');

  return (
    <Component {...htmlProps} className={unstyle ? className : ourStyle}>
      {!!title && title}
    </Component>
  );
};

export interface FlagProps {
  /**
   *
   */
  danger?: boolean
  label?: string,
  colorClass?: string
}

export const Flag: HTMLComponent<FlagProps> = ({ className, colorClass, danger, variant, children, label, ...htmlProps }) => {
  let colorsClasses = colorClass || (danger ? 'bg-red-200 text-red-800' : 'bg-blue-200 text-blue-800');


  let clsx = {
    wrapper: 'relative px-2 mr-2 inline-block font-bold text-[11px] h-[16px] uppercase',
    topCornerContainer: 'w-2 overflow-hidden inline-block absolute -right-2 top-0',
    bottomCornerContainer: 'w-2 overflow-hidden inline-block absolute -right-2 bottom-0',
    topCornerAngle: ['h-3 rotate-45 transform origin-top-right ', colorsClasses].join(' '),
    bottomCornerAngle: ['h-3 -rotate-45 transform origin-bottom-right ', colorsClasses].join(' '),
  };


  return (
    <div className={[clsx.wrapper, colorsClasses, className].join(' ')} {...htmlProps}>
      <div>{children}</div>
      <div className={clsx.topCornerContainer}>
        <div className={clsx.topCornerAngle}></div>
      </div>
      <div className={clsx.bottomCornerContainer}>
        <div className={clsx.bottomCornerAngle}></div>
      </div>
    </div >
  );
};

// corner ribbon
