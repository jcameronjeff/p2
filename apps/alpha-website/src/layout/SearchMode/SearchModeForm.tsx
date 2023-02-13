import { ChevronDownIcon, TriangleDownIcon } from '@prism2/icons-react';
import { Switch, Button, Tab, useToggle } from '@prism2/react-components';
import { auctionList, makesList, odometerScale, stateList } from '../../lib/_mockData';
import { FilterByMake } from '../../components/FilterByMake';
import { MyListbox } from '../../components/ListboxStatic';
import { YearRange } from '../../components/SingleVehicle/YearRange';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon, StarIcon } from '@prism2/icons-react/24/solid';


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

  let stars = [
    <></>,
    <><StarIcon /></>,
    <><StarIcon /><StarIcon /></>,
    <><StarIcon /><StarIcon /><StarIcon /></>,
    <><StarIcon /><StarIcon /><StarIcon /><StarIcon /></>,
    <><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></>,
  ];
  return (
      <div className="grid grid-cols-2 gap-2 items-center justify-between relative">
         <Listbox defaultValue={0} as='div' className='relative flex-grow'>
          <Listbox.Button className='prism-input rounded-xs flex w-full h-10 items-center relative'>{({ value }) => (
            <>
              <span className='w-5 text-left'>{value}</span>
              {stars[value]}
              <TriangleDownIcon className='right-2 ml-auto' />
            </>
          )}
          </Listbox.Button>
          <Listbox.Options className='prism-menu absolute top-full z-50'>
            {[0, 1, 2, 3, 4, 5].map(x => (
              <Listbox.Option className='prism-menu-item icons:w-4 justify-start gap-1 font-mono' value={x}>
                <span className='w-5 text-left'>{x}</span>
                {stars[x]}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <Listbox defaultValue={5} as='div' className='relative flex-grow'>
          <Listbox.Button className='prism-input rounded-xs flex w-full h-10 items-center relative'>{({ value }) => (
           <>
              <span className='w-5 text-left'>{value}</span>
              {stars[value]}
              <TriangleDownIcon className='right-2 ml-auto' />
            </>
          )}
          </Listbox.Button>
          <Listbox.Options className='prism-menu absolute top-full z-50'>
            {[0, 1, 2, 3, 4, 5].map(x => (
              <Listbox.Option className='prism-menu-item icons:w-4 justify-start gap-1 font-mono' value={x}>
                <span className='w-5 text-left'>{x}</span>
                {stars[x]}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>

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
