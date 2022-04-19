import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from '../lib';
import { HeadingsHTML, NavsHTML } from './Page.stories';

export default {
  title: 'Interaction/Tabs',
  component: Tab,
  argTypes: {
    enablePrism: { control: 'boolean'},
    textSize: {
      control: { type: 'select' },
      options: ['text-sm', 'text-base', 'text-xl', 'text-xs'],
    },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<any> = (args) => (
  <div>
  <div className='space-y-8 border p-8 prism'>
     <Tab.Group defaultIndex={3}>
        <Tab.List className="flex gap-2 px-4 text-xs border-b-4 pb-4">
          <Tab as={Fragment}>
            {({ selected }) => (<button className={`prism-btn ${selected && 'active'}`}>Prose</button>)}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (<button className={`prism-btn ${selected && 'active'}`}>Kitchen Sink</button>)}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (<button className={`prism-btn ${selected && 'active'}`}>KS 2</button>)}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (<button className={`prism-btn ${selected && 'active'}`}>Modals</button>)}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (<button className={`prism-btn ${selected && 'active'}`}>Saving & Editing</button>)}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (<button className={`prism-btn ${selected && 'active'}`}>VLP</button>)}
          </Tab>
        </Tab.List>
        <Tab.Panels className="m-4">
          {[
            <HeadingsHTML />,
            <NavsHTML />,
            <HeadingsHTML />,
            <NavsHTML />,
            <HeadingsHTML />,
            <NavsHTML />,
          ].map(panel => (
            <Tab.Panel>{panel}</Tab.Panel>
          ))}
        </Tab.Panels>
    </Tab.Group>
  </div>

    <HeadingsHTML />
  </div>
)

export const BasicUsage = Template.bind({});
