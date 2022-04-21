import React, { HTMLProps } from 'react';

export interface IProps extends HTMLProps<HTMLInputElement> {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown
  /**
   * Required: Label text to apply with checkbox
   */
  label: string
}

export const Checkbox:React.FC<IProps>  = ({
  label = '',
  checked = false,
  className = '',
  onChange = () => {},
  onToggle = () => {},
  ...props
}) => {
  const cbRef = React.useRef<HTMLInputElement>(null);
  const [isChecked, setChecked] = React.useState(checked);
  const baseClasses = 'flex gap-2 items-center cursor-pointer';
  const clsx = [baseClasses, className].join(' ');

  function handleClick(e:React.BaseSyntheticEvent) {
    if (e.type === 'click') {
      onChange(e as React.FormEvent<HTMLInputElement>);
      onToggle([label, !isChecked]);
      setChecked(!isChecked);
    }
  }

  return (
    <div className={clsx} onClick={handleClick} {...props} >
      <input
        name={label}
        ref={cbRef}
        type='checkbox'
        checked={isChecked}
        onChange={handleClick} />
      <span className='prism-label'>{label}</span>
    </div>
  );
};


export default Checkbox;
