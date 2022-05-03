import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  * as theme from 'tailwindcss/defaultTheme';


export default {
  title: 'Tokens/Colors',
} as ComponentMeta<any>;

const Keynames = Object.keys(theme)

const Template: ComponentStory<any> = ({ defaultIndex }) => (
  <div className='space-y-8 border p-8 prism'>
    <h3 className='prism-heading-2 text-blue-600'>blue (primary) </h3>
    <div className='flex gap-4'>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-700 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-800 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-blue-900'></div>
    </div>
    <h3 className='prism-heading-2 text-navy-600'>navy </h3>
    <div className='flex gap-4'>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-200'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-800 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-navy-900 scale-150 ring-1 ring-offset-1'></div>
    </div>
    <h3 className='prism-heading-2 text-sky-600'>sky (cerulean) </h3>
    <div className='flex gap-4'>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-200 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-500 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-600 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-sky-900'></div>
    </div>
    <h3 className='prism-heading-2 text-gold-600'>gold </h3>
    <div className='flex gap-4'>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-200 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-400 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-500 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-600'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-800'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-gold-900'></div>
    </div>
    <h3 className='prism-heading-2 text-amber-600'>amber (saffron) </h3>
    <div className='flex gap-4'>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-200 '></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-500 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-600 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-800 '></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-amber-900'></div>
    </div>
    <h3 className='prism-heading-2 text-red-600'>red (scarlett) </h3>
    <div className='flex gap-4'>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-50'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-100'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-200 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-300'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-400'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-500'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-600 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-700'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-800 scale-150 ring-1 ring-offset-1'></div>
      <div className='w-12 h-12 rounded-sm shadow-inner bg-red-900'></div>
    </div>
    {Keynames.map(kname => (
      <div>
      <h2 className='prism-heading-2 mb-4'>{kname}</h2>
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
      <h2 className='prism-heading-2 mb-4'>{kname}</h2>
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
