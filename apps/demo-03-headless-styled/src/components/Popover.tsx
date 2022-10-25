import { Popover, Transition } from "@headlessui/react"
import { ArrowDownIcon, ManheimMedallionIcon } from "@prism2/icons-react"
import { GlobeAltIcon } from "@prism2/icons-react/24/outline"
import { NavItem, NavList } from "./QuickSearch"
import { buttonClasses, popInTransition } from "../layout/Layout"

export const PopoverMenu = (props: { className:string }) => {
  return (
    <Popover className={['relative self-center z-50', props.className].join(' ')}>
      <Popover.Button as='button' className={['ui-open:ring-1 ui-open:ring-gray-400/20 ui-open:shadow-xl ui-open:text-blue-700',
        buttonClasses
      ].join(' ')}>
        Popover
        <ArrowDownIcon className="ui-open:animate-bounce ui-open:rotate-180 ui-open:transform transition-all duration-100" />
      </Popover.Button>
      <Transition {...popInTransition}>
      <Popover.Panel as={NavList}
        className='absolute top-full border-t right-0 translate-y-1 border-blue-500 w-48'>
        <NavItem href="/insights">
          Insights<GlobeAltIcon />
        </NavItem>
        <NavItem href="/automations">Automations</NavItem>
        <NavItem href="/reports">Reports</NavItem>
      </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export const LogoMenu = () => (
  <Popover className='relative'>
    <Popover.Button as={ManheimMedallionIcon} className='h-8 w-8 block ring-offset-2 ring-gold-300 ui-open:bg-gold-500 ui-open:text-blue-800  rounded-full ui-open:drop-shadow-lg mr-4' />
    <Transition {...popInTransition}>
    <Popover.Panel as={NavList}
      className='absolute top-full border-t translate-y-1 border-blue-500 w-48'>
      <NavItem href="/insights">
        Insights<GlobeAltIcon />
      </NavItem>
      <NavItem href="/automations">Automations</NavItem>
      <NavItem href="/reports">Reports</NavItem>
    </Popover.Panel>
    </Transition>
  </Popover>
)
