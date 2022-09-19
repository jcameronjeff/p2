import { createContext, Fragment, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckCircleIcon, ChevronRightIcon } from '@prism2/icons-react/24/solid';
import { Chip } from '..';

interface IAccordionContext {}
// assert that the context has a shape of IAccordionContext
export const AccordionContext = createContext<IAccordionContext>({});
// provide a shorthand hook right-off
export const useAccordionContext = () => useContext(AccordionContext);

interface IAccordionProps  {
  multiple?: boolean,
  onChangeCallback(arg0: unknown): void
}

type Person = {
  id: number,
  name: string,
  unavailable: boolean
};
const people:Person[] = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

interface IDropdownItem {
  id: number | string,
  label: string,
  value?: any,
  showCount?: boolean
}

export function DropdownItem({ id, label, value, showCount }: IDropdownItem) {
  return <Listbox.Option key={id} value={value} as={Fragment}>
    {({ active, selected }) => (
      <li
        className={`flex justify-between w-full items-center p-2 px-4 gap-2 cursor-pointer ${
          active ? 'bg-blue-800 text-white' : 'bg-white text-black'
        }`}
      >
        <div>{label}</div>
        <div className='flex items-center gap-1'>
        {selected && <CheckCircleIcon className='w-6 h-6' />}
        {showCount && <Chip as='div' variant='dark'>{id}</Chip>}
        </div>
      </li>
    )}
  </Listbox.Option>;
}
export function Dropdown({ multiple, onChangeCallback = () => {} }: PropsWithChildren<IAccordionProps>) {

  const [selectedPerson, setSelectedPerson] = useState<Person[]>([]);

  function handleChange(val: Person | Person[]) {
    if (multiple) {
      setSelectedPerson(val as Person[]);
    } else {
      setSelectedPerson([val as Person]);
    }
  }

  useEffect(() => {
    onChangeCallback(selectedPerson);
  }, [selectedPerson]);


  return (
    <Listbox value={selectedPerson} onChange={handleChange} multiple={multiple}>
      {({ open }) => (
        <>
        <Listbox.Button className={`p-2 h-10 border flex items-center justify-between prism-input w-[600px] text-left overflow-hidden shadow-inner ${open && 'ring-1 ring-blue-600'}`}>
          <div className='overflow-hidden flex gap-x-1'>
            {selectedPerson.map(per =>
              <span key={per.id} className={`p-2 py-0 font-medium whitespace-nowrap ${multiple ? 'rounded-sm bg-blue-800 text-white' : ''}`}>{per.name}</span>,
            )}
          </div>
          <div className='bg-white pl-4'>
            <ChevronRightIcon className={'w-4 h-4 transition-all duration-200 transform rotate-90'}/>
          </div>
        </Listbox.Button>
        <Listbox.Options className='border mt-1 shadow absolute w-[600px] rounded overflow-clip'>
          {people.map((value) => (
            <Listbox.Option key={value.id} value={value} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`flex justify-between w-full items-center p-2 px-4 gap-2 cursor-pointer ${
                    active ? 'bg-blue-800 text-white' : 'bg-white text-black'
                  }`}
                >
                  <div>{value.name}</div>
                  <div className='flex items-center gap-1'>
                  {selected && <CheckCircleIcon className='w-6 h-6' />}
                  <Chip as='div' variant='dark'>{value.id}</Chip>
                  </div>
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
        </>
      )}
    </Listbox>
  );
}



