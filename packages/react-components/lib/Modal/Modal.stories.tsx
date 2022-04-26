import { Fragment, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Modal } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Interaction/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: {
        type: 'text', // Type 'select' is automatically inferred when 'options' is defined
        initialValue: 'My Modal Title',
      },
    },
    description: {
      control: {
        type: 'text', // Type 'select' is automatically inferred when 'options' is defined
        value: 'My Modal Description',
      },
    },
    content: {
      control: {
        type: 'object', // Type 'select' is automatically inferred when 'options' is defined
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <div>
    <button className='prism-btn fill' type='submit' onClick={() => setIsOpen(true)}>Toggle Modal</button>
    <Modal
      as={Fragment}
      show={isOpen}
      onClose={() => setIsOpen(false)}
      initialFocus={okRef}
      {...args}
    >
      <Dialog.Title className='prism-heading-2'>
        Deactivate account
      </Dialog.Title>
      <Dialog.Description className='prism-heading-4'>
        This will permanently deactivate your account
      </Dialog.Description>
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
      <div className='pt-4 grid grid-cols-2 gap-4'>
        <button className='prism-btn' onClick={() => setIsOpen(false)}>Cancel</button>
        <button className='prism-btn fill' type='submit' onClick={() => setIsOpen(false)}>Dismiss</button>
      </div>
    </Modal>
    </div>
  );
};

export const Basic = Template.bind({});

const ShorthandTemplate: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <div>
    <button className='prism-btn fill' type='submit' onClick={() => setIsOpen(true)}>Toggle Modal</button>
    <Modal
      as={Fragment}
      show={isOpen}
      onClose={() => setIsOpen(false)}
      initialFocus={okRef}
      {...args}
    >
      <div className='pt-4 grid grid-cols-2 gap-4'>
        <button className='prism-btn' onClick={() => setIsOpen(false)}>Cancel</button>
        <button className='prism-btn fill' type='submit' onClick={() => setIsOpen(false)}>Dismiss</button>
      </div>
    </Modal>
    </div>
  );
};

export const Shorthand = ShorthandTemplate.bind({});
Shorthand.args = {
  title: 'My Props Modal Title',
  description: 'This is a props modal description',
  content: 'This text comes from the content prop',
};
