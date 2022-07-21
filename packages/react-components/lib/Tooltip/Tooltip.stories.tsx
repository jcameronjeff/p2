import { Dialog } from '@headlessui/react';
import { Box, Modal, Tooltip } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Checkbox } from '..';
import { userEvent, within } from '@storybook/testing-library';


export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: { Checkbox, Button, Modal, Dialog },
} as ComponentMeta<any>;


const SimpleTooltip: ComponentStory<any> = () => {
  return (
  <div className='prism'>

    <Box as="div" className='w-[400px] prism-prose space-y-4'>
      <p>This is a paragraph with a <Tooltip content="My tooltip">tooltip component.</Tooltip></p>
      <p>This is a paragraph with a <Tooltip content="My tooltip">alternate tooltip component.</Tooltip></p>
      <p>This is a paragraph with a <Tooltip className='tt below' content="My tooltip">tooltip below</Tooltip></p>
      <p>This is something with a <span className='tt' aria-label="my tooltip which has quite a bit of content">HTML native tooltip</span></p>
      <p>This is something with a <span className='tt below' aria-label="my tooltip">HTML native tooltip below</span></p>
    </Box>
  </div>
  );
};

export const Simple = SimpleTooltip.bind({});

Simple.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const input = await canvas.getByPlaceholderText('txt');
  const tt = await canvas.getByRole('details');
  userEvent.type(input, 'hello this is darin');
  userEvent.hover(tt);

  // const pwInput = await canvas.getByPlaceholderText('Password');

};
