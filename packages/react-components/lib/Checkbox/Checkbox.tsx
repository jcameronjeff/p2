import { Box } from '../Box';
import { AppendPrependArgs, HTMLProps } from '../types';
import type { FC } from 'react';
import { CheckmarkIcon } from '@prism2/icons-react';
export interface IProps extends AppendPrependArgs {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown,
  label: string,
  variant?: 'chip' | 'default'
}

export const Checkbox:FC<HTMLProps<IProps, 'input'>>  = ({ as, append, prepend, className, variant, label, ...props }) => {
  const baseClasses = 'gap-2 items-center cursor-pointer disabled:cursor-not-allowed';
  const spanClass = variant === 'chip' ? 'prism-chip peer-checked:bg-blue-700 peer-checked:text-white' : '';
  const iconClass = variant === 'chip' ? 'hidden' : 'h-[0.9em] w-[0.9em] ring-[1.5px] ring-gray-400 peer-checked:ring-blue-700 hover:ring-blue-700 text-white rounded-xs peer-checked:bg-blue-700 peer-disabled:ring-gray-300 peer-disabled:peer-checked:bg-gray-300';
  const clsx = [spanClass, 'peer-disabled:text-gray-400 transition duration-200', className].join(' ');

  return (
    <Box as='label' className={`${baseClasses} flex gap-1`}>
      <Box as='input' type='checkbox' {...props} className='peer w-0 opacity-0' />
      <CheckmarkIcon className={iconClass} />
      <Box as='span' className={clsx}>{prepend}{label}{append}</Box>
    </Box>
  );
};

export default Checkbox;
