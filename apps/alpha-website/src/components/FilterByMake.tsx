import { Combobox, Transition } from '@headlessui/react' ;
import { HTMLAttributes, useState } from 'react';
import { stateList } from '../lib/_mockData';
import { slideUpDown } from '@prism2/react-components';
import { CrossIcon } from '@prism2/icons-react';
type MakeItem = { name: string, count: number };
import '../App.css';

export function FilterByMake(props: { data:MakeItem[], listLabel: string, disabled?: boolean } & HTMLAttributes<HTMLInputElement>) {
  const results = props.data || stateList;
  const [filter, setFilter] = useState<MakeItem[]>([]);
  const [query, setQuery] = useState<string>('');

  function handleKeyDown(event:React.KeyboardEvent) {
    if (event.key === 'Backspace' && query === '') {
      setFilter(filter.slice(0, -1));
    }
  }

  const filteredMakes = results.filter(i => {
    return i.name.toLowerCase().startsWith(query.toLowerCase());
  });

  const OptionDiv = ({ item, selected }:{ selected: boolean, item:MakeItem }) =>
    <div className='flex gap-2 items-center p-1 -mx-1 cursor-pointer rounded ui-active:bg-gray-200/25 transition-colors duration-150'>
      <input
        value={item.name}
        type='checkbox'
        tabIndex={-1}
        className='prism-input form-checkbox w-4 flex-shrink-0'
        checked={selected}
        onChange={() => {}}
      />
      <div className='text-xs text-left flex-shrink whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</div>
      <div className='leading-4 px-2 search-count ui-active:bg-gray-300/50 text-xxs ml-auto flex-shrink-0 font-light'>{item.count}</div>
    </div>;

  const SelectionDiv = ({ item }: { item:MakeItem }) =>
    <Combobox.Option as='div' value={item} key={`${item.name}-${item.count}`} tabIndex={-1}
      className='tag-input cursor-pointer flex-shrink-0 whitespace-nowrap'>
      {item.name}
      <CrossIcon className='h-3' />
    </Combobox.Option>;


  return (
    <Combobox disabled={props.disabled} defaultValue={filter} multiple onChange={(v) => setFilter(v)} as='div' className=''>
      <div className={['flex flex-col space-evenly border-b w-full', props.className].join(' ')}>
      <Combobox.Input
        onChange={(e) => setQuery(e.target.value)}
        displayValue={() => query}
        onKeyDown={handleKeyDown}
        className='inline-flex prism-input disabled:bg-gray-50 flex-shrink-0 rounded-xs text-sm mb-2'
        placeholder={props.placeholder || 'Filter by makes'}
      />
      <h5 className='input-heading'>{props.listLabel}</h5>
      <Combobox.Options className='p-1 flex-shrink flex-grow shadow-none overflow-y-scroll' static>
        {filteredMakes.map(item =>
          <Combobox.Option value={item} key={[item.name, item.count].join('-')}>
            {({ selected }) => <OptionDiv item={item} selected={selected} />}
          </Combobox.Option>,
        )}
      </Combobox.Options>
      <Transition {...slideUpDown} static show={filter.length > 0}>
        <Combobox.Options static as='div' className="tag-input w-full flex flex-wrap bg-gray-100">
          <h5 className='input-heading py-1'>Selected</h5>
          {filter.map(item => <SelectionDiv item={item} />)}
        </Combobox.Options>
      </Transition>
      </div>
    </Combobox>
  );
}
