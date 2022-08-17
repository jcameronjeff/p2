import { ArrowCircleRightIcon } from '@prism2/icons/react/solid';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox, Chip } from '..';


export default {
  title: 'Components/Chips',
  component: Chip,
  subcomponents: { Chip },
} as ComponentMeta<any>;


const Chips: ComponentStory<any> = () => (
  <div className='space-y-8'>
    <div className='flex gap-2'>
      <Chip variant="light">Default Light</Chip>
      <Chip as="button" onClick={() => window.alert('yay')}>Default</Chip>
      <Chip variant="dark">Default Dark</Chip>
    </div>
  </div>
);

const WithIcons: ComponentStory<any> = () => (
  <div className='flex gap-2'>
    <Chip append={<ArrowCircleRightIcon />} variant="light">Default Light</Chip>
    <Chip prepend={<ArrowCircleRightIcon />} >Default</Chip>
    <Chip append={<ArrowCircleRightIcon />} prepend={<ArrowCircleRightIcon />} variant="dark">Default Dark</Chip>
  </div>
);

const AsButtons: ComponentStory<any> = () => (
   <div className='flex gap-2'>
      <Chip as="button" disabled>Button Light</Chip>
      <Chip as="button" >Button</Chip>
      <Chip as="button" >Button Dark</Chip>
    </div>
);
const AsLinks: ComponentStory<any> = () => (
   <div className='flex gap-2'>
      <Chip as="a" href='#'>Link</Chip>
      <Chip as="a" href='https://aswd.net'>Link</Chip>
      <Chip as="a" href='#'>Link</Chip>
    </div>
);
const AsCheckbox: ComponentStory<any> = () => (
   <div className='flex gap-2 text-xs'>
    <Checkbox variant="chip" label="Selection One" append={<ArrowCircleRightIcon />} onToggle={console.log}/>
    <Checkbox variant='chip' label="Selection Two" append={<ArrowCircleRightIcon />} onToggle={console.log} />
    <Checkbox variant='chip' label="Selection Three" onToggle={console.log} />
    <Checkbox variant='chip' label="Selection Four" onToggle={console.log} />
  </div>
);

export const Basic = Chips.bind({});
export const ButtonChips = AsButtons.bind({});
export const LinkChips = AsLinks.bind({});
export const ToggleChips = AsCheckbox.bind({});
export const IconChips = WithIcons.bind({});
