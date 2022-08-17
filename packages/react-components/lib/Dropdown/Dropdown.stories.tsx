import { AccordionItem, Button, Accordion, Box, AccordionItemProps, Chip } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { ComponentType, useState } from 'react';
import { ChevronRightIcon, FilterIcon } from '@prism2/icons/react/solid';
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
      {/* <div className='w-[500px]'>Parent State: {JSON.stringify(data)}</div> */}
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
