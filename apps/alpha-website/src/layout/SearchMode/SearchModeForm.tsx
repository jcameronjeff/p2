import { ChevronDownIcon } from '@prism2/icons-react';
import { Switch, Button, Tab, useToggle } from '@prism2/react-components';
import { auctionList, makesList, odometerScale, stateList } from '../../lib/_mockData';
import { FilterByMake } from '../../components/FilterByMake';
import { MyListbox } from '../../components/ListboxStatic';
import { YearRange } from '../../components/SingleVehicle/YearRange';


function LocationFilters() {
  return (
      <Tab.Group as='div' className='h-72 md:h-[400px] w-full flex flex-col'>
        <Tab.List className='pb-2 border-b-0'>
          <Tab className='h-10 focus:ring-2'>Search Area</Tab>
          <Tab className='h-10 ui-selected:ring-2'>Auctions</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className='h-60 md:h-[360px]'>
            <div className="grid grid-cols-[5fr,1fr,5fr] items-center gap-1 mb-4 mt-2">
              <select className='block w-[100%]'>
                {[50, 75, 100, 250, 500, 750, 1000, 1200].map(v => (
                  <option>{v}m</option>
                ))}
              </select>
              <div className='text-center'>of</div>
              <input type='text' placeholder='ZIP Code' className='w-[100%]' />
            </div>
            <FilterByMake
              listLabel='All States'
              data={stateList}
              placeholder="Filter by location"
              className='w-full [&>input]:hidden h-40 md:h-[288px]'
            />
          </Tab.Panel>
          <Tab.Panel
            as={FilterByMake}
            listLabel='All Locations'
            data={auctionList}
            placeholder="Filter Models"
            className='h-60 md:h-[360px] w-full [&>input]:hidden'
          />
        </Tab.Panels>
      </Tab.Group>
  );
}

function ConditionFilter() {
  return (
      <div className="flex gap-2 items-center justify-between">
        <select className='flex-grow prism-select rounded-sm h-10 py-0'>
          {['0.0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'].map(val => (
            <option>{val}</option>
          ))}
          <ChevronDownIcon />
        </select>
        <span className='prism-label text-2xl'>&mdash;</span>
        <select className='flex-grow prism-select rounded-sm h-10 py-0'>
          {['0.0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'].map(val => (
            <option>{val}</option>
          ))}
        </select>
      </div>
  );
}

function OdometerFilter() {
  return (
      <div className="grid grid-cols-[1fr,20px,1fr] items-center justify-between gap-2">
        <MyListbox data={[{ name: 'No min', count: 0 }, ...odometerScale]}/>
        <span className='prism-label text-2xl'>&mdash;</span>
        <MyListbox data={[{ name: 'No max', count: 0 }, ...odometerScale]}/>
      </div>
  );
}

export function SearchModeForm() {
  // this needs to be here for Switch to get styles
  let xs = 'relative inline-flex shrink-0 items-center h-[calc(1em+4px)] w-[calc(2em+2px)] not:disabled:cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus-visible:ring-3 focus-visible:ring-blue-300 focus-visible:ring-opacity-75 bg-blue-800 grayscale bg-opacity-50 ';
  const saveConfig = useToggle(false);
  const singleModle = [{ name:'Any Model', count: 0 }];
  return (
      <div className='md:grid grid-cols-3 gap-8 gap-y-4 sm:space-y-0 text-left'>
        <FilterByMake data={makesList} className='w-full h-72 md:h-[400px]' placeholder="Filter makes" listLabel='All Makes'/>
        <FilterByMake data={singleModle} className='w-full h-72 md:h-[400px]' placeholder="Filter Models" listLabel='All Models'/>
        <LocationFilters />
        <label className="prism-label">
          Year
          <YearRange />
        </label>
        <label className="prism-label">
          Condition Grade
          <ConditionFilter />
        </label>
        <label className="prism-label">
          Odometer
          <OdometerFilter />
        </label>
        <Switch.Group as='div' className='flex h-10 gap-4 items-center col-span-2'>
          <Switch.Label className='ml-auto px-4 leading-6'>
            Save Search
          </Switch.Label>
          <div className='flex items-center'>
            <Switch {...saveConfig} className='text-2xl flex-shrink-0 ml-auto' />
            <span className='w-10 text-base uppercase prism-label text-right'>
              {saveConfig.checked ? 'Yes' : 'No'}
            </span>
          </div>
        </Switch.Group>
        <Button
          variant='fill'
          className='bg-gold-400 leading-6 flex-grow w-full justify-center text-sm uppercase'>
          Show Vehicles
        </Button>
      </div>
  );
}
