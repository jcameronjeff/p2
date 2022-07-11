import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox, Chip } from '..';


export default {
  title: 'Elements/Chips',
  component: Chip,
  subcomponents: { Chip },
} as ComponentMeta<any>;


let icon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);


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
    <Chip append={icon} variant="light">Default Light</Chip>
    <Chip prepend={icon} >Default</Chip>
    <Chip append={icon} prepend={icon} variant="dark">Default Dark</Chip>
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
    <Checkbox variant="chip" label="Selection One" append={icon} onToggle={console.log}/>
    <Checkbox variant='chip' label="Selection Two" append={icon} onToggle={console.log} />
    <Checkbox variant='chip' label="Selection Three" onToggle={console.log} />
    <Checkbox variant='chip' label="Selection Four" onToggle={console.log} />
  </div>
);

export const Basic = Chips.bind({});
export const ButtonChips = AsButtons.bind({});
export const LinkChips = AsLinks.bind({});
export const ToggleChips = AsCheckbox.bind({});
export const IconChips = WithIcons.bind({});
