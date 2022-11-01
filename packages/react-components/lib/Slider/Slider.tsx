import React, { CSSProperties, useEffect, useId, useRef, useState } from 'react';
import './slider.css';

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


  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setOurValue(parseInt(e.currentTarget.value));
  }

  function getStyles(w:number):React.CSSProperties {
    let base = isHighValue ? max - w : w;
    let width = ((base / max) * 100).toFixed(2) + '%';
    /**
     * Here we are assigning the current width % to a CSS Custom Property we control
     * dynamically. This allows us to use it as a value in the CSS itself rather
     * than computing styles on every render.
     */
    return { '--value-width': width } as React.CSSProperties;
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
    className: 'peer',
  };

  return (
    <>
      {props.label &&
        <label
          className='prism-label h-6 flex w-full'
          htmlFor={inputName}>
          {props.label}
        </label>
      }
      <div className={['prism-slider group', props.className].join(' ')}>
        <div
          aria-title="input-decorations"
          className="relative h-0"
          style={getStyles(ourValue)}
        >
          <div
            role='presentation'
            className="track-decoration"
            data-inverted={invert} />
          <input {...ourInputArgs} />
          <output
            aria-disabled={props.disabled}
            data-high-value={isHighValue}
            data-inverted={invert} />
          <datalist id={listId}>
            {numberOfTicks.map(value => (
              <option key={`option-${value}`} value={value} />
            ))}
          </datalist>
          <legend>
            <div>{min}</div>
            <div>{maxValueLabel}</div>
          </legend>
        </div>
      </div>
    </>
  );
}
