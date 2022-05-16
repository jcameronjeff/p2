import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../utils';
import { Button } from '../Button';
import { BeakerIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<any> = () => {
  const [count, setCount] = React.useState(0);
  const variants = ['default', 'aux', 'outlined', 'contained', 'simulcast', 'text'];

  return (
    <div className='flex gap-2 flex-wrap justify-center items-center'>
    <h3 className='prism-label mr-8 flex-grow'>normal</h3>
    <button className='prism-btn'>Default</button>
    <button className='prism-btn aux'>Aux</button>
    <button className='prism-btn outlined'>Outline</button>
    <button className='prism-btn contained'>Contained</button>
    <button className='prism-btn simulcast'>Simulcast</button>
    <button className='prism-btn text'>Text</button>
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>with icon</h3>
    {variants.map(variant => (
      <button className={`prism-btn ${variant}`}>
        <BeakerIcon className=""/>
        <span>{variant}</span>
      </button>
    ))}
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>small</h3>
    {variants.map(variant => (
      <button className={`prism-btn text-xs ${variant}`}>
        <BeakerIcon className=""/>
        <span>{variant}</span>
      </button>
    ))}
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>hover</h3>
    {variants.map(variant => (
      <button className={`prism-btn hover ${variant}`}>
        <BeakerIcon className=""/>
        <span>{variant}</span>
      </button>
    ))}
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>focus</h3>
    {variants.map(variant => (
      <button className={`prism-btn focus ${variant}`}>
        <BeakerIcon className=""/>
        <span>{variant}</span>
      </button>
    ))}
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>disabled</h3>
    {variants.map(variant => (
      <button disabled className={`prism-btn ${variant}`}>
        <BeakerIcon className=""/>
        <span>{variant}</span>
      </button>
    ))}
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>overflowing</h3>
    <button className='prism-btn outlined w-48'>
      <BeakerIcon />
      <span>Buttons allow a user to submit or request information</span>
    </button>
    <button className='prism-btn outlined w-48'>
      <span>Buttons allow a user to submit or request information</span>
      <BeakerIcon />
    </button>
    <button className='prism-btn outlined w-48'>
      <span>Buttons allow a user to submit or request information</span>
    </button>
    <hr className='w-full my-4' />
    <h3 className='prism-label mr-8 flex-grow'>submit</h3>
    <button className='prism-btn' type='submit'>Submit</button>
    <button className='prism-btn outlinedd'>
      <BeakerIcon />
    </button>
    <button className='prism-btn contained'>
      <BeakerIcon />
    </button>


    <hr className='w-full m-4' />

    <input className='prism-btn aux' type="button" name="input" value="Input Button" />
    <input className='prism-btn outlined' type="button" name="input" value="Outlined Button" />
    <input className='prism-btn disabled' type="button" name="input" value="Disabled Outline Button" />
    <input className='prism-btn fill' type="button" name="input" value="Fill Button" />
    <input disabled className='prism-btn fill' type="button" name="input" value="Disabled Fill Button" />
    <input className='prism-btn'  type="submit" name="submit" value="Submit Button" />
    <input disabled className='prism-btn'  type="submit" name="submit" value="Disabled Submit Button" />
    <input className='prism-btn' type="reset" name="reset" disabled value="Reset Button" />
     <button className='prism-btn hover w-64'>
      <BeakerIcon className=""/>
      <span>Buttons allow a user to submit or request information</span>
    </button>
    <button className='prism-btn hover w-64'>
      <span>flex gap-2 flex-wrap justify-center flex gap-2 flex-wrap justify-center Default</span>
      <BeakerIcon className=""/>
    </button>
    <input className='prism-btn fill text-xs' type="reset" name="reset" disabled value="Reset Button" />
    <input className='prism-btn text-sm capitalize font-medium text-gray-600 rounded-full ring-2 ring-gray-300' type="reset" name="reset" value="Reset Button" />

    <Button label={`Clicked ${count} times`} variant="outline" role="button" aria-name="This Button" onClick={() => setCount(count + 1)}/>
    {count > 4 && <h3>Automation Completed!</h3>}
  </div>
  );
};

export const AutoButtonClick = ButtonTemplate.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
AutoButtonClick.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Clicked/i });
  for (let step = 0; step < 5; step++) {
    await sleep(250).then(() => userEvent.click(loginButton)).then(() => sleep(250));
  }
};
