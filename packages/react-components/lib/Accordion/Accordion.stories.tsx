import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { AccordionItem, Button, Accordion, Box, AccordionItemProps } from '..';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
} as ComponentMeta<typeof Accordion>;

interface ITemplates {
  single: ComponentStory<typeof AccordionItem>,
  basic: ComponentStory<typeof Accordion>,
  controlled: ComponentStory<typeof Accordion>,
}
const mocks = {
  items: [
    {
      label: 'When can I submit?',
      content: 'Anytime',
    }, {
      label: 'Where should I send it?',
      content: 'Right here, thanks',
    }, {
      label: 'Who will review my entry?',
      content: 'We all will',
    },
  ],
  customItems: [
    {
      label: 'How can I get support?',
      content: <p className='p-4'>Ok</p>,
      defaultOpen: true,
      className: 'rounded-sm text-lg font-bold bg-blue-500',
      onChange: (val:boolean) => console.log('item1 open', val),
    },
    {
      label: 'When can I submit?',
      content: 'Yes',
      className: 'rounded-sm',
      onChange: (val:boolean) => console.log('item2 open', val),
    },
    {
      label: 'Is team pricing available?',
      content: 'Yes',
      className: 'rounded-sm',
      onChange: (val:boolean) => console.log('item3 open', val),
    },
    {
      label: (
          <div className='flex gap-1 items-center'>
            <ChevronRightIcon className='w-[1em] h-[1em]' />Node as title
          </div>
      ),
      content: (
          <Box as="div" className='m-1 p-4 bg-gray-50 rounded'>
            Customized output of this item
          </Box>
      ),
      defaultOpen: true,
      className: 'bg-red-500 text-white rounded',
      onChange: (val:boolean) => console.log('item4 open', val),
    },
  ],
};
const templates:ITemplates = {
  basic: (args) => <Accordion {...args}/>,
  single: ({ className, content }) => <AccordionItem label="Hello" content={content} className={className} />,
  controlled: (args) => {
    const [list, setList] = useState(args.items);
    const handleUpdate = (data:AccordionItemProps[]) => {
      setList(data);
    };
    const toggleAll = (val: boolean) => {
      setList(list.map(i => ({ ...i, defaultOpen: val })));
    };
    return (
      <div className='space-y-8'>
        <div className='flex gap-1 text-xs items-center'>
          <Button onClick={() => toggleAll(true)}>Open All</Button>
          <Button onClick={() => toggleAll(false)}>Close All</Button>
          <div className='prism-label flex font-mono text-xs pl-2'>
            {'debug: ' + JSON.stringify(list.map(i => i.defaultOpen))}
          </div>
        </div>
        <Accordion {...args} onChange={handleUpdate} items={list}/>
      </div>
    );
  },
};

function FilteredListStatic() {
  const [query, setQuery] = useState('');
  const list = [
    'apples', 'oranges', 'pineapples', 'coconut', 'almonds', 'kiwi',
    'pomegranite', 'canteloupe', 'watermellon', 'peaches', 'guava', 'mango',
  ];
  let currentList = list.filter(i => i.indexOf(query) >= 0);
  return (
    <div className='py-2'>
      <input
        type='text'
        onChange={(e) => setQuery(e.target.value)}
        className='w-full prism-input border rounded-sm border-gray-100 mb-2'
        placeholder="Filter me"
        value={query} />

      <div className='divide-y divide-gray-100 text-xs border rounded-sm border-gray-100 mb-4 max-h-24 overflow-y-scroll shadow-inner'>
        {currentList.map(result => {
          let [start, stop] = [
            result.indexOf(query),
            result.indexOf(query) + query.length,
          ];
          return (
            <button className='p-1 block w-full text-left px-4 font-semibold text-gray-600 hover:text-blue-900 cursor-pointer hover:bg-gray-50' onClick={() => setQuery(result)}>
              <span>{result.slice(0, start)}</span>
              <span className='bg-yellow-100'>{result.slice(start, stop)}</span>
              <span>{result.slice(stop, 999)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const Default = templates.basic.bind({});
export const ControlledState = templates.controlled.bind({});
export const FilterVariant = templates.basic.bind({});
export const CustomizedOutput = templates.basic.bind({});
export const SingleBasic = templates.single.bind({});
export const SingleWithCustomStyle = templates.single.bind({});

Default.args = {
  className: 'w-[440px] text-sm',
  items: mocks.items,
};

ControlledState.args = {
  className: 'w-[440px] text-sm',
  items: mocks.items,
};

FilterVariant.args = {
  className: 'w-[440px] text-sm',
  autoCollapse: true,
  items: [ ...mocks.items.map(base => ({
    ...base,
    content: <FilteredListStatic/>,
  })) ],
  variant: 'filter',
};

CustomizedOutput.args = {
  autoCollapse: false,
  variant: 'filter',
  className: 'w-[440px] text-xs space-y-1',
  items: mocks.customItems,
};

SingleBasic.args = {
  className: 'w-[320px]',
  content: 'My open content',
};

SingleWithCustomStyle.args = {
  className: 'w-[280px] text-xs rounded p-2 px-4 bg-blue-100',
  content: <div className='bg-blue-50 text-xs p-4 rounded-b'>My tinted panel</div>,
};
