// import KitchenSink from '../lib/HTML5';
import { Dialog } from '@headlessui/react';
import * as P2 from '@prism2/icons/react/prism';
import React, { useEffect, useState } from 'react';
import { Modal, Tab, Box, Message, Radio } from '../lib';
import { AllIcons, KitchenSink, PageTitleVDP  } from './comps/TabContent';
import VLP from './comps/VLP';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState('slideout');
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  useEffect(() => {
    setCount(count + 1);
  }, [isOpen]);
  return (
    <div className='bg-gray-50 min-h-screen overflow-x-hidden w-full'>
      <Tab.Group unstyle>

      <Box title='app-header' as='div' className='sticky top-0 left-0 right-0 w-screen z-50 bg-blue-800 space-y-2 border-b-4 shadow-sm border-gold-400 p-2'>
        <Box title='app-menu' as='div' className='flex gap-8 justify-between items-center container m-auto'>
          <div className='text-white tracking-tight'>react-components/site</div>
          <Tab.List as='div' className='flex gap-1 flex-grow'>
            <Tab className='prism-btn text text-sm !text-white focus:ring-1 ring-gold-400 hover:bg-blue-900 hover:outline-none selected:bg-blue-900'>Icons</Tab>
            <Tab className='prism-btn text text-sm !text-white focus:ring-1 ring-gold-400 hover:bg-blue-900 hover:outline-none selected:bg-blue-900'>Browse</Tab>
            <Tab className='prism-btn text text-sm !text-white focus:ring-1 ring-gold-400 hover:bg-blue-900 hover:outline-none selected:bg-blue-900'>Article</Tab>
            <Tab className='prism-btn text text-sm !text-white focus:ring-1 ring-gold-400 hover:bg-blue-900 hover:outline-none selected:bg-blue-900'>Cards</Tab>
          </Tab.List>
          <div className='flex gap-2'>
            {['modal', 'slideout', 'slideout-left'].map(value => (
            <Radio
              name='dialog-style'
              onChange={() => setVariant(value)}
              value={value}
              className='text-xxs text-gray-200'
              defaultChecked={variant === value} />
            ))}
          </div>
           <button
              className='prism-btn fill flex gap-2 pl-2.5  text-sm items-center self-center' onClick={() => setIsOpen(!isOpen)}>
              <P2.ChevronLeftLightIcon className='w-4' />
              <div>Shelf</div>
            </button>
        </Box>
      </Box>
      <Box className='container border mt-12 m-auto rounded border-gray-100 bg-white' as='div'>
        <Tab.Panel className='p-8'>
          <h1 className='prism-heading-1 pb-4 mb-8 border-b tracking-tight'>Icons</h1>
          <Message title="This is my title" variant='success'>
            <p>
              This is some text message lorem ipsum delorate message lorem ipsum
            </p>
          </Message><br /><br />
          <AllIcons />
        </Tab.Panel>
        <Tab.Panel>
          <input type='text'
            placeholder='Filter results by make, model, year, trim, vin, drivetrain.. anything'
            className='border-b-4 w-full bg-white p-4 rounded-t'
            onChange={(e) => setQuery(e.currentTarget.value)}

          />
          <VLP query={query} />
        </Tab.Panel>
        <Tab.Panel className='p-8'>
          <KitchenSink />
        </Tab.Panel>
        <Tab.Panel>
          Stub
        </Tab.Panel>
      </Box>
      </Tab.Group>
      <Modal show={isOpen} variant={variant as 'modal'} onClose={() => setIsOpen(false)}>
        <div>
        <Dialog.Title><PageTitleVDP title="2001 Chevy Silverado"/></Dialog.Title>
        <Dialog.Description>Lorem ipsum delorat.</Dialog.Description>
        </div>
        <Dialog.Panel>
          <div className='flex pt-6 mt-2 border-t border-blue-100 gap-2 justify-end'>
            <button className='prism-btn text-xs' onClick={() => setIsOpen(false)}>Dismiss</button>
            <button className='prism-btn fill text-xs' onClick={() => setIsOpen(false)}>Confirm</button>
          </div>
        </Dialog.Panel>
      </Modal>
      <div className="backdrop-blur-sm bg-white/75 p-4 fixed bottom-0 w-full">
        <div className="container flex justify-between">
          <button className='prism-btn text-xs' onClick={() => setIsOpen(false)}>
            Dismiss
            <P2.CrossIcon />
            </button>
          <button className='prism-btn fill text-xs' onClick={() => setIsOpen(false)}>
            Confirm
            <P2.CheckmarkIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
