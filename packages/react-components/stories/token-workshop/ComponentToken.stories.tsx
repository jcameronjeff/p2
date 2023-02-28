import './workshop-surfaces.css';
import { Combobox, Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@prism2/icons-react';
import { StoryObj } from '@storybook/react';
Combobox.displayName = 'Combobox';
Combobox.Input.displayName = 'Combobox.Input';
Combobox.Options.displayName = 'Combobox.Options';
Combobox.Option.displayName = 'Combobox.Option';

export const Template = () => {
  return (
    <Combobox defaultValue={''}>
      <Combobox.Input onChange={() => {}} />
      <Combobox.Options static>
        <Combobox.Option value="one">One</Combobox.Option>
        <Combobox.Option value="two">Two</Combobox.Option>
        <Combobox.Option value="three">Three</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
};

export default {
  title: 'Workshop/Tokens/TokenComponent',
  component: Template,
} as StoryObj<typeof Template>;

export const AddSurfaces = {
  render: () => (
    <Combobox defaultValue={''}>
      <Combobox.Input onChange={() => {}} className='prism-input' />
      <Combobox.Options className='surface option-panel text-sm'>
        <Combobox.Option className='surface target' value="one">One</Combobox.Option>
        <Combobox.Option className='surface target' value="two">Two</Combobox.Option>
        <Combobox.Option className='surface target' value="three">Three</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  ),
  args: { static: true },
};

export const AsListbox = {
  render: () =>
    <Listbox defaultValue='choose one'>{({ value }) => (
      <div className='relative w-64 space-y-1'>
      <Listbox.Button className='prism-input flex items-center w-full ui-open:ring'>
        <span>{value}</span>
        <ChevronDownIcon className='ml-auto' />
      </Listbox.Button>
      <Listbox.Options className='surface option-panel'>
        <Listbox.Option className='surface target' value="one">One</Listbox.Option>
        <Listbox.Option className='surface target' value="two">Two</Listbox.Option>
        <Listbox.Option className='surface target' value="three">Three</Listbox.Option>
      </Listbox.Options>
      </div>
    )}</Listbox>,
};



export const AddSurfacesButtons = {
  render: () => (
    <Combobox defaultValue={['']} multiple>
    <div className="relative prism-input p-0 flex divide-x group">
      <Combobox.Input onChange={() => {}} className='naked-input' placeholder='As combobox' />
      <Combobox.Button as='button' className='primary px-2'>
        <ChevronDownIcon className='primary'/>
      </Combobox.Button>
    </div>
    <Combobox.Options className='surface option-panel text-sm'>
      <Combobox.Option className='surface target' value="one">One</Combobox.Option>
      <Combobox.Option className='surface target' value="two">Two</Combobox.Option>
      <Combobox.Option className='surface target' value="three">Three</Combobox.Option>
    </Combobox.Options>
  </Combobox>
  ),
  args: { static: true },
};
