import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { CalendarIcon } from '@prism2/icons-react';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/datepicker.css';
import { Popover } from '@headlessui/react';
import mdx from './README.mdx';
export default {
  title: 'Components/DatePicker',
  component: Box,

} as ComponentMeta<typeof DatePicker>;

export const AsPopover = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  return (
    <Popover className='relative h-80'>
      <Popover.Button className='prism-input flex w-[245px] relative'>
        {startDate !== null ? startDate.toLocaleDateString() : 'Select Date'}
        <CalendarIcon className='absolute h-6 w-6 top-2 right-2 text-blue-700' />
      </Popover.Button>
      <Popover.Panel className='absolute z-10'>
        <DatePicker inline selected={startDate} onChange={setStartDate} />
      </Popover.Panel>
    </Popover>
  );
};

const Template: ComponentStory<typeof DatePicker> = (args) => {
  // Single DatePicker Config
  const [current, setCurrent] = React.useState<Date | null>(new Date());
  let basicArgs:ReactDatePickerProps<string, false> = {
    ...args,
    onChange: setCurrent,
    selected:current,
    selectsRange: false,
  };
  return (
    <div className='relative w-[245px] h-72'>
      <DatePicker {...basicArgs} />
      <CalendarIcon className='absolute h-6 w-6 top-2 right-2 text-blue-700 pointer-events-none' />
    </div>
  );
};

export const RangePicker = () => {
  const [[startDate, endDate], setRange] = React.useState<[Date | null, Date | null]>([new Date(), new Date()]);
  let rangeArgs:ReactDatePickerProps<string, true> = {
    startDate,
    endDate,
    selectsRange: true,
    className: 'w-full',
    onChange: setRange,
  };
  return (
    <div className='relative w-[245px] h-72'>
      <DatePicker {...rangeArgs} />
      <CalendarIcon className='absolute h-6 w-6 top-2 right-2 text-blue-700 pointer-events-none' />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  dateFormat:'MM/dd/yyyy',
  selectsRange: false,
  className: 'w-full',
  showMonthYearPicker: false,
};
export const Monthly = Template.bind({});
Monthly.args = {
  dateFormat:'MM/yyyy',
  selectsRange: false,
  className: 'w-full',
  showFullMonthYearPicker: false,
  showMonthYearPicker: true,
};
