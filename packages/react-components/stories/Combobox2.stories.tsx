import React, { Fragment, useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Combobox, Disclosure, Switch, Transition } from '@headlessui/react';
import { CheckCircleIcon, LockClosedIcon, XMarkIcon  } from '@prism2/icons-react/24/solid';
import {  } from '@prism2/icons-react/24/outline';
import { userEvent, within } from '@storybook/testing-library';
import { popIn, popInSlow, sleep } from '../lib/utils';
import { CancelCircleIcon, PlusIcon, SearchIcon, UserIcon } from '@prism2/icons-react';
import { Box, fadeInDownOutUp, useToggle } from '../lib';
import { Slider2 } from '../lib/Slider';
let priceTiers = ['$10,000', '$15,000', '$20,000', '$30,000', '$40,000', '$50,000', '$60,000', '$70,000', '$80,000', '$90,000', '1$00,000'];
let usStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New Y$or,000',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
const items = [
  'Daward Reynolds',
  'Darrn Towne',
  'Darin Apple',
  'Darin Cassler',
  'Darin Hazelnuts',
  'Benedict D Kessler',
  'Katelyn Rohan',
];
const makes = [
  'Acura',
  'Alfa',
  'AMC',
  'Aston',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'Buick',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Daewoo',
  'Datsun',
  'DeLorean',
  'Dodge',
  'Eagle',
  'Ferrari',
  'FIAT',
  'Fisker',
  'Ford',
  'Freightliner',
  'Genesis',
  'Geo',
  'GMC',
  'Honda',
  'HUMMER',
  'Hyundai',
  'INFINITI',
  'Isuzu',
  'Jaguar',
  'Jeep',
  'Karma',
  'Kia',
  'Lamborghini',
  'Land',
  'Lexus',
  'Lincoln',
  'Lotus',
  'Lucid',
  'Maserati',
  'Maybach',
  'MAZDA',
  'McLaren',
  'Mercedes',
  'Mercury',
  'MINI',
  'Mitsubishi',
  'Nissan',
  'Oldsmobile',
  'Plymouth',
  'Polestar',
  'Pontiac',
  'Porsche',
  'RAM',
  'Rivian',
  'Rolls',
  'Saab',
  'Saturn',
  'Scion',
  'SRT',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo',
  'Yugo',
];

