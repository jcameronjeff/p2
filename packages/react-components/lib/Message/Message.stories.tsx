import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Message } from './Message';

export default {
  title: 'Components/Message',
  component: Message,
  // subcomponents: { Message },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Message>;


const Default: ComponentStory<typeof Message> = (args) => {
  return (
    <Message {...args}>
      <p>
        This is some text message lorem ipsum delorate message lorem ipsum
      </p>
    </Message>
  );
};

export const InfoMsg = Default.bind({});
InfoMsg.args = {
  variant: 'info',
  title: 'Message Title',
};
export const Unstyled = Default.bind({});
Unstyled.args = {
  variant: 'info',
  title: 'Message Title',
  unstyle: true,
  className: 'border p-4 bg-gray-50 rounded-xl font-2xl',
};
export const NoTitle = Default.bind({});
NoTitle.args = {
  variant: 'info',
};
export const ErrorMsg = Default.bind({});
ErrorMsg.args = {
  variant: 'error',
  title: 'Message Title',
};
export const AlertMsg = Default.bind({});
AlertMsg.args = {
  variant: 'alert',
  title: 'Message Title',
};
export const SuccessMsg = Default.bind({});
SuccessMsg.args = {
  variant: 'success',
  title: 'Message Title',
};
