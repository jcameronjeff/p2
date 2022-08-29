import React from 'react';
import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckboxCheckedIcon, SearchIcon } from '@prism2/icons/react/prism';
import type { Fragment } from 'react';

const stateNames = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? stateNames
      : stateNames.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase());
      });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}  nullable className='w-[340px] relative' as='div'>
        {({ open }) => (
          <>


          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className='w-full prism-input'
            placeholder="Choose a State"
          />
          <div className='px-2 absolute right-0 top-3'>
            <SearchIcon className='w-4 text-gray-600' />
          </div>

          {(open) && <Combobox.Options as='div' static className='max-h-96 overflow-y-scroll absolute top-10 w-full shadow'>
            {filteredPeople.map((person) => (
              <Combobox.Option key={person} value={person} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`flex font-regular justify-between p-2 py-1 ${
                      active ? 'bg-blue-700 text-white' : 'bg-white text-black'
                    }`}
                  >
                    {person}
                    {selected && <CheckboxCheckedIcon className='w-4' />}
                  </li>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        }
          </>
        )}
    </Combobox>
  );
}

export const WorkshopContent = () => {
  return (
    <div className='min-h-[600px]'>
      <MyCombobox />
    </div>
  );
};



