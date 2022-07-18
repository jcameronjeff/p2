import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  * as theme from 'tailwindcss/defaultTheme';
import { colors } from './color-export';
import { Button } from '../lib';

export default {
  title: 'Docs/Tokens',
} as ComponentMeta<any>;



const bgs:Partial<{ [key in keyof Pick<typeof colors, 'gray' | 'blue' | 'sky' | 'yellow' | 'red' | 'amber'>]: string[] }> = {
  gray: [
    'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300',
    'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700',
    'bg-gray-800', 'bg-gray-900', 'bg-black',
  ],
  blue: [
    'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300',
    'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700',
    'bg-blue-800', 'bg-blue-900', 'bg-blue-1000',
  ],
  sky: [
    'bg-sky-50', 'bg-sky-100', 'bg-sky-200', 'bg-sky-300',
    'bg-sky-400', 'bg-sky-500', 'bg-sky-600', 'bg-sky-700',
    'bg-sky-800', 'bg-sky-900',
  ],
  yellow: [
    'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300',
    'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700',
    'bg-yellow-800', 'bg-yellow-900',
  ],
  red: [
    'bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300',
    'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700',
    'bg-red-800', 'bg-red-900',
  ],
  amber: [
    'bg-amber-50', 'bg-amber-100', 'bg-amber-200', 'bg-amber-300',
    'bg-amber-400', 'bg-amber-500', 'bg-amber-600', 'bg-amber-700',
    'bg-amber-800', 'bg-amber-900',
  ],
};

let cx = [
  ['text-yellow-500', 'Prism Gold', 'bg-yellow-500 border-yellow-600', 'gold', colors.yellow['500'], 'border-yellow-500'],
  ['text-yellow-600', 'Prism Gold Dark', 'bg-yellow-600 border-yellow-700', 'yellow-dark', colors.yellow['600'], 'border-yellow-600'],
  ['text-sky-500', 'Prism Cerulean', 'bg-sky-500 border-sky-600', 'cerulean', colors.sky['600'], 'border-sky-500'],
  ['text-sky-600', 'Prism Cerulean Dark', 'bg-sky-600 border-sky-700', 'cerulean-dark', colors.yellow['700'], 'border-sky-600'],
  ['text-blue-600', 'Prism Primary Blue', 'bg-blue-600 border-blue-700', 'primary', colors.blue['600'], 'border-blue-600'],
  ['text-blue-700', 'Prism Primary Dark', 'bg-blue-700 border-blue-800', 'primary-dark', colors.blue['700'], 'border-blue-700'],
  ['text-blue-800', 'Prism Navy', 'bg-blue-800 border-blue-900', 'navy', colors.blue['800'], 'border-blue-800'],
  ['text-blue-900', 'Prism Navy Dark', 'bg-blue-900 border-blue-1000', 'navy-dark', colors.blue['900'], 'border-blue-900'],
  ['text-gray-800', 'Prism Body Text', 'bg-gray-800 border-gray-900', 'body', colors.gray['800'], 'border-gray-800'],
  ['text-gray-500', 'Prism Muted Text', 'bg-gray-500 border-gray-600', 'muted', colors.gray['500'], 'border-gray-500'],
  ['text-gray-400', 'Prism Caption Text', 'bg-gray-400 border-gray-500', 'caption', colors.gray['400'], 'border-gray-400'],
  ['text-gray-300', 'Prism Ghost Text', 'bg-gray-300 border-gray-400', 'ghost', colors.gray['300'], 'border-gray-300'],
  ['text-gray-100', 'Prism Surface', 'bg-gray-100 border-gray-200', 'ghost', colors.gray['100'], 'border-gray-100'],
  ['text-teal-600', 'Prism Excellent / 5', 'bg-teal-600 border-sky-200', 'excellent', colors.sky['600'], 'border-teal-600'],
  ['text-emerald-500', 'Prism Good / 4', 'bg-emerald-500 border-sky-200', 'good', colors.sky['600'], 'border-emerald-500'],
  ['text-green-500', 'Prism OK / 3', 'bg-green-500 border-green-500', 'ok', colors.green['600'], 'border-green-500'],
  ['text-gray-300', 'Prism Fine / -', 'bg-gray-300 border-gray-300', 'fine', colors.gray['300'], 'border-gray-300'],
  ['text-yellow-400', 'Prism Warning / 2', 'bg-yellow-400 border-yellow-400', 'warning', colors.blue['400'], 'border-yellow-400'],
  ['text-amber-400', 'Prism Alert / 1', 'bg-amber-400 border-amber-400', 'alert', colors.blue['400'], 'border-amber-400'],
  ['text-red-400', 'Prism Danger / 0', 'bg-red-400 border-red-200', 'danger', colors.red['400'], 'border-red-400'],
];

