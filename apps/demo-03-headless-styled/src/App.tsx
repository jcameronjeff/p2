import './App.css';
import { Transition, Menu as HMenu, Tab as HTab, Switch as HSwitch, Popover, Combobox } from '@headlessui/react';
import React, { Component, PropsWithChildren } from 'react';
import { ExtractProps } from '../../../packages/react-components/dist/types';
import { ArrowDownIcon, CheckboxCheckedIcon, HeartIcon, ForkSpoonIcon, Envelop5Icon, ManheimMedallionIcon, ChevronDownChamferedIcon, ChevronDownIcon, BoltIcon, SearchIcon, ClockIcon, CrossIcon, CancelCircleIcon } from '@prism2/icons-react';
import { Avatar, Box, Chip, Switch } from '@prism2/react-components';
import { SunIcon, MoonIcon, GlobeAltIcon } from '@prism2/icons-react/24/outline';
import { withPrism } from './withPrism';

const menuItemClasses = [
  'p-1 pr-6 rounded-sm text-xs',
  'icons:h-4 inline-flex gap-2 font-regular',
  'ui-active:bg-blue-600 ui-active:text-white icons:ui-active:text-blue-50',
  '!hover:bg-blue-600 hover:text-white icons:hover:text-blue-50',
  'items-center icons:text-blue-600',
  'w-full cursor-pointer whitespace-nowrap focus-within:outline-0',
]
export const Menu = Object.assign(HMenu, {
  Items: withPrism(HMenu.Items, {
    className: [
      'absolute min-w-32 bg-white focus:outline-none',
      'divide-y divide-gray-400/20 text-sm z-100',
      'text-gray-700 dark:bg-black/90 dark:divide-gray-900 dark:text-gray-100 ',
      'border border-blue-700/20 rounded drop-shadow-lg dark:ring-gray-50/25 dark:ring-1 mt-1'
    ]
  }),
  Item: withPrism(HMenu.Item, {
    as: 'div',
    className: menuItemClasses,
  }),
  Section: withPrism(Box, {className: 'p-1'}),
  Transition: withPrism(Transition, {
    enter:"transition duration-100 ease-out",
    enterFrom:"transform scale-95 opacity-0",
    enterTo:"transform scale-100 opacity-100",
    leave:"transition duration-75 ease-out",
    leaveFrom:"transform scale-100 opacity-100",
    leaveTo:"transform scale-95 opacity-0"
  }),
  Button: withPrism(HMenu.Button, {
    className: [
      'p-2 flex text-sm text-gray-700',
      'icons:w-4 items-center gap-1',
      'cursor-pointer font-medium',
      'dark:text-blue-300 ui-open:bg-gray-400/10 hover:bg-gray-400/10 rounded-sm',
      'ui-open:text-blue-700 dark:ui-open:text-gray-50',
      'ui-selected:text-blue-700 dark:ui-selected:text-gray-50',
      'transition-all duration-200'
    ]
  })
})


export const Layout = {
  PageTitle: withPrism(Box, { className: ['prism-heading-1 font-alt text-2xl', 'icons:h-10 py-1']}),
  FlexRow: withPrism(Box, { className: 'flex gap-1 items-stretch'}),
  AppBanner: withPrism(Box, { className: 'border-t-4 border-gold-400 shadow-sm'}),
  Main: React.forwardRef((props:React.HTMLAttributes<HTMLDivElement> & {title: string}, ref) =>
    <div {...props}>
      <div className="container py-4 flex items-center gap-2">
        <h1 className='text-4xl font-semibold font-alt text-blue-800 dark:text-blue-50 tracking-tighter'>{props.title}</h1>
        <PopoverMenu className='ml-auto' />
      </div>
      <div>{props.children}</div>
    </div>
  ),
  Wrap: (props:React.PropsWithChildren<{dark?:boolean}>) => {
    const clsx = [
      'min-h-screen grid grid-rows-[min-content,1fr]',
      'dark:bg-stone-900 bg-gray-50/50 dark:text-gray-50',
    ]
    return (
      <div className={props.dark ? 'dark' : ''}>
      <Tab.Group as='main' className={clsx}>
        {props.children}
      </Tab.Group>
      </div>

    )
  }
}

