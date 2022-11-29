import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Listbox, Transition } from '@headlessui/react';
import { PropsWithChildren, useState } from 'react';
import { popIn, popInSlow } from '../lib';
import { ExtractProps } from '../lib/types';
import { PrismCombobox } from './Combobox2.stories';
import { XCircleIcon, ClockIcon } from '@prism2/icons-react/24/outline';

export default {
  title: 'Components/TimePicker',
} as ComponentMeta<any>;

const Template: ComponentStory<any> = () => {
  let [time, setTime] = useState<any>(undefined);
  return (
    <div className="grid grid-cols-2 group">
      <label className='prism-label'>
        Time
        <input type="time" className='rounded' onChange={(e) => setTime(e.target.value)}/>
      </label>
      {time}
    </div>
  );
};

export const Basic = Template.bind({});


const getTimes = (pm:boolean) => {
  return ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'].map(h =>
    ['00', '15', '30', '45'].map(m => {
      let hour = h === '12' ? 0 : parseInt(h);
      return {
        value: `${pm ? hour + 12 : h}:${m}`,
        label: `${h}:${m} ${pm ? 'pm' : 'am'}`,
      };
    },
    ),
  ).flat();
};

let times = [...getTimes(false), ...getTimes(true)];


export const AsListbox = () => {

  const [time, setTime] = useState();

  const Option = (props:ExtractProps<typeof Listbox.Option>) => (
    <Listbox.Option
      value={props.value}
      key={props.key}
      as='li'
      className='p-2 text-sm text-gray-800 ui-selected:bg-blue-800 ui-selected:text-white ui-not-selected:ui-active:bg-blue-50 cursor-pointer'
    >
      {props.children}
    </Listbox.Option>
  );
  return (
    <Listbox value={time} onChange={setTime} as='div' className='group relative w-48 icons:w-5 icons:h-5'>
      {/* {!!time
        ? <XCircleIcon className='inset-y-2 right-2 absolute my-auto text-gray-500' onClick={() => setTime(undefined)} />
        : <ClockIcon className='inset-y-2 right-2 absolute my-auto pointer-events-none text-blue-500' />
      } */}

      <Listbox.Button as='input' type='time' className='group-focus-within:!ring-1 group-focus-within:!ring-blue-800 form-input w-full rounded focus-within:ring-1.5' defaultValue={time} placeholder='hh:mm pm' />
      <Transition {...popIn}>
        <Listbox.Options className='absolute top-full inset-0 h-48 self-center overflow-scroll border mt-1 shadow w-full rounded overflow-x-clip'>
          {times.map(t => <Option key={t.label} value={t.value}>{t.label}</Option>)}
        </Listbox.Options>
      </Transition>

    </Listbox>
  );
};


const CBTemplate:ComponentStory<any> = (args) => {
  return (
    <PrismCombobox
      next={false}
      className='w-48'
      options={times.map(i => i.label)}
      defaultSelection={[]}
      multiple={false}
      label="Time"
      placeholder="hh:mm am" />
  );
};

export const AsCombobox = CBTemplate.bind({});
