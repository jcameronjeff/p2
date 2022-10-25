import { Listbox, Transition } from "@headlessui/react"
import { ChevronUpDownIcon } from "@prism2/icons-react/24/outline"
import { popInOut } from "@prism2/react-components"
import { useState } from "react"
import { style as styles } from './Combobox';
import { Tag } from "./Tag";

export function ListBox<B extends boolean, T extends {}, V = B extends true ? T[] : T>(props: {
  multiple: B,
  defaultValue: V
  getter: (arg0: T) => React.ReactNode|string,
  options: T[],
  label?: string,
  onChange?: (value: T) => void
}): JSX.Element

export function ListBox<T extends {}>({
  onChange = (arg0) => {},
  ...props
}: {
  multiple: boolean,
  defaultValue: T|T[],
  getter: (arg0: T|T[]) => React.ReactNode|string,
  options: T[],
  label?: string
  onChange?: (value: T|T[]) => void
}) {
  const [selectedPerson, setSelectedPerson] = useState<T|T[]>(props.defaultValue)
  function handleSelection(value:T|T[]) {
    setSelectedPerson(value);
    onChange(value)
  }
  return (
    <Listbox value={selectedPerson} onChange={handleSelection} as='div' multiple={props.multiple} className='relative group' role='button'>
      <Listbox.Label className={styles.next.label}>{props.label}</Listbox.Label>
      <Listbox.Button className={[
        'origin-center items-center',
        'text-xs rounded-sm border-0 outline-none',
        'bg-slate-50/50 dark:bg-slate-600/25 dark:shadow',
        'group-focus-within:scale-105',
        'transition-transform duration-100 ease-in-out',
        'group-focus-within:ring-blue-300 ring-slate-200',
        'group-focus-within:bg-white dark:group-focus-within:bg-black/75',
        'dark:group-focus-within:ring-blue-700 dark:ring-slate-500/50',
        'text-center font-medium text-slate-800 ring-1 group',
        'flex w-full items-center relative p-2 pl-3.5 overflow-hidden icons:h-4',
        'dark:text-slate-200 gap-2 w-full drop-shadow-sm shadow-white dark:shadow-slate-500/5'
      ].join(' ')}>

        <div className='truncate flex gap-0.5 h-4'>
          {Array.isArray(selectedPerson) ? selectedPerson.map((i,idx) => (
            <Tag i={i} key={idx} getter={props.getter} onClick={() => handleSelection(selectedPerson.filter(p => p!==i))} />
          )) : <span className='translate-y-[1px]'>{props.getter(selectedPerson)}</span>}
        </div>
        <ChevronUpDownIcon className={['text-slate-500/50 ml-auto shrink-0 w-4'].join(' ')} />
      </Listbox.Button>
       <Transition {...popInOut}
        as='div'
        className='relative z-20'
      >
      <Listbox.Options static className={[styles.next.options,'focus-within:outline-none'].join(' ')} as='div' >
        {props.options.map((person, idx) => (
          <Listbox.Option
            className={[styles.next.option].join(' ')}
            as='div'
            key={`person-${idx}`}
            value={person}
          >
            {props.getter(person)}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      </Transition>
    </Listbox>
  )
}
