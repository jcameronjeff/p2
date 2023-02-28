import { ComponentPropsWithRef, useMemo } from 'react';
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@prism2/icons-react/24/solid';
import { popIn, sortByKey } from '../utils';
import { ChevronDownIcon } from '@prism2/icons-react/24/outline';
import { makes, users } from '../../stories/_mockData';
import mdx from './README.mdx';
import { ExtractProps } from '../types';
import { PCombobox } from './ComboboxHOC';

Combobox.displayName = 'Combobox';
Combobox.Button.displayName = 'Combobox.Button';
Combobox.Input.displayName = 'Combobox.Input';
Combobox.Options.displayName = 'Combobox.Options';
Combobox.Option.displayName = 'Combobox.Option';
Transition.displayName = 'Transition';

export default {
  title: 'Components/Combobox3',
  component: PCombobox,

} as ComponentMeta<typeof PCombobox>;


type NewTemplateArgs = ExtractProps<typeof PCombobox> & {
  sortBy: string,
  buttonClass: string,
  inputClass: string,
  optionsClass: string,
  optionClass: string
};

export interface StoryProps<T = string | object> extends ComponentPropsWithRef<typeof Combobox> {
  data: T[],
  by: keyof T | ((a:T, z:T) => boolean),
  displayValue: (item:T) => string,
  defaultValue: T | T[],
  sortBy: keyof T,
  className?: string,
  optionRenderer?: (arg0:T) => JSX.Element,
  label?: string,
  placeholder?: string,
}

const HUITemplate: ComponentStory<any> = (props: StoryProps) => {
  const { data, optionRenderer, displayValue, sortBy, ...args } = props;
  const [query, setQuery] = useState('');
  const sortedData = useMemo(() => sortByKey(data, sortBy), [data, sortBy]);
  const filteredMakes = query === ''
    ? sortedData
    : sortedData.filter((value) => Object.values(value).join(' ').toLowerCase().includes(query.toLowerCase()));


  return (
    <Combobox
      {...args}
      className={['relative w-72 h-72', args.className].filter(Boolean).join(' ')}
      as='div'
    >
      {args.label && <div className="prism-label">{args.label}</div>}
      <div className="prism-combobox-input-wrapper">
        <Combobox.Button className="prism-combobox-button right-0 absolute">
          <ChevronDownIcon aria-hidden="true" />
        </Combobox.Button>
        <Combobox.Input className="prism-combobox-input-area pr-10"
          placeholder={args.placeholder}
          displayValue={displayValue}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <Transition {...popIn}>
      <Combobox.Options as='ul' className="prism-menu absolute mt-1 max-h-60">
        {filteredMakes.map(value => (
          <Combobox.Option
            key={JSON.stringify(value)}
            as="li"
            className='prism-menu-item'
            value={value}
          >
            {optionRenderer ? optionRenderer(value) : displayValue(value)}
            <CheckCircleIcon className='menu-item-icon' aria-hidden="true" />
          </Combobox.Option>
        ))}
      </Combobox.Options>
      </Transition>
    </Combobox>
  );
};

const ComboboxTemplateNew: ComponentStory<any> = (props: NewTemplateArgs) => {
  const { data, optionRenderer, displayValue, sortBy, ...args } = props;
  const [query, setQuery] = useState('');
  const sortedData = useMemo(() => sortByKey(data, sortBy), [data, sortBy]);
  const filteredMakes = query === ''
    ? sortedData
    : sortedData.filter((value) => [Object.values(value), value].join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <PCombobox {...args} as='div'>
      {args.label && <PCombobox.Label>{args.label}</PCombobox.Label>}
      <PCombobox.Form className={args.wrapperClass}>
        <PCombobox.Button className={props.buttonClass} />
        <PCombobox.Input
          className={props.inputClass}
          placeholder={args.placeholder}
          displayValue={displayValue}
          onChange={(event) => setQuery(event.target.value)}
        />
      </PCombobox.Form>
      <Transition {...popIn} show={props.static ? true : undefined} appear={props.static}>
      <PCombobox.Options className={props.optionsClass} static={props.static}>
        {filteredMakes.map(v => (
          <PCombobox.Option
            key={JSON.stringify(v)}
            as="li"
            value={v}
            className={props.optionClass}
          >
            {optionRenderer ? optionRenderer(v) : displayValue(v)}
            <CheckCircleIcon className='menu-item-icon' aria-hidden="true" />
          </PCombobox.Option>
        ))}
      </PCombobox.Options>
      </Transition>
    </PCombobox>
  );
};

export const Basic = ComboboxTemplateNew.bind({});
Basic.args = {
  data: makes.slice(0, 10),
  multiple: false,
  nullable: true,
  label: 'Standard',
  placeholder: 'Select a make',
  displayValue: (val:string) => val,
};

export const WithoutPrismComponents = HUITemplate.bind({});
WithoutPrismComponents.args = Basic.args;


export const BasicMultiselect = ComboboxTemplateNew.bind({});
BasicMultiselect.args = {
  ...Basic.args,
  label: 'Multiselect',
  placeholder: 'Select multiple makes',
  data: makes.slice(0, 10),
  multiple: true,
  defaultValue: [makes[2], makes[3], makes[7]],
};
export const BasicOpen = ComboboxTemplateNew.bind({});
BasicOpen.args = {
  ...Basic.args,
  static: true,
};
export const BasicMultiselectOpen = ComboboxTemplateNew.bind({});
BasicMultiselectOpen.args = {
  ...BasicMultiselect.args,
  static: true,
};