const Template: ComponentStory<any> = () => (
  <div className='space-y-4 border p-8 prism'>
    <ul className='space-y-1 font-medium tracking-tight'>
      {cx.map(g => (
        <li className={`${g[0]} flex gap-1 items-center`}>
          <div className='font-mono text-xs'>{g[4]}</div>
          <div className='w-20 mx-2'>
            <div className={`text-center px-2 py-0.5 ${g[2]} text-white text-xs rounded`}>{g[0].slice(5, 999)}</div>
          </div>
          <div className='w-40'>{g[1]}</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className='space-y-1'>
            <hr className={`${g[5]} w-32`} />
            <hr className={`${g[5]} border-t-2 w-32`} />
            <hr className={`${g[5]} border-t-4 w-32`} />
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className={`px-2 py-0.5 ${g[2]} text-white text-xs rounded`}>{g[3]}</div>
        </li>
      ))}
    </ul>
    {Object.keys(bgs).map(color => (
      <div>
      <div className='prism-label py-2'>{color}</div>
      <div  className='gap-2 items-center flex'>
        {bgs[`${color}`].map((bg, i) => (
          <div className={`w-16 h-16 flex items-center justify-center rounded-sm shadow-inner text-xxs text-center ${bg} ${i > 4 ? 'text-gray-50' : 'text-gray-900'}`}>{bg.slice(3, 999)}</div>
        ))}
      </div>
    </div>
    ))}
  </div>
);

const Sizes: ComponentStory<any> = () => (
  <div className='p-4 space-y-4'>
    <div className='flex flex-wrap items-center gap-4'>
      {['p-0.5', 'p-1', 'p-1.5', 'p-2', 'p-2.5', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8', 'p-10', 'p-16', 'p-20'].map(c => (
        <div className='flex gap-1 flex-col items-center'>
          <div className={`bg-blue-600 rounded-sm shadow-inner text-xxs text-white ${c}`}>padding of {c}</div>
          <div className="text-xs text-muted">{c}</div>
        </div>
      ))}
    </div>
  </div>
);
export const SizeExamples = Sizes.bind({});
const HeightWidth: ComponentStory<any> = () => (
  <div className='p-4 space-y-4'>
    <div className='flex flex-wrap items-center gap-4'>
    {['h-0.5 w-0.5', 'h-1 w-1', 'h-1.5 w-1.5', 'h-2 w-2', 'h-2.5 w-2.5',
      'h-3 w-3', 'h-4 w-4', 'h-5 w-5', 'h-6 w-6', 'h-8 w-8', 'h-10 w-10',
      'h-12 w-12', 'h-16 w-16', 'h-20 w-20', 'h-20 w-20', 'h-24 w-24',
      'h-32 w-32', 'h-40 w-40',
    ].map(c => (
      <div className='flex gap-1 flex-col items-center'>
        <div className={`bg-blue-600 rounded-sm border-blue-900 shadow-inner text-xxs text-white ${c}`}></div>
        <div className="text-xs text-muted">{c}</div>
      </div>
    ))}
    </div>
    </div>
);
export const HeightAndWidth = HeightWidth.bind({});
const ButtonPadding: ComponentStory<any> = () => (
  <div className='p-4 space-y-4'>
    <div className='flex flex-wrap items-center gap-4'>
    {['p-4 px-8', 'p-4', 'p-2 px-4', 'p-2 px-4 text-sm ', 'p-1 px-2 text-xs '].map(c => (
      <div className='flex gap-1 flex-col items-center'>
        <div className={`bg-yellow-500 rounded-sm shadow-inner text-xx font-semibold text-blue-1000 uppercase ${c}`}>
          Button
        </div>
        <div className="text-xs text-muted">{c}</div>
      </div>
    ))}
    </div>
</div>
);
export const ButtonSizes = ButtonPadding.bind({});

