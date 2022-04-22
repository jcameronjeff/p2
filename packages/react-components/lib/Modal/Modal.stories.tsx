import { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Modal } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Interaction/Modal',
  component: Modal,

} as ComponentMeta<any>;

export const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <button className='prism-btn outline' onClick={() => setIsOpen(true)}>Toggle Modal</button>
    <Modal as={Fragment} show={isOpen} onClose={() => setIsOpen(false)} {...args}>
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
