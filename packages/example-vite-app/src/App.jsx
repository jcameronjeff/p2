import { Fragment, useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import { Modal, Button } from '@prism2/react-components'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="myApp" className='font-sans'>
      <header className='bg-primary-dark text-white p-2 px-8 flex items-center'>
        <img src={logo} className="w-8 h-8" alt="logo" />
        <span className='prism-heading-3 text-white'>Prism2 Sample App</span>
        <nav className='flex gap-2 ml-8 pl-8 border-l border-l-blue-600'>
          <Button>One</Button>
          <Button>Two</Button>
        </nav>
      </header>
      <main className='p-8 m-auto container'>
        <div className='prism-prose'>
          <h1 className='prism-heading-1'>Hello Prism + Vite + React!</h1>
          <p className='prism-caption'>Hello Prism + Vite + React!</p>
          <p className='prism-caption-xs'>Hello Prism + Vite + React!</p>
          <p>This example can be used to bootstrap a new app.</p>
          <div className='space-y-1  text-xs'>
            <label className='prism-label'>{isOpen ? 'Open' : 'Closed'}</label>
            <div className='flex gap-1'>
              <input className='prism-input w-72' type='text' />
              <button className='prism-btn' onClick={() => setIsOpen(!isOpen)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
      <Modal
        title='Prism2 Modals'
        description='Easy, Accessible'
        show={isOpen}
        onClose={() => setIsOpen(false)}
        footer={(<Button key='b' variant="base" block onClick={() => setIsOpen(false)}>Ok</Button>)}
      >
        <p>Modals provide simpler implementation patterns with A11Y baked in.</p>
      </Modal>
    </div>
  )
}

export default App
