import { useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import '../node_modules/@prism2/react-components/dist/style.css'
import '../node_modules/@prism2/react-components/dist/style/components.css'
import { Modal, Dialog, Transition } from '@prism2/react-components'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const okRef = useRef(null);
  return (
    <div id="myApp" className='font-sans'>
      <header className='bg-primary-dark text-white p-2 px-8 flex items-center'>
        <img src={logo} className="App-logo w-8 h-8 animate-bounce" alt="logo" />
        <span className='prism-heading-3 text-white'>Prism2 Sample App</span>
        <nav className='flex gap-2 ml-8 pl-8 border-l border-l-blue-600'>
          <button className='prism-btn text-white hover:bg-black/10'>One</button>
          <button className='prism-btn text-white hover:bg-black/10'>Two</button>
        </nav>
      </header>
      <main className='p-8 m-auto container'>
        <div className='prism-prose'>
          <p className='prism-heading-1'>Hello Prism + Vite + React!</p>
          <p>This example can be used to bootstrap a new app.</p>
          {isOpen ? <p className='prism-caption-1'>Open</p> : <p>Closed</p>}
          <div className='flex gap-1'>
            <input className='prism-input w-72' type='text' />
            <button
              type="submit"
              className='prism-btn fill'
              onClick={() => setIsOpen(!isOpen)}
            >
              Submit
            </button>
          </div>
          <Dialog onClose={() => setIsOpen(false)} open={isOpen} initialFocus={okRef}>
            <div className="dialog-frame">
              <div className='flex items-center justify-center min-h-screen backdrop-blur-sm backdrop-opacity-95 backdrop-grayscale'>
                <Dialog.Overlay className="dialog-overlay" />
                <div className='dialog-box'>
                  <Dialog.Title className='prism-heading-2'>My Modal</Dialog.Title>
                  <div className='pt-4 grid grid-cols-2 gap-4'>
                    <button className='prism-btn focus-within:shadow-lg' onClick={() => setIsOpen(false)}>
                      Cancel
                    </button>
                    <button className='prism-btn fill focus-within:shadow-lg' type='submit' ref={okRef} onClick={() => setIsOpen(false)}>
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </main>
    </div>
  )
}

export default App
