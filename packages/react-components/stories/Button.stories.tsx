import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { sleep } from '../lib/utils';
import { Button } from '../lib/Button';

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
      <Button label={`Clicked ${count} times`} variant="outline" role="button" aria-name="This Button" onClick={() => setCount(count+1)} {...args} />
      {count > 4 && <h3>Automation Completed!</h3>}
    </>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  className: 'px-4 py-8 ring-1 rounded-xl',
  variant: 'outline',
  label: 'My Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};


const ButtonTemplate: ComponentStory<any> = (args) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
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
