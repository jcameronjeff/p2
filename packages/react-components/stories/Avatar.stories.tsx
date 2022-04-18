import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../lib/Avatar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    name: { control: 'text', defaultValue: 'Darin Cassler' },
    src: { control: 'text', defaultValue: '//www.fillmurray.com/128/128' }
  },
} as ComponentMeta<typeof Avatar>;

const AvatarTemplate: ComponentStory<any> = (args) => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='flex gap-2 justify-center'>
      <Avatar {...args} />
    </div>
  )
}

export const Default = AvatarTemplate.bind({});


export const WithoutImage = AvatarTemplate.bind({});
WithoutImage.args = {
  src: undefined,
  name: 'Darin Cassler'
}


export const WithMiddleName = AvatarTemplate.bind({});
WithMiddleName.args = {
  src: undefined,
  name: 'Darin Singer Cassler'
}

export const WithMiddleNameAndImage = AvatarTemplate.bind({});
WithMiddleNameAndImage.args = {
  name: 'Darin Singer Cassler'
}