const ButtonSpacing: ComponentStory<any> = () => (
  <div className='p-4 space-y-4'>


    <div className='flex gap-2 items-center'>
      <div className='mr-8 w-12 text-xs text-muted'>
        gap-0
      </div>
      <div className={'flex gap-[-1px]'}>
        <button className='prism-btn transition-all duration-100 border border-1  border-blue-700 border-r-none rounded-r-none'>One</button>
        <button className='prism-btn transition-all duration-100 border-y border-1 border-blue-700  rounded-none'>Two</button>
        <button className='prism-btn transition-all duration-100 border border-1 border-blue-700  rounded-l-none'>Three</button>
      </div>
    </div>
    {['gap-0.5', 'gap-1', 'gap-1.5', 'gap-2', 'gap-4', 'gap-8'].map(gap => (
      <div className='flex gap-2 items-center'>
        <div className='mr-8 w-12 text-xs text-muted'>
          {gap}
        </div>
        <div className={`flex ${gap}`}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </div>
      </div>
    ))}
</div>
);
export const Gaps = ButtonSpacing.bind({});

const TextStyles: ComponentStory<any> = () => (
  <div className='p-4 space-y-8'>

    <div className='flex flex-wrap items-center gap-4'>
      {['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'].map(c => (
        <div className='flex gap-1 flex-col items-center'>
          <div className={`text-gray-700 ${c}`}>{c}</div>
          <div className="text-xs text-muted">{c}</div>
        </div>
      ))}
    </div>
    <div className='flex flex-wrap items-center gap-4'>
      {['font-thin', 'font-light', 'font-medium', 'font-semibold', 'font-bold', 'font-black'].map(c => (
        <div className='flex gap-1 flex-col items-center'>
          <div className={`text-gray-700 ${c}`}>{c}</div>
          <div className="text-xs text-muted">{c}</div>
        </div>
      ))}
    </div>
    <div className='flex flex-wrap items-center gap-4'>
      {['tracking-tighter', 'tracking-tight', 'tracking-normal', 'tracking-wide', 'tracking-wider'].map(c => (
        <div className='flex gap-1 flex-col items-center'>
          <div className={`text-gray-700 ${c}`}>{c}</div>
          <div className="text-xs text-muted">{c}</div>
        </div>
      ))}
    </div>
</div>
);
export const TextStyle = TextStyles.bind({});

const ColorsPallete: ComponentStory<any> = () => (
  <div className='p-4'>


    <div className='items-center gap-4 space-y-4'>

      {Object.entries(colors)
        .filter(i => Object.keys(bgs).includes(i[0]))
        .map(([name, values]) =>
          <>
          <h3 className='prism-heading-3 w-full'>{name}</h3>
          <div className='flex gap-2'>
          {Object.entries(values).map(([key, val], idx) => (
            <div className='flex gap-1 flex-col items-center'>
              <div className={`h-16 w-16 rounded-sm shadow-inner text-xxs text-white ${bgs[name][idx]}`}></div>
              <div className="text-xs text-muted">{name}.{key}</div>
              <div className="text-xs text-muted">{val}</div>
            </div>
          ))}
          </div>
          </>,
        )}
    </div>

  </div>
);
export const Colors = ColorsPallete.bind({});


function RenderKey({ data, name }:{ data: object, name: string }) {
  if (!data) return null;
  let list = Object.entries(data);
  if (!list || list.length < 1) return null;
  return <>
      <thead className='bg-blue-900 text-white'>
        <td colSpan={2} className='font-bold text-sm border-blue-800 p-2'>{name}</td>
      </thead>
      {list.map((i, idx) => (
        <tr className={(idx + 1) % 2 === 0 ? 'bg-gray-100' : ''}>
          <td className='w-24 p-1 px-2 text-xs'>{i[0]}</td>
          <td className='p-1 px-2 text-xs'><code>{JSON.stringify(i[1])}</code></td>
        </tr>
      ))}
    </>;
}
const Keynames = typeof theme === 'object' ? Object.keys(theme) : [];
const TokenTable: ComponentStory<any> = () => (
  <div className='space-y-8 border p-8 prism'>
    <table>
      {Keynames.map(kname => <RenderKey data={theme[kname]} name={kname} />)}
    </table>
  </div>
);

export const ColorSwatches = Template.bind({});
export const DesignTokenTable = TokenTable.bind({});

