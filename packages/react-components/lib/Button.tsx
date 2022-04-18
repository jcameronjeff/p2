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
export function Button({ variant = 'base', label = 'OK', ...args }: Props):React.ReactElement {
  const { children, className } = args;

  const vars:Variant = {
    outline: 'bg-transparent border border-blue-300 ring-0',
    text: 'border-0',
    auxiliary: 'text-sm uppercase font-alt border-0',
    link: 'border-0 font-regular uppercase',
    base: 'border',
  };

  const clsx = [vars[variant], className].join(' ');

  return (
    <button {...args} className={clsx}>{children || label}</button>
  );
}
Button.defaultProps = {
  variant: 'base',
  type: 'button',
};
export default Button;
