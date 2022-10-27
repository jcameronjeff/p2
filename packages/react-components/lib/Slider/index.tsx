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
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setOurValue(parseInt(e.currentTarget.value));
  }

  const attr = {
    ...baseAttr,
    min,
    max,
    onInput: handleChange,

    value: props.value || ourValue,
  };

  const inputClass2 = `
    peer
    pointer-events-none
    relative
    outline-none focus-visible:outline-none
    cursor-grab
    active:cursor-grabbing

    w-full
    h-8
    appearance-none
    bg-transparent
    ${props.invert ? 'track:bg-blue-500' : 'track:bg-slate-200'}
    thumb:pointer-events-auto
    thumb:appearance-none
    thumb:w-4
    thumb:h-4
    thumb:-mt-1.5
    thumb:rounded-full
    thumb:bg-white
    thumb:outline-none
    thumb:border-none
    thumb:ring-2 thumb:ring-blue-500 disabled:thumb:grayscale

    disabled:thumb:cursor-default
    thumb:transition thumb:duration-250 thumb:ease-in-out
    thumb:z-50 thumb:relative
    not:disabled:active:thumb:scale-125
    focus:thumb:ring-3
    focus:thumb:bg-blue-100
    focus:thumb:drop-shadow

    disabled:thumb:grayscale


    track:h-1

    track:my-3



    z-20
    thumb:z-50
    track:-z-5
    track:bg-transparent
    absolute

    track:rounded-full track:relative
    `;

  function getOutputStyle(w:number) {
    let base = isHighValue ? max - w : w;
    return {
      width: ((base / max) * 100).toFixed(2) + '%',
      right: isHighValue ? 0 : 'inherit',
      left: isHighValue ? 'inherit' : 0,
    };
  }

  function getOutputClassnames() {
    return [
      'h-1 z-10 mt-3.5 absolute text-slate-400 text-xs rounded-full peer-disabled:grayscale',
      props.disabled ? 'grayscale' : '',
      props.invert ? 'bg-slate-200' : 'bg-blue-500',
      props.isHighValue ? 'text-right' : 'text-left',
    ].join(' ');
  }

  const listId = useId();
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputName = (props.name || useId()).split(' ').join('-');
  const maxValueLabel = `${props.showValues ? `${ourValue} / ${max}` : max}${!!unit ? unit : ''}`;

  useEffect(() => {
    if (inputRef2.current) {
      let currentValue = parseInt(inputRef2.current.value);
      setOurValue(currentValue);
    }
  });

  return (
    <>
      {props.label ? <label className='prism-label h-6 flex w-full' htmlFor={inputName}>{props.label}</label> : null}
      <div className={['h-8 grow top-0 w-full group pointer-events-none', props.className].join(' ')}>
        <div aria-title="input-decorations" className="relative ">
          <div className="relative h-0">
          <div className={`w-full ${props.invert ? 'bg-blue-400' : 'bg-slate-200'} h-1 rounded-full absolute top-3.5 -z-5`}></div>
        </div>
        <input
          {...attr}
          name={inputName}
          type='range'
          ref={inputRef2}
          list={listId}
          className={inputClass2}
        />

          <output
            className={getOutputClassnames()}
            style={getOutputStyle(ourValue)}>
          </output>
          <datalist
            id={listId}
            className='w-full absolute top-3.5 flex justify-between text-[3px] [&>option]:!p-0'>
            {[...Array.from(new Array(ticks || 0))].map(value => (
              <option
                key={`option-${value}`}
                value={value}
                className={[
                  'first-of-type:opacity-0 last-of-type:opacity-0',
                  'border-x-2 border-slate-200',
                  'border-l-blue-500 z-10'].join(' ')}/>
            ))}
          </datalist>
          <div className="flex text-xs text-slate-400 justify-between w-full absolute top-0 -translate-y-1.5">
            <div>{min}</div>
            <div>{maxValueLabel}</div>
          </div>
        </div>





    </div>
    </>
  );
}
