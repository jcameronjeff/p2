import { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Modal } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Interaction/Modal',
} as ComponentMeta<any>;

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button className='prism-btn outline' onClick={() => setIsOpen(true)}>Toggle Modal</button>
    <Modal as={Fragment} show={isOpen} onClose={() => setIsOpen(false)}>
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
    </>
  );
};

export const Basic = Template.bind({});
