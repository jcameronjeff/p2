import { StoryFn, Meta } from '@storybook/react';
import { Avatar } from '.';

const imgUrls = ['https://picsum.photos/id/64/128', 'https://picsum.photos/id/433/128', 'https://picsum.photos/id/582/128', 'data:image/png;base64,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', '//www.fillmurray.com/g/300/300'];

export default {
  title: 'Components/Avatar',
  description: 'Avatar component',
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
        options: ['James Cameron', 'Filini', 'QT', 'Brian De Palma', 'Riddley Scott', 'Francis Ford Coppola'],
      },
    },
    className: {
      control: { type: 'text' },
    },
    alt: {
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        options: ['James Cameron', 'Filini', 'QT', 'Brian De Palma', 'Riddley Scott', 'Francis Ford Coppola'],
      },
    },
  },
} as Meta<typeof Avatar>;

const SizingTemplate: StoryFn<typeof Avatar> = () => {
  return (
    <div className='container w-[800px] gap-2 flex justify-center items-center flex-wrap'>
      <Avatar name='James Cameron' src={imgUrls[2]} />
      <Avatar name='James Cameron' src={imgUrls[1]} className='w-16 h-16' />
      <Avatar name='James Cameron' src={imgUrls[0]} className='!h-20 !w-20' />
      <Avatar name='James Cameron' src={imgUrls[3]} className='w-24 h-24' />
    </div>
  );

};

export const Template: StoryFn<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  src: imgUrls[2],
  name: 'James Cameron',
  alt: 'James Cameron',
};

export const Sizing = SizingTemplate.bind({});

export const WithName = Template.bind({});
WithName.args = {
  className: 'w-12 h-12',
  name: 'James Cameron',
  showName: true,
  src: imgUrls[2],
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: imgUrls[2],
  name: 'James Cameron',
};

export const WithError = Template.bind({});
WithError.args = {
  src: '//123.net/128/128',
  name: 'Ridley Scott',
};
