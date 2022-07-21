import {  ComponentMeta } from '@storybook/react';

export default {
  title: 'Demo/Scratchpad',
} as ComponentMeta<any>;

let ipsum2 = 'Nullam dignissim diam vitae quam consectetur.';
let ipsum3 = 'Curabitur sit amet ligula lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.';

const lorem = (n:number) => Array.from(new Array(n)).map(() => ipsum3);

/**
 * @title Design Tokens Experiment
 *
 * @todo - review token specimens, padding, h*w, gaps, font styles.
 * @todo - show experiment starting point
 * @todo - create a "card" effect
 * @todo - review "flex" layouts.
 */

export const Experiment = () => (
  <div className='p-4 rounded-lg space-y-0.5 bg-white border'>
    <h1 className='text-black'>
      Good Morning!
    </h1>
    <p className='font-bold text-gray-600'>
      Let's design with tokens
    </p>
    <p className='text-xs text-gray-300'>
      {lorem(3)}
    </p>
  </div>
);


