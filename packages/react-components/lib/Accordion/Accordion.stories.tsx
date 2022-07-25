import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { mocks } from './__mock';
import { AccordionItem, Button, Accordion, AccordionItemProps } from '..';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
} as ComponentMeta<typeof Accordion>;

export interface ITemplates {
  single: ComponentStory<typeof AccordionItem>,
  basic: ComponentStory<typeof Accordion>,
  controlled: ComponentStory<typeof Accordion>,
}


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
