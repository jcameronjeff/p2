import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import Radio, { RadioSet } from './Radio';
import { RadioGroup } from '@headlessui/react';
import { Box } from '../Box';

export default {
  title: 'Components/Checkboxes & Radios',
  component: Checkbox,
  subcomponents: { Radio, RadioSet, RadioGroup },
} as ComponentMeta<any>;




export const Template: ComponentStory<any> = () => {
  return (
    <Box as='div' className='space-y-2'>
      <Box as='div' className='flex gap-2'>
        <Checkbox label="Normal Checkbox" />
        <Checkbox label="Normal Checkbox" />
        <Checkbox label="Normal Checkbox" />
      </Box>
      <RadioSet items={['default', 'normal', 'advanced']} inline />
    </Box>
  );
};

export const NormalHTML: ComponentStory<any> = () => {
  const options = ['no selection', 'email', 'phone', 'mail'];
  const [current, setCurrent] = React.useState<string>(options[0]);

  return (
    <div className='prism'>
      <h2>{current}</h2>
      <RadioSet items={options} title="Contact Method" inline={true} onChange={setCurrent} />
    </div>
  );
};

interface HUIArgs {
  items:string[],
  title?: string,
  inline: boolean
}
const HeadlessUIExample: ComponentStory<any> = (args:HUIArgs) => {
  const { items, title, inline } = args;

  let [plan, setPlan] = useState(items[0]);

  return (
    <div className='flex gap-4'>
      <RadioSet items={items} title={title} inline={inline} onChange={setPlan} />
      <div>
        <h4>Selection</h4>
        <p>{plan}</p>
      </div>
    </div>
  );
};


export const HUI = HeadlessUIExample.bind({});
HUI.args = {
  title: 'Plan Options',
  items: ['business', 'pro', 'deluxe'],
  inline: false,
};
