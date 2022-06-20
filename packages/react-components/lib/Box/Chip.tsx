
import { Prism } from '../types';
import clsx from 'clsx';

type ColorVariant = 'light' | 'base' | 'dark';

export interface Props extends Prism.AppendPrependArgs {
  /**
   * Color variation
   */
  variant?: ColorVariant
}

export const Chip:Prism.HTMLComponent<Props> = ({ as = 'div', variant = 'base', children, append, prepend, ...props }) => {
  const Component = as || 'div';

  let cx = clsx([
    'focus:border focus:ring-2',
    'p-1 whitespace-nowrap flex items-center gap-1 rounded-full uppercase px-2 leading-4 text-xs font-semibold',
    variant === 'light' && 'bg-white text-gray-700',
    variant === 'dark' && 'bg-gray-700 text-white',
    variant === 'base' && 'bg-gray-300 text-gray-700',
  ]);

  return <Component className={cx} {...props}>
    {prepend}
    {children}
    {append}
  </Component>;
};
