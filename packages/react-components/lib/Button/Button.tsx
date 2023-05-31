import { forwardRef, ForwardRefRenderFunction, HTMLProps, Ref } from 'react';
import type { AppendPrependArgs } from '../types';
/**
 * @remark - Define types inline at the top of the file
 * @remark - Include comments explaining each key of Props
 * @remark - `interface Props` should extend the corresponding HTML elements args.
 * @remark - Variant pattern can be re-used. Only TW3 classes allowed.
 * @remark - Alternately: define components in TW3 and reference as variants.
 */
 type Props = HTMLProps<HTMLButtonElement> & AppendPrependArgs & {
   /**
   * Tokenized name for desired style. `button-outline` becomes `variant='outline'`.
   */
   variant?: keyof ButtonVariant,
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
   * If true, button will apply absolute positioning
   */
   floating?: boolean,
 };

export type ButtonVariantName = 'fill' | 'text' | 'outline' | 'auxiliary' | 'link' | 'base' | 'icon';
export type ButtonVariant = Record<ButtonVariantName, string>;
export type ButtonType = 'button' | 'submit' | 'reset';

type StyleOptions = {
  [key: string]: string
};

/**
 * @remark Moved these out of the function to act more as constants. Using CSS apply may be a better pattern. I.e. do we really need a variant prop at all...
 */

const styles:StyleOptions = {
  base: 'prism-btn focus-within:ring-1 focus-within:ring-offset-1',
  outline: 'bg-transparent border ring-0 border-0',
  text: 'border-0 text !outline-0 ring-0',
  auxiliary: 'text-sm text uppercase font-alt',
  link: 'border-0 font-normal uppercase',
  fill: 'fill',
  icon: 'overflow-visible',
  simulcast: 'simulcast',
  floating: 'rounded-full text-sm absolute',
  block: 'w-full text-center',
};


export const ButtonComponent:ForwardRefRenderFunction<HTMLButtonElement, Props> =  (
  { variant = 'outline', type = 'button', ...props }, ref) => {

  const { className, children, name, label, prepend, append, block, floating, ...attr } = props;

  const clsx = [
    styles.base,
    styles[variant] ?? '',
    block ? styles.block :  '',
    floating ? styles.floating : '',
    className ?? '',
  ].join(' ');

  return (
    <button {...attr} ref={ref} className={clsx} type={type}>{prepend}{label}{children}{append}</button>
  );
};

export const Button = forwardRef(ButtonComponent);
export default Button;
