import React, { ReactNode } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@prism2/icons-react/24/solid';
import { ExtractProps } from '../types';
import { popIn } from '../utils';

const IndicatorChevron: React.FC<{ enabled?: boolean }> = ({ enabled }) => (
  <ChevronRightIcon className={`w-5 h-5 min-w-[1.25rem] transition-all duration-200 transform ui-open:-rotate-90 ui-not-open:rotate-90 ${enabled ? '-rotate-90' : 'rotate-90'}`} />
);

const Placeholder = ({ children }) => <span className='opacity-50'>{children}</span>;


export const ListboxLabel = (props: ExtractProps<typeof Listbox.Label>) => {
  let attrs = {
    ...props,
    className: [
      'relative inline-block prism-label',
      props.className,
    ].join(' '),
  };
  return <Listbox.Label {...attrs} />;
};

export const ListboxButton = ({ value, placeholder, ...props }: ExtractProps<typeof Listbox.Button> & { children?: ReactNode }) => {
  let attrs = {
    ...props,
    className: [
      'p-2 h-10 border flex items-center prism-input',
      'text-left overflow-hidden shadow-inner',
      'ui-open:ring-1 ui-open:ring-blue-600',
      props.className,
    ].join(' '),
  };
  return (
    <Listbox.Button {...attrs}>
      {value && value.length ?
        <span className='truncate'>{Array.isArray(value) ? value.join(', ') : value}</span> : <Placeholder>{placeholder}</Placeholder>}
      <div className="ml-auto">
        <IndicatorChevron />
      </div>
    </Listbox.Button>
  );
};

export const ListboxOptions = (props: ExtractProps<typeof Listbox.Options>) => {
  let attrs = {
    ...props,
    className: [
      'border shadow absolute w-full rounded',
      props.className,
    ].join(' '),
  };
  return (
    <Transition {...popIn}>
      <Listbox.Options {...attrs} />
    </Transition>
  );
};

export const ListboxOption = (props: ExtractProps<typeof Listbox.Option>) => {
  let attrs:ExtractProps<typeof Listbox.Option> = {
    as: 'li',
    ...props,
    className: [
      'flex space-x-2 p-2 font-medium text-black',
      'ui-disabled:opacity-50 ui-active:text-blue-700 ui-active:bg-blue-50',
      'icons:w-6 icons:h-6 icons:opacity-0 icons:ui-selected:opacity-100 icons:ui-active:opacity-100',
      props.className,
    ].join(' '),
  };
  return <Listbox.Option {...attrs} />;
};

Listbox.displayName = 'Listbox';
export { Listbox };
