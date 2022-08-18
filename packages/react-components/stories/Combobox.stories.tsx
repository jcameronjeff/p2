import React, { Fragment, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@prism2/icons/react/solid';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../lib/utils';

export default {
  title: 'Components/Combobox',
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
];

type MProps = { active: boolean, selected: boolean, value: string, onClick: Function };

const MenuItem = ({ active, selected, value, onClick }: MProps) => {
  const clsx = [
    'prism-menu-item text-sm',
    active && 'active',
    selected && 'selected',
  ].filter(Boolean).join(' ');
  return (
    <li className={clsx} {...onClick}>
      <span>{value}</span>
      {selected && <CheckIcon className='w-6 h-6'/>}
    </li>
  );
};

export const Template: ComponentStory<any> = (args) => {
  // import { Combobox } from '@headlessui/react';
  // import { CheckIcon } from '@prism2/icons/react/solid';
  const [selectedOption, setSelectedOptions] = useState('');
  const [query, setQuery] = useState('');

  const options =
    query === ''
      ? items
      : items.filter((item) => {
        return item.toLowerCase().includes(query.toLowerCase());
      });

  return (
    <div className="relative mt-1 flex gap-2 items-start">
      <Combobox value={selectedOption} onChange={setSelectedOptions} {...args}>
        <div className='prism-combobox w-[500px]'>
          <Combobox.Input onChange={(event) => setQuery(event.target.value)} className='prism-input' role='combobox' />
          <Combobox.Options className='prism-menu'>
            {options.map((person) => (
              <Combobox.Option key={person} value={person} as={Fragment} >
                {({ active, selected }) => <MenuItem active={active} selected={selected} value={person} onClick={() => setQuery(person)} />}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
      <button className='prism-btn' type='submit' data-test-id='outside'>Ok</button>
    </div>
  );
};

export const BasicUsage = Template.bind({});
BasicUsage.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
BasicUsage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('combobox');
  const framelength = 550;
  for (let step = 0; step < 5; step++) {
    await sleep(framelength).then(() => {
      userEvent.click(loginButton);
      userEvent.clear(loginButton);
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'D');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'a');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'r');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'i');
    }).then(() => sleep(framelength * 2)).then(() => {
      userEvent.type(loginButton, '{arrowdown}');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, '{arrowdown}');
    }).then(() => sleep(framelength * 3)).then(() => {
      userEvent.type(loginButton, '{enter}');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.clear(loginButton);
    }).then(() => sleep(framelength)).then(() => {
      userEvent.tab();
    }).then(() => sleep(framelength));
  }
};