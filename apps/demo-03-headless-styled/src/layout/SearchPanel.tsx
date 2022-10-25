import { PrismCombobox, style } from "../components/Combobox";
import { products, makes, usStates } from '../mockData';
import { ArrowDownIcon, ArrowsUpDownIcon, ClockIcon } from "@prism2/icons-react";
import { Chip, Modal, fadeInDownOutUp, popIn, popInOut, slideUpDown } from "@prism2/react-components";
import { Listbox, Menu, Switch, Transition } from "@headlessui/react";
import React, { Fragment, HTMLInputTypeAttribute, useEffect, useId, useRef, useState } from "react";
import { style as styles } from '../components/Combobox';
import { buttonClasses, popInTransition } from "./Layout";
import { CheckBadgeIcon, ChevronUpDownIcon, LockClosedIcon, XMarkIcon } from "@prism2/icons-react/24/outline";
import { AccountMenu, menuButtonClasses, menuButtonClassesBase } from "../components/AccountMenu";
import { ExtractProps } from "@prism2/react-components/dist/types";
import { RangeSlider } from "../components/Slider";
import { SwitchInput } from "../components/Switch";
import { TextInput } from "../components/TextInput";
import { ListBox } from "../components/Listbox";


export const Action = (props:React.HTMLAttributes<HTMLButtonElement>) =>
  <button {...props} className={[menuButtonClassesBase, props.className].join(' ')} >
    {props.children}
  </button>


export type ModalVariantType = ExtractProps<typeof Modal>['variant']