export const WithSmallerOptions = ComboboxTemplateNew.bind({});
WithSmallerOptions.args = {
  ...Basic.args,
  static:true,
  optionClass: 'text-sm py-1',
};

export const WithLargerInputText = ComboboxTemplateNew.bind({});
WithLargerInputText.args = {
  ...Basic.args,
  static:true,
  inputClass: 'text-2xl font-semibold tracking-tight',
  optionClass: 'italic',
};

export const FullyCustomizeAppearance = ComboboxTemplateNew.bind({});
FullyCustomizeAppearance.args = {
  ...Basic.args,
  static:true,
  buttonClass: 'left-0 border-l-0 border-r right-auto border-indigo-600 icons:text-white !bg-indigo-500',
  inputClass: 'pl-10 pr-3 bg-indigo-800 placeholder:text-indigo-300 text-white shadow-indigo-400',
  optionsClass: 'bg-indigo-900 text-indigo-300',
  optionClass: 'bg-transparent text-indigo-300 ui-active:text-indigo-100 ui-active:!bg-indigo-800',
};

export const FullyCustomizeAppearance2 = ComboboxTemplateNew.bind({});
FullyCustomizeAppearance2.args = {
  ...Basic.args,
  wrapperClass: 'flex relative ring-2 ring-red-300 rounded-lg clip',
  buttonClass: 'border-red-600 icons:text-white !bg-red-500 icons:h-8 !ui-open:icons:text-white rounded-r-lg',
  inputClass: 'bg-red-100 placeholder:text-red-300 text-red-800 shadow-red-400 text-2xl leading-8 rounded-lg',
  optionsClass: 'text-sm font-mono',
  optionClass: 'bg-transparent py-1 text-red-600 font-medium ui-active:text-red-800 ui-active:animate-pulse ui-active:!bg-red-800',
};

export const SideBySide = ComboboxTemplateNew.bind({});
SideBySide.args = {
  ...Basic.args,
  className: 'flex w-full justify-center gap-2 bg-slate-100 rounded-lg shadow-lg ring-[1px] ring-black ring-opacity-5 m-5 p-8',
  static: true,
  multiple: true,
  defaultValue: [makes[4]],
  label: undefined,
  wrapperClass: 'relative w-full rounded-sm w-64 self-start',
  inputClass: 'rounded-lg border',
  buttonClass: 'icons:w-4 rounded-r-lg',
  optionsClass: 'relative w-96 mt-0 rounded-lg p-0.5 space-y-0.5',
  optionClass: 'flex-1 flex-grow p-1 px-4 rounded',
};

export const Multiselect = ComboboxTemplateNew.bind({});
Multiselect.args = {
  data: makes,
  multiple: true,
  name: 'multi-combobox',
  nullable: true,
  defaultValue: [makes[2]],
  displayValue: (name:typeof makes[19]) => name,
};




export const ComplexData = ComboboxTemplateNew.bind({});
ComplexData.args = {
  data: users,
  multiple: false,
  nullable: true,
  sortBy: 'id',
  className: 'w-[400px]',
  label: 'Single Complex Object',
  displayValue: (user:typeof users[2]) => {
    if (!user) return 'Please select user';
    if (typeof user === null) return 'Please select a user';
    return `${user.first_name} - ${user.email}`;
  },
  optionRenderer: (item: typeof users[2]) => (
    <div>
      <b>{item.first_name} {item.last_name}</b><br />
      <small>{item.id} - {item.email}</small>
    </div>
  ),
};

export const ComplexDataMulti = ComboboxTemplateNew.bind({});
ComplexDataMulti.args = {
  data: users,
  label:'Multiple users displayed by first name',
  placeholder:'Please select users',
  multiple: true,
  nullable: false,
  sortBy: 'last_name',
  displayValue: (user:typeof users[2][]) => {
    const getName = (u) => {
      if (!u.first_name) return 'Please select a user';
      return `${u.first_name}`;
    };
    if (Array.isArray(user)) {
      return user.map(i => getName(i)).join(', ');
    } else {
      return getName(user);
    }
  },
  optionRenderer: (item: typeof users[2]) => (
    <div>
      <b>{item.first_name} {item.last_name}</b><br />
      <small>{item.id} - {item.email}</small>
    </div>
  ),
  defaultValue: [users[8]],
  className: 'w-[400px] m-auto',
};

export const ComplexDataOpen = ComboboxTemplateNew.bind({});
ComplexDataOpen.args = {
  ...ComplexDataMulti.args,
  static: true,
};

export const ComplexDataEmailOnly = ComboboxTemplateNew.bind({});
ComplexDataEmailOnly.args = {
  ...ComplexDataMulti.args,
  label: 'Mutliple users displayed by email',
  optionRenderer: (user:typeof users[2]) => (
    <div>
      <h4 className='text-sm'>{user.email}</h4>
      <small className='opacity-50 text-xxs font-mono'>{user.ip_address}</small>
    </div>
  ),
  displayValue: (user:typeof users[2][]) => {
    const getName = (u) => {
      if (!u.email) return 'Please select a user';
      return `${u.email}`;
    };
    if (Array.isArray(user)) {
      return user.map(i => getName(i)).join(', ');
    } else {
      return getName(user);
    }
  },
};
