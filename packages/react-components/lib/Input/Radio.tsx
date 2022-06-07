import { useRef, useState, HTMLProps, ReactNode } from 'react';

export interface IProps extends HTMLProps<HTMLInputElement> {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown
}

export const Radio:React.FC<IProps>  = ({
  className = '',
  ...props
}) => {
  const radioRef = useRef<HTMLInputElement>(null);
  const baseClasses = 'prism-form-check-input prism-form-radio  bg-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer';
  const clsx = [baseClasses, className].join(' ');

  return (
      <input
        ref={radioRef}
        type='radio'
        className={clsx}
        {...props}/>
  );
};

export default Radio;
