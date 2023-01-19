import { Button, Tab } from '@prism2/react-components';
import { CrossIcon, SearchIcon } from '@prism2/icons-react';
import './App.css';
import { Popover, Transition } from '@headlessui/react';
import { FilterByMake } from './components/DataLists';
import { SavedSearches } from './components/SavedSearch';
import { AppHeader } from './layout/AppHeader';
import { stateList, makesList, auctionList } from './lib/_mockData';
import { PaperPluginDemo } from './components/PaperPluginDemo';


export function SearchMode() {
  return (
    <div className="flex gap-4 rounded-sm shadow-sm items-stretch border-[1px] border-gray-200 bg-white drop-shadow-lg xl:container">
      <div className="bg-slate-100 p-4 px-8 self-stretch hidden sm:block sm:w-64 lg:w-72">
        <SavedSearches />
      </div>
      <div className='p-4 flex-1'>
        <div className='flex justify-between items-start'>
          <h4 className='section-header mb-4'>
            <SearchIcon aria-hidden={true} />
            <div>Saved Searches</div>
          </h4>
          <Popover.Button as='button' className='section-header ml-auto'>
            <CrossIcon className='ml-auto text-gray-500' />
          </Popover.Button>
        </div>
        <div className='md:grid grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
          <FilterByMake
            data={makesList}
            className='w-full h-72 md:h-[400px]'
            placeholder="Filter makes"
            listLabel='All Makes'/>
          <FilterByMake
            data={[{ name:'Any Model', count: 0 }]}
            className='w-full h-72 md:h-[400px]'
            placeholder="Filter Models"
            listLabel='All Models'/>
          <div>
          <Tab.Group as='div' className='-mt-2 h-72 md:h-[400px] w-full flex flex-col'>
            <Tab.List className='pb-0'>
              <Tab className='h-12'>Search Area</Tab>
              <Tab className='h-12'>Auctions</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                  <FilterByMake
                  listLabel='All States'
                  data={stateList}
                  placeholder="Filter by location"
                  className='h-60 md:h-[360px] w-full [&>input]:hidden space-y-2' />
              </Tab.Panel>
              <Tab.Panel>
                <FilterByMake
                  listLabel='All Locations'
                  data={auctionList}
                  placeholder="Filter Models"
                  className='h-60 md:h-[360px] w-full [&>input]:hidden space-y-2' />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
    <AppHeader />
    <Popover className='mt-24'>
      <Popover.Button as={Button} variant='fill' className='bg-gold-400'>Search Vehicles</Popover.Button>
        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Popover.Panel className='fixed w-full' as='div' >
        <SearchMode />
      </Popover.Panel>
      </Transition>
    </Popover>
    <main className='container text-center pt-24'>
      <div className='text-center space-y-4 py-16'>

      </div>
      <PaperPluginDemo />
    </main>
    </>
  );
}

export default App;
