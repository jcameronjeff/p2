import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ManheimMedallionIcon, SearchIcon } from '@prism2/icons-react';
import { ExclamationCircleIcon } from '@prism2/icons-react/24/solid';
import { MapPinIcon } from '@prism2/icons-react/24/outline';
import { Button, popIn, popInOut } from '@prism2/react-components';
import { SearchMode } from './SearchMode/SearchMode';

export const AppHeader = () => (

    <Popover as='div' className='fixed z-40 inset-x-0 top-0 bg-white p-2 border-b-8 border-gold-400'>
      <div className="container flex gap-8 items-center relative px-1">
        <ManheimMedallionIcon className='w-16 text-blue-800 flex-shrink-0'/>
        <div className="hidden md:flex font-alt lg:text-2xl font-semibold uppercase text-blue-700 tracking-tighter gap-4 ">
          {['Buy', 'Sell', 'Solutions'].map(title => (
            <div className='flex items-center gap-1 font-extrabold' key={title}>
            {title} <ChevronDownIcon className='w-4' />
            </div>
          ))}
        </div>
        <div className='ml-auto space-y-2'>
          <div className="flex gap-2 justify-end" >
            <Button variant='text' className='text-xs gap-1 h-8 '>
              <MapPinIcon />
              Manheim Locations
            </Button>
            <Button variant='text' className='text-xs gap-1 text-red-500 h-8'>
              <ExclamationCircleIcon className='w-5 h-5 animate-pulse' /> 7
            </Button>
            <Popover>
              <Popover.Button as='div' className="rounded-full bg-blue-900 h-8 flex items-center px-0.5 text-xs font-medium gap-2 ui-open:ring-2 ui-open:bg-blue-700 cursor-pointer">
                <div className="h-7 w-7 rounded-full bg-gray-50 border-2 border-gold-400 text-xs leading-6">
                  HH
                </div>
                <div className='text-gold-400 hidden lg:block'>
                  Good morning, HANK!
                </div>
                <div className='text-white flex gap-1 pr-2'>
                  <span className='hidden lg:inline'>Your Manheim</span> Account
                  <ChevronDownIcon className='w-3'/>
                </div>
              </Popover.Button>
              <Transition {...popIn} as='div' className='absolute right-0 -mx-1 border rounded-xs w-[440px] p-4 bg-white shadow-lg translate-x-0 z-50 top-9'>
              <Popover.Panel as='div' >
                <div className="text-left">
                  Howdy
                </div>
              </Popover.Panel>
              </Transition>

            </Popover>
          </div>
          <div className='flex gap-2 justify-end'>
            <Popover>
              <Popover.Button as={Button} variant='fill' className='ml-auto bg-gold-400 flex-shrink-0 text-xs uppercase tracking-tight text-black'>
                <SearchIcon />
                Find Vehicles
              </Popover.Button>
              <Popover.Panel as='div' className='absolute top-20 translate-y-1 left-0 right-0'>
                <SearchMode />
              </Popover.Panel>
            </Popover>
            <Button className='text-xs'>MMR</Button>
            <div className='flex items-center'>
              <input className='prism-input h-8 text-sm rounded-xs pr-8' placeholder='VIN or Make Search' />
              <SearchIcon className='h-5 -translate-x-7 -mr-5' />
            </div>
          </div>
        </div>



      </div>
    </Popover>
);
