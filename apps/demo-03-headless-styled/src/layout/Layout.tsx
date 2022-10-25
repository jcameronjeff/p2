import { forwardRef } from "react"
import { Box } from "@prism2/react-components"
import { withPrism } from '../withPrism';
import { Popover, Switch, Transition } from "@headlessui/react"
import { ArrowDownIcon } from "@prism2/icons-react"
import { GlobeAltIcon } from "@prism2/icons-react/24/outline";
import { PopoverMenu } from "../components/Popover";

export const popInTransition = {
  enter:"transition duration-100 ease-out",
  enterFrom:"transform scale-95 opacity-0",
  enterTo:"transform scale-100 opacity-100",
  leave:"transition duration-75 ease-out",
  leaveFrom:"transform scale-100 opacity-100",
  leaveTo:"transform scale-95 opacity-0"
}
export const buttonClasses = [
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
].join(' ')


export const Layout = {
  PageTitle: withPrism(Box, { className: ['prism-heading-1 font-alt text-2xl', 'icons:h-10 py-1']}),
  FlexRow: withPrism(Box, { className: 'flex gap-1 items-stretch'}),
  AppBanner: withPrism(Box, { className: 'border-t-4 border-gold-400 shadow-sm'}),
  Main: forwardRef((props:React.HTMLAttributes<HTMLDivElement> & {title: string}, ref) =>
    <div {...props}>
      <div className="container p-4 pb-0 flex items-center gap-2">
        <h1 className='text-4xl font-semibold font-alt text-blue-800 dark:text-blue-50 tracking-tighter'>{props.title}</h1>
        {/* <PopoverMenu className='ml-auto' /> */}
      </div>
      <div>{props.children}</div>
    </div>
  ),
  Wrap: (props:React.PropsWithChildren<{dark?:boolean}>) => {
    const clsx = [
      'min-h-screen grid grid-rows-[min-content,1fr]',
      'dark:bg-stone-900 bg-gray-50/50 dark:text-gray-50 overflow-hidden',
    ].join(' ')
    return (
      <div className={props.dark ? 'dark' : ''}>
      <main className={clsx}>
        {props.children}
      </main>
      </div>
    )
  }
}
