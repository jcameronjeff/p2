import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../utils';
import { Button } from '../Button';
import { BeakerIcon, CheckCircleIcon, PencilSquareIcon } from '@prism2/icons/react/24/solid';
import mdx from './README.mdx';
import { Box } from '../Box';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<any> = () => {
  const [count, setCount] = React.useState(0);
  const variants = ['default', 'text', 'fill', 'simulcast', 'aux'];

  return (
    <div className='mx-auto w-[740px]'>

    <h3 className='prism-heading-4 pb-1 mb-1'>Normal</h3>
    <div className='flex gap-2'>
      <button className='prism-btn'><BeakerIcon /> Default</button>
      <button className='prism-btn text'>Text</button>
      <button className='prism-btn fill'>Contained</button>
      <button className='prism-btn simulcast'>Simulcast</button>
      <button className='prism-btn text-sm text font-alt'>Aux</button>
    </div>
    <hr className='w-full my-4' />
    <h3 className='prism-heading-4 pb-1 mb-1'>With Icon</h3>
    <div className='flex gap-2'>
      {variants.map(variant => (
        <button className={`prism-btn ${variant}`}>
          <BeakerIcon className="w-4 h-4"/>
          {variant}
        </button>
      ))}
    </div>
    <hr className='w-full my-4' />
    <h3 className='prism-heading-4 pb-1 mb-1'>Small</h3>
    <div className='flex gap-2'>
      {variants.map(variant => (
        <button className={`prism-btn text-xs ${variant}`}>
          <BeakerIcon className="w-4 h-4"/>
          {variant}
        </button>
      ))}
    </div>
    <hr className='w-full my-4' />
    <h3 className='prism-heading-4 pb-1 mb-1'>Disabled</h3>
    <div className='flex gap-2'>
      {variants.map(variant => (
        <button disabled className={`prism-btn ${variant}`}>
          <BeakerIcon className="w-4 h-4"/>
          {variant}
        </button>
      ))}
    </div>
    <hr className='w-full my-4' />
    <h3 className='prism-heading-4 pb-1 mb-1'>Overflowing</h3>
    <div className='flex gap-2'>
      {variants.map(variant => (
         <button className={`prism-btn w-48 ${variant}`}>
          <BeakerIcon className='flex-shrink-0' />
          <div>Buttons allow a user to submit or request information</div>
        </button>
      ))}
    </div>
    <hr className='w-full my-4' />
    <h3 className='prism-heading-4 pb-1 mb-1'>Automation</h3>


    <Button label={`Clicked ${count} times`} variant="outline" role="button" aria-name="This Button" onClick={() => setCount(count + 1)}/>
    {count > 4 && <h3>Automation Completed!</h3>}
  </div>
  );
};

export const WinnieTest = () => (
  <div className='flex-col space-y-8 gap-8 items-start'>
  <Box as='div' className='flex gap-2 text-xs items-center'>
    <h4 className='prism-heading-4 w-[140px]'>Outlined</h4>
    <button className='prism-btn'>
      <div>Edit</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button className='prism-btn'>
      <div>Edit</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button className='prism-btn'>
      <div>Edit</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button className='prism-btn'>
      <div>Edit</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button disabled className='prism-btn'>
      <div>Save</div>
      <CheckCircleIcon className='w-4'/>
    </button>

  </Box>
  <Box as='div' className='flex gap-2 text-xs items-center'>
    <h4 className='prism-heading-4 w-[140px]'>Text</h4>
    <button className='prism-btn text px-2 gap-0.5'>
      <div>Save</div>

    </button>
    <button className='prism-btn text px-2 gap-0.5'>
      <div>Edit</div>

    </button>
    <button className='prism-btn text px-2 gap-0.5'>
      <div>Settings</div>



    </button>
    <button disabled className='prism-btn text px-2 gap-0.5'>
      <div>View</div>

    </button>

  </Box>
  <Box as='div' className='flex gap-2 text-xs items-center'>
    <h4 className='prism-heading-4 w-[140px]'>Outlined</h4>
    <button className='prism-btn fill'>
      <div>Contained State</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button className='prism-btn fill'>
      <div>Contained Button</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button className='prism-btn fill'>
      <div>Submit</div>
      <PencilSquareIcon className='w-4'/>
    </button>
    <button disabled className='prism-btn fill'>
      <div>Disabled</div>
      <CheckCircleIcon className='w-4'/>
    </button>
  </Box>
  </div>
);

export const AutoButtonClick = ButtonTemplate.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
AutoButtonClick.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Clicked/i });
  for (let step = 0; step < 5; step++) {
    await sleep(250).then(() => userEvent.click(loginButton)).then(() => sleep(250));
  }
};
