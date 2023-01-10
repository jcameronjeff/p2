import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@prism2/icons-react/24/solid';
import { popIn } from '../lib/utils';
import { CancelCircleIcon, SearchIcon } from '@prism2/icons-react';
import { usStates } from './_mockData';

export default {
  title: 'Components/Combobox',
  component: Combobox,
} as ComponentMeta<any>;



const styles = {
  input: [
    'origin-center bg-gray-400/10 my-2',
    'p-2 px-12 ml-auto text-xs rounded-sm border-0 outline-none',
    'w-full text-center font-medium text-gray-800 focus:ring-2',
  ].join(' '),
  options: [
    'absolute p-1 backdrop-blur-md bg-white/50 top-full',
    'w-full shadow-lg rounded ring-1 ring-gray-400/50 divide-y divide-gray-400/20',
  ].join(' '),
  option: [
    'px-2 icons:ui-selected:text-gray-300 icons:ui-active:ui-selected:text-white ui-active:text-white ui-active:bg-blue-700',
    'w-full text-left block p-2 text-xs rounded-sm font-medium cursor-pointer icons:h-4 icons:ml-auto flex',
  ].join(' '),
};


export const PrismOne: ComponentStory<any> = ({ className, ...args }) => {

  const makes = usStates;
  const [query, setQuery] = React.useState('');
  const [selectedMake, setSelectedMake] = React.useState<string[] | string>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setQuery('');
    setSelectedMake([]);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  const filteredMakes =
    makes.filter((make) => {
      return make.toLowerCase().includes(query.toLowerCase());
    });

  const CancelButton = () => {
    return query.length > 0 || selectedMake.length > 0 ? (
      <button className='p-2' onClick={resetForm}>
        <CancelCircleIcon className='h-5 text-gray-600' />
      </button>
    ) : null;
  };

  const NotFound = () => {
    return filteredMakes.length === 0 ? (
      <div className="p-4 text-center">
        <button className='prism-btn text text-sm bg-gray-50'>Add "{query}" to list</button>
      </div>
    ) : null;
  };



  const HighlightQuery = ({ str, clsx = '' }:{ str:string, clsx?: string }) => {
    let slicePoint = str.toLowerCase().indexOf(query.toLowerCase());
    if (query === '' || slicePoint === -1) return <>{str}</>;
    let sliceEnd = slicePoint + query.length;
    let parts = [
      str.slice(0, slicePoint).replace(/ /g, '\u00A0'),
      str.slice(slicePoint, sliceEnd).replace(/ /g, '\u00A0'),
      str.slice(sliceEnd).replace(/ /g, '\u00A0'),
    ]; //?
    return <>{parts[0]}<span className='font-black'>{parts[1]}</span>{parts[2]}</>;
  };

  function handleKeyDown(event:React.KeyboardEvent) {
    if (event.key === 'Backspace') {
      if (args.multiple && query === '') {
        setSelectedMake(selectedMake.slice(0, -1));
        return;
      }
      if (query.length < selectedMake.length) {
        resetForm();
      }
    }
  }

  return (
    <Combobox {...args} value={selectedMake} onChange={(val:string | string[]) => {
      resetForm();
      setSelectedMake(val);

    }} className='relative w-[400px]' as='div' hold>
      <div className="flex items-baseline relative rounded-xs border px-2 w-full border-gray-400 focus:ring-0 focus:outline-none focus-within:border-gray-400 focus-within:shadow-lg">
        {typeof selectedMake !== 'string' &&
          <div className='whitespace-nowrap pr-1'>{selectedMake.join(', ')}</div>
        }
        <Combobox.Input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className='w-full border-none focus:outline-none focus:ring-0 pl-0'
          onChange={(event) => setQuery(event.target.value)}
          defaultValue='Select a state'
        />
        <div className="w-0 -translate-x-16 self-center">
          <CancelButton />
        </div>
        <div className="w-0 -translate-x-7 self-center">
          <SearchIcon className='h-5 w-5 text-blue-600' aria-hidden='true' />
        </div>
      </div>
    <Transition {...popIn}>
      <Combobox.Options className={[styles.options, 'px-0 rounded-none !ring-0 border mt-0.5'].join(' ')} hold>
        {filteredMakes.length > 0 ? filteredMakes.map((person) => (
          <Combobox.Option key={person} value={person} className={[
            'px-2 icons:ui-active:text-gray-700',
            'icons:text-transparent ui-active:bg-gray-50 icons:ui-selected:text-gray-700',
            'w-full text-left block p-2 font-medium cursor-pointer',
            'icons:h-5 icons:ml-auto flex !text-base',
          ].join(' ')}>
            <HighlightQuery str={person} /> <CheckCircleIcon />
          </Combobox.Option>
        )) : (
          <div className="p-4 text-center">
            <button className='prism-btn text text-sm bg-gray-50'>Add "{query}" to list</button>
          </div>
        )}
      </Combobox.Options>
    </Transition>
  </Combobox>
  );
};

export const Multiselect = PrismOne.bind({});
Multiselect.args = {
  multiple: true,
};
