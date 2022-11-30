import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../utils';
import { Button, ButtonVariantName } from '../Button';
import { BeakerIcon, CheckCircleIcon, PencilSquareIcon } from '@prism2/icons-react/24/solid';
import { CreditCardIcon } from '@prism2/icons-react';
import mdx from './README.mdx';
import { Box } from '../Box';
import { Heading4 } from '../Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    className: { control: 'text' },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Button>;

const variants:ButtonVariantName[] = ['outline', 'fill', 'text', 'auxiliary'];

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <div className='mx-auto w-[740px] flex gap-2 items-center'>
    {variants.map(variant => <Button variant={variant} className='capitalize' label={variant} {...args} />)}
  </div>
);

export const FloatingButtons = () => (
  <div className='p-12 h-[450px]'>
    <h1 className='prism-heading-1'>Floating Buttons</h1>
    <Button variant='fill' className='right-8 bottom-8 fixed w-12 h-12 p-4' floating append={<BeakerIcon />} />
    <Button variant='fill' className='left-8 bottom-8 fixed p-4' floating label="Floating" append={<BeakerIcon />} />
  </div>
);


export const Basic = ButtonTemplate.bind({});
export const WithIcon = ButtonTemplate.bind({});
export const Overflow = ButtonTemplate.bind({});
export const Small = ButtonTemplate.bind({});
export const Disabled = ButtonTemplate.bind({});
WithIcon.args = {
  children: <BeakerIcon />,
};
Overflow.args = {
  prepend: <BeakerIcon />,
  label: '',
  children: <span>Buttons allow a user to submit or request information</span>,
};
Small.args = {
  className: 'text-sm',
  label: 'My Small Button',
};
Disabled.args = {
  disabled: true,
  label: 'Not Enabled',
};

const AutoButton = () => {
  const [count, setCount] = React.useState(0);
  return (
  <div>
    <hr className='w-full my-4' />
    <h3 className='prism-heading-4 pb-1 mb-1'>Automation</h3>
    <Button variant="outline" className='text-xl' onClick={() => setCount(count + 1)} >
    <CreditCardIcon className='h-4' />
    {`Clicked ${count} times`}
    </Button>
    {count > 4 && <h3>Automation Completed!</h3>}</div>
  );
};



export const WinnieTest = () => (
  <div className='flex-col space-y-8 gap-8 items-start'>
  <Box as='div' className='flex gap-2 text-xs items-center'>
    <Heading4 className='w-[140px]'>Outlined</Heading4>
    <Button label='Edit'><PencilSquareIcon /></Button>
    <Button prepend={<PencilSquareIcon />}>Edit</Button>
    <Button prepend={<PencilSquareIcon />}>Edit</Button>
    <Button prepend={<PencilSquareIcon />}>Edit</Button>
    <Button prepend={<CheckCircleIcon />} append={<CheckCircleIcon />} disabled>Save</Button>
  </Box>
  <Box as='div' className='flex gap-2 text-xs items-center'>
    <Heading4>Text</Heading4>
    <Button variant='text'>Save</Button>
    <Button variant='text'>Edit</Button>
    <Button variant='text'>Settings</Button>
    <Button variant='text' disabled>View</Button>
  </Box>
  <Box as='div' className='flex gap-2 text-xs items-center'>
    <Heading4>Filled</Heading4>
    <Button prepend={<PencilSquareIcon />} variant='fill'>Submit</Button>
    <Button append={<PencilSquareIcon />} variant='fill'>Contained Button</Button>
    <Button append={<PencilSquareIcon />} variant='fill'>Submit</Button>
    <Button append={<CheckCircleIcon />} variant='fill' disabled>Disabled</Button>
  </Box>
  </div>
);




export const AutoButtonClick = AutoButton.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
AutoButtonClick.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Clicked/i });
  for (let step = 0; step < 5; step++) {
    await sleep(250).then(() => userEvent.click(loginButton)).then(() => sleep(250));
  }
};
