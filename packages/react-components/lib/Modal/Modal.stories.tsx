import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { Button, Modal, Card } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import mdx from './README.mdx';
// type FCModal = React.FC<ModalProps<any>>;

export default {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: { Button, Card },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Modal>;


export const TestTemplate: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <>
    <div className='flex gap-2'>
      <Button variant="base" onClick={() => setIsOpen(!isOpen)} data-testid='modal-trigger'>
        Toggle Me
      </Button>
      <Button variant="outline" data-testid='exterior'>
        Other
      </Button>
    </div>
    <Modal as={args.as} show={isOpen} onClose={() => setIsOpen(false)} __debug>
      <div data-testid='modal-inner' className='space-y-2'>
        <Dialog.Title className='prism-heading-2' role="heading">Deactivate account</Dialog.Title>
        <Dialog.Description className='prism-heading-3' role="contentinfo">
          This will permanently deactivate your account
        </Dialog.Description>
        <p>
          Are you sure you want to deactivate your account? All of your data will
          be permanently removed. This action cannot be undone.
        </p>
        <Button variant="base" innerRef={okRef} block onClick={() => setIsOpen(false)}>
          Confirm
        </Button>
      </div>
    </Modal>
    </>
  );
};

export const BasicExample = TestTemplate.bind({});
BasicExample.args = { 'data-testid': 'mx' };

const ShorthandTemplate: ComponentStory<typeof Modal> = (args) => {
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

const CompactTemplate: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setIsOpen2(!isOpen2)} label="Toggle Left" />
        <Button onClick={() => setIsOpen4(!isOpen4)} label="Toggle Modal" />
        <Button onClick={() => setIsOpen5(!isOpen5)} label="Toggle Panel" />
        <Button onClick={() => setIsOpen3(!isOpen3)} label="Toggle Fullscreen" />
        <Button onClick={() => setIsOpen(!isOpen)} label="Toggle Right" />
      </div>
      <Modal
        title='My SlideOut'
        description='Alternate modal behavior'
        variant="slideout"
        content={<p>This is the content of my modal</p>}
        footer={(<button className='prism-btn fill' onClick={() => setIsOpen(false)}>Ok</button>)}
        show={isOpen}
        onClose={() => setIsOpen(false)}
        __debug />
      <Modal
        title='My SlideOut'
        description='Alternate modal behavior'
        variant="panel"
        content={<p>This is the content of my modal</p>}
        footer={(<button className='prism-btn fill' onClick={() => setIsOpen5(false)}>Ok</button>)}
        show={isOpen5}
        onClose={() => setIsOpen5(false)}
        __debug />
      <Modal
        title='My SlideOut'
        description='Alternate modal behavior'
        variant="modal"
        content={<p>This is the content of my modal</p>}
        footer={(<button className='prism-btn fill' onClick={() => setIsOpen4(false)}>Ok</button>)}
        show={isOpen4}
        onClose={() => setIsOpen4(false)}
        __debug />
      <Modal
        title='My SlideOut'
        description='Alternate modal behavior'
        variant="fullscreen"
        content={<p>This is the content of my modal</p>}
        footer={(<button className='prism-btn fill' onClick={() => setIsOpen3(false)}>Ok</button>)}
        show={isOpen3}
        onClose={() => setIsOpen3(false)}
        __debug />
      <Modal
        title='My SlideOut'
        description='Alternate modal behavior'
        variant="slideout-left"
        content={<p>This is the content of my modal</p>}
        footer={(<button className='prism-btn fill' onClick={() => setIsOpen(false)}>Ok</button>)}
        show={isOpen2}
        onClose={() => setIsOpen2(false)}
        __debug />
    </>
  );
};

export const SlideoutVariant = CompactTemplate.bind({});
SlideoutVariant.args = {
  title: 'My SlideOut',
  description: 'Alternate modal behavior',
  variant: 'slideout-left',
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


export const Default: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
  <div className='flex gap-2'>
    <Button variant="base" onClick={() => setIsOpen(!isOpen)} data-testid='modal-trigger'>
      Toggle Me
    </Button>
    <Button variant="outline" data-testid='exterior'>
      Other
    </Button>
  </div>
  <Modal show={true} onClose={() => {}}>
    <div data-testid={args['data-testid']}>
      <Dialog.Title className='prism-heading-2' role='heading'>{args.title}</Dialog.Title>
      <Dialog.Description className='prism-heading-3' role='contentinfo'>
        {args.description}
      </Dialog.Description>
      {args.content}
      <Button variant="base" block onClick={() => {}}>
        Confirm
      </Button>
    </div>
  </Modal>
  </>
  );
};
