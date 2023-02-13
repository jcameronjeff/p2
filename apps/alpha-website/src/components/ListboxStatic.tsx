import { Listbox } from '@headlessui/react';
import { TriangleDownIcon } from '@prism2/icons-react';
import { useState } from 'react';
import { stateList } from '../lib/_mockData';


export const MyListbox:React.FC<{ data?:typeof stateList, defaultValue?: typeof stateList[0] }> = (props) => {
  const data = props.data || stateList;
  // FYI - its totally fine and good to pass initial state as a function like so:
  const [selectedPerson, setSelectedPerson] = useState(() => {
    if (props.defaultValue) return props.defaultValue;
    return props.data && props.data[0] ? props.data[0] : stateList[0];
  });

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson} className='relative flex-grow' as='div'>
      <Listbox.Button className='flex border-[1px] rounded-xs items-center w-full ring-blue-200 ui-open:ring-1 ui-not-open:ring-0 '>
        <div className='p-2'>{selectedPerson.name}</div>
        <div className="p-2 bg-blue-700  border-[1px] border-blue-800 text-white self-stretch flex ml-auto">
          <TriangleDownIcon className='w-5' />
        </div>
      </Listbox.Button>
      <Listbox.Options className='prism-menu absolute mt-2 h-64'>
        {data.map((state) => (
          <Listbox.Option
            key={state.name}
            value={state}
            as='div'
            className='prism-menu-item'
          >
            {state.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