const buttonClasses = [
  'p-2 sm:pl-3 flex text-sm text-blue-600',
  'icons:w-4 items-center gap-1 focus:ring-2',
  'cursor-pointer font-medium transition-all duration-200',
  'dark:text-blue-300 rounded-sm',
  'focus:outline-0 hover:bg-gray-400/10',
  'ui-open:text-gray-900 ui-open:bg-gray-400/10 ui-selected:bg-gray-400/10',
  'text-gray-600 ui-selected:text-blue-600',
  'focus:outline-none focus:outline-0 focus-within:outline-none',
  'dark:ui-selected:text-gray-50 dark:ui-open:text-gray-50',
  'xs:icons:hidden sm:icons:hidden'
]

export const Tab = Object.assign(withPrism(HTab, {
  className: buttonClasses,
  as: 'div'
}), {
  List: withPrism(HTab.List, { className: 'flex gap-1 items-center', as: 'nav' }),
  Group: withPrism(HTab.Group),
  Panels: withPrism(HTab.Panels, { as: 'div' }),
  Panel: withPrism(HTab.Panel, { as: 'div' })
})

export const DarkmodeSwitch = withPrism(HSwitch, {
  className: [
    ...buttonClasses,
    'inline-block self-center',
    'icons:h-4 icons:fill-gold-400 icons:stroke-gold-500',
    'dark:icons:fill-blue-300/20 dark:icons:stroke-blue-300'
  ],
  as: 'button'
})

export const ProfileButton = ({children, ...props}:PropsWithChildren) => (
  <HMenu.Button as='button' className={[
  "rounded hover:bg-gray-400/10 cursor-pointer flex gap-4",
  "self-center items-center text-gray-700 text-sm focus-visible:ring-2 focus:ring-2 ui-open:ring-1",
  "dark:text-blue-300 font-medium icons:h-4 p-0.5 pr-2",
  "[&>span]:xs:hidden [&>span]:sm:hidden [&>span]:md:hidden",
  "[&>img]:w-7 [&>img]:h-7 [&>img]:rounded-sm",
  "focus:outline-none focus-within:outline-none focus-visible:outline-none"
].join(' ')}>{children}</HMenu.Button>
)


export const Search = Object.assign((props:React.HTMLAttributes<HTMLInputElement>) => {
  const makes = ['Audi','BMW','Cadalac','Dodge','Fiat','Honda','Hyundai',"Isuzu","Kia","Lamborghini","Masserati"]
  const [query, setQuery] = React.useState('');
  const [selectedMake, setSelectedMake] = React.useState(null)
  const resetForm = () => {
    setQuery('')
    setSelectedMake(null);
  }
  const filteredMakes =
    query === ''
      ? makes
      : makes.filter((make) => {
          return make.toLowerCase().includes(query.toLowerCase())
        })
  return (
    <Combobox value={selectedMake} onChange={setSelectedMake} className='relative' nullable as='div'>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)}
        placeholder='Search by make, model or VIN'
        className={[
        'origin-center bg-gray-400/10 my-2',
        'p-2 px-12 ml-auto text-xs rounded-sm border-0 outline-none',
        'w-full text-center font-medium text-gray-800 dark:text-gray-100'
        ].join(' ')} />
      <Search.Icon className='absolute top-4 left-2' />
      {(query.length > 0 || selectedMake !== null) && (
        <button className='p-2 absolute top-2 right-0' onClick={resetForm}>
          <CancelCircleIcon className='h-4 text-gray-300' />
        </button>
      )}
      <Menu.Transition>
        <Combobox.Options className='absolute p-1 backdrop-blur-md bg-white/50 dark:bg-black/50 top-full w-full shadow-lg rounded ring-1 ring-gray-400/50 divide-y divide-gray-400/20'>
          {filteredMakes.map((person) => (
            <Combobox.Option key={person} value={person}
              className='px-4 ui-selected:bg-indigo-400 ui-active:text-white ui-active:bg-blue-700 w-full text-left block p-2 text-xs rounded-sm font-medium'>
              {person}
            </Combobox.Option>
          ))}
          {filteredMakes.length === 0 && (
            <div className="p-4 text-center">
              <button className={buttonClasses.join(' ')}>Add "{query}" to list</button>
            </div>
          )}
        </Combobox.Options>
      </Menu.Transition>
    </Combobox>
  )}, {
  Label: withPrism(Box, { as: 'label', className: [
    "flex items-center flex-1 focus-within:scale-105 origin-center transition-all duration-100 ease-in-out"
  ]}),
  Input: withPrism(Box, { as: 'input', type: 'text', placeholder: 'Search by VIN', className: [
    'origin-center bg-gray-400/10 ',
    'p-2 px-12 ml-auto text-xs rounded-sm border-0 outline-none',
    'w-full text-center font-medium text-gray-800 dark:text-gray-100'
  ]}),
  Icon: withPrism(SearchIcon, { className: 'h-4 w-4 text-gray-400' })
})


