import { Combobox } from '@headlessui/react';
import { CheckmarkCircleIcon } from '@prism2/icons-react';
import { useState } from 'react';

let data = [
  { name:'Clays Search', count: 23441 },
  { name:'Test', count: 604 },
  { name:'New Beemers', count: 4823 },
  { name:'Recon and Flip', count: 592 },
];
export function SavedSearches() {
  const [searches, setSearches] = useState([data[0]]);

  return <>
    <Combobox value={searches} onChange={(val) => setSearches(val)} multiple>
      <Combobox.Label as='h4' className='section-header mb-4'>
        <CheckmarkCircleIcon aria-hidden={true} />
        <div>Saved Searches</div>
        <div className='hidden lg:block aux-button'>View All</div>
      </Combobox.Label>
      <Combobox.Options static as='div' className='flex flex-wrap sm:block'>
      {data.map((value) => (
        <Combobox.Option
          as='div'
          className='inline-flex sm:flex flex-shrink-0 items-center p-2 py-1 rounded ui-selected:ring-black/5 ui-selected:bg-slate-200/50'
          value={value}
        >
          <div className='font-medium font-alt text-sm leading-5 text-blue-700'>{value.name}</div>
          <div className='search-count bg-transparent border-[0.5px] ml-auto leading-5 h-5'>{value.count}</div>
        </Combobox.Option>
      ))}
      </Combobox.Options>
    </Combobox>
  </>;
}

