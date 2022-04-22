import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../utils';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

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
  return (
    <div className='flex gap-2 flex-wrap'>
    <button type="button" name="button">No Class Button</button>
    <input className='prism-btn' type="button" name="input" value="Input Button" />
    <input className='prism-btn outline' type="button" name="input" value="Outline Button" />
    <input className='prism-btn fill' type="button" name="input" value="Fill Button" />
    <input className='prism-btn'  type="submit" name="submit" value="Submit Button" />
    <input className='prism-btn' type="reset" name="reset" disabled value="Reset Button" />
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
