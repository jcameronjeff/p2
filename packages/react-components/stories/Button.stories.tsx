import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../lib/utils';
import { Button } from '../lib/Button';
import { Avatar } from '../lib/Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Avatar />
      <Button label={`Clicked ${count} times`} variant="outline" role="button" aria-name="This Button" onClick={() => setCount(count+1)} {...args} />
      {count > 4 && <h3>Automation Completed!</h3>}
    </>
  )
}


const ButtonTemplate: ComponentStory<any> = (args) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Avatar name="Darin Cassler" />
      <Avatar name="Darin" />
      <Avatar name="DC" />
      <Avatar name="DC" src="//www.fillmurray.com/128/128" />
      <Button label={`Clicked ${count} times`} variant="outline" role="button" aria-name="This Button" onClick={() => setCount(count+1)}/>
      {count > 4 && <h3>Automation Completed!</h3>}
    </>
  )
}

export const AutoButtonClick = ButtonTemplate.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
AutoButtonClick.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Clicked/i });
  for (let step = 0; step < 5; step++) {
    await sleep(250).then(() => userEvent.click(loginButton)).then(() => sleep(250))
  }
};
