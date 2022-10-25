import { useEffect, useRef, useState } from "react";


export function RangeSlider<T extends number|number[]>({min = 0, max = 1000, onInput = () => {}, onUpdate = () => {}, ...attr}:
  Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,'defaultValue'> & {
    onUpdate: (arg0:any) => void
    defaultValue?: T,
    multiple?: boolean
  })
{
  function getDefaultValue(value: string|number|unknown[]|undefined, index:number):number {
    if (!value) return index === 0 ? 0 : 1;
    if (typeof value === 'number') return value;
    if (typeof value === 'string') return parseInt(value)
    if (Array.isArray(value)) return getDefaultValue(value[index], 0)
    if (min) return getDefaultValue(min, 0);
    return 0;
  }
  const [valueA, setValueA] = useState<number>(getDefaultValue(attr.defaultValue, 0))
  const [valueB, setValueB] = useState<number>(getDefaultValue(attr.defaultValue, 1))

  const style = useRef(getMargins())

  useEffect(() => {
    if (Array.isArray(attr.defaultValue)) {
      onUpdate([valueA, valueB])
    }
    style.current = getMargins()
  }, [valueA, valueB])

  function getMargins() {
    const values = [valueA, valueB];
    let [low, high] = values.sort((a,b) => a - b);
    const ourMax = typeof max === 'number' ? max : parseInt(max);
    const ourMin = typeof min === 'number' ? min : parseInt(min);
    let rangeSize = ourMax - ourMin;
    let offsetLeft = (low - ourMin)/(rangeSize);
    let offsetRight = (ourMax - (high))/rangeSize;
    let trackSize = ((1 - (offsetLeft + offsetRight)) * 100).toFixed(2)
    return {
      left: (offsetLeft*100).toFixed(2) + '%',
      right: (offsetRight*100).toFixed(2) + '%',
      width: trackSize + '%'
    }
  }
  const inputClass = [
    'h-8 flex flex-wrap',
    'items-center relative',
  ].join(' ')

  const rangeClass = [
    // '-mx-1',
    'inline-block absolute w-full w-full',
    'pointer-events-none',
    'cursor-grab',
    'bg-transparent',
    'outline-none focus-visible:outline-none',
    'appearance-none',
    'thumb:pointer-events-auto',
    'thumb:appearance-none',
    'thumb:w-4',
    'thumb:h-4',
    'thumb:rounded-full',
    'thumb:bg-white focus:thumb:bg-blue-100',
    'thumb:ring-2 thumb:ring-blue-500',
    'active:thumb:scale-125',
    'thumb:transition thumb:duration-250 thumb:ease-in-out',
    'thumb:z-10 thumb:relative',
    'focus-visible:thumb:ring-3 focus:thumb:drop-shadow',
    'track:appearance-none',
    'track:z-1 thumb:z-5',
    'track:mb-2',
    'track:bg-transparent',
    'track:h-0.5 track:rounded-full track:relative',
    'active:cursor-grabbing peer'
  ].join(' ')

  return (
      <div className='relative'>
        <div className="relative mx-2 block h-0">
        {[{
          value: valueA,
          setter: setValueA,
          cx: valueA <= valueB ? { left: style.current.left } : { right: style.current.right }
        },{
          value: valueB,
          setter: setValueB,
          cx: valueB < valueB ? { left: style.current.left } : { right: style.current.right }
        }].sort((a, b) => a.value - b.value).map(({value, setter, cx}, i) => (
          <div key={`item-${i}`} className={[
            `w-6 -mx-3 text-center ${i === 0 ? '' : ''}`,
            'text-[9px] z-30 text-slate-300 -top-1 absolute',
            'text-xs tracking-tighter pointer-events-none'].join(' ')} style={
              i === 0 ? { left: style.current.left } : { right: style.current.right }
            }>
            {value}
          </div>
        ))}
        </div>
      <div className={inputClass}>
         <input className={rangeClass}
          type="range" {...attr} min={min} max={max} defaultValue={valueA}
          name="range-a"
          onChange={attr.onChange}
          onInput={(e) => {
            onInput(e);
            setValueA(parseInt(e.currentTarget.value))
          }}
        />
        <input className={rangeClass}
          type="range" {...attr} min={min} max={max} defaultValue={valueB}
          name="range-a"
          onChange={attr.onChange}
          onInput={(e) => {
            onInput(e);
            setValueB(parseInt(e.currentTarget.value))
          }}
        />
        <div className='relative block w-full'>
          <div style={{width: style.current.left}} className='h-0.5 rounded-full absolute bg-slate-300' />
          <div style={style.current} className='h-0.5 absolute bg-blue-400 flex justify-between' />
          <div style={{width: style.current.right }} className='h-0.5 rounded-full absolute right-0 bg-slate-300' />
        </div>
      </div>
    </div>
  )

}
