import { Disclosure } from '@headlessui/react';
import { ChevronDownLightIcon, CrossIcon } from '@prism2/icons-react';
import { Chip } from '@prism2/react-components';
import { HTMLAttributes } from 'react';
import { SearchFacet } from '../components/SearchFacet';


/**
 *
 * @remark this is annoying to have to re-implement.
 */
export const OurChip = (props:HTMLAttributes<HTMLDivElement>) =>
  <Chip variant="light" className='group border inline-flex capitalize hover:bg-blue-100 hover:border-blue-500 cursor-pointer text-blue-700' {...props}>
    {props.children}
    <CrossIcon className='w-3 group-hover:animate-pulse' />
  </Chip>;


const SavedSearchFacet = () => {
  return (
    <div className='space-y-2'>
    <div className="flex gap-1 items-center">
      <h4 className='prism-heading-3 text-blue-900 text-lg'>Filter</h4>
      <div className='ml-auto text-xs underline text-blue-800'>Save</div>
      <div className='text-xs'>&bull;</div>
      <div className='text-xs underline text-blue-800'>Clear All</div>
    </div>
    <div className='gap-1 flex flex-wrap'>
      {['Honda', 'BMW', 'Audi', 'Land Rover', '> 2018', 'Under 100k'].map(txt => <OurChip key={txt}>{txt}</OurChip>)}
    </div>
    <p className='text-left text-xs underline text-blue-800'>See All</p>
    </div>
  );
};
export function AppSidebar(props:HTMLAttributes<HTMLDivElement>) {
  return (
    <aside {...props}>
    <h2 className='prism-heading-2 uppercase tracking-tight pt-2 pb-4'>192,782 vehicles</h2>
      <div className="search-facet space-y-2">
         <Disclosure defaultOpen>
          <Disclosure.Button className='bg-gray-50 text-blue-900 font-bold p-2 w-full text-sm text-left flex gap-1 items-center'>
            <span className='ui-open:-rotate-90'>
              <ChevronDownLightIcon className='w-3 transition-transform duration-200 ease-in-out z-0' />
            </span>
            Saved Searches
          </Disclosure.Button>
          <Disclosure.Panel className='border-0 py-2'>
            <SavedSearchFacet />
          </Disclosure.Panel>
        </Disclosure>
        <SearchFacet key="search-Highlights" label='Highlights' />
        <SearchFacet key="search-Inventory" label='Inventory Source' />
        <SearchFacet key="search-VehicleType" label='VehicleType' />
        <SearchFacet key="search-Make" label='Make' />
        <SearchFacet key="search-Model" label='Model' />
        <SearchFacet key="search-Transmission" label='Transmission' />
      </div>
    </aside>
  );
}
