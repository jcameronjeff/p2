import React, { Fragment, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../lib/utils';
import { clear } from 'console';

export default {
  title: 'Interaction/Combobox',
  component: Combobox,
} as ComponentMeta<any>;

const items = [
  'Daward Reynolds',
  'Darrn Towne',
  'Darin Apple',
  'Darin Cassler',
  'Darin Hazelnuts',
  'Benedict D Kessler',
  'Katelyn Rohan',
]

const Template: ComponentStory<any> = (args) => {

  const [selectedOption, setSelectedOptions] = useState('')
  const [query, setQuery] = useState('')

  const options =
    query === ''
      ? items
      : items.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedOption} onChange={setSelectedOptions}>
      <div className="relative mt-1 flex gap-2 items-start">
        <div className='relative'>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} className='prism-input w-[240px]' role='combobox' />
        <Combobox.Options className='w-full bg-white rounded-xs border shadow-sm -translate-y-[1px]'>
          {options.map((person) => (
            <Combobox.Option key={person} value={person} as={Fragment}>
              {({ active, selected }) => (
                <li
                  className={`p-2 flex w-full justify-between gap-2 items-center text-sm ${
                    active ? 'bg-navy text-white' : 'bg-white text-black'
                  }`}
                >
                  <span>{person}</span>
                  {selected && (
                    <CheckIcon className='w-6 h-6 justify-self-end text-white rounded-full bg-black p-1'/>
                  )}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        </div>
        <button className='prism-btn' type='submit' data-test-id='outside'>Ok</button>
      </div>
    </Combobox>
  )
}

export const BasicUsage = Template.bind({});
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
BasicUsage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('combobox');
  const framelength = 550;
  for (let step = 0; step < 5; step++) {
    await sleep(framelength).then(() => {
      userEvent.click(loginButton)
      userEvent.clear(loginButton)
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'D')
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'a')
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'r')
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'i')
    }).then(() => sleep(framelength * 2)).then(() => {
      userEvent.type(loginButton, '{arrowdown}')
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, '{arrowdown}')
    }).then(() => sleep(framelength * 3)).then(() => {
      userEvent.type(loginButton, '{enter}')
    }).then(() => sleep(framelength)).then(() => {
      userEvent.clear(loginButton)
    }).then(() => sleep(framelength)).then(() => {
      userEvent.tab()
    }).then(() => sleep(framelength))
  }
};
