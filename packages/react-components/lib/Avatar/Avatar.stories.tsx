import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '..';

const imgUrls = ['//www.fillmurray.com/128/128', '//brok.en/i.png', 'https://media-exp1.licdn.com/dms/image/C5603AQEy9ikDqCx6jQ/profile-displayphoto-shrink_200_200/0/1645806136918?e=1655942400&v=beta&t=yZE1W30TXps7n9EdGwbpR0NYSl1sBdrQ1WJjel9NCZk'];

export default {
  title: 'Elements/Avatar',
  description: 'Another component',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        options: imgUrls,
      },
    },
    name: {
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        options: ['Darin Cassler', 'Darin', 'DC', 'Darin Singer Cassler', 'DSC'],
      },
    },
    className: {
      defaultValue: '',
      control: { type: 'text' },
    },
    alt: {
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        options: ['Darin Cassler', 'Darin', 'DC', 'Darin Singer Cassler', 'DSC'],
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const LayoutTemplate: ComponentStory<typeof Avatar> = ({ src, name, className }) => (
  <div className='flex items-center gap-4'>
    <Avatar className={className} name={name} src={src} />
    <span className='prism-heading-4'>{name}</span>
  </div>
);

export const WithName = LayoutTemplate.bind({});
WithName.args = {
  className: 'w-24 h-24',
  name: 'Darin Singer Cassler',
  src: imgUrls[0],
};


export const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'Darin Cassler',
  alt: 'Darin Cassler',
};
export const WithImage = Template.bind({});
WithImage.args = {
  src: imgUrls[0],
  name: 'Darin Cassler',
};

export const WithError = Template.bind({});
WithError.args = {
  src: 'xx/',
  name: 'Darin Cassler',
};


