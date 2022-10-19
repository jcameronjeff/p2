import { createContext, Fragment, useContext, useState } from 'react'
import type { Dispatch, PropsWithChildren, SetStateAction, FC } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { Switch, Button, Modal, Tab, Box, Avatar, Tooltip } from '@prism2/react-components';
import { CheckIcon, ChevronUpDownIcon } from '@prism2/icons-react/24/solid'
import { BoltIcon } from '@prism2/icons-react';
import { Transition, Listbox } from '@headlessui/react'
import { Toolbar } from 'ui-shared';

function Stack() {
  const { dark, switchDark } = useContext(AppContext);
  return (
    <Box as='nav' className=''>
      <div className="container flex justify-between items-center">
      <div className='font-semibold'>apps/demo-01-theme-swap</div>
      <Switch className='text-xl bg-blue-600 dark:bg-blue-300' checked={dark} onChange={switchDark} />
      <Tooltip content="Bill Murray loves Prism, we think." className='tt below border-transparent'>
      <div className="flex gap-0 justify-center items-center group dark:rotate-3 -rotate-3 transition-transform duration-300 delay-150 ease-in-out">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="animate-pulse w-6 h-6" alt="Vite logo" />
        </a>
        <div className='relative'>


        <Avatar
          className="w-8 h-8 absolute group-hover:scale-125 group-hover:-mx-4 dark:ring-red-500 ring-gold-400 border-0 ring-2 transition-all duration-500 delay-75 ease-in-out"
          name="Darin Singer Cassler"
          src="//www.fillmurray.com/128/128"
        />
          <div className='h-4 w-4 rounded-full bg-gold-400 dark:bg-red-500 absolute -right-2 bottom-0 group-hover:-right-6 transition-all duration-500 delay-75 ease-in-out text-black dark:text-white font-bold text-xxs flex items-center justify-center group-hover:scale-110 animate-bounce group-hover:opacity-0 opacity-100'>
            {'2'}
          </div>
        </div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-6 h-6 react" alt="React logo" />
        </a>
      </div>
      </Tooltip>
      </div>

    </Box>

  )
}

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

function MyListbox() {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="m-auto relative w-72 pb-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="ring-2 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm dark:bg-black">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'dark:bg-blue-300 bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

function Log({data}:{data:string[]}) {
  return (
    <pre className='text-xs tracking-tighter'>
      {data.map(line => <pre>{line}</pre>)}
    </pre>
  )
}

interface IAppContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  log: string[];
  setLog: Dispatch<string[]>;
  appendLog: (data: unknown) => void;
  changeTab: (val: number) => void;
  toggle: (val: boolean) => void;
  switchDark: (val: boolean) => void;
}
const AppContext = createContext<IAppContext>({
  open: false,
  setOpen: () => {},
  dark: false,
  setDark: () => {},
  log: [],
  setLog: () => {},
  appendLog: () => {},
  changeTab: () => {},
  toggle: () => {},
  switchDark: () => {},
})

const App:FC<PropsWithChildren> = ({children}) => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [log, setLog] = useState<string[]>([]);

  function appendLog(data:unknown) {
    let ts = Date.now();
    setLog([...log.slice(-10), JSON.stringify({ts, data})])
  }
  function toggle(val:boolean) {
    setOpen(val)
    appendLog(`modal-open, ${val}`)
  }
  function switchDark(val:boolean) {
    setDark(val);
    appendLog(`darkmode, ${val}`)
  }

  function changeTab(val:number) {
    appendLog(`tab-select, ${val}`)
  }

  const ctx = {
    open, setOpen,
    dark, setDark,
    log, setLog,
    appendLog,
    toggle,
    changeTab,
    switchDark
  }
  return (
    <AppContext.Provider value={ctx}>
      <Wrapper>
        <Banner />
        <Page />
        <div className='w-500px py-8'>
          <MyListbox />
        </div>
        <Modal show={open} onClose={toggle} variant='slideout-left' className='bg-gray-100 border-gray-100 shadow-[#000] justify-start gap-0 space-y-0'>
          <div>
            <div className='prism-heading-2 tracking-tighter pb-4 border-b-2 mb-4'>Vehicle</div>
            <div className='text-xl'>2013 Chevy Malibu</div>
            <p className='text-gray-300 text-xs'>This is some info</p>
          </div>
          <Button onClick={() => toggle(false)}>Dismiss</Button>
        </Modal>
      </Wrapper>
    </AppContext.Provider>
  )
}

function Page() {
  const { changeTab, log } = useContext(AppContext);
  return (
    <Tab.Group onChange={changeTab} className='border border-gray-200 dark:border-blue-900 container max-w-[720px] rounded-xl' as='div'>
      <Tab.List className='flex bg-blue-100 dark:bg-blue-900 justify-center text-xs border-gray-200 dark:border-blue-1000 rounded-t-lg
      dark:bg-gradient-to-br from-blue-300 via-blue-600 shadow-inner' as='div'>
        <Tab className="dark:text-gray-400 dark:selected:border-b-blue-500 dark:selected:text-white">Tailwind</Tab>
        <Tab className="dark:text-gray-400 dark:selected:border-b-blue-500 dark:selected:text-white">PostCSS</Tab>
        <Tab className="dark:text-gray-400 dark:selected:border-b-blue-500 dark:selected:text-white">Typescript</Tab>
        <Tab className="dark:text-gray-400 dark:selected:border-b-blue-500  dark:selected:text-white">Prism</Tab>
        <Tab className="dark:text-gray-400 dark:selected:border-b-blue-500  dark:selected:text-white">Log</Tab>
      </Tab.List>
      <Tab.Panels as='div' className='p-8 container'>
        <Tab.Panel>Info about Tailwind</Tab.Panel>
        <Tab.Panel>Info about PostCSS</Tab.Panel>
        <Tab.Panel>Info about Typescript</Tab.Panel>
        <Tab.Panel>Info about Prism</Tab.Panel>
        <Tab.Panel><Log data={log} /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

function Banner() {
  const { dark, open, toggle, switchDark } = useContext(AppContext);
  return (
    <div className="container p-8 text-center space-y-4 [*]:transition-all [*]:duration-200">



      <div className='prism-heading-1 tracking-tighter text-4xl  dark:rotate-3 -rotate-0 transition-transform duration-300 delay-150 ease-in-out'>A Demonstration of Prism Two</div>
      <div className='flex items-center gap-2 justify-center'>
        <button className='prism-btn fill dark:bg-teal-600 dark:text-white' onClick={() => toggle(!open)}>
          Open Modal
          <BoltIcon className='w-icon' />
        </button>
      </div>
    </div>
  )
}

const Wrapper:FC<PropsWithChildren> = ({children}) => {
  const { dark } = useContext(AppContext);
  return (
    <div className={dark ? 'dark' : ''}>

      <div className='absolute top-0 left-0 bg-white bg-gradient-to-tr from-cx right-0  dark:bg-black dark:text-gray-100 min-h-screen'>
        <Toolbar>
          <Stack />
        </Toolbar>
        {children}
      </div>
    </div>
  )
}

export default App
