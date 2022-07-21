import { useCallback, useState } from 'react';
import { Switch } from '@headlessui/react';
import { Box } from '../Box';
import { AppendPrependArgs, HTMLComponent } from '../types';
import clsx from 'clsx';

type ColorVariant = 'light' | 'base' | 'dark';

export interface Props extends AppendPrependArgs {
  /**
   * Color variation
   */
  variant?: ColorVariant
}

export const Chip:HTMLComponent<Props> = ({ as = 'div', variant = 'base', ...props }) => {
  const children = [props.prepend, props.children, props.append];
  let cx = clsx([
    'prism-chip',
    as === 'a' && 'bg-white text-blue-700 visited:text-red-800 hover:bg-sky-200',
    variant === 'light' && 'bg-white text-gray-700 ring-white',
    variant === 'dark' && 'bg-gray-700 text-white',
    props.className,
  ]);

  return <Box {...props} className={cx}>{children}</Box>;
};




interface ToggleProps extends React.HTMLAttributes<'button'> {
  onToggle?: (arg0:boolean) => void
}

export const Toggle = ({ children, onToggle = () => {} }:ToggleProps) => {
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
};
