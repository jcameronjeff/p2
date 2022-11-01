import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Slider2 } from '../lib';



export default {
  title: 'Components/Progress',
  component: Slider2,
} as ComponentMeta<any>;


export const Controlled = () => {
  const [val, setVal] = React.useState(20);
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <div className="container max-w-sm justify-center space-y-4">

      <progress max={100} value={val} className='block w-full'
      />
      <Slider2
        ref={ref}
        className='w-96 mx-auto'
        value={val}
        showValues
        onChange={(e) => setVal(parseInt(e.currentTarget.value))}
      /><br />

      <h1 className='prism-heading-1 text-center'>Current score is {val}</h1>
      <div className="flex mx-auto gap-2 justify-center">

      {[0, 25, 50, 75, 100].map((amt, k) => (
        <button className='prism-btn text-xs' onClick={() => setVal(amt)}>
          Set to {amt}
        </button>
      ))}
      </div>
    </div>
  );
};
