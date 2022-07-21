import { RadioGroup } from '@headlessui/react';
import { useRef, useState, HTMLProps, ReactNode, FormEvent, FormEventHandler, useCallback } from 'react';
import { Box } from '../Box';
import { HTMLComponent } from '../types';

export interface IProps extends HTMLProps<HTMLInputElement> {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown
  value: string,
  label?: string,
}

export const Radio:HTMLComponent<IProps>  = ({
  className = '',
  label,
  value,
  ...props
}) => {
  const baseClasses = 'cursor-pointer capitalize';
  const clsx = [baseClasses, className].join(' ');

  return (
      <Box as='label' className='flex gap-2 items-center cursor-pointer'>
        <Box as='input' value={value} type='radio' {...props}  />
        <Box as='div' className={clsx}>{label || value}</Box>
      </Box>
  );
};

export default Radio;


interface Props {
  /**
   * Array of options as a string
   */
  values: string[],
  /**
   *
   */
  initialItem?: string,
  /**
   * Optional title attribute, populates a <legend> element
   */
  name: string,
  /**
   * If true, values will render horizontally (flexbox)
   */
  inline?: boolean,
  /**
   * Callback to fire when selecting an option, passes full event.
   */
  onChange?(evt:FormEvent<HTMLInputElement>): void,
  /**
   * Helper callback, passes the new value as a string.
   */
  onUpdate?(val:string): void
}

export const RadioSet:React.FC<Props> = ({ values, name, onChange = () => {}, onUpdate = () => {}, inline, ...props }) => {

  const [selection, setSelection] = useState(props.initialItem || values[0]);

  function handleChange(val:string) {
    setSelection(val);
    onUpdate(val);
  }

  return (
    <RadioGroup value={selection} onChange={handleChange} as="fieldset">
      {name && <RadioGroup.Label className='prism-label' as="legend">{name}</RadioGroup.Label>}
      <div className={inline ? 'flex gap-4 items-center' : ''}>
      {values.map((item, key) => (
        <RadioGroup.Option value={item} key={`item-${key}`}>
          {({ checked }) => (
            <Radio value={item} name={name} checked={checked} onChange={onChange} />
          )}
        </RadioGroup.Option>
      ))}
      </div>
    </RadioGroup>
  );
};


export const Radios:React.FC<Props> = ({
  values,
  name,
  onUpdate = () => {},
  onChange = () => {},
  inline,
  initialItem,
}) => {

  const handleChange = useCallback((e:FormEvent<HTMLInputElement>) => {
    onChange(e);
    onUpdate(e.currentTarget.value);
  }, []);

  return (
    <div className={inline ? 'flex gap-4 items-center' : ''}>
      {values.map((val, k) =>
        <Radio
          key={`item-${k}`}
          defaultChecked={initialItem === val}
          name={name}
          value={val}
          onChange={handleChange}
        />,
      )}
    </div>
  );
};
