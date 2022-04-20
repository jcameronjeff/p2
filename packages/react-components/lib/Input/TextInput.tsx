import React from 'react';

/**
 *
 * @module TextInput
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
 *  - No styling by default!
 *  - Easily reproduced with vanilla HTML.
 *
 * @returns HTML <label><input /><label /> elements.
 */

type Props = React.HTMLProps<HTMLInputElement> & {
  /**
   * Label text to be displayed above input.
   */
  label?: string;
  /**
   * A11Y mapping for label's htmlFor <--> inputs name.
   */
  name?: string;
  /**
   * Disable rendering of label and vertical whitespace.
   */
  inline?: boolean;
  /**
   * Escape hatch to use if the parent <label /> tag must be modified.
   */
  labelClassName?: string;
};

export function TextInput({ label = '', name = '', labelClassName = 'flex flex-col w-auto', inline = false, ...props }: Props) {
  const htmlFor = name || label && label.split(' ').join('-').toLowerCase() || 'prism-input';
  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      {!inline && label && label}
      {!inline && <br />}
      <input name={htmlFor} type="text" {...props} />
    </label>
  );
}
