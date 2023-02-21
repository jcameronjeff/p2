import React, {
  ForwardRefRenderFunction,
} from 'react';
/**
 *
 * @module Input
 *
 * @abstract Provides a shorthand method of marking up input[type='text] with
 * standard accessibility features. Accepts any valid HTML attribute for the
 * <input /> element. This assumes type='text'.
 *
 * @remark This is a draft proposal for a TypeScript version of PRISM components.
 * The purpose is to limit complexity while speeding up certain repetitive layout
 * tasks.
 *
 *  - Typescript definitions
 *  - Docgen comments for Props
 *  - Extend HTMLProps from native specs ratherh than reimplement them (onClick and so forth).
 *  - Easily reproduced with vanilla HTML.
 *  - see plugin styles at packages/tailwind-plugin-elements/lib/tailwind-plugin-core.js
 * @returns HTML <label><input /><label /> elements.
 */

type StyleOptions = {
  [key: string]: string
};

const styles:StyleOptions = {
  text: 'flex text-slate-700 px-1 items-baseline relative rounded-xs border w-full focus:outline-none placeholder:text-slate-500/50',
  label: 'prism-label',
  inline: 'flex-row items-center gap-1',
};

export interface InputPropsBase {
  /**
      * Disable rendering of label and vertical whitespace.
      */
  inline?: boolean;
  /**
      * Escape hatch to use if the parent <label /> tag must be modified.
      */
  labelClassName?: string;
}

export type InputProps = InputPropsBase & Omit<React.HTMLProps<HTMLInputElement>, keyof InputPropsBase>;

export const InputComponent: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, inline, label = ' ', labelClassName = ' ', type = 'text', ...otherProps }, ref) => {
  const clsx = [styles.label, labelClassName, inline ? styles.inline : ' '].join(' ');
  return (
        <label className={clsx}>
            {label}
            <input
                className={styles.text}
                name={name}
                type={type}
                ref={ref}
                {...otherProps}
            />
        </label>
  );
};

export const Input = React.forwardRef(InputComponent);

