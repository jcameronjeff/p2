import { CheckCircleIcon } from '@prism2/icons-react/24/solid';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';
import { useState } from 'react';
import { ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from './Listbox';
import mdx from './README.mdx';
import { Listbox } from '@headlessui/react';
import { products } from '../../../../apps/demo-03-headless-styled/src/mockData';
import { IndicatorChevron } from '../Accordion';

type Person = {
  id: number,
  name: string,
  unavailable: boolean
};
const people: Person[] = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export default {
  title: 'Components/Listbox',
  component: Listbox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta<typeof Listbox>;


const Template: ComponentStory<any> = (args) => {

  const [selected, setSelected] = useState(args.defaultValue);
  return (
    <div className='flex justify-center'>
      <Listbox {...args} value={selected} onChange={setSelected}className='relative w-[400px]' as='div'>
        <ListboxLabel>Listbox (Select) example...</ListboxLabel>
        <Listbox.Button className={['p-2 h-10 w-[400px] border flex items-center prism-input icons:w-6 icons:h-6 icons:ml-auto',
          'text-left overflow-hidden shadow-inner',
          'ui-open:ring-1 ui-open:ring-blue-600'].join(' ')}>
            {!!selected ? <p>{args.valueRenderer(selected)}</p> : <p className='opacity-50'>Select an option</p>}
            <IndicatorChevron />
        </Listbox.Button>
        <ListboxOptions className='w-[400px] ring-1 bg-white'>
          {args.data.map((value: unknown) => args.renderer(value))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export const Singleselect = Template.bind({});
Singleselect.args = {
  multiple: false,
  data: people,
  label: 'Default Listbox',
  defaultValue: undefined,
  valueRenderer: (value: Person) => <>{value}</>,
  renderer: (value: Person) => (
    <ListboxOption key={value.id} value={value.name} disabled={value.unavailable} >
      <CheckCircleIcon />
      <span>{value.name}</span>
    </ListboxOption>
  ),
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  multiple: true,
  label: 'Multiselect',
  data: people,
  defaultValue: [],
  valueRenderer: (value: Person[]) => {
    if (value.length > 0) return value.map(i => i.name).join(', ');
    return 'Select an item';
  },
  renderer: (value: Person) => (
    <ListboxOption key={value.id} value={value} >
      <CheckCircleIcon  />
      <span>{value.name} is fun</span>
    </ListboxOption>
  ),
};

export const StringsOnly = Template.bind({});
StringsOnly.args = {
  multiple: true,
  data: ['apples', 'oranges', 'bananas', 'cherries', 'raspberries'],
  defaultValue: [],
  valueRenderer: (value:string[]) => value.map(v => v).join(','),
  renderer: (value: string) => (
    <Listbox.Option key={value} value={value} className="flex space-x-2 bg-green-300 text-black-700 p-2 ring-2 ui-active:bg-green-400 ui-active:text-white ui-selected:bg-black ui-selected:text-green-400 icons:w-6 icons:h-6 cursor-pointer">
      <CheckCircleIcon />
      <span>{value}!</span>
    </Listbox.Option>
  ),
};


export const ProductsList = Template.bind({});
ProductsList.args = {
  multiple: false,
  data: products,
  label: 'Select a product',
  renderer: (item:typeof products[0]) => (
    <Listbox.Option key={item.title} value={item.title} as='div' className='gap-1 items-top flex p-0.5'>
      <img src={item.thumbnail} className='w-16 h-auto rounded-sm' />
      <div className="overflow-hidden">
        <h3 className='prism-heading-5'>{item.title}</h3>
        <small className='prism-caption text-xs'>{item.description}</small>
      </div>

    </Listbox.Option>
  ),
};
