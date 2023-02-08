import { Listbox } from '@headlessui/react';
import { TriangleDownIcon } from '@prism2/icons-react';
import { useMemo, useState } from 'react';
import { yearsList } from '../../lib/_mockData';

function YearSelect(props: {
  value: any,
  onChange: ((value: any) => void),
  data:{
    value: number | null,
    disabled:boolean
  }[]
}) {

  return (
    <Listbox onChange={props.onChange} defaultValue={props.value} className='relative w-64' as='div' >
      <Listbox.Button className='prism-input rounded-xs flex items-center w-full text-left'>
        {props.value}
        <TriangleDownIcon className='ml-auto' />
      </Listbox.Button>
      <Listbox.Options
        className='absolute prism-menu mt-1 max-h-60 overflow-y-scroll'
        as='div'
      >
        {props.data.filter(i => !i.disabled).map(year => (
          <Listbox.Option
            className='prism-menu-item ui-selected:bg-blue-800 ui-selected:text-white ui-not-selected:text-black ui-not-selected:hover:bg-gray-50 ui-not-selected:ui-active:bg-gray-50 '
            key={`year-${year}`}
            value={year.value === null ? 'All' : year.value}
            disabled={year.disabled}
          >
            {year.value === null ? 'All' : year.value}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export function YearRange() {
  const [minYear, setMinYear] = useState<number>(0);
  const [maxYear, setMaxYear] = useState<number>(2024);

  const yearsDataMin = useMemo(() => yearsList.map(year => ({
    value: year,
    disabled: year !== null && year > maxYear,
  })), [minYear, maxYear]);

  const yearsDataMax = useMemo(() => yearsList.map(year => ({
    value: year,
    disabled: year !== null && year < minYear,
  })), [minYear, maxYear]);

  return (
    <div className="flex items-center gap-2">
      <YearSelect data={yearsDataMin} onChange={setMinYear} value={minYear} />
      <div className='text-xl'>&mdash;</div>
      <YearSelect data={yearsDataMax} onChange={setMaxYear} value={maxYear} />
    </div>
  );
}
