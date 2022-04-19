import React from 'react';
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

  <div className='space-y-8'>
     <Tab.Group defaultIndex={3}>
        <Tab.List className="flex gap-2 px-4 text-xs">
          <Tab className="aux">Prose</Tab>
          <Tab className="aux">Kitchen Sink</Tab>
          <Tab className="aux">Kitchen Sink 2</Tab>
          <Tab className="aux">Modals</Tab>
          <Tab className="aux">Saving &amp; Editing</Tab>
          <Tab className="aux">VLP</Tab>
        </Tab.List>
        <Tab.Panels className="p-4 border rounded-sm m-4">
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
)

export const BasicUsage = Template.bind({});
