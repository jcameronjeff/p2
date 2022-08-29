import { Box } from '../Box';
import { AppendPrependArgs, HTMLProps } from '../types';
import type { FC } from 'react';
interface IProps extends AppendPrependArgs {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown,
  label: string,
  variant?: 'chip' | 'default'
}

export const Checkbox:FC<HTMLProps<IProps, 'input'>>  = ({ as, append, prepend, className, variant, label, ...props }) => {
  const isChip = variant === 'chip';
  const baseClasses = 'gap-2 inline inline-flex items-center cursor-pointer disabled:cursor-not-allowed';
  const inputClass = `prism-checkbox transition h-4 w-4 duration-200 ${isChip && 'peer hidden'}`;
  const spanClass = isChip ? 'prism-chip transition duration-200 peer-checked:bg-blue-500 peer-checked:text-white flex gap-1' : 'flex gap-1';
  const clsx = [spanClass, className].join(' ');
  return (
    <Box as='label' className={baseClasses}>
      <Box as='input' type='checkbox' {...props} className={inputClass} />
      <Box as='span' className={clsx}>{prepend}{label}{append}</Box>
    </Box>
  );
};

export default Checkbox;
