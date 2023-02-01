import { Popover } from '@headlessui/react';
import { CrossIcon, SearchIcon } from '@prism2/icons-react';
import { SavedSearches } from '../components/SavedSearch';
import { SearchModeForm } from '../components/SearchModeForm';


export function SearchMode() {
  // This shows an example of performing bespoke layout using only tokens -- an instance
  // where it is not practical to provide a predefined component across applications.
  // Previously, this has required each team to determine all of the imlpementation
  // details on their own.
  //
  // This is the most common condition where we observe "code drift" --
  // where imprecise requirements lead to developers making architecture decisions on their
  // own and without a Rally story to justify any time spent solutioning an approach.
  //
  // -  We are not including any dynamic behaviors in this file.
  // - "Smart" components are separated into their own logic.
  // - No CSS is being written.
  // - Token-only workflow means that any output will match design specs by default.

  return (
    <div className="flex gap-4 rounded shadow-sm items-stretch border-[1px] border-gray-200 bg-white drop-shadow-lg lg:container">
      <div className="bg-slate-100 p-4 px-8 self-stretch hidden sm:block sm:w-64 lg:w-72 rounded-l">
        <SavedSearches />
      </div>
      <div className='p-4 pr-8 pb-8 flex-1'>
        <div className='flex justify-between items-start'>
          <h4 className='section-header mb-4'>
            <SearchIcon aria-hidden={true} />
            <div>Saved Searches</div>
          </h4>
          <Popover.Button as='button' className='section-header ml-auto'>
            <CrossIcon className='ml-auto text-gray-500' />
          </Popover.Button>
        </div>
        <SearchModeForm />
      </div>
    </div>
  );
}
