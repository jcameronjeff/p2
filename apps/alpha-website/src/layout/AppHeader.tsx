import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, SearchIcon } from '@prism2/icons-react';
import { Button, popInOut } from '@prism2/react-components';
import { SearchMode } from './SearchMode';

export const AppHeader = () => (

    <Popover as='div' className='fixed z-40 inset-x-0 top-0 bg-white p-4 border-b-8 border-gold-400'>
      <div className="container flex">
        <div className="flex font-alt text-2xl font-semibold uppercase text-blue-700 tracking-tighter gap-4">
          {['Buy', 'Sell', 'Solutions'].map(title => (
            <div className='flex items-center gap-1' key={title}>
            {title} <ChevronDownIcon className='w-4' />
            </div>
          ))}
        </div>
        <Popover.Button as={Button} variant='fill' className='ml-auto bg-gold-400 flex-shrink-0 text-xs uppercase tracking-tight'>
          <SearchIcon />
          Find Vehicles
        </Popover.Button>
      </div>
      <Transition {...popInOut}>
        <Popover.Panel className='fixed z-50 inset-x-0 pb-4 mt-6' as='div'>
          <SearchMode />
        </Popover.Panel>
      </Transition>
    </Popover>
);
