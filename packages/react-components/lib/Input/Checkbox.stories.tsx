import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { Box } from '../Box';

export default {
  title: 'Elements/Checkboxes',
  component: Checkbox,
  subcomponents: { Box },
} as ComponentMeta<any>;

export const Template: ComponentStory<any> = () => {
  return (
    <Box as='div' className='space-y-2'>
      <Box as='div' className='flex gap-2'>
        <Checkbox label="Normal Checkbox" variant="chip" />
        <Checkbox label="Normal Checkbox" />
        <Checkbox label="Normal Checkbox" />
        <Checkbox label="Another Checkbox" />
        <Checkbox label="Disabled Checkbox" disabled />
      </Box>
    </Box>
  );
};

