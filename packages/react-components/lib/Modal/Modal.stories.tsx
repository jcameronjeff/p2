import { useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button, Modal, Card, ModalProps } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';

type FCModal = React.FC<ModalProps<any>>;

export default {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: { Button, Card },
} as ComponentMeta<FCModal>;


const Template: ComponentStory<FCModal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <>
    <Button variant="base" onClick={() => setIsOpen(true)}>
      Toggle Modal
    </Button>
    <Modal show={isOpen} onClose={() => setIsOpen(false)} __debug >
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

export const BasicExample = Template.bind({});

const ShorthandTemplate: ComponentStory<FCModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className='flex gap-2'>
        <Button onClick={() => setIsOpen(true)} label="toggle" />
        <Button onClick={() => setCount(count + 1)} label={`increment ${count}`} />
      </div>
      <Modal {...args} show={isOpen} onClose={() => setIsOpen(false)} __debug>
        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>
        <div className='flex gap-2'>
          <Button onClick={() => setIsOpen(false)} label={'OK'} />
          <Button onClick={() => setCount(count + 1)} label={`increment ${count}`} />
        </div>
      </Modal>
    </div>
  );
};

const CompactTemplate: ComponentStory<FCModal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} label="Toggle Slideout" />
      <Modal
        title='My SlideOut'
        description='Alternate modal behavior'
        variant="slideout"
        content={<p>This is the content of my modal</p>}
        footer={(<button className='prism-btn fill' onClick={() => setIsOpen(false)}>Ok</button>)}
        show={isOpen}
        onClose={() => setIsOpen(false)}
        __debug />
    </>
  );
};

export const SlideoutVariant = CompactTemplate.bind({});
SlideoutVariant.args = {
  title: 'My SlideOut',
  description: 'Alternate modal behavior',
  variant: 'slideout',
  content: <p>This is achieved with <pre>variant='slideout'</pre></p>,
};

export const ShorthandExample = ShorthandTemplate.bind({});
ShorthandExample.args = {
  title: 'My Props Title',
  description: 'My Props Description',
};


export const CustomTransitions = ShorthandTemplate.bind({});
CustomTransitions.args = {
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