export default {
  title: 'Components/Combobox2',
  component: Combobox,
  argTypes: {
    next: { control: 'boolean', defaultValue: true },
    enableIcon: { control: 'boolean', defaultValue: true },
    multiple: { control: 'boolean', defaultValue: true },
    options: { control: 'json', defaultValue: makes },
    label: { control: 'string', defaultValue: 'State' },
    placeholder: { control: 'string', defaultValue: 'Select a location' },
  },
} as ComponentMeta<any>;
const style = {
  next: {
    input: [
      'origin-center bg-slate-50/50',
      'text-xs rounded-sm border-0 outline-none',
      'w-auto text-center font-medium text-slate-800 group-focus-within:ring-blue-300 ring-slate-200 ring-1 group',
      'flex items-center relative px-2 py-0.5 shrink overflow-hidden icons:h-4',
    ].join(' '),
    options: [
      'p-1 bg-white top-full translate-y-2 z-50 max-h-[300px] overflow-scroll',
      'w-full absolute shadow-lg rounded ring-1 ring-slate-400/50 divide-y divide-white',
    ].join(' '),
    option: [
      'hover:bg-blue-500 hover:text-white icons:ui-active:ui-selected:text-white icons:text-transparent ui-active:text-white ui-active:bg-blue-500 text-slate-600 items-center ',
      'w-full text-left block p-2 gap-2 text-xs rounded-sm font-medium cursor-pointer icons:h-4 flex icons:ml-auto icons:hover:text-white ui-selected:text-blue-500 ui-selected:bg-blue-100/50 icons:ui-selected:text-blue-500',
    ].join(' '),
    textbox: [
      'text-ellipses border-none grow self-center focus:ring-0 focus:outline-none bg-transparent px-0 text-xs -my-1 placeholder:text-slate-300',
    ].join(''),
    highlite: 'text-blue-500 font-black ui-selected:text-blue-200 ui-active:text-blue-200',
    tag: 'inline-flex truncate shrink-0 cursor-pointer bg-blue-100/50 hover:bg-blue-100/75 p-0.5 px-1 font-medium text-blue-500 rounded-xs items-center ring-blue-200/50 gap-1 icons:hover:text-blue-500 icons:hover:stroke-2 stroke-blue-500 icons:text-slate-500/50 transition duration-100',
    close: 'w-4 self-center text-slate-400/10 focus-visible:outline-none justify-center focus:ring-0 group-focus-within:text-slate-400 rounded-full items-center group-hover:text-slate-400 transition-all duration-100 shrink-0 cursor-pointer',
    label: [
      'group-focus-within:text-blue-500 text-xxs uppercase font-alt',
      'tracking-tight leading-loose text-slate-400 px-3 h-[1em]',
      'bg-white relative inline-block ring-1 ring-white',
      'transition duration-100 ease-in-out',
    ].join(' '),
  },
  prism: {
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
export function PrismCombobox(props) {
  const [query, setQuery] = React.useState('');
  const [selectedMake, setSelectedMake] = React.useState<string[] | string | undefined>(props.defaultSelection);
  const inputRef = useRef<HTMLInputElement>(null);


  const filteredMakes =
    props.options.filter((make:string) => {
      return make.toLowerCase().includes(query.toLowerCase());
    });



  const styles2 = props.next ? style.next : style.prism;

  function resetForm() {
    setQuery('');
    setSelectedMake([]);
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  function getHighlight(str:string, matcher:string) {
    let slicePoint = str.toLowerCase().indexOf(matcher.toLowerCase());
    let text = str.replace(/ /g, '\u00A0');
    if (matcher === '' || slicePoint === -1) return [str];
    return [
      text.slice(0, slicePoint),
      text.slice(slicePoint, slicePoint + query.length),
      text.slice(slicePoint + query.length),
    ] as [string, string, string];
  }

  function selectMake(val:string | string[]) {
    resetForm();
    setSelectedMake(val);
  }

  function handleKeyDown(event:React.KeyboardEvent) {
    if (event.key === 'Backspace') {
      if (props.multiple && query === '') {
        setSelectedMake(selectedMake.slice(0, -1));
        return;
      }
      if (query.length < selectedMake.length) {
        resetForm();
      }
    }
  }

  const HighlightQuery = ({ str, matcher, clsx }:{ str:string, clsx?: string, matcher: string }) => {
    let className = clsx || 'text-blue-500 font-black ui-selected:text-blue-300 ui-active:text-blue-300';
    const [before, match, after] = getHighlight(str, matcher);
    return <div>{before}<span className={className}>{match}</span>{after}</div>;
  };

  const SelectionTag = ({ str }:{ str:string }) => {
    const handleClick = () => setSelectedMake([...selectedMake].filter(x => x !== str));
    return (
      <div {...popIn} className={styles2.tag} onClick={handleClick}>
        {str}
        <XMarkIcon className='h-3' />
      </div>
    );
  };

  return (
    <Combobox {...props}
      value={selectedMake}
      onChange={selectMake}
      as='div'
      className={['relative group', props.className].join(' ')}
    >
      <Combobox.Label
        as='div'
        className={styles2.label}>
        {props.label}
      </Combobox.Label>
      <Box as='div' className={styles2.input}>
        {props.enableIcon && (
        // <div className="w-5 ">
            <SearchIcon className='self-center shrink-0 text-slate-400/50 group-focus-within:text-blue-500' aria-hidden='true' />
        // </div>
        )}
        <div className="flex items-center text-ellipses overflow-ellipsis grow flex-wrap gap-0.5 overflow-x-hidden p-1">
          {!!props.multiple && [...selectedMake].map(i => <Transition show appear {...popInSlow}><SelectionTag str={i} /></Transition>)}
          <Combobox.Input
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className={styles2.textbox}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={props.placeholder} />
        </div>
        <Transition
          {...popInSlow}
          show={query.length > 0 || selectedMake.length > 0}
          as='div'
          className={styles2.close}
          onClick={resetForm}
        >
          <CancelCircleIcon aria-hidden='true' />
        </Transition>
      </Box>
      <Transition {...popIn} appear as={Fragment}>
      <Combobox.Options className={styles2.options} hold>
        {filteredMakes.length > 0 ? filteredMakes.map((person:string) => (
          <Combobox.Option key={person} value={person} className={styles2.option}>
            <HighlightQuery str={person} matcher={query} clsx={styles2.highlite} />
            <CheckCircleIcon />
          </Combobox.Option>
        )) : (
          <Combobox.Option key='no-res' value={query} className={styles2.option}>
            Add "{query}" to list
            <PlusIcon className='animate-pulse' />
          </Combobox.Option>
        )}
      </Combobox.Options>
      </Transition>
    </Combobox>
  );
}

const UI = {
  SwitchList: (props) => (
    <div className="md:col-span-3 col-span-2 divide-y divide-slate-400/20 md:divide-y-0 gap-2 md:columns md:columns-3 px-2">{props.children}</div>
  ),
  SectionHeader: (props) => (
    <div className='prism-heading-5 p-2 px-3 text-slate-700 border-b-2 border-slate-200 my-2 col-span-2 md:col-span-3 icons:h-6 icons:ml-auto flex icons:text-slate-300'>{props.children}</div>
  ),
  FormSection: (props) => (
    <div className="gap-2 w-full sm:grid sm:grid-cols-[50%,50%] md:grid-cols-[1fr,1fr,1fr]">{props.children}</div>
  ),
  TextField: (props:React.HTMLAttributes<HTMLInputElement>) => (
    <>
    <label className='group-focus-within:text-blue-500 text-xxs uppercase font-alt tracking-tight leading-loose text-slate-400 px-3'>
      {props.title}
    </label>
    <input type='text' placeholder='Your name' className={[
      'origin-center bg-slate-50/50 placeholder:font-light',
      'rounded-sm border-0 outline-none placeholder:text-slate-300',
      'w-full text-xs font-medium text-slate-800 group-focus-within:ring-blue-300 ring-slate-200 ring-1 group',
      'flex items-center relative p-3 py-2.5 z-10 grow overflow-hidden icons:h-4',
    ].join(' ')} {...props} />
    </>
  ),
  SwitchInput: (props) => {
    const switchClass = [
      'relative inline-flex shrink-0 items-center',
      'h-[calc(1em+4px)] w-[calc(2em+2px)]',
      'not:disabled:cursor-pointer rounded-full border-2 border-transparent',
      'transition-colors duration-200 ease-in-out',
      'bg-blue-500 md:col-span-1',
      'group-disabled:grayscale transition duration-100',
      'ui-not-checked:grayscale ui-not-checked:bg-opacity-50',
      'ring-transparent ring-2 group-focus-within:ring-blue-200/50',
    ].join(' ');

    const btnClsx = [
      'ui-checked:translate-x-[calc(1em-2px)] ui-not-checked:translate-x-0',
      'pointer-events-none inline-block h-[1em] w-[1em] transform rounded-full',
      'bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex grow-0 shrink-0 items-center justify-center',
    ].join(' ');
    return (
    <Switch {...props} as='button' className='flex w-full justify-between items-center py-1.5 group focus-visible:outline-none focus-visible:shadow-sm focus-visible:ring-1 focus-visible:bg-slate-50/50 rounded-sm pr-2 first-letter:cursor-pointer disabled:cursor-not-allowed transition duration-100'>
      <label className={'ui-checked:text-slate-500 font-medium text-xs text-slate-300 px-2 transition duration-100 '}>Enable {props.label}</label>
      <div className={switchClass}>
        <span className="sr-only">Use setting</span>
        <span aria-hidden="true" className={btnClsx}>

        </span>
        <span className='ui-checked:-translate-x-7 ui-not-checked:translate-x-1 text-sm px-1 text-white' />
        <LockClosedIcon className='absolute h-3 group-disabled:text-slate-400/50 text-transparent -translate-x-5' />
      </div>
    </Switch>
    );
  },

};


const TemplateComponent: ComponentStory<any> = (args) => <div className='p-1 h-[1000px] container'><PrismCombobox {...args} /></div>;
const FormInputs: ComponentStory<any> = (args) => {
  const attr = [0, 1, 2, 3, 4, 5, 6].map((_, idx) => useToggle(idx % 4 !== 0));
  const features = [
    'Live Data',
    'Recon Cost Calculator',
    'Damage Report',
    'Salvaged Titles',
    'Push Notifcations',
    'Bid Alerts',
    'OEM Updates',
  ];

  return (
    <div className='space-y-4 w-full'>
      <UI.FormSection>
        <UI.SectionHeader>
          Contact Information
          <UserIcon />
        </UI.SectionHeader>
        <div className='group col-span-2 md:col-span-3'>
          <UI.TextField title='Username' placeholder='Enter your name' />
        </div>
        <div className="md:col-span-2">
          <UI.TextField title='City' placeholder='City' />
        </div>
        <div className="flex gap-2">
          <div className="grow">
            <PrismCombobox {...args} options={usStates} multiple={false} label="State" placeholder="Select a state..." />
          </div>
          <div className="w-16">
            <UI.TextField title='Zip' placeholder='00000' />
          </div>
        </div>
      </UI.FormSection>
      <UI.FormSection>
        <UI.SectionHeader>Search Facets <UserIcon /></UI.SectionHeader>
        <PrismCombobox {...args} className='col-span-2' options={makes} multiple label="Select manufacturers to include" />
        <PrismCombobox {...args} options={priceTiers} multiple={false} label="Min Price" placeholder="10,000" enableIcon={false} />
        <PrismCombobox {...args} options={priceTiers} multiple={false} label="Max Price" placeholder="50,000" enableIcon={false} />
        <PrismCombobox {...args} options={usStates} multiple={false} label="State" placeholder="More states please" />
        <PrismCombobox {...args} options={usStates} multiple={false} label="State" placeholder="More states please" />
      </UI.FormSection>
      <UI.FormSection>
        <UI.SectionHeader>Toggle Features <UserIcon /></UI.SectionHeader>
        <UI.SwitchList>
          {features.map((i, idx) => <UI.SwitchInput {...attr[idx]} label={i} disabled={idx === 4 || idx === 3} />)}
          <SliderSection />
        </UI.SwitchList>
      </UI.FormSection>
      <UI.FormSection>
        <UI.SectionHeader>Sliders</UI.SectionHeader>

      </UI.FormSection>
    </div>
  );
};

function SliderSection() {
  const [valueA, setValueA] = React.useState(20);
  const [valueB, setValueB] = React.useState(50);
  return (
    <div className='break-inside-avoid'>
      <div className=''>
        <label className={[style.next.label, 'pl-0'].join(' ')}>Mileage</label>
        <div className="relative h-8">
          <Slider2
            defaultValue={valueA}
            invert
            showValues
            isHighValue={valueA > valueB}
            onChange={(e) => setValueA(parseInt(e.currentTarget.value))} />
          <Slider2
            isHighValue={valueA <= valueB}
            invert
            showValues
            defaultValue={valueB}
            onChange={(e) => setValueB(parseInt(e.currentTarget.value))} />
        </div>
      </div>
      <div>
        <label className={[style.next.label, 'pl-0'].join(' ')}>Year</label>
        <Slider2 standalone defaultValue={50}/>
      </div>
    </div>
  );
}

export const MultiField = FormInputs.bind({});
MultiField.args = {
  options: items,
  multiple: true,
  defaultSelection: [],
};

export const PeopleSelect = TemplateComponent.bind({});
PeopleSelect.args = {
  options: items,
  multiple: true,
  label: 'Users',
  placeholder: 'Search by name',
  defaultSelection: [items[0]],
};


export const Simple = TemplateComponent.bind({});
Simple.args = {
  multiple: false,
  next: true,
  enableIcon: false,
  label: 'Makes',
  placeholder: 'Search by manufacturer...',
  defaultSelection: '',
};

export const Autoplay = TemplateComponent.bind({});
Autoplay.args = {
  multiple: true,
  defaultSelection: [],
  label: 'Makes',
  next: true,
  placeholder: 'Search by manufacturer...',
};

export const PrismSimple = TemplateComponent.bind({});
PrismSimple.args = {
  multiple: false,
  next: false,
  enableIcon: true,
  options: items,
  placeholder: 'Search by name',
  label: 'Users',
  defaultSelection: '',
};
export const PrismLegacy = TemplateComponent.bind({});
PrismLegacy.args = {
  multiple: true,
  next: false,
  enableIcon: true,
  placeholder: 'Search by name',
  label: 'Users',
  options: items,
  defaultSelection: items.slice(0, 2),
};

Autoplay.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('combobox');
  const framelength = 550;
  for (let step = 0; step < 5; step++) {
    await sleep(framelength).then(() => {
      userEvent.click(loginButton);
      userEvent.clear(loginButton);
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, 'A');
    }).then(() => sleep(framelength * 2)).then(() => {
      userEvent.type(loginButton, '{arrowdown}');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.type(loginButton, '{arrowdown}');
    }).then(() => sleep(framelength * 3)).then(() => {
      userEvent.type(loginButton, '{enter}');
    }).then(() => sleep(framelength)).then(() => {
      userEvent.clear(loginButton);
    }).then(() => sleep(framelength)).then(() => {
      userEvent.tab();
    }).then(() => sleep(framelength));
  }
};
