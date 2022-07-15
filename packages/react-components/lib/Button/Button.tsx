import { HTMLProps, ReactElement, Ref } from 'react';

/**
 * @remark - Define types inline at the top of the file
 * @remark - Include comments explaining each key of Props
 * @remark - `interface Props` should extend the corresponding HTML elements args.
 * @remark - Variant pattern can be re-used. Only TW3 classes allowed.
 * @remark - Alternately: define components in TW3 and reference as variants.
 */
export type VariantName = 'text' | 'outline' | 'auxiliary' | 'link' | 'base';
export type Variant = Record<VariantName, string>;
export type ButtonType = 'button' | 'submit' | 'reset';

interface Props extends HTMLProps<HTMLButtonElement> {
  /**
   * Tokenized name for desired style. `button-outline` becomes `variant='outline'`.
   */
  variant?: keyof Variant,
  /**
   * HTML Type attribute https://www.w3schools.com/tags/att_type.asp
   */
  type?: ButtonType,
  /**
   * Optional text to display on button, otherwise use children.
   */
  label?: string,
  /**
   * If true, button will span container
   */
  block?: boolean,
  /**
   * Roundabout way to pass a ref directly to our element
   */
  innerRef?: Ref<HTMLButtonElement>
}

/**
 *
 * - @todo Generate a singular Button component that:
 * - includes styles for everything with small footprint.
 * - styles do not pollute other elements.
 * - minimal API surface area (variant + tailwind)
 *
 */
export function Button(
  { variant = 'base', label = 'OK', block = false, ...props }: Props,
):ReactElement {

  const { children, className, innerRef, ...attr } = props;

  const baseClass = 'prism-btn focus-within:ring-1 focus-within:ring-offset-1';
  const vars:Variant = {
    outline: 'bg-transparent border border-blue-300 ring-0',
    text: 'border-0',
    auxiliary: 'text-sm uppercase font-alt border-8',
    link: 'border-0 font-regular uppercase',
    base: 'prism-btn fill',
  };

  const clsx = [
    baseClass,
    vars[variant],
    (block && 'w-full'),
    className,
  ].join(' ');

  return (
    <button {...attr} ref={props.innerRef} className={clsx}>{children || label}</button>
  );
}
Button.defaultProps = {
  variant: 'base',
  type: 'button',
};

export default Button;
