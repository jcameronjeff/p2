import { Switch as HeadlessSwitch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { ExtractProps } from '../types';

/**
 * @TODO - put this hook somewhere that it can
 * be documented and used on its own. -DSC 2022-08-25
 *
 * @param defaultChecked boolean initial value of our toggle
 * @param callback Fired when value changes, accepts a boolean and optional name
 * @param name Optional name to include in callbacks
 */
type UseToggleReturn = {
  checked: boolean,
  onChange: (checked:boolean) => void
};
export function useToggle(
  defaultChecked:boolean = false,
  callback: (value:boolean, name?:string)=>void = ()=>{},
  name?: string,
):UseToggleReturn {
  const [checked, onChange] = useState(defaultChecked);
  useEffect(() => {
    callback(checked, name);
  }, [checked]);
  return { checked, onChange };
}

export function SwitchRoot({ className, children, unstyle, ...props }: ExtractProps<typeof HeadlessSwitch> & {
  /**
   * If true, removes classnames from the output.
   */
  unstyle?: boolean

}) {
  // const baseClass = !!unstyle ? '' : 'bg-red-300';
  const clsx = unstyle ? className : [
    // 'relative inline-flex h-[38px] w-[74px] shrink-0 items-center',
    'relative inline-flex shrink-0 items-center',
    'h-[calc(1em+4px)] w-[calc(2em+2px)]',
    'not:disabled:cursor-pointer rounded-full border-2 border-transparent',
    'transition-colors duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus-visible:ring-3 focus-visible:ring-blue-300',
    'focus-visible:ring-opacity-75 bg-blue-800',
    props.checked ? '' : 'grayscale bg-opacity-50',
    className,
  ].join(' ');

  const btnClsx = unstyle ? '' : [
    props.checked ? 'translate-x-[calc(1em-2px)]' : 'translate-x-0',
    'pointer-events-none inline-block h-[1em] w-[1em] transform rounded-full',
    'bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
  ].join(' ');


  return (
    <HeadlessSwitch {...props} className={clsx}>
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={btnClsx} />
      <span className={`${props.checked ? '-translate-x-7' : 'translate-x-1'} text-sm px-1 text-white`}>{children}</span>
    </HeadlessSwitch>
  );
}


export function SwitchGroup({ className, unstyle, ...props }: ExtractProps<typeof HeadlessSwitch.Group> & {
  // additional props here
}) {
  const as = props.as || 'div';
  const baseClass = !!unstyle ? '' : 'flex items-center gap-2';
  const clsx = [baseClass, className].filter(Boolean).join(' ');
  return <HeadlessSwitch.Group as={as} {...props} className={clsx} />;
}

export function SwitchLabel({ className, unstyle, ...props }: ExtractProps<typeof HeadlessSwitch.Label> & {
  // additional props here
}) {
  const baseClass = !!unstyle ? '' : 'text-gray-500 tracking-tight';
  const clsx = [baseClass, className].filter(Boolean).join(' ');
  return <HeadlessSwitch.Label {...props} className={clsx} />;
}

export function SwitchDescription({ className, unstyle, ...props }: ExtractProps<typeof HeadlessSwitch.Description> & {
  // additional props here
}) {
  const baseClass = !!unstyle ? '' : 'bg-green-300';
  const clsx = [baseClass, className].filter(Boolean).join(' ');
  return <HeadlessSwitch.Description {...props} className={clsx} />;
} //


export const Switch = Object.assign(SwitchRoot, {
  Group: SwitchGroup,
  Label: SwitchLabel,
  Description: SwitchDescription,
});

