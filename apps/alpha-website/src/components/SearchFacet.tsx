import { Disclosure } from '@headlessui/react';
import { ChevronDownLightIcon } from '@prism2/icons-react';
import { makesList } from '../lib/_mockData';
import { FilterByMake } from './DataLists';

export function SearchFacet(props: { label: string }) {
  return (
    <Disclosure>
      <Disclosure.Button className='bg-gray-100 text-blue-900 font-bold p-2 w-full text-sm text-left flex gap-1 items-center'>
        <span className='ui-open:-rotate-90'><ChevronDownLightIcon className='w-3 transition-transform duration-200 ease-in-out z-0' /></span>
        {props.label}
      </Disclosure.Button>
      <Disclosure.Panel className='border-0 py-2'>
        <FilterByMake data={makesList} className='w-full h-72' placeholder={`Filter ${props.label}`} listLabel={`All ${props.label}`} />
      </Disclosure.Panel>
    </Disclosure>
  );
}
