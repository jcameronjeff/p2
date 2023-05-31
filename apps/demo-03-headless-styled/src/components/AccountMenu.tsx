import { CheckboxCheckedIcon, Envelop5Icon, HeartIcon } from "@prism2/icons-react"
import { Menu as HMenu, Transition } from '@headlessui/react';
import { withPrism } from "../withPrism";
import { Box } from "@prism2/react-components";
import React from "react";

const menuItemClasses = [
  'p-1 pr-6 rounded-sm text-xs z-30',
  'icons:h-4 inline-flex gap-2 font-normal',
  'ui-active:bg-blue-600 ui-active:text-white icons:ui-active:text-blue-50',
  '!hover:bg-blue-600 hover:text-white icons:hover:text-blue-50',
  'items-center icons:text-blue-600',
  'w-full cursor-pointer whitespace-nowrap focus-within:outline-0',

]

export const menuButtonClassesBase = [
  'gap-2 icons:text-slate-300',
  'dark:icons:text-slate-600',
  'ui-active:bg-white ui-open:ring-1 ui-open:ring-blue-300',
  'ui-open:bg-white hover:bg-white',
  'focus-visible:outline-none focus-visible:ring-1',
  'focus-visible:ring-blue-300',
  'transition-transform duration-200',
  'origin-center',
  'text-blue-600 dark:text-blue-400',
  'text-xs rounded-sm border-0 outline-none',
  '',
  'group-focus-within:ring-blue-300',
  // 'group-focus-within:bg-white dark:group-focus-within:bg-black/75',
  // 'dark:group-focus-within:ring-blue-700 dark:ring-slate-500/50',
  // 'text-center font-medium ring-1 group',
  'inline-flex items-center relative p-2 px-3 overflow-hidden icons:h-3 icons:my-0.5',
  'gap-2'
].join(' ')
export const menuButtonClasses = [
  menuButtonClassesBase,
  'bg-slate-50/50 drop-shadow-sm gap-2 ring-slate-200 icons:text-slate-300',
  'dark:icons:text-slate-600',
  'ui-active:bg-white ui-open:ring-1 ui-open:ring-blue-300',
  'ui-open:bg-white hover:bg-white',
  'focus-visible:outline-none focus-visible:ring-1',
  'focus:ring-1 focus-within:ring-1',
  'focus-visible:ring-blue-300',
  'transition-transform duration-200',
  'origin-center',
  'text-blue-600 dark:text-blue-400',
  'text-xs rounded-sm border-0 outline-none',
  'bg-slate-50/50 dark:bg-slate-600/25 dark:shadow',
  'group-focus-within:ring-blue-300 ring-slate-200',
  'group-focus-within:bg-white dark:group-focus-within:bg-black/75',
  'dark:group-focus-within:ring-blue-700 dark:ring-slate-500/50',
  'text-center font-medium ring-1 group',
  'inline-flex items-center relative p-2 pl-3.5 overflow-hidden icons:h-3 icons:my-0.5',
  'gap-2 drop-shadow-sm shadow-white dark:shadow-slate-500/5'
].join(' ')
export const Menu = Object.assign(HMenu, {
  Items: withPrism(HMenu.Items, {
    className: [
      'top-full',
      'absolute bg-white focus:outline-none',
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
    className: menuButtonClasses
  })
})

export const AccountMenu = (props:React.HTMLAttributes<HTMLDivElement> & {
  menuClass?: string
}) => (
  <Menu className={['relative self-center focus:outline-none focus-within:outline-none focus-visible:outline-none', props.className].join(' ')} as='div'>

    {props.children}
    <Menu.Transition className={['relative z-50 justify-center items-center flex'].join(' ')}>
      <Menu.Items className={props.menuClass}>
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
)
