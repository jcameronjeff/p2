import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../utils';
import { Tab, TabRoot } from './';
import mdx from './README.mdx';
import { ArchiveIcon, BadgeCheckIcon, BellIcon, AdjustmentsIcon } from '@prism2/icons/react/solid';

export default {
  title: 'Components/Tabs',
  component: Tab,
  subcomponents: {
    'Tab.Group': Tab.Group,
    'Tab.List': Tab.List,
    'Tab.Panels': Tab.Panels,
    'Tab.Panel': Tab.Panel,
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof TabRoot>;

export const Simple = () => {
  // import { Tab } from '@prism2/react
  // The Tab components are designed to deliver full
  // design implementations with minimal boilerplate JSX.
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Selected</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
        <Tab disabled>Disabled</Tab>
      </Tab.List>
      <Tab.Panels className='p-4'>
        <Tab.Panel>First Tab</Tab.Panel>
        <Tab.Panel>Second Tab</Tab.Panel>
        <Tab.Panel>Third Tab</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export const Unstyled = () => {
  // Create our title/content pairings as an array of objects.
  // This is not necessary but is done here for readability.

  return (
    <Tab.Group unstyle>
      <Tab.List>
        <Tab>Selected</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
        <Tab disabled>Disabled</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>First Tab</Tab.Panel>
        <Tab.Panel>Second Tab</Tab.Panel>
        <Tab.Panel>Third Tab</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export const CustomStyles = () => {
  // Create our title/content pairings as an array of objects.
  // This is not necessary but is done here for readability.
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Tab.Group
      unstyle
      as='div'
      defaultIndex={0}
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <Tab.List className='flex text-xs bg-blue-700 text-white gap-2'>
        {['First Tab', 'Second Tab', 'Third Tab'].map((label, idx) => (
          <Tab className={`p-2 text-sm ${selectedIndex === idx ? 'text-yellow-400 bg-blue-900' : ''}`}>{label}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels className='p-4'>
        <Tab.Panel>First Tab</Tab.Panel>
        <Tab.Panel>Second Tab</Tab.Panel>
        <Tab.Panel>Third Tab</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export const Controlled = () => {
  // Create our title/content pairings as an array of objects.
  // This is not necessary but is done here for readability.
  const tabs = [{
    title: 'Selected',
    children: <p>This will be the tab content</p>,
    disabled: false,
    icon: BellIcon,
  }, {
    title: 'Two',
    children: <p>Tab "Two"</p>,
    disabled: false,
    icon: BadgeCheckIcon,
  }, {
    title: 'Three',
    children: <p>Tab "Three"</p>,
    disabled: false,
    icon: ArchiveIcon,
  }, {
    title: 'Disabled',
    children: <div>Only when tab selected.</div>,
    disabled: true,
  }];

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Tab.Group
      className='m-6 border rounded shadow-sm border-gray-100'
      as='div'
      defaultIndex={0}
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <Tab.List className='border-b flex items-center gap-2 px-4'>
        {tabs.map(({ title, icon, disabled }, idx) => (
          <Tab icon={icon} onClick={console.log} key={idx.toString()} disabled={disabled}>{title}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels className='p-4'>
        {tabs.map(({ children }, idx) => (
          <Tab.Panel key={`${idx}`}>{children}</Tab.Panel>
        ))}
      </Tab.Panels>
      <div className='m-4 italic bg-gray-50 p-4 rounded text-xs border-blue-100 border'>
        This story fires a callback whenever the tab changes. See console.
      </div>
  </Tab.Group>
  );
};


export const BasicTemplate: ComponentStory<typeof Tab> = ({ vertical, enableIcons }) => {
  let items:[string, (React.ElementType | null), string][] = [
    ['First', BellIcon, 'Content A'],
    ['Second', ArchiveIcon, 'Content B'],
    ['Third', BadgeCheckIcon, 'Content C'],
    ['Fourth', AdjustmentsIcon, 'Content D'],
    ['Disabled', null, 'no content'],
  ];
  return (
    <Tab.Group as='div' vertical={vertical} className={vertical ? 'flex' : 'block'}>
      <Tab.List className={vertical ? 'py-2' : 'px-2'}>
        {items.map(([name, Component], idx) => (
          <Tab
            key={`tab-${idx}`}
            data-testid={`tab-${idx}`}
            disabled={name === 'Disabled'}
            icon={enableIcons ? Component : undefined}>
            {name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className='p-6 min-h-[100px]'>
        {items.map((item, idx) => (
          <Tab.Panel data-testid={`panel-${idx}`}>{item[2]}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = { vertical: false, enableIcons: false };

export const VerticalTabs = BasicTemplate.bind({});
VerticalTabs.args = { vertical: true, enableIcons: false };

export const WithIconLabels = BasicTemplate.bind({});
WithIconLabels.args = { vertical: false, enableIcons: true };





const Template: ComponentStory<typeof Tab> = () => {
  return (
    <Tab.Group className='m-6 border rounded shadow-sm border-gray-100' as='div'>
      <Tab.List className='border-b flex items-center gap-2 px-4'>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab>Fourth</Tab>
        <Tab>Fifth</Tab>
        <Tab>Sixth</Tab>
      </Tab.List>
      <Tab.Panels className='p-4'>
        <Tab.Panel>Content A</Tab.Panel>
        <Tab.Panel>Content B</Tab.Panel>
        <Tab.Panel>Content C</Tab.Panel>
        <Tab.Panel>Content D</Tab.Panel>
        <Tab.Panel>Content E</Tab.Panel>
        <Tab.Panel>Content F</Tab.Panel>
      </Tab.Panels>
      <div className='m-4 italic bg-gray-50 p-4 rounded text-xs border-blue-100 border'>
        This story has automated user interaction. It replays a series of keyboard and mouse events on its own.
      </div>
    </Tab.Group>
  );
};

export const Autoplay = Template.bind({});

Autoplay.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const tab1 = await canvas.getByText('First');
  // const tab2 = await canvas.getByText('Second');
  // const tab3 = await canvas.getByText('Third');
  const tab4 = await canvas.getByText('Fourth');
  // const tab5 = await canvas.getByText('Fifth');
  const tab6 = await canvas.getByText('Sixth');

  const delay = 200;

  for (let step = 0; step < 5; step++) {
    await sleep(delay).then(() => {
      userEvent.click(tab4);
    }).then(() => sleep(delay)).then(() => {
      userEvent.click(tab1);
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{arrowright}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{arrowright}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{arrowright}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.click(tab1);
    }).then(() => sleep(delay)).then(() => {
      userEvent.click(tab6);
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{left}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{left}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{left}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{left}');
    }).then(() => sleep(delay)).then(() => {
      userEvent.keyboard('{left}');
    }).then(() => sleep(delay));
  }
};
