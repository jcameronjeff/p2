
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading1, Table, TR } from '..';
import type { CSSPropertiesWithVariables } from '../types';
import { ArrowDownIcon, ArrowUpIcon } from '@prism2/icons-react';
import mdx from './README.mdx';
import  { useMemo, useState } from 'react';


export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TR },
  argTypes: {
    'theadClass': {
      options: ['!bg-red-500'],
      control: { type: 'select' },
    },
    'thClass': {
      options: ['!border-0', '!border-black/50', '!border-white/50'],
      control: { type: 'select' },
    },
    'className': {
      options: [
        '',
        'w-[100%] max-w-[840px] border-2 border-blue-500 shadow rounded m-auto',
        'text-xxs border-0 w-96',
        'text-sm',
        'text-lg',
        'font-mono text-sm',
        'animate-spin ring-4 ring-gold-400 ring-offset-4',
      ],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as ComponentMeta<typeof Table>;


const sampleData = [{
  name: 'Darin',
  hometown: 'Shelburne',
  count: '42',
}, {
  name: 'Someone',
  hometown: 'Anywhere',
  count: '55',
}];



const paragraphs = [
  'estibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.',
  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.',
  'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.',
];
const sampleRows = (
  <tbody>
    <tr>
      <td>Someone Lastname</td>
      <td>900</td>
      <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
    </tr>
    <tr>
      <td><a href="#">Person Name</a></td>
      <td>1200</td>
      <td>{paragraphs[0]}</td>
    </tr>
    <tr>
      <td>Another Person</td>
      <td>1500</td>
      <td>{paragraphs[1]}</td>
    </tr>
    <tr>
      <td>Last One</td>
      <td>2800</td>
      <td>{paragraphs[2]}</td>
    </tr>
  </tbody>
);

export const Basic:ComponentStory<any> = (args) => (
  <Table {...args}>
    <thead className={args.theadClass}>
      <tr>
        <th className={args.thClass}>Column A</th>
        <th className={args.thClass}>Column B</th>
        <th className={args.thClass}>Column C</th>
      </tr>
    </thead>
    {sampleRows}
  </Table>
);


export const WithStyles = Basic.bind({});
WithStyles.args = {
  className: 'm-auto text-xs ring-3 rounded overflow-hidden shadow-lg text-center',
  style: {
    '--thead-bg': '#96a',
    '--thead-border': '#639',
  } as CSSPropertiesWithVariables,
};

const Tables: ComponentStory<typeof Table> = ({ children, ...args }) => (
  <Table {...args}>
    {children}
  </Table>
);


export const WithColumns = Tables.bind({});
WithColumns.args = {
  children: sampleRows,
  columns: ['Name', 'Amount', 'Description'],
};

export const WithCaptions = Tables.bind({});
WithCaptions.args = {
  children: sampleRows,
  columns: ['Name', 'Amount', 'Description'],
  caption: 'This caption passed via props',
};

export const WithData = Tables.bind({});
WithData.args = {
  data: sampleData,
};





export const ArbitraryContent: ComponentStory<typeof Table> = (args) => {

  const tabularData = [
    ['Darin', 'Austin', 35, 0],
    ['Lon', 'Atlanta', 12, 1],
    ['Winnie', 'Atlanta', 23, 2],
    ['Sansida', 'Georgia', 19, 3],
    ['Jeff', 'Florida', 5, 4],
    ['JP', 'Florida', 22, 5],
    ['Clay', 'Georgia', 2, 6],
  ];
  const columnNames = ['Name', 'City', 'Score', 'ID'];
  const [sortCol, setSortCol] = useState(0);
  const [invert, toggleInvert] = useState(false);

  function handleSort(idx:number) {
    if (idx === sortCol) {
      toggleInvert(!invert);
    } else {
      setSortCol(idx);
      toggleInvert(false);
    }
  }
  const data = useMemo(() => tabularData.sort((a, b) => {
    let orderBy = invert ? -1 : 1;
    if (a[sortCol] < b[sortCol]) return  -1 * orderBy;
    if (a[sortCol] > b[sortCol]) return  1 * orderBy;
    return 0;
  }), [sortCol, invert]);

  const clsx = {
    wrap: 'w-[100%] max-w-[840px] border-2 border-blue-500 shadow rounded m-auto',
    tr: 'font-light [&>th]:font-light text-xxs uppercase tracking-wide',
  };


  const TH = (
    { idx, label, onClick  }:
    { idx:number, label:string, onClick: () => void },
  ) => {
    const current = idx === sortCol;
    return (
    <th onClick={onClick} className={current ? 'text-gold-400' : ''}>
      <div className="items-center flex justify-between gap-1 hover:cursor">
        {label}
        <div className={current ? 'text-yellow-400' : 'text-transparent'}>
          {invert
            ? <ArrowUpIcon className='h-[1em]' />
            : <ArrowDownIcon className='h-[1em]'/>
          }
        </div>
      </div>
    </th>
    );
  };

  return (
    <div className={clsx.wrap}>
      <Table className='m-auto text-xs w-full table-auto' {...args}>
        <thead>
          <tr>
            <td colSpan={data[0].length}><Heading1>Prism Tables</Heading1></td>
          </tr>
          <tr className={clsx.tr}>
            {columnNames.map((col, idx) => <TH idx={idx} label={col} onClick={() => handleSort(idx)} />)}
          </tr>
        </thead>
        <tbody>
          {data.map(row => <tr>{row.map(col => <td>{col}</td>)}</tr>)}
        </tbody>
        <tfoot>
          <td colSpan={data[0].length} className="text-white font-light text-xxs uppercase tracking-wide bg-blue-800">Averages</td>
          <tr>
            <th>Prism Team</th>
            <td>Louisiana?</td>
            <td>5</td>
            <td>0</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};



