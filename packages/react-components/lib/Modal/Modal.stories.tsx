import { createRef, Fragment, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button, Modal } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Interaction/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: {
        type: 'text', // Type 'select' is automatically inferred when 'options' is defined
      },
    },
    description: {
      control: {
        type: 'text', // Type 'select' is automatically inferred when 'options' is defined
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <>
    <button className='prism-btn outline w-full' onClick={() => setIsOpen(true)}>
      Toggle Modal
    </button>
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Title className='prism-heading-2'>Deactivate account</Dialog.Title>
      <Dialog.Description className='prism-heading-3'>
        This will permanently deactivate your account
      </Dialog.Description>
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
      <button className='prism-btn fill w-full' ref={okRef} onClick={() => setIsOpen(false)}>
        Ok
      </button>
    </Modal>
    </>
  );
};

export const Basic = Template.bind({});

const ShorthandTemplate: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className='prism-btn fill ' type='submit' onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>
      <Modal {...args} show={isOpen} onClose={() => setIsOpen(false)}>
        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>
      </Modal>
    </div>
  );
};

const CompactTemplate: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className='prism-btn fill text-xs w-full' onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>
      <Modal {...{
        title: 'Modal Title',
        description: 'My description text',
        content: <p>This is the content of my modal</p>,
        show: isOpen,
        onClose: () => setIsOpen(false),
        footer: (
          <button className='prism-btn fill' onClick={() => setIsOpen(false)}>
            Ok
          </button>
        ),
      }}/>
    </div>
  );
};

export const CompactWithCustomFooter = CompactTemplate.bind({});
CompactWithCustomFooter.args = {
  title: 'Modal Title',
  description: 'My description text',
  content: <p>This is the content of my modal</p>,
};

export const ShorthandWithCustomFooter = ShorthandTemplate.bind({});
ShorthandWithCustomFooter.args = {
  title: 'My Props Title',
  description: 'My Props Description',
};


export const WithCustomTransition = ShorthandTemplate.bind({});
WithCustomTransition.args = {
  outerTransition: {
    enter: 'ease-in-out duration-1000 delay-100',
    enterFrom: 'opacity-0 scale-95 translate-y-8',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-1000',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95 translate-y-8',
  },
  innerTransition: {
    enter: 'ease-in-out duration-1000 delay-250',
    enterFrom: 'opacity-0 scale-50 translate-y-8',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-1000',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95 translate-y-8',
  },
};
