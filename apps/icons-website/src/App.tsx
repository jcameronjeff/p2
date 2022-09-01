import { CheckboxCheckedIcon } from '@prism2/icons/react/prism';
import { useState } from 'react';
import { Toolbar, Tag, Code } from 'ui-shared';
import './App.css';
import { Modal } from '@prism2/react-components';

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Toolbar>apps/icons-website</Toolbar>
    <main className='container text-center'>
      <div className='text-center space-y-4 py-16'>
        <CheckboxCheckedIcon className='w-20 inline-block text-gray-100' />
        <h1 className='prism-heading-1 font-alt text-blue-700'>
          apps/icons-website
        </h1>
        <button onClick={() => setOpen(true)} className='prism-btn'>Button</button>
        <Modal
          title='My SlideOut'
          description='Alternate modal behavior'
          variant="modal"
          content={<p>This is the content of my modal</p>}
          footer={(<button className='prism-btn fill' onClick={() => setOpen(false)}>Ok</button>)}
          show={open}
          onClose={() => setOpen(false)}
          __debug />
      </div>
    </main>
    </>
  );
}

export default App;
