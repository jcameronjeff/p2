import { Combobox, Transition } from '@headlessui/react';
import { CancelCircleIcon, PlusIcon, SearchIcon } from '@prism2/icons-react';
import { CheckCircleIcon, ChevronUpDownIcon, XMarkIcon } from '@prism2/icons-react/24/outline';
import { Box, popIn, popInSlow } from '@prism2/react-components';
import { ExtractProps } from '@prism2/react-components/dist/types';
import React, { useState, useRef, Fragment, ElementType, Ref } from 'react';

export const style = {
  next: {
    inputValue: [
      "flex items-center text-ellipses overflow-ellipsis grow flex-wrap gap-0.5 overflow-x-hidden p-1"
    ].join(),
    input: [
      'drop-shadow-sm',
      'text-xs rounded-sm border-0 outline-none',
      'bg-slate-50/50 dark:bg-slate-600/25 dark:shadow',
      'group-focus-within:ring-blue-300 ring-slate-200',
      'group-focus-within:scale-105',
      'transition-transform duration-100 ease-in-out',
      'group-focus-within:bg-white dark:group-focus-within:bg-black/75',
      'dark:group-focus-within:ring-blue-700 dark:ring-slate-500/50',
      'w-auto text-center font-medium text-slate-800 ring-1 group',
      'flex items-center relative px-2 py-0 shrink overflow-hidden icons:h-4',
    ].join(' '),
    options: [
      'p-1 top-full translate-y-2 z-50 max-h-[300px] overflow-scroll',
      'divide-white bg-white ring-slate-400/50',
      'dark:divide-black dark:bg-black dark:shadow-black dark:ring-slate-700/50',
      'w-full absolute shadow-lg rounded ring-1 divide-y',
    ].join(' '),
    option: [
      'text-slate-600 icons:text-transparent',
      'dark:text-slate-200',
      'hover:bg-blue-500 icons:hover:text-white hover:text-white',
      'ui-active:text-white ui-active:bg-blue-500 icons:ui-active:ui-selected:text-white',
      'ui-selected:text-blue-500 ui-selected:bg-blue-100/50 icons:ui-selected:text-blue-500',
      'dark:ui-selected:bg-blue-500/20',
      'dark:ui-active:bg-blue-500 dark:ui-active:text-white',
      'w-full text-left block items-center p-2 gap-2 text-xs rounded-sm font-medium',
      'cursor-pointer icons:h-4 flex icons:ml-auto ',
    ].join(' '),
    textbox: [
      'text-ellipses border-none grow self-center focus:ring-0 focus:outline-none bg-transparent px-0 text-xs -my-1 placeholder:text-slate-500/50 dark:placeholder:text-slate-300/50 h-8 dark:text-slate-200 text-slate-700',
    ].join(''),
    highlite: 'text-blue-500 font-black ui-selected:text-blue-200 ui-active:text-blue-200',
    tag: [
      'inline-flex gap-1 truncate shrink-0 cursor-pointer',
      'items-center',
      'text-blue-500 bg-blue-100/50 hover:bg-blue-100/75 ring-blue-200/50',
      'dark:text-blue-200 dark:bg-blue-700/50 hover:bg-blue-500/75 dark:ring-white/50',
      'p-0.5 px-1 font-medium rounded-xs ',
      'dark:hover:bg-blue-800/50',
      'icons:hover:text-blue-500 icons:hover:stroke-2',
      'stroke-blue-500 icons:text-slate-500/50 transition duration-100'
    ].join(' '),
    close: 'w-4 self-center text-slate-400/10 focus-visible:outline-none justify-center focus:ring-0 group-focus-within:text-slate-400 rounded-full items-center group-hover:text-slate-400 transition-all duration-100 shrink-0 cursor-pointer',
    label: [
      'group-focus-within:text-blue-500 text-xxs uppercase font-alt',
      'tracking-tight leading-loose text-slate-400 px-3 h-4',
      'relative inline-block',
      'transition duration-100 ease-in-out',
    ].join(' '),
  },
  prism: {
    inputValue: [
      "flex items-center text-ellipses overflow-ellipsis grow flex-wrap gap-0.5 overflow-x-hidden p-1"
    ].join(),
    input: [
      'flex items-baseline relative rounded-xs border px-1 w-full',
      'border-slate-400 focus:ring-0 focus:outline-none focus-within:border-slate-400',
      'focus-within:shadow-lg gap-1 icons:h-5 overflow-hidden',
    ].join(' '),
    options: [
      'absolute p-1 bg-white top-full',
      'w-full shadow-lg rounded ring-1 ring-slate-400/50 divide-y divide-slate-400/20',
      'px-0 rounded-none !ring-0 border z-50 mt-0.5',
    ].join(' '),
    option: [
      'px-2 icons:ui-active:text-slate-700 justify-start icons:ml-auto',
      'icons:text-transparent ui-active:bg-slate-50 icons:ui-selected:text-slate-700',
      'w-full text-left block p-2 font-medium cursor-pointer',
      'icons:h-6 flex !text-base text-slate-700',
    ].join(' '),
    textbox: [
      'grow border-none focus:outline-none focus:ring-0 pl-0 leading-tight',
    ].join(''),
    highlite: 'font-bold text-black',
    tag: 'font-bold flex items-center cursor-pointer icons:w-0 pr-0.5',
    close: 'self-center text-slate-500 focus-visible:outline-none justify-center focus:ring-0 focus-within:text-blue-400 rounded-full -translate-x-1 icons:h-5',
    label: 'prism-label',
  },
};