export const Surface = Object.assign(withPrism(Box, { className: [
    'bg-white dark:bg-black/25',
    'p-4 rounded border dark:shadow-black',
    'shadow-sm border-gray-400/25',
  ]}), {
  Title: withPrism(Box, { as: 'h2', className: [
    'text-2xl font-medium tracking-tight text-blue-900 dark:text-blue-200',
    'flex icons:h-[1.25em] items-center gap-2'
  ]}),
  Footer: withPrism(Box, { as: 'div', className: [
    'bg-gray-500/5 border-t border-gray-400/10 -mx-4 -mb-4 p-4 text-xs mt-4 text-black/50 dark:text-white/50'
  ]}),
})

export const SearchPanel = () => (
  <div className="container flex-wrap flex gap-4 w-full">

    <div className="flex-1">
      <Tab.Group>
        <Tab.List className='px-4'>
          <HTab
            className='text-xxs p-2  border-b-2 pb-1 border-blue-400 ui-not-selected:border-transparent ui-not-selected:text-gray-300 font-semibold uppercase text-gray-500'>
            Recent
          </HTab>
          <HTab
            className='text-xxs p-2  border-b-2 pb-1 border-blue-400 ui-not-selected:border-transparent ui-not-selected:text-gray-300 font-semibold uppercase text-gray-500'>
            Saved
          </HTab>
          <HTab
            className='text-xxs p-2  border-b-2 pb-1 border-blue-400 ui-not-selected:border-transparent ui-not-selected:text-gray-300 font-semibold uppercase text-gray-500'>
            Popular
          </HTab>
        </Tab.List>
        <Tab.Panels>
        {['Recent','Saved','Popular'].map(name => (
          <Tab.Panel as={Surface} className='flex-1'>
            <Surface.Title>{name}</Surface.Title>
          </Tab.Panel>
        ))}
        </Tab.Panels>

      </Tab.Group>
    </div>
    <Surface className='flex-1'>
      <Surface.Title>TBD</Surface.Title>
    </Surface>
    <Surface className='flex-1'>
      <Surface.Title>
        Recent Searches
        <ClockIcon className='ml-auto'/>
      </Surface.Title>
      <Surface.Footer>
        <ul className="divide-y divide-gray-400/20">
        {[0,1,2,3,4,5].map(() => (
          <li className="py-1 flex items-center">
            <span className='prism-link dark:text-blue-200 font-normal text-sm'>List value</span>
            <Chip className='inline ml-auto bg-gray-600/20 dark:text-white/75 ring-0'>123</Chip>
          </li>
        ))}
        </ul>
      </Surface.Footer>
    </Surface>
  </div>
)


export const NavList = withPrism(Box, { className: [
  'flex flex-col gap-0.5 p-0.5 bg-white rounded shadow-lg ring-1 ring-gray-300/25'
]})
export const NavItem = withPrism(Box, { className: [
  'p-2 icons:h-4 flex items-center gap-4 icons:text-gray-400',
  'rounded-sm text-xs text-gray-800 group hover:bg-blue-50',
  'transition-all duration-100 icons:ml-auto h-8'
], as: 'button' })

