import { Switch } from "@headlessui/react";
import { LockClosedIcon } from "@prism2/icons-react/24/outline";
import { ExtractProps } from "@prism2/react-components/dist/types";

export const SwitchInput = (props: ExtractProps<typeof Switch> & { label: string }) => {
  const switchClass = [
    'relative inline-flex shrink-0 items-center',
    'h-[calc(1em+4px)] w-[calc(2em+2px)]',
    'not:disabled:cursor-pointer rounded-full border-2 border-transparent',
    'transition-colors duration-200 ease-in-out',
    'bg-blue-500 md:col-span-1',
    'group-disabled:grayscale transition duration-100',
    'ui-not-checked:grayscale ui-not-checked:bg-opacity-50',
    'ring-transparent ring-2 group-focus-within:ring-blue-200/50',
  ].join(' ');

  const btnClsx = [
    'ui-checked:translate-x-[calc(1em-2px)] ui-not-checked:translate-x-0',
    'pointer-events-none inline-block h-[1em] w-[1em] transform rounded-full',
    'bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex grow-0 shrink-0 items-center justify-center',
  ].join(' ');
  return (
  <Switch className='flex w-full justify-between items-center py-1.5 group focus-visible:outline-none focus-visible:shadow-sm focus-visible:ring-1 focus-visible:bg-slate-50/50 rounded-sm first-letter:cursor-pointer disabled:cursor-not-allowed transition duration-100' {...props}>
    <label className={'ui-checked:text-slate-500 font-medium text-xs text-slate-300 transition duration-100 '}>Enable {props.label}</label>
    <div className={switchClass}>
      <span className="sr-only">Use setting</span>
      <span aria-hidden="true" className={btnClsx}>

      </span>
      <span className='ui-checked:-translate-x-7 ui-not-checked:translate-x-1 text-sm px-1 text-white' />
      <LockClosedIcon className='absolute h-3 group-disabled:text-slate-400/50 text-transparent -translate-x-5' />
    </div>
  </Switch>
  );
}
