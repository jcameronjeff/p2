
import React from 'react';

export const parameters = {

  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    source: {
      type: 'code',
    },
  },
  controls: {
    controls: { expanded: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      boolean: /(show|appear)$/i
    },
  },
}

export const decorators = [
  (Canvas) => (
    <div className='
      flex flex-col bg-blue-300
      items-center w-full justify-center
    '>
      <Canvas />
    </div>
  ),
];
