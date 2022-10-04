import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { Box } from '../Box';

export default {
  title: 'Components/Checkboxes',
  component: Checkbox,
  subcomponents: { Box },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => {
  return (
    <Box as='div' className='space-y-2'>
      <Box as='div' className='flex gap-2 flex-wrap'>
        <Checkbox label="Normal Checkbox" variant="chip" />
        <Checkbox label="Normal Checkbox" checked data-testid='cb-1'/>
        <Checkbox label="Normal Checkbox" />
        <Checkbox label="Another Checkbox" />
        <Checkbox label="Disabled Checkbox" disabled />
        <Checkbox label="Disabled Checkbox" disabled checked />
      </Box>
    </Box>
  );
};

export const BasicCheckbox = Template.bind({});


const Single: ComponentStory<typeof Checkbox> = (args) => {
  return <Checkbox {...args} />;
};

export const Simple = Single.bind({});
Simple.args = {
  label: 'My checkbox',
};

export const InitialChecked = Single.bind({});
InitialChecked.args = {
  label: 'My checkbox',
  checked:true,
};

export const Disabled = Single.bind({});
Disabled.args = {
  label: 'My checkbox',
  disabled:true,
};

export const ChipVariant = Single.bind({});
ChipVariant.args = {
  label: 'My checkbox',
  variant: 'chip',
};
