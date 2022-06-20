import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '..';


export default {
  title: 'Elements/Chips',
  component: Chip,
  subcomponents: { Chip },
} as ComponentMeta<any>;



const Chips: ComponentStory<any> = () => {
  let icon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
  return (
  <div className='flex gap-1'>
    <Chip>OK</Chip>
    <Chip variant="dark">OK</Chip>
    <Chip as="button">Focusable Button</Chip>
    <Chip as="button">Focusable Button</Chip>
    <Chip prepend={icon} variant="light">Ok</Chip>
    <Chip prepend={icon} variant="dark">Ok</Chip>
    <Chip append={icon}>My chip</Chip>
  </div>
  );
};


export const Basic = Chips.bind({});