export const SearchPanel = () => {
  const [min, max ] = [0,1000]
  const [log, setLog] = useState<{ts:number|Date|undefined, value:string}[]>([]);
  const [flags, setFlags] = useState([true, false, true, true, false])
  const [showLog, setShowLog] = useState<boolean>(false)
  const [modalPosition, setModalPosition] = useState<ModalVariantType>('panel')
  const [currentValues, setCurrentValues] = React.useState([min, max])
  const [currentValuesB, setCurrentValuesB] = React.useState([min, max])
  const modalFocus = useRef(null)

  function appendLog(val:{}|string) {
    if (typeof val === 'string') {
      setLog([{ ts: Date.now(), value:val },...log])
    } else {
      setLog([{ ts: Date.now(), value: JSON.stringify(val) },...log, ])
    }
  }

  function openWithVariant(variant: ModalVariantType) {
    setModalPosition(variant);
    appendLog(`Modal opened with ${variant} style`)
    setShowLog(true)
  }
  function closeModal() {
    setShowLog(false)
    setTimeout(() => {
      appendLog('Modal dismissed')
    }, 500)
  }

  const SectionHeader = ({title, subtitle}:{title:string, subtitle:string}) => (
    <div className=' leading-tight peer-focus-within:scale-125'>
      <h2 className='prism-heading-3 tracking-tighter font-alt text-slate-600 dark:text-slate-200'>{title}</h2>
      <h3 className='prism-heading-6 tracking-tight font-medium text-slate-400'>{subtitle}</h3>
    </div>
  )
  const CustomOption = (item:typeof products[0]) => (
    <div className='w-full'>
      <div className='strong flex items-center'>
        <div>
          <div className='font-semibold'>{item.title}</div>
          <span className='font-light opacity-75 text-xxs'>{item.description}</span>
        </div>
        <div className='ml-auto w-16 text-right'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(item.price)}
        </div>
      </div>
    </div>
  )


  return (
  <div className="container [&_hr]:border-slate-500/10">
    <header>
      <div className="flex pb-4 mx-4 mb-4 dark:border-slate-600/50 border-slate-100 border-b-2 items-center ">
        <div className='tracking-tighter leading-tight'>
          <h2 className='prism-heading-1 font-alt text-blue-800 dark:text-white'>Forms</h2>
        </div>
        <div className='ml-auto'>
          <div className="gap-2 text-right items-right justify-end flex">
            <div className='truncate'>
              <Action onClick={() => setShowLog(true)}>View Log</Action>
              <Action onClick={() => openWithVariant('slideout')}>Slideout</Action>
              <Action onClick={() => openWithVariant('slideout-left')}>Slideout Left</Action>
              <Action onClick={() => openWithVariant('panel')}>Panel</Action>
              <Action onClick={() => openWithVariant('modal')}>Modal</Action>
            </div>
            <AccountMenu menuClass="right-0">
              <Menu.Button as='button' className='inline-flex' onClick={() => appendLog('Menu Opened')}>
                <span className='whitespace-nowrap prism-link-sm h-4 translate-y-[1px] text-xs tracking-tight'>More Actions</span>
                <ArrowDownIcon  />
              </Menu.Button>
            </AccountMenu>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className='flex [&>section]:flex-1 [&>section]:min-w-[280px] flex-wrap gap-8 justify-start px-4'>
        <section id='comboboxes'>
          <SectionHeader title="Comboboxes" subtitle="Searchable Multiselect" />
          <hr className='pt-4 mt-2' />
          <PrismCombobox
            options={makes}
            defaultValue={[...makes.slice(0,3)]}
            enableIcon={false}
            placeholder='Search by make...'
            multiple
            label="Combobox (Multiple)"
            onChange={appendLog}
            next
          />
          <PrismCombobox
            options={products}
            defaultValue={[...products.slice(9,12)]}
            getter={(item) => item.title}
            placeholder='Search by make...'
            multiple
            enableIcon={false}
            onChange={appendLog}
            next
            label="Combobox (Custom Option Renderer)"
            optionRenderer={(item) => <CustomOption {...item} />}
          />
          <PrismCombobox
            options={makes}
            defaultValue={[...makes.slice(0,3)]}
            enableIcon={false}
            onChange={appendLog}
            placeholder='Search by make...'
            multiple
            next
            label='Combobox (Autocomplete / Multiple)'
          />
        </section>
        <section id='toggles'>
          <SectionHeader title="Switch" subtitle="Checkboxes & Toggles" />
          <hr className='pt-4 mt-2' />
          <label className={[styles.next.label, 'pl-0'].join(' ')}>Toggle Features</label>
          <div className="">
            {[
              'Switch One',
              'Reclaimed Titles',
              'Private Mode',
              'Damage History',
              'Notifications'
            ].map((label,idx) => (
              <SwitchInput key={label.split(' ').join('-')} label={label} disabled={idx%3===1} defaultChecked={flags[idx]} onChange={(val) => {
                const newFlags = [
                  ...flags.slice(0, idx),
                  val,
                  ...flags.slice(idx+1)
                ]
                setFlags(newFlags)
                appendLog(newFlags)
              }}/>
            ))}
          </div>

        </section>
        <section id='text-inputs'>
          <SectionHeader title="Inputs" subtitle="Autocomplete + Input" />
          <hr className='pt-4 mt-2' />
          <div className="space-y-2">
          <TextInput title="TextInput" placeholder="Standard Text Input" />
          <TextInput title="TextInput" placeholder="Standard Text Input" />
          <TextInput title="TextInput" placeholder="Enter text" defaultValue="With default Value" />
          </div>
        </section>
        <section id='dropdowns'>
          <SectionHeader title="Listbox" subtitle="Select, Dropdown, Multislect" />
          <hr className='pt-4 mt-2' />
          <ListBox
            label="Listbox (Select)"
            options={products}
            onChange={appendLog}
            defaultValue={products[0]}
            multiple={false}
            getter={(p) => p.title} />
          <ListBox
            label="Listbox (Multiselect)"
            options={products}
            onChange={appendLog}
            defaultValue={[products[23]]}
            getter={(p) => p.title} multiple />
        </section>
        <section id='sliders'>
          <SectionHeader title="Slider" subtitle="Range Inputs" />
          <hr className='pt-4 mt-2' />
          <div>
            <label className={styles.next.label}>Mileage</label>
            <RangeSlider
              onInput={(v) => console.log('onInput', v)}
              onUpdate={(v) => console.log('onUpdate', v)}
              onChange={(v) => console.log('onChange', v)}
              defaultValue={[102, 420]}
              min={min}
              step={2}
              max={max} />
          </div>
          <div>
            <label className={styles.next.label}>Mileage</label>
            <RangeSlider
              onInput={(e) => console.log(e.currentTarget)}
              defaultValue={[102, 420]}
              min={min}
              step={2}
              max={max}
              onUpdate={setCurrentValuesB} />
          </div>
        </section>
        <section id='autocomplete'>
          <SectionHeader title="Combobox (Single)" subtitle="Autocomplete" />
          <hr className='pt-4 mt-2' />
          <PrismCombobox
            options={makes}
            defaultSelection={[makes[0]]}
            next
            enableIcon
            label='Combobox (Autocomplete / Single)'
          />
        </section>
        <section id='menus'>
          <SectionHeader title="Menu" subtitle="Actions, Dropdown"/>
          <hr className='pt-4 mt-2' />
          <div className="flex gap-2 justify-between">
            <div className=''>
            <AccountMenu menuClass="left-0">
              <label className={styles.next.label}>Left</label>
              <Menu.Button as='button' className='w-full inline-flex justify-between'>
                More
                <ArrowDownIcon  />
              </Menu.Button>
            </AccountMenu>
            </div>
            <div className=''>
            <AccountMenu>
              <label className={styles.next.label}>Center</label>
              <Menu.Button as='button' className='w-full inline-flex justify-between'>
                More
                <ArrowDownIcon  />
              </Menu.Button>
            </AccountMenu>
            </div>
            <div className=''>
            <AccountMenu menuClass="right-0">
              <label className={styles.next.label}>Right</label>
              <Menu.Button as='button' className='w-full inline-flex justify-between'>
                More
                <ArrowDownIcon  />
              </Menu.Button>
            </AccountMenu>
            </div>
          </div>
        </section>
      </div>
    </main>
    <aside className="p-4">
      <Modal
        as={Fragment}
        show={showLog}
        variant={modalPosition}
        onClose={closeModal}
        title="Event Log"
        initialFocus={modalFocus}>
        <div className='shrink overflow-y-scroll'>
          <hr className='pt-4 mt-2' />
          <div className='gap-2 overflow-y-scroll divide-y divide-slate-200'>
            {log.map(({ts, value}) => (
              <Transition appear show {...popIn}>
              <div className='py-1 flex gap-1 tracking-tighter'>
                <div className='text-xs font-medium w-16 shrink-0'>{new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric'
                }).format(ts)}</div>
                <div>
                  <pre className='text-xxs tracking-tighter'>{value}</pre>
                </div>
              </div>
              </Transition>
            ))}
          </div>
        </div>
        <div className='pt-4 grid grid-cols-2 gap-4 mt-auto'>
          <div className="h-0 col-span-2">
            <div className="to-transparent z-60 relative bg-gradient-to-t from-white h-16 col-span-2 -mt-24 "></div>
          </div>
          <button className='prism-btn' ref={modalFocus}  onClick={() => setShowLog(false)}>Cancel</button>
          <button className='prism-btn fill' type='submit' onClick={() => setShowLog(false)}>Dismiss</button>
        </div>
      </Modal>
    </aside>
  </div>
)}