function HighlightQuery({ str, matcher, clsx }:{ str:string, clsx?: string, matcher: string }) {
  let className = clsx || 'text-blue-500 font-black ui-selected:text-blue-300 ui-active:text-blue-300';
  function getHighlight(str:string, matcher:string) {
    let slicePoint = str.toLowerCase().indexOf(matcher.toLowerCase());
    let text = str.replace(/ /g, '\u00A0');
    if (matcher === '' || slicePoint === -1) return [str];
    return [
      text.slice(0, slicePoint),
      text.slice(slicePoint, slicePoint + matcher.length),
      text.slice(slicePoint + matcher.length),
    ] as [string, string, string];
  }
  const [before, match, after] = getHighlight(str, matcher);
  return <div>{before}<span className={className}>{match}</span>{after}</div>;
};

function ClearButton({onClick, show, className }: React.HTMLAttributes<HTMLDivElement> & {show: boolean }) {
    return (
      <Transition
        {...popInSlow}
        show={show}
        as='div'
        className={className}
        onClick={onClick}
      >
        <CancelCircleIcon aria-hidden='true' />
      </Transition>
    )
  }

function PrependIcon({show}:{show:boolean|undefined}) {
  if (!show) return null;
  return <SearchIcon
    className='self-center shrink-0 text-slate-400/50 group-focus-within:text-blue-500'
    aria-hidden='true'
  />
}


export function PrismCombobox<T>({
  getter = (str:T) => str as string,
  generator = (str:T) => str as T,
  optionRenderer,
  ...props
}:Omit<ExtractProps<typeof Combobox>,"multiple"> & {
  /**
   * Array of items in any format. Use `generator` and `getter` to handle normalizing
   * your data set.
   */
  options: T[],
  /**
   * Function used to return a stringified value of each option that can
   * be used for filtering and sorting.
   */
  getter?: (arg0:T) => string,
  /**
   * Optionally, override the option list with your own component. Accepts a
   * single option as props.
   */
  optionRenderer?: (arg0:T) => JSX.Element,
  /**
   * Function used to convert arbitrary text inputs into our option
   * format.
   */
  generator?: (val:any) => T,
  /**
   * If true, an icon will be prepended to the inputs.
   */
  enableIcon?: boolean,
  /**
   * If true, next generation styles will be used.
   */
  next?: boolean,
}) {

  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<T[]>(props.defaultValue || []);
  const inputRef = useRef<HTMLInputElement>(null);
  const styles2 = props.next ? style.next : style.prism;
  const inputArgsBase = {
    ref:inputRef,
    onKeyDown:handleKeyDown,
    className:styles2.textbox,
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    placeholder:props.placeholder
  }
  const inputArgs = props.multiple
    ? inputArgsBase
    : Object.assign(inputArgsBase, { displayValue: getter || false })


  const filteredOptions =
    props.options.filter((make:T) => {
      return getter(make).toLowerCase().includes(query.toLowerCase());
    });

  function resetForm() {
    setQuery('');
    setSelectedOption([]);
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  function handleSelectOption(val:T[]) {
    resetForm();
    if (props.multiple) {
      resetForm();
    }
    setSelectedOption(val);
    if (props.onChange) {
      props.onChange(val)
    }
  }

  function handleKeyDown(event:React.KeyboardEvent) {
    if (props.onKeyDown) {
      props.onKeyDown(event)
    }
    if (
      event.key === 'Backspace' && query.length < 1) {
      if (props.multiple) {
        handleSelectOption(selectedOption.slice(0, -1));
        return;
      }
    }
  }

  const Tag = ({i}:{i:T, idx: string|number}) => {
    function unselectOption(val:T) {
      handleSelectOption([...selectedOption].filter(x => x !== val))
    }
    return (
      <div className={styles2.tag} onClick={() => unselectOption(i)}>
        <span>{getter(i)}</span>
        <XMarkIcon className='h-3' />
      </div>
    )
  }

  const { defaultSelection, next, enableIcon, ...attr } = props;
  return (
    <Combobox
      {...attr}
      value={selectedOption}
      onChange={handleSelectOption}
      as='div'
      className={['relative group', props.className].join(' ')}
    >
      {props.label && (
        <Combobox.Label as='div' className={styles2.label}>
          {props.label}
        </Combobox.Label>
      )}
      <Box as='div' className={styles2.input}>
        <PrependIcon show={props.enableIcon} />
        <div className={styles2.inputValue}>
          {props.multiple && selectedOption.map((i, idx) =>
            <Transition appear show={!!i} key={`tag-${idx}`} {...popInSlow}>
              <Tag i={i} idx={idx} />
            </Transition>
          )}
          <Combobox.Input {...inputArgs} />
        </div>
        <ChevronUpDownIcon className={['text-slate-500/50 ml-auto shrink-0 w-4'].join(' ')} />
        {/* <ClearButton show={query !== null} onClick={() => handleSelectOption([])} className={styles2.close} /> */}
      </Box>
      <Transition {...popIn} appear as='div' className={styles2.options}>
      <Combobox.Options>
        {filteredOptions.length > 0 ?
          filteredOptions.map((person) => (
            <Combobox.Option key={getter(person)} value={person} className={styles2.option}>
              {!!optionRenderer
                ? optionRenderer(person)
                : <HighlightQuery str={getter(person)} matcher={query} clsx={styles2.highlite} />
              }
              <CheckCircleIcon className='shrink-0' />
            </Combobox.Option>
          )) : (
            <Combobox.Option key='no-res' value={generator(query)} className={styles2.option}>
              Add "{query}" to list
              <PlusIcon className='animate-pulse' />
            </Combobox.Option>
          )}
      </Combobox.Options>
      </Transition>
    </Combobox>
  );
}

