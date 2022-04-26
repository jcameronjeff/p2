import { createRef, Fragment, useRef, useState } from 'react';
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
      show={isOpen}
      onClose={() => setIsOpen(false)}
      initialFocus={okRef}
      as={Fragment}
    >
      <Dialog.Title className='prism-heading-2'>Deactivate account</Dialog.Title>
      <Dialog.Description className='prism-heading-3'>
        This will permanently deactivate your account
      </Dialog.Description>
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
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
      <button className='prism-btn fill ' type='submit' onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>
      <Modal
        show={isOpen}
        onClose={() => setIsOpen(false)}
        initialFocus={okRef}
        title={args.title}
        description={args.description}
        footer={(
          <div className='pt-4 flex gap-2 justify-center'>
            <button className='prism-btn w-full block fill focus-within:shadow-lg' type='submit' ref={okRef} onClick={() => setIsOpen(false)}>Dismiss</button>
          </div>
        )}
      >
        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>
      </Modal>
    </div>
  );
};

export const ShorthandWithCustomFooter = ShorthandTemplate.bind({});
ShorthandWithCustomFooter.args = {
  title: 'My Props Title',
  description: 'My Props Description',
};

