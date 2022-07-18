import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  * as theme from 'tailwindcss/defaultTheme';
import { colors } from './color-export';
import { Button } from '../lib';

export default {
  title: 'Demo/BoxChoiceTokens',
} as ComponentMeta<any>;


let ipsum2 = 'Nullam dignissim diam vitae quam consectetur.';
let ipsum3 = 'Curabitur sit amet ligula lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.';

const combinations = [
  { bg: 'bg-blue-700', title: 'text-white', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-900' },
  { bg: 'bg-blue-900', title: 'text-blue-50', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-700' },
  { bg: 'bg-blue-1000', title: 'text-blue-50', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-800' },
  { bg: 'bg-yellow-500', title: 'text-gray-900', body: 'text-yellow-900', caption: 'text-yellow-700',  border: 'border-yellow-700' },
  { bg: 'bg-gray-500', title: 'text-gray-50', body: 'text-gray-200', caption: 'text-gray-300',  border: 'border-gray-700' },
  { bg: 'bg-gray-200', title: 'text-gray-900', body: 'text-gray-600', caption: 'text-gray-400',  border: 'border-gray-400' },
  { bg: 'bg-yellow-50', title: 'text-yellow-900', body: 'text-yellow-800', caption: 'text-yellow-500',  border: 'border-yellow-100' },
  { bg: 'bg-green-50', title: 'text-green-900', body: 'text-green-800', caption: 'text-green-600',  border: 'border-green-100' },
  { bg: 'bg-gray-50', title: 'text-green-900', body: 'text-gray-500', caption: 'text-gray-400',  border: 'border-green-200' },
  { bg: 'bg-ocean-50', title: 'text-ocean-900', body: 'text-ocean-800', caption: 'text-ocean-600',  border: 'border-ocean-100' },
  { bg: 'bg-gray-50', title: 'text-red-900', body: 'text-gray-500', caption: 'text-gray-400',  border: 'border-red-200' },
  { bg: 'bg-red-50', title: 'text-red-900', body: 'text-red-800', caption: 'text-red-400',  border: 'border-red-100' },
  { bg: 'bg-red-700', title: 'text-red-50', body: 'text-red-100', caption: 'text-red-400',  border: 'border-red-500' },
];
const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
);
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
export const ChoiceTokenSample = Combos.bind({});
