import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio, { RadioSet, Radios } from './Radio';
import { Box } from '../Box';
import mdx from './README.mdx';

export default {
  title: 'Components/Radios',
  component: Radio,
  subcomponents: { Radios },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<any>;

export const Basic: ComponentStory<any> = () => {
  return (
    <Box as='fieldset' className='flex gap-2 items-center'>
      <Radio name='make' value="BMW" tabIndex={1} />
      <Radio name='make' value="Mercedes-Benz" defaultChecked={true} tabIndex={2}  />
      <Radio name='make' value="Audi" tabIndex={3}  />
    </Box>
  );
};

export const RadioGroups: ComponentStory<any> = () => {
  const options = ['no selection', 'email', 'phone', 'mail', 'BMW', 'Mercedes-Benz'];
  const [current, setCurrent] = React.useState<string>(options[0]);

  return (
    <div className='prism'>
      <h2>{current}</h2>
      <Radios name="make" values={options} onChange={(e) => setCurrent(e.currentTarget.value)} />
    </div>
  );
};

interface HUIArgs {
  items:string[],
  title: string,
  inline: boolean
}
const RadioSetHeadlessUI: ComponentStory<any> = (args:HUIArgs) => {
  const { items, title, inline } = args;

  let [plan, setPlan] = useState(items[2]);

  return (
    <div className='space-y-4'>
      <h4 className='prism-label'>{plan}</h4>
      <RadioSet values={items} name={title} inline={inline} onUpdate={setPlan} initialItem={plan}/>
    </div>
  );
};


export const HUI = RadioSetHeadlessUI.bind({});
HUI.args = {
  title: 'Plan Options',
  items: ['business', 'pro', 'deluxe'],
  inline: false,
};
