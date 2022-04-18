import React from 'react';

type VariantName = 'text'|'outline'|'auxiliary'|'link'|'base'
type Variant = Record<VariantName, string>;
type ButtonType = 'button' | 'submit' | 'reset';

interface Props extends React.DetailsHTMLAttributes<HTMLButtonElement> {
  variant?: keyof Variant,
  type?: ButtonType,
  label?: string
}

/**
 *
 * @todo Generate a singular Button component that:
 * - includes styles for everything with small footprint.
 * - styles do not pollute other elements.
 * - minimal API surface area (variant + tailwind)
 *
 */
export function Button({ variant = 'outline', label = 'OK', ...args }: Props):React.ReactElement {
  const { children, className } = args;

  const vars:Variant = {
    outline: 'bg-transparent ring-1 ring-navy-dark',
    text: 'ring-0',
    auxiliary: 'text-sm uppercase font-alt ring-0',
    link: 'ring-0 font-regular capitalize',
    base: '',
  };

  const cl = Object.getOwnPropertyDescriptor(vars, variant)?.value || ''
  const clsx = [vars[variant], className].join(' ');

  return (
    <button type="button" {...args} className={clsx}>{children || label}</button>
  );
}
Button.defaultProps = {
  variant: 'base',
  type: 'button',
};
export default Button;
