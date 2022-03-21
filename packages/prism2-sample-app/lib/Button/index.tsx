import React from 'react';
import './button.css';

type Variant = 'text' | 'outline' | 'auxiliary' | 'link' | 'base';
type ButtonType = 'button' | 'submit' | 'reset';

interface Props extends React.DetailsHTMLAttributes<HTMLButtonElement> {
  variant?: Variant | undefined,
  type?: ButtonType
}

/**
 *
 * @todo Generate a singular Button component that:
 * - includes styles for everything with small footprint.
 * - styles do not pollute other elements.
 * - minimal API surface area (variant + tailwind)
 *
 */
export function Button({ variant = 'outline', ...args }: Props) {
  const { children, className } = args;
  const vars:Record<Variant, string> = {
    outline: 'bg-transparent ring-1 ring-navy-dark',
    text: 'ring-0',
    auxiliary: 'text-sm uppercase font-alt ring-0',
    link: 'ring-0 font-regular capitalize',
    base: '',
  };
  const clsx = [vars[variant], className].join(' ');

  return (
    <button type="button" {...args} className={clsx}>{children}</button>
  );
}
Button.defaultProps = {
  variant: 'base',
  type: 'button',
};
export default Button;
