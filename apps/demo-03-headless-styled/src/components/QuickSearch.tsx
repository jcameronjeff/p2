import { Combobox, Menu, Switch, Transition } from "@headlessui/react";
import { CancelCircleIcon, SearchIcon } from "@prism2/icons-react";
import { MoonIcon, SunIcon } from "@prism2/icons-react/24/outline";
import { Box } from "@prism2/react-components";
import { PropsWithChildren, useState } from "react";
import { withPrism } from "../withPrism";
import { buttonClasses, popInTransition } from "../layout/Layout";

export const ProfileButton = ({children, ...props}:PropsWithChildren) => (
  <Menu.Button as='button' className={[
  "rounded hover:bg-gray-400/10 cursor-pointer flex gap-4",
  "self-center items-center text-gray-700 text-sm focus-visible:ring-2 focus:ring-2 ui-open:ring-1",
  "dark:text-blue-300 font-medium icons:h-4 p-0.5 pr-2",
  "[&>span]:xs:hidden [&>span]:sm:hidden [&>span]:md:hidden",
  "[&>img]:w-7 [&>img]:h-7 [&>img]:rounded-sm",
  "focus:outline-none focus-within:outline-none focus-visible:outline-none"
].join(' ')}>{children}</Menu.Button>
)


export const DarkmodeSwitch = (props:{checked:boolean, onChange:(arg0:boolean) => void}) => {
  const className = [
    buttonClasses,
    'inline-block self-center',
    'icons:h-4 icons:fill-gold-400 icons:stroke-gold-500',
    'dark:icons:fill-blue-300/20 dark:icons:stroke-blue-300'
  ].join(' ')
  return (
    <Switch as="button" className={className} {...props}>
      {props.checked ? <MoonIcon /> : <SunIcon />}
    </Switch>
  )
}

export const NavList = withPrism(Box, { className: [
  'flex flex-col gap-0.5 p-0.5 bg-white rounded shadow-lg ring-1 ring-gray-300/25'
]})
export const NavItem = withPrism(Box, { className: [
  'p-2 icons:h-4 flex items-center gap-4 icons:text-gray-400',
  'rounded-sm text-xs text-gray-800 group hover:bg-blue-50',
  'transition-all duration-100 icons:ml-auto h-8'
], as: 'button' })


export const Search = (props:React.HTMLAttributes<HTMLInputElement>) => {
  const makes = ['Audi','BMW','Cadalac','Dodge','Fiat','Honda','Hyundai',"Isuzu","Kia","Lamborghini","Masserati"]
  const [query, setQuery] = useState('');
  const [selectedMake, setSelectedMake] = useState(null)
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
      <SearchIcon className='h-4 w-4 text-gray-400 absolute top-4 left-2' />
      {(query.length > 0 || selectedMake !== null) && (
        <button className='p-2 absolute top-2 right-0' onClick={resetForm}>
          <CancelCircleIcon className='h-4 text-gray-300' />
        </button>
      )}
      <Transition {...popInTransition}>
        <Combobox.Options className='absolute p-1 backdrop-blur-md bg-white/50 dark:bg-black/50 top-full w-full shadow-lg rounded ring-1 ring-gray-400/50 divide-y divide-gray-400/20'>
          {filteredMakes.map((person) => (
            <Combobox.Option key={person} value={person}
              className='px-4 ui-selected:bg-indigo-400 ui-active:text-white ui-active:bg-blue-700 w-full text-left block p-2 text-xs rounded-sm font-medium'>
              {person}
            </Combobox.Option>
          ))}
          {filteredMakes.length === 0 && (
            <div className="p-4 text-center">
              <button className={buttonClasses}>Add "{query}" to list</button>
            </div>
          )}
        </Combobox.Options>
      </Transition>
    </Combobox>
  )
}
