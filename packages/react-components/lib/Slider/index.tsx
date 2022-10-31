import React, { useEffect, useId, useRef, useState } from 'react';

export type SliderPropsBase = {
  min?: number,
  max?: number,
  value?: number,
  defaultValue?: number,
  /**
   * If using as controlled component, use to pass outside comparisons.
   */
  isHighValue?: boolean
  /**
   * Manually flip the progress bar area.
   */
  invert?: boolean,
  /**
   * If true, the output value will be displayed as a number
   */
  showValues?: boolean
  standalone?: boolean
  ticks?: number
  unit?: string
  label?: string | React.ReactNode
};

export type ThisElementType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type RangePropsBase = Omit<ThisElementType, 'min' | 'max'>;
export type Slider2Props = RangePropsBase & SliderPropsBase;

export function Slider2({ style, min = 0, max = 100, ...props }:Slider2Props) {
  const { isHighValue, standalone, unit, invert, ticks, showValues, ...baseAttr } = props;
  const [ourValue, setOurValue] = useState(props.value || props.defaultValue || 0);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputName = (props.name || useId()).split(' ').join('-');
  const maxValueLabel = `${showValues ? `${ourValue} / ${max}` : max}${!!unit ? unit : ''}`;
  const numberOfTicks = [...Array.from(new Array(ticks || 0))];
  const inputClassnames = [
    'relative w-full h-8 z-20 bg-transparent peer',
    // reset
    'pointer-events-none appearance-none',
    'cursor-grab active:cursor-grabbing disabled:thumb:cursor-default',
    'outline-none focus-visible:outline-none',
    // thumb styles
    'thumb:appearance-none thumb:border-none thumb:pointer-events-auto ', // reset
    'thumb:w-4 thumb:h-4 thumb:rounded-full',
    'thumb:relative thumb:z-50 thumb:-mt-1.5',
    'thumb:bg-white thumb:ring-2 thumb:ring-blue-500',
    'thumb:transition thumb:duration-250 thumb:ease-in-out',
    // thumb pseudoclasses
    'disabled:thumb:grayscale',
    'not:disabled:active:thumb:scale-125',
    'focus:thumb:ring-3 focus:thumb:bg-blue-100 focus:thumb:drop-shadow',
    // track styles
    'track:relative track:h-1 track:my-3 track:-z-5',
    'track:bg-transparent track:rounded-full',
  ].join(' ');

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setOurValue(parseInt(e.currentTarget.value));
  }

  function getOutputElementArgs(w:number) {
    let base = isHighValue ? max - w : w;
    return {
      className: [
        'h-1 z-10 mt-3.5 absolute text-slate-400 text-xs rounded-full peer-disabled:grayscale',
        invert ? 'bg-slate-200' : 'bg-blue-500',
        isHighValue ? 'text-right' : 'text-left',
      ].join(' '),
      style: {
        width: ((base / max) * 100).toFixed(2) + '%',
        right: isHighValue ? 0 : 'inherit',
        left: isHighValue ? 'inherit' : 0,
      },
    };
  }

  useEffect(() => {
    if (inputRef.current) {
      let currentValue = parseInt(inputRef.current.value);
      setOurValue(currentValue);
    }
  });

  const ourInputArgs = {
    ...baseAttr,
    min,
    max,
    onInput: handleChange,
    name: inputName,
    ref: inputRef,
    list: listId,
    value: props.value || ourValue,
    type: 'range',
    className: inputClassnames,
  };

  let clsx = {
    wrapper: 'h-8 grow top-0 w-full group pointer-events-none',
    scaleBackdrop: `w-full ${invert ? 'bg-blue-400' : 'bg-slate-200'} h-1 rounded-full absolute top-3.5 -z-5`,
    datalist: 'w-full absolute top-3.5 flex justify-between text-[3px] [&>option]:!p-0',
    options: 'border-x-2 border-slate-200 border-l-blue-500 z-10 first-of-type:opacity-0 last-of-type:opacity-0',
    values: 'flex text-xs text-slate-400 justify-between w-full absolute top-0 -translate-y-1.5',
    label: 'prism-label h-6 flex w-full',
  };

  return (
    <>
      {props.label && <label className={clsx.label} htmlFor={inputName}>{props.label}</label>}
      <div className={[clsx.wrapper, props.className].join(' ')}>
        <div aria-title="input-decorations" className="relative h-0">
          <div className={clsx.scaleBackdrop} />
          <input {...ourInputArgs} />
          <output {...getOutputElementArgs(ourValue)} />
          <datalist id={listId} className={clsx.datalist}>
            {numberOfTicks.map(value => (
              <option key={`option-${value}`} value={value} className={clsx.options} />
            ))}
          </datalist>
          <div className={clsx.values}>
            <div>{min}</div>
            <div>{maxValueLabel}</div>
          </div>
        </div>
      </div>
    </>
  );
}
