import { RadioGroup } from '@headlessui/react';
import { useRef, useState, HTMLProps, ReactNode } from 'react';
import { Box } from '../Box';
import { HTMLComponent } from '../types';

export interface IProps extends HTMLProps<HTMLInputElement> {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown
  label: string,
}

export const Radio:HTMLComponent<IProps>  = ({
  className = '',
  label,
  ...props
}) => {
  const baseClasses = 'prism-form-check-input prism-form-radio cursor-pointer';
  const clsx = [baseClasses, className].join(' ');

  return (
      <Box as='label' className='flex gap-2 item-center text-sm'>
        <Box as='input' type='radio' {...props} className={clsx} />
        <Box as='span' className='capitalize'>{label}</Box>
      </Box>
  );
};

export default Radio;


interface Props {
  /**
   * Array of options as a string
   */
  items: string[],
  /**
   * Optional title attribute, populates a <legend> element
   */
  title?: string,
  /**
   * If true, items will render horizontally (flexbox)
   */
  inline?: boolean,
  /**
   * Callback to fire when selecting an option.
   */
  onChange?(val:string): void,
}
export const RadioSet:React.FC<Props> = ({ items, title, onChange = () => {}, inline, ...props }) => {

  const [selection, setSelection] = useState(items[0]);

  function handleChange(val:string) {
    setSelection(val);
    onChange(val);
  }

  return (
    <RadioGroup value={selection} onChange={handleChange} as="fieldset">
      {title && <RadioGroup.Label className='prism-label' as="legend">{title}</RadioGroup.Label>}
      <div className={inline ? 'flex gap-4' : ''}>
      {items.map((item, key) => (
        <RadioGroup.Option value={item} key={`item-${key}`}>
          {({ checked }) => (
            <Radio label={item} checked={checked} onChange={() => {}} />
          )}
        </RadioGroup.Option>
      ))}
      </div>
    </RadioGroup>
  );
};
