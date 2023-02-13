import { Listbox } from '@headlessui/react';
import { ArrowDownIcon, ArrowUpIcon, DetailsIcon, ExportIcon, ListIcon, PlusCircleIcon, PrinterIcon } from '@prism2/icons-react';
import { ChevronUpDownIcon, TableCellsIcon  } from '@prism2/icons-react/24/outline';
import { Button, Tab } from '@prism2/react-components';
import { Fragment, HTMLAttributes, useMemo, useState } from 'react';
import { SearchPagination } from '../components/SearchPagination';
import { SingleVehicle } from '../components/SingleVehicle/SingleVehicleDetail';
import { newAutoSrpVehicles as srpVehicles } from '../lib/_mockResultsAuto';
import { SRPContext } from '../SRPContext';


export function SortSelect() {
  return (
    <Listbox className='relative' as='div' defaultValue="Time Remaining">
    {({ value }) => (
      <>
      <Listbox.Button className='prism-input rounded-xs text-xs inline-flex items-center gap-2'>
        {value}
        <ChevronUpDownIcon />
      </Listbox.Button>
      <Listbox.Options className='prism-menu absolute z-50 text-xs w-auto min-w-full mt-[1px] shadow-lg'>
        {['Odometer', 'Time Remaining', 'Year', 'Condition', 'Current Big', 'Adjusted MMR'].map(label => (
          <Fragment key={label}>
          <Listbox.Option
            as='div'
            key={label + '-desc-option'}
            value={label + ' Desc'}
            className='prism-menu-item whitespace-nowrap icons:w-3 icons:mr-auto'>
            {label} <ArrowDownIcon />
          </Listbox.Option>
          <Listbox.Option
            as='div'
            key={label + '-asc-option'}
            value={label + ' Asc'}
            className='prism-menu-item whitespace-nowrap icons:w-3 icons:mr-auto'>
            {label} <ArrowUpIcon />
          </Listbox.Option>
          </Fragment>
        ))}
      </Listbox.Options>
      </>
    )}
  </Listbox>
  );
}

export function SearchResults(props:HTMLAttributes<HTMLDivElement>) {
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
  const [itemIndex, setItemIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [displayMode, setDisplayMode] = useState<'detail' | 'table' | 'list'>('detail');
  const ctx = useMemo(() => ({
    data: srpVehicles.items,
    itemCount: srpVehicles.items.length,
    hiddenItems,
    workbookItems,
    toggleHideItem,
    toggleWorkbookItems,
    itemIndex,
    setItemIndex,
    pageSize,
    displayMode,
    setPageSize,
  }), [hiddenItems, workbookItems, setWorkbookItems, setHiddenItems, pageSize, itemIndex, displayMode]);




  return (
    <SRPContext.Provider value={ctx}>
      <div {...props}>
      <Tab.Group>
        <div className="flex border-b-0 flex-wrap mb-4 space-y-2">
          <Tab.List as='div' className='flex'>
            <Tab className='font-light ui-selected:font-medium'>Search Results</Tab>
            <Tab className='font-light ui-selected:font-medium'>Workbook</Tab>
            <Tab className='font-light ui-selected:font-medium'>Hidden</Tab>
          </Tab.List>
          <div className="ml-auto text-sm border rounded-sm border-blue-700 divide-x divide-blue-700">
            <Button variant='text' className='text-xs uppercase rounded-r-none'>
              <PlusCircleIcon />
              <span className='hidden md:inline'>Add All</span>
            </Button>
            <Button variant='text' className='text-xs uppercase rounded-none'>
              <ExportIcon />
              <span className='hidden md:inline'>Export</span>
            </Button>
            <Button variant='text' className='text-xs uppercase rounded-l-none'>
              <PrinterIcon />
              <span className='hidden md:inline'>Print</span>
            </Button>
          </div>
        </div>
        <Tab.Panels>
          <div className="bg-gray-50 p-2 mb-4 flex gap-4 items-center">
            <div className='flex items-center gap-2 flex-grow flex-shrink-0'>
              <div className='prism-label text-xs'>Sort by</div>
              <SortSelect />
            </div>
            <div className="ml-auto border rounded-sm border-blue-700 divide-x divide-blue-700 flex-shrink-0">
              <Button
                variant='text'
                className='text-xs px-2 rounded-r-none'
                onClick={() => setDisplayMode('detail')}>
                <DetailsIcon />
              </Button>
              <Button
                variant='text'
                className='text-xs px-2 rounded-none'
                onClick={() => setDisplayMode('table')}>
                <TableCellsIcon />
              </Button>
              <Button
                variant='text'
                className='text-xs px-2 rounded-l-none'
                onClick={() => setDisplayMode('list')}>
                <ListIcon />
              </Button>
            </div>
            <SearchPagination className="flex justify-end text-sm h-8 items-center md:gap-2" />
          </div>
          <Tab.Panel as='div' className={displayMode === 'detail' ? 'space-y-4' : ''}>
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
        </Tab.Panels>
      </Tab.Group>
      </div>
    </SRPContext.Provider>
  );
}
