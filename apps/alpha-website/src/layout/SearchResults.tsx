import { Listbox } from '@headlessui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@prism2/icons-react';
import { ChevronDownIcon } from '@prism2/icons-react/24/outline';
import { Button, Tab } from '@prism2/react-components';
import { useMemo, useState } from 'react';
import { SingleVehicle, TabularVehicle } from '../components/SingleVehicleDetail';
import { newAutoSrpVehicles as srpVehicles } from '../lib/_mockResultsAuto';
import { SRPContext } from '../SRPContext';


export function SearchResults() {
  const [workbookItems, setWorkbookItems] = useState<string[]>([]);
  const [hiddenItems, setHiddenItems] = useState<string[]>([]);

  function toggleHideItem(arg0:string) {
    if (hiddenItems.includes(arg0)) {
      setHiddenItems(hiddenItems.filter(i => i !== arg0));
    } else {
      setHiddenItems([...hiddenItems, arg0]);
    }
  }

  function toggleWorkbookItems(arg0:string) {
    if (workbookItems.includes(arg0)) {
      setWorkbookItems(workbookItems.filter(i => i !== arg0));
    } else {
      setWorkbookItems([...workbookItems, arg0]);
    }
  }

  const visibleVehicles = srpVehicles.items.filter(i => !hiddenItems.includes(i.id));
  const hiddenVehicles = srpVehicles.items.filter(i => hiddenItems.includes(i.id));
  const workbookVehicles = srpVehicles.items.filter(i => workbookItems.includes(i.id));

  const ctx = useMemo(() => ({
    hiddenItems,
    workbookItems,
    toggleHideItem,
    toggleWorkbookItems,
  }), [hiddenItems, workbookItems, setWorkbookItems, setHiddenItems]);

  const [itemIndex, setItemIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  return (
    <SRPContext.Provider value={ctx}>
      <Tab.Group>
        <Tab.List as='div' className='flex mb-4 border-b-0'>
          <Tab className='font-light ui-selected:font-medium'>Search Results</Tab>
          <Tab className='font-light ui-selected:font-medium'>Workbook</Tab>
          <Tab className='font-light ui-selected:font-medium'>Hidden</Tab>
          <Tab className='font-light ui-selected:font-medium'>Advanced</Tab>
          <div className='ml-auto text-xs font-medium tracking-tighter text-gray-600 p-2'>
            {itemIndex + 1}-{Math.min(itemIndex + pageSize, srpVehicles.items.length)} of {srpVehicles.items.length}
          </div>
          <div className='flex outline rounded outline-gray-200 outline-[0.5px] shadow divide-x self-center'>
            <Button
              className='text-xs tracking-tighter uppercase rounded-r-none hover:bg-gray-50 disabled:hover:bg-inherit disabled:text-inherit ring-blue-200 ring-offset-0 group text-gray-600'
              variant='fill'
              disabled={itemIndex < 1}
              onClick={() => setItemIndex(Math.max(itemIndex - pageSize, 0))}>
              <ArrowLeftIcon
                className='w-3 text-gray-400 active:text-blue-700 group-hover:text-blue-700 group-focus-within:text-blue-700'
              />
                <span className='hidden lg:inline'>Previous</span>
            </Button>
            <Listbox onChange={setPageSize} as='div' className='relative z-50'>
              <Listbox.Button
                variant='fill'
                className='ring-offset-0 rounded-none text-xs h-full tracking-tighter text-gray-600 hover:bg-gray-50 ring-blue-300'
                as={Button}>
                {pageSize} <span className='hidden lg:inline -ml-1'>per page</span>
                <ChevronDownIcon className='w-4' />
              </Listbox.Button>
              <Listbox.Options className='absolute prism-menu'>
                <Listbox.Option className='prism-menu-item text-xs p-2' value={2}>2</Listbox.Option>
                <Listbox.Option className='prism-menu-item text-xs p-2' value={5}>5</Listbox.Option>
                <Listbox.Option className='prism-menu-item text-xs p-2' value={10}>10</Listbox.Option>
                <Listbox.Option className='prism-menu-item text-xs p-2' value={20}>20</Listbox.Option>
              </Listbox.Options>
            </Listbox>
            <Button
              className='text-xs tracking-tighter ring-offset-0 uppercase hover:bg-gray-50 disabled:hover:bg-inherit disabled:text-inherit ring-blue-200 rounded-l-none group text-gray-600'
              variant='fill'
              disabled={itemIndex + pageSize + 1 > srpVehicles.items.length}
              onClick={() => setItemIndex(itemIndex + pageSize)}>
              <span className='hidden lg:inline'>Next</span>
              <ArrowRightIcon
                className='w-3 text-gray-400 active:text-blue-700 group-hover:text-blue-700 group-focus-within:text-blue-700'
              />
            </Button>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel as='div' className='space-y-4'>
            {visibleVehicles.slice(itemIndex, itemIndex + pageSize).map(item => (
              <SingleVehicle {...item} key={item.id} />
            ))}
          </Tab.Panel>
          <Tab.Panel as='div' className='space-y-4'>
            {workbookVehicles.map(item => (
              <SingleVehicle {...item} key={item.id} />
            ))}
          </Tab.Panel>
          <Tab.Panel as='div' className='space-y-4'>
            {hiddenVehicles.map(item => (
              <SingleVehicle {...item} key={item.id} />
            ))}
          </Tab.Panel>
          <Tab.Panel as='div' className='space-y-4'>
            {visibleVehicles.map(item => (
              <TabularVehicle {...item} key={item.id} />
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </SRPContext.Provider>
  );

}
