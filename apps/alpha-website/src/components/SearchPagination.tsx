import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@prism2/icons-react';
import { Button } from '@prism2/react-components';
import { HTMLAttributes, useContext } from 'react';
import { SRPContext } from '../SRPContext';

export function PaginationLocation() {
  const { itemIndex, pageSize, itemCount } = useContext(SRPContext);
  return (
    <div className='ml-auto text-xs font-medium tracking-tighter text-gray-600 p-2'>
      {itemIndex + 1}-{Math.min(itemIndex + pageSize, itemCount)} of {itemCount}
    </div>
  );
}

export function SearchPagination(props: HTMLAttributes<HTMLDivElement>) {
  const { itemIndex, setItemIndex, pageSize, setPageSize, itemCount } = useContext(SRPContext);
  const isFirstPage = itemIndex < 1;
  const isLastPage = itemIndex + pageSize + 1 > itemCount;
  const goToPrevious = () => setItemIndex(Math.max(itemIndex - pageSize, 0));
  const goToNext = () => setItemIndex(itemIndex + pageSize);
  return (
    <div {...props}>
      <Button variant='text' className='border border-blue-700 text-xs px-1 md:px-2' disabled={isFirstPage} onClick={goToPrevious}>
        <ChevronLeftIcon />
        <span className='hidden lg:inline uppercase'>Previous</span>
      </Button>
      <Listbox onChange={setPageSize} as='div' className='relative'>
        <Listbox.Button as={Button} variant="text" className='h-8 text-xs p-2 px-1 md:px-2' >
          <PaginationLocation />
          <ChevronDownIcon />
        </Listbox.Button>
        <Listbox.Options className='absolute prism-menu z-40'>
          <Listbox.Option className='prism-menu-item text-xs p-2' value={2}>2</Listbox.Option>
          <Listbox.Option className='prism-menu-item text-xs p-2' value={5}>5</Listbox.Option>
          <Listbox.Option className='prism-menu-item text-xs p-2' value={10}>10</Listbox.Option>
          <Listbox.Option className='prism-menu-item text-xs p-2' value={20}>20</Listbox.Option>
        </Listbox.Options>
      </Listbox>
      <Button variant='text' className='border  border-blue-700 text-xs px-1 md:px-2' disabled={isLastPage} onClick={goToNext}>
        <span className='hidden lg:inline uppercase'>Next</span>
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
