import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  * as theme from 'tailwindcss/defaultTheme';


export default {
  title: 'Tokens/Colors',
} as ComponentMeta<any>;

const Keynames = Object.keys(theme)

const Template: ComponentStory<any> = ({ defaultIndex }) => (
  <div className='space-y-4 border p-8 prism'>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Gray</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-700 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-800 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gray-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Cerulean (Generated)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#EEF6FB]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#E2F0F9]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#C8E3F3]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#8EC5E7]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#57A9DB]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#2c90cc]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#2579AC]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#206893]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#1A567A]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#123B54]'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Cerulean</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-200 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-500 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-600 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Blue (Generated)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#EBF6FF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#DBEFFF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#BDE1FF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#75C0FF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#33A2FF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#008AFF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#0071D1]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#005ba8]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#005094]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#003766]'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Blue</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Navy (Generated)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#EBF5FF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#DBEDFF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#BDDEFF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#75BAFF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#3399FF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#007FFF]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#0069D1]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#0059B3]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#004A94]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#003468]'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Navy</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-800 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-900 scale-125 ring-1 ring-offset-1'></div>
    </div>


    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Gold (Generated)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFFAEB]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFF6DB]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFEEBD]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFDC75]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFCB33]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#ffc20e]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#D19C00]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#B38500]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#946E00]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#664C00]'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Gold (Base)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-200 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-400 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-500 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-900'></div>
    </div>

    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Abber (saffron)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-200 '></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-500 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-600 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-800 '></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Red (generated)</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFF1EB]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFE6DB]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FFD0BD]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FF9E75]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FF7033]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#FF4C00]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#D13E00]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#c33a00]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#942C00]'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-[#661E00]'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Red</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-200 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-600 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-800 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Green</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-200 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-600 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-800 scale-125 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-green-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Emerald</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-emerald-900'></div>
    </div>
    <div className='flex gap-2 items-center'>
      <div className='w-36'><span className='prism-label'>Teal</span></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-teal-900'></div>
    </div>
    {Keynames.map(kname => (
      <div>
      <h2 className='prism-heading-3 mb-4'>{kname}</h2>
        {Object.keys(theme[kname]).map((key, idx) => (
          <div className='grid grid-cols-2 w-[600px] py-2 border-b-2 border-gray-200'>
            <dl className='prism-label w-96'>{kname}.{key}</dl>
            <dd><code>{`${Object.values(theme[kname])[idx]}`}</code></dd>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Template2: ComponentStory<any> = ({ defaultIndex }) => (
  <div className='space-y-8 border p-8 prism'>
    {Keynames.map(kname => (
      <div>
      <h2 className='prism-heading-3 mb-4'>{kname}</h2>
        {Object.keys(theme[kname]).map((key, idx) => (
          <div className='grid grid-cols-2 w-[600px] py-2 border-b-2 border-gray-200'>
            <dl className='prism-label w-96'>{kname}.{key}</dl>
            <dd><code>{`${Object.values(theme[kname])[idx]}`}</code></dd>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const Basic = Template.bind({});
export const Autoplay = Template.bind({});
