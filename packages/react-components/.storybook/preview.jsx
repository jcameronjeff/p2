import '../lib/styles/base.css';
import '../lib/styles/fonts.css';
import '../lib/styles/components.css';
import React from 'react';
import { Button } from '../lib'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => <div style={{padding: '0rem 3rem'}}><div className='flex justify-center gap-2'>
    <Story /></div></div>
];
