import { useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button, Modal, ModalBaseProps } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

type FCModal = React.FC<ModalBaseProps<any>>;

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
} as ComponentMeta<FCModal>;


const Template: ComponentStory<FCModal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <>
    <Button variant="base" block onClick={() => setIsOpen(true)}>
      Toggle Modal
    </Button>
    <Modal show={isOpen} onClose={() => setIsOpen(false)} __debug>
      <Dialog.Title className='prism-heading-2'>Deactivate account</Dialog.Title>
      <Dialog.Description className='prism-heading-3'>
        This will permanently deactivate your account
      </Dialog.Description>
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
      <Button variant="base" ref={okRef} block onClick={() => setIsOpen(false)}>
        Toggle Modal
      </Button>
    </Modal>
    </>
  );
};

export const Basic = Template.bind({});

const ShorthandTemplate: ComponentStory<FCModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button variant="base" block onClick={() => setIsOpen(true)}>
        Toggle Modal
      </Button>
      <Modal {...args} show={isOpen} onClose={() => setIsOpen(false)} __debug>
        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>
        <Button variant="base" block onClick={() => setIsOpen(false)}>
          Toggle Modal
        </Button>
      </Modal>
    </div>
  );
};

const CompactTemplate: ComponentStory<FCModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button variant="base" type='submit' block onClick={() => setIsOpen(true)}>
        Toggle Modal
      </Button>
      <Modal {...{
        ...args,
        title: 'Modal Title',
        description: 'My description text',
        content: <p>This is the content of my modal</p>,
        show: isOpen,
        onClose: () => setIsOpen(false),
        __debug: true,
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
