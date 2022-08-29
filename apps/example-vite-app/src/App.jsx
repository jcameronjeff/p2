import { useState } from 'react'
import './App.css'
import { Modal, Button, Tab } from '@prism2/react-components'
import { Toolbar } from 'ui-shared';

function App() {


  const [isOpen, setIsOpen] = useState(false);

  const TabContent = [{
    name: 'Tab 1',
    Component: () => (
      <div className='prism-prose'>
        <h1 className='prism-heading-1'>Hello Prism + Vite + React!</h1>
        <p className='prism-caption'>Hello Prism + Vite + React!</p>
        <p className='prism-caption-xs'>Hello Prism + Vite + React!</p>
        <p>This example can be used to bootstrap a new app.</p>
        <div className='space-y-1  text-xs'>
          <label className='prism-label'>{isOpen ? 'Open' : 'Closed'}</label>
          <div className='flex gap-2'>
            <input className='prism-input w-72' type='text' />
            <button className='prism-btn fill' onClick={() => setIsOpen(!isOpen)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }, {
    name: 'Tab 2',
    Component: () => (
      <h1 className='prism-heading-1'>Next Tab</h1>
    )
  }, {
    name: 'Tab 3',
    Component: () => (
      <div className='space-y-8'>
        <h3>Something someone</h3>
      </div>
    )
  }]

  return (
    <div id="myApp" className='font-sans'>

      <Tab.Group unstyle defaultIndex={0}>
        <Toolbar>apps/example-vite-app</Toolbar>
        <header className='gap-4 w-full p-4 bg-blue-800'>
          <div className='container flex items-center m-auto'>
            <span className='prism-heading-3 text-white'></span>
            <Tab.List className='flex gap-2 ml-8'>
              {TabContent.map(({ name }) => (
                <Tab className='text-white selected:ring-1 ring-blue-600/50 selected:text-gold-500 rounded p-2 hover:bg-blue-700/50'>
                  {name}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </header>
        <main className='container m-auto py-8 space-y-8'>
          <Tab.Panels>
            {TabContent.map(({Component}) => (
              <Tab.Panel><Component /></Tab.Panel>
            ))}
          </Tab.Panels>
        </main>
      </Tab.Group>
      <Modal
        title='Prism2 Modals'
        description='Easy, Accessible'
        className="space-y-4"
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
