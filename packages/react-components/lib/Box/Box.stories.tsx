import { ComponentMeta } from '@storybook/react';
import { Box } from './';

export default {
  title: 'Components/Box',
  description: 'Components component',
  component: Box,
} as ComponentMeta<typeof Box>;


const Basic = (args) => <Box {...args} />;
export const Primary = Basic.bind({});
