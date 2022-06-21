
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
    'prism-chip',
    as === 'a' && 'bg-white text-blue-700 visited:text-red-800 hover:bg-sky-200',
    variant === 'light' && 'bg-white text-gray-700 ring-white',
    variant === 'dark' && 'bg-gray-700 text-white',
    // variant === 'base' && 'bg-gray-300 text-gray-700',
  ]);

  return <Component className={cx} {...props}>
    {prepend}
    {children}
    {append}
  </Component>;
};


import { useCallback, useState } from 'react';
import { Switch } from '@headlessui/react';

interface ToggleProps extends React.HTMLAttributes<'button'> {
  onToggle?: (arg0:boolean) => void
}

export function Toggle({ children, onToggle = () => {} }:ToggleProps) {
  const [enabled, setEnabled] = useState(false);
  const text = enabled ? children || 'On' : children || 'Off';

  const toggle = useCallback((event) => {
    setEnabled(event);
    onToggle(event);
  }, []);

  return (
    <Switch
      as="button"
      checked={enabled}
      onChange={toggle}
      className={`${
        enabled ? 'bg-blue-600 text-white' : 'hover:bg-sky-200'
      } prism-chip cursor-pointer inline-block w-auto whitespace-nowrap`}
    >
      {text}
    </Switch>
  );
}
