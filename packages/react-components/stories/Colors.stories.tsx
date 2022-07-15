import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  * as theme from 'tailwindcss/defaultTheme';
import { colors } from './color-export';
import { Button } from '../lib';

export default {
  title: 'Patterns/Colors',
} as ComponentMeta<any>;

const Keynames = typeof theme === 'object' ? Object.keys(theme) : [];

const bgs = {
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
  gold: [
    'bg-gold-50', 'bg-gold-100', 'bg-gold-200', 'bg-gold-300',
    'bg-gold-400', 'bg-gold-500', 'bg-gold-600', 'bg-gold-700',
    'bg-gold-800', 'bg-gold-900',
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
  ['text-gold-500', 'Prism Gold', 'bg-gold-500 border-gold-600', 'gold', colors.yellow['500'], 'border-gold-500'],
  ['text-gold-600', 'Prism Gold Dark', 'bg-gold-600 border-gold-700', 'gold-dark', colors.yellow['600'], 'border-gold-600'],
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
  ['text-gold-400', 'Prism Warning / 2', 'bg-gold-400 border-gold-400', 'warning', colors.blue['400'], 'border-gold-400'],
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


const combinations = [
  { bg: 'bg-blue-700', title: 'text-white', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-900' },
  { bg: 'bg-blue-900', title: 'text-blue-50', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-700' },
  { bg: 'bg-blue-1000', title: 'text-blue-50', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-800' },
  { bg: 'bg-gold-500', title: 'text-gray-900', body: 'text-gold-900', caption: 'text-gold-700',  border: 'border-gold-700' },
  { bg: 'bg-gray-500', title: 'text-gray-50', body: 'text-gray-200', caption: 'text-gray-300',  border: 'border-gray-700' },
  { bg: 'bg-gray-200', title: 'text-gray-900', body: 'text-gray-600', caption: 'text-gray-400',  border: 'border-gray-400' },
  { bg: 'bg-gold-50', title: 'text-gold-900', body: 'text-gold-800', caption: 'text-gold-500',  border: 'border-gold-100' },
  { bg: 'bg-green-50', title: 'text-green-900', body: 'text-green-800', caption: 'text-green-600',  border: 'border-green-100' },
  { bg: 'bg-gray-50', title: 'text-green-900', body: 'text-gray-500', caption: 'text-gray-400',  border: 'border-green-200' },
  { bg: 'bg-ocean-50', title: 'text-ocean-900', body: 'text-ocean-800', caption: 'text-ocean-600',  border: 'border-ocean-100' },
  { bg: 'bg-gray-50', title: 'text-red-900', body: 'text-gray-500', caption: 'text-gray-400',  border: 'border-red-200' },
  { bg: 'bg-red-50', title: 'text-red-900', body: 'text-red-800', caption: 'text-red-400',  border: 'border-red-100' },
  { bg: 'bg-red-700', title: 'text-red-50', body: 'text-red-100', caption: 'text-red-400',  border: 'border-red-500' },
];

let ipsum2 = 'Nullam dignissim diam vitae quam consectetur.';
let ipsum3 = 'Curabitur sit amet ligula lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
);
const Combos: ComponentStory<any> = () => (
  <div className='space-y-4 flex flex-wrap gap-2 justify-center p-8'>
    {combinations.map(i => (
      <div className='flex w-full gap-16 justify-between items-center'>
        <div className={`p-4 pl-2 pr-4 w-[400px] rounded-sm ${i.bg} ${i.body} border-l-4 ${i.border} shadow-sm hover:ring-2 ring-gray-400 transition-all duration-100 cursor-pointer active:scale-[98%]`}>
          <div className='grid grid-cols-[min-content,1fr] items-top gap-x-2 gap-y-1'>
            <div className='flex items-center animate-pulse'>
              <Icon />
            </div>
            <div className='flex items-center'>
              <h3 className={`font-bold text-base ${i.title}`}>Example Box Variant XOXO</h3>
            </div>
            <div />
            <div className='col-span-1'>
              <p className='text-xs'>{ipsum3}</p>
            </div>
            <div />
            <div className='col-span-1'>
              <p className={`text-xxs ${i.caption}`}>{ipsum2}</p>
            </div>
          </div>
        </div>
        <div className='text-xs leading-[12px]'>
          {['bg', 'border', 'title', 'body', 'caption'].map(k => (
            <div className='flex gap-2'>
              <div className='text-muted w-12'>{k}</div>
              <div className={'font-mono font-semibold w-32'}>{i[k]}</div>
              <div className={`font-mono font-semibold w-32 ${i[k]}`}>{i[k]}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Sizes: ComponentStory<any> = () => (
  <div className='space-y-8 p-4'>

    <h1 className='prism-heading-1'>Padding</h1>
    <div className='flex flex-wrap items-center gap-4'>
      {['p-0.5', 'p-1', 'p-1.5', 'p-2', 'p-2.5', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8', 'p-10', 'p-16', 'p-20'].map(c => (
        <div className='flex gap-1 flex-col items-center'>
          <div className={`bg-blue-600 rounded-sm shadow-inner text-xxs text-white ${c}`}></div>
          <div className="text-xs text-muted">{c}</div>
        </div>
      ))}
    </div>

    <h1 className='pt-8 prism-heading-1 border-b'>Sizing (height / width)</h1>
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



    <h1 className='pt-8 prism-heading-1 border-b'>Button Padding</h1>
    <div className='flex flex-wrap items-center gap-4'>
    {['p-4 px-8', 'p-4', 'p-2 px-4', 'p-2 px-4 text-sm ', 'p-1 px-2 text-xs '].map(c => (
      <div className='flex gap-1 flex-col items-center'>
        <div className={`bg-gold-500 rounded-sm shadow-inner text-xx font-semibold text-blue-1000 uppercase ${c}`}>
          Button
        </div>
        <div className="text-xs text-muted">{c}</div>
      </div>
    ))}
    </div>



    <h1 className='pt-8 prism-heading-1 border-b'>Button Spacing</h1>
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
export const SizeExamples = Sizes.bind({});



const BoxToken: ComponentStory<any> = (args) => (
  <div className='w-full flex flex-wrap gap-8 justify-around  items-center'>
    {/* <div className='space-y-8'> */}
      <div className={`p-4 pl-2 pr-4 w-[400px] rounded-sm ${args.bg} ${args.body} border-l-4 ${args.border} shadow-sm hover:ring-2 ring-gray-400 transition-all duration-100 cursor-pointer active:scale-[98%]`}>
        <div className='grid grid-cols-[min-content,1fr] items-top gap-x-2 gap-y-1'>
          <div className='flex items-center animate-pulse'>
            <Icon />
          </div>
          <div className='flex items-center'>
            <h3 className={`font-bold text-base ${args.title}`}>Example Box Variant</h3>
          </div>
          <div />
          <div className='col-span-1'>
            <p className='text-xs'>{ipsum3}</p>
          </div>
          <div />
          <div className='col-span-1'>
            <p className={`text-xxs ${args.caption}`}>{ipsum2}</p>
          </div>
        </div>
      </div>
      <div className='text-xs leading-[12px]'>
        {['bg', 'border', 'title', 'body', 'caption'].map(k => (
          <div className='flex gap-2'>
            <div className='text-muted w-12'>{k}</div>
            <div className={'font-mono font-semibold w-32'}>{args[k]}</div>
            <div className={`font-mono font-semibold w-32 ${args[k]}`}>{args[k]}</div>
          </div>
        ))}
      </div>
    {/* </div> */}
  </div>
);
export const BoxPrimary0 = BoxToken.bind({});
BoxPrimary0.args = combinations[0];
export const BoxPrimary1 = BoxToken.bind({});
BoxPrimary1.args = combinations[1];
export const BoxPrimary2 = BoxToken.bind({});
BoxPrimary2.args = combinations[2];
export const BoxPrimary3 = BoxToken.bind({});
BoxPrimary3.args = combinations[3];
export const BoxPrimary4 = BoxToken.bind({});
BoxPrimary4.args = combinations[4];
export const BoxPrimary5 = BoxToken.bind({});
BoxPrimary5.args = combinations[5];
export const BoxPrimary6 = BoxToken.bind({});
BoxPrimary6.args = combinations[6];
export const BoxPrimary7 = BoxToken.bind({});
BoxPrimary7.args = combinations[7];

const TokenTable: ComponentStory<any> = () => (
  <div className='space-y-8 border p-8 prism'>

    <table>
    {Keynames.map(kname => (
      <>
      <thead className='bg-blue-900 text-white'>
        <td colSpan={2} className='font-bold text-sm border-blue-800 p-2'>{kname}</td>
      </thead>
      {typeof theme === 'object' && Object.keys(theme[kname]).map((key, idx) => (
        <tr>
          <td className='p-1 px-2 text-xs'>{kname}.{key}</td>
          <td className='p-1 px-2 text-xs'><code>{`${!!theme ? Object.keys(theme[kname])[idx] : ''}`}</code></td>
        </tr>
      ))}
      </>
    ))}
    </table>
  </div>
);

export const ColorSwatches = Template.bind({});
export const DesignTokenTable = TokenTable.bind({});
export const ChoiceTokenSample = Combos.bind({});
