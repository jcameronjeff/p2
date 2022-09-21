import React from 'react';
import {  ComponentMeta } from '@storybook/react';
import { Step, StepRoot } from './';
import mdx from './README.mdx';
import { Button } from '../Button';

export default {
  title: 'Components/Stepper',
  component: Step,
  subcomponents: {
    'Step.Group': Step.Group,
    'Step.List': Step.List,
    'Step.Panels': Step.Panels,
    'Step.Panel': Step.Panel,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof StepRoot>;

export const Basic = () => (
  <Step.Group className='m-auto max-w-[280px] sm:max-w-full'>
    <Step.List>
      <Step>Step One</Step>
      <Step>Step Two</Step>
      <Step>Step Three Long Label Going for Three Lines</Step>
      <Step>Step 4</Step>
      <Step>Step 5</Step>
    </Step.List>
  </Step.Group>
);

export const InitialStep = () => (
  <Step.Group defaultIndex={1}>
    <Step.List>
      <Step>One</Step>
      <Step>Two</Step>
      <Step>Three</Step>
    </Step.List>
  </Step.Group>
);
export const WithPanels = () => (
  <Step.Group className='container my-8 space-y-4'>
    <Step.List>
      <Step>One</Step>
      <Step>Two</Step>
      <Step>Three</Step>
    </Step.List>
    <Step.Panels>
      <Step.Panel>
        <h1 className='prism-heading-2'>One</h1>
      </Step.Panel>
      <Step.Panel>
        <h1 className='prism-heading-2'>Two</h1>
      </Step.Panel>
      <Step.Panel>
        <h1 className='prism-heading-2'>Almost done!</h1>
        <Button>Finish</Button>
      </Step.Panel>
    </Step.Panels>
</Step.Group>
);

export const Controlled = () => {
  const [idx, setIdx] = React.useState(0);
  const clsx = 'p-8 m-8 border';
  const increment = () => setIdx(idx + 1);
  return (
    <Step.Group selectedIndex={idx} onChange={setIdx} className={clsx}>
      <Step.List>
         <Step>One</Step>
         <Step>Two</Step>
         <Step>Three</Step>
      </Step.List>
      <Step.Panels>
        <Step.Panel>
          <h1 className='prism-heading-2'>One</h1>
          <Button onClick={increment}>Next</Button>
        </Step.Panel>
        <Step.Panel>
          <h1 className='prism-heading-2'>Two</h1>
          <Button onClick={increment}>Next</Button>
        </Step.Panel>
        <Step.Panel>
          <h1 className='prism-heading-2'>Almost done!</h1>
          <Button>Finish</Button>
        </Step.Panel>
      </Step.Panels>
  </Step.Group>
  );
};


export const Manual = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="container p-8">
    <Step.Group manual className='m-auto max-w-[280px] sm:max-w-full'
      selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Step.List>
        <Step>Step One</Step>
        <Step>Step Two</Step>
        <Step>Step Three</Step>
        <Step>Step 4</Step>
        <Step>Step 5</Step>
      </Step.List>
      <Step.Panels className='py-8'>
        <Step.Panel>
          <h1 className='prism-heading-1 font-alt tracking-tight'>Welcome</h1>
          <p className='text-sm text-gray-700'>
            Manual control of progress has been disabled. Please use the inputs below to continue.
          </p>
        </Step.Panel>
        <Step.Panel>Basic Info</Step.Panel>
        <Step.Panel>Interests</Step.Panel>
        <Step.Panel>Privacy Settings</Step.Panel>
        <Step.Panel>Review</Step.Panel>
      </Step.Panels>
      <div className="pt-4 border-t border-gray-100 flex gap-2">
        <Button disabled={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>Restart</Button>
        <Button
          className='ml-auto'
          disabled={selectedIndex < 1}
          onClick={() => setSelectedIndex(selectedIndex - 1)}>
          Back
        </Button>
        <Button
          className='mr-auto'
          disabled={selectedIndex >= 4}
          onClick={() => setSelectedIndex(selectedIndex + 1)}>
          Next
        </Button>
        <Button disabled={selectedIndex < 4}>Finish</Button>
      </div>
    </Step.Group>
  </div>
  );
};
