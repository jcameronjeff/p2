import { useRef, useState, HTMLProps, ReactNode } from 'react';

interface IProps extends HTMLProps<HTMLInputElement> {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown
}

export const Checkbox:React.FC<IProps>  = ({
  className = '',
  ...props
}) => {
  const cbRef = useRef<HTMLInputElement>(null);
  const baseClasses = 'prism prism-form-check-input prism-form-checkbox appearance-none  transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer';
  const clsx = [baseClasses, className].join(' ');

  return (
      <input
        ref={cbRef}
        type='checkbox'
        className={clsx}
        {...props}
       />
  );
};

export default Checkbox;
