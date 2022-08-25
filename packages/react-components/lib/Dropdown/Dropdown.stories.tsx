import { AccordionItem } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { AccordionItem },
} as ComponentMeta<typeof Dropdown>;

const Basic: ComponentStory<typeof Dropdown> = (args) => {
  const [data, setData] = useState([]);
  return (
  <div className='space-y-8'>
    <div>
      <Dropdown {...args} onChangeCallback={setData} />
    </div>
      <div className='w-[500px] hidden'>Parent State: {JSON.stringify(data)}</div>
  </div>
  );
};

export const Default = Basic.bind({});
Default.args = {
  onChangeCallback: console.log,
};

export const Multiselect = Basic.bind({});
Multiselect.args = {
  multiple: true,
  onChangeCallback: console.log,
};
