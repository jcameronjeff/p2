import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../utils';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button/AutoClick',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<any> = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Avatar name="Darin Cassler" />
      <Avatar name="Darin" />
      <Avatar name="DC" />
      <Avatar name="DC" src="//www.fillmurray.com/128/128" />
      <Button label={`Clicked ${count} times`} variant="outline" role="button" aria-name="This Button" onClick={() => setCount(count + 1)}/>
      {count > 4 && <h3>Automation Completed!</h3>}
    </>
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
