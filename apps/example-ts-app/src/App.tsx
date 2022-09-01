import { CheckboxCheckedIcon } from '@prism2/icons/react/prism';
import { Toolbar, Tag } from 'ui-shared';
import { Button, Modal } from '@prism2/react-components';
import './App.css';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
    <Toolbar>apps/example-ts-app</Toolbar>
    <main className='container text-center'>
      <div className='text-center space-y-4 py-16'>
        <CheckboxCheckedIcon className='w-20 inline-block text-gray-100' />
        <h1 className='prism-heading-1 font-alt text-blue-700'>
          apps/example-ts-app
        </h1>
        <Button onClick={() => setOpen(true)}>alpha</Button>
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