const PopoverMenu = (props: { className:string }) => (
  <Popover className={['relative self-center', props.className].join(' ')}>
    <Popover.Button as='button' className={['ui-open:ring-1 ui-open:ring-gray-400/20 ui-open:shadow-xl ui-open:text-blue-700',
      ...buttonClasses
    ].join(' ')}>
      Popover
      <ArrowDownIcon className="ui-open:animate-bounce ui-open:rotate-180 ui-open:transform transition-all duration-100" />
    </Popover.Button>
    <Menu.Transition>
    <Popover.Panel as={NavList}
      className='absolute top-full border-t right-0 translate-y-1 border-blue-500 w-48'>
      <NavItem href="/insights">
        Insights<GlobeAltIcon />
      </NavItem>
      <NavItem href="/automations">Automations</NavItem>
      <NavItem href="/reports">Reports</NavItem>
    </Popover.Panel>
    </Menu.Transition>
  </Popover>
)
export function App() {
  const [darkMode, toggleDarkMode] = React.useState(false);
  const [searchString, setSearch] = React.useState('');
  return (
    <Layout.Wrap dark={darkMode}>
      <Layout.AppBanner className='dark:bg-black/25 bg-white'>
        <Layout.FlexRow className='container items-center grid grid-cols-3 md:flex sm:flex xs:flex gap-4'>
          <Tab.List>
            <Popover className='relative'>
              <Popover.Button as={ManheimMedallionIcon} className='h-8 w-8 block ring-offset-2 ring-gold-300 ui-open:bg-gold-500 ui-open:text-blue-800  rounded-full ui-open:drop-shadow-lg mr-4' />
              <Menu.Transition>
              <Popover.Panel as={NavList}
                className='absolute top-full border-t translate-y-1 border-blue-500 w-48'>
                <NavItem href="/insights">
                  Insights<GlobeAltIcon />
                </NavItem>
                <NavItem href="/automations">Automations</NavItem>
                <NavItem href="/reports">Reports</NavItem>
              </Popover.Panel>
              </Menu.Transition>
            </Popover>
            <Tab>Buy <ArrowDownIcon  /></Tab>
            <Tab>Sell <ArrowDownIcon  /></Tab>
            <Tab>Solutions <ArrowDownIcon  /></Tab>

          </Tab.List>
          <Search />
          <Layout.FlexRow className='justify-end gap-2'>
            <DarkmodeSwitch checked={darkMode} onChange={toggleDarkMode}>
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </DarkmodeSwitch>
            <PopoverMenu className=''/>
            <Menu className='relative self-center focus:outline-none focus-within:outline-none focus-visible:outline-none' as='div'>
              <ProfileButton>
                <img src='https://www.fillmurray.com/128/128' />
                <span>Bill Murray</span>
                <ArrowDownIcon  />
              </ProfileButton>
              <Menu.Transition>
                <Menu.Items className='right-0'>
                  <Menu.Section>
                    <Menu.Item><CheckboxCheckedIcon /> My Account</Menu.Item>
                    <Menu.Item><HeartIcon /> Watchlist</Menu.Item>
                    <Menu.Item><Envelop5Icon /> Saved Searches</Menu.Item>
                  </Menu.Section>
                  <Menu.Section>
                    <Menu.Item><CheckboxCheckedIcon /> One</Menu.Item>
                    <Menu.Item><HeartIcon /> One</Menu.Item>
                    <Menu.Item><Envelop5Icon /> Another</Menu.Item>
                  </Menu.Section>
                </Menu.Items>
              </Menu.Transition>
            </Menu>
          </Layout.FlexRow>
        </Layout.FlexRow>
      </Layout.AppBanner>
      <Tab.Panels>
        <Tab.Panel as={Layout.Main} title="Buy Now">
          <SearchPanel />
        </Tab.Panel>
        <Tab.Panel as={Layout.Main} title="Seller Tools" />
        <Tab.Panel as={Layout.Main} title="Inventory Solutions" />
      </Tab.Panels>
      <div className='text-2xl font-bold text-red-300'>{searchString}</div>
    </Layout.Wrap>
  );
}

export default App;
