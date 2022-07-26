import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Message } from './Message';

/* eslint-disable */
export default {
  title: 'Components/Message',
  component: Message,
  // subcomponents: { Message },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<any>;


const Default: ComponentStory<any> = ({variant}) => {
  /**
   * Need to add the array here to match the class and appropriate svg path.
   */

  return (

    <Message title="This is my title" variant={variant}>
      <p>
        This is some text message lorem ipsum delorate message lorem ipsum
      </p>
    </Message>

  );
};
const WithoutTitleTemplate: ComponentStory<any> = ({variant}) => {

  return (

    <Message variant={variant}>
      <p>
        This is some text message lorem ipsum delorate message lorem ipsum
      </p>
    </Message>

  );
};

const variants = ['info', 'error', 'alert', 'success'] as const;

export const InfoMsg = Default.bind({})
export const WithoutTitle = WithoutTitleTemplate.bind({})
InfoMsg.args = {
  variant: 'info'
}
WithoutTitle.args = InfoMsg.args;
export const ErrorMsg = Default.bind({})
ErrorMsg.args = {
  variant: 'error'
}
export const AlertMsg = Default.bind({})
AlertMsg.args = {
  variant: 'alert'
}
export const SuccessMsg = Default.bind({})
SuccessMsg.args = {
  variant: 'success'
}
