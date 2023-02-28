import { ComponentMeta } from '@storybook/react';
import { Experiment } from './TokenTemplate';
import { twMerge } from 'tailwind-merge';

export default {
  title: 'Workshop/Tokens/Inputs',
  component: Experiment,
} as ComponentMeta<any>;


// create an empty array for our args
const argsList:{ className:string, current:string }[] = [];
let sequence = [
  '',
  'icons:w-6 flex items-center gap-2 icons:ml-auto text-lg',
  'bg-white p-2 px-3 rounded',
  'ring-[1px] ring-gray-400',
  'ring ring-blue-600',
  'ring-[1px] ring-gray-400 bg-gray-100 text-gray-400',
  'bg-white text-gray-300 icons:text-gray-900',
  'ring-red-400 bg-white icons:text-red-400 text-gray-900 ',
  'ring-green-500 !bg-white icons:text-green-500',
];



sequence.reduce((acc, item) => {
  let className = twMerge(acc, item);
  argsList.push({ className, current: item });
  return className;
});


export const InputLayout = { args: argsList[0] };
export const InputSurface = { args: argsList[1] };
export const InputDecoration = { args: argsList[2] };
export const InputFocus = { args: argsList[3] };
export const InputSurfaceDisabled = { args: argsList[4] };
export const InputPlaceholder = { args: argsList[5] };
export const InputError = { args: argsList[6] };
export const InputSuccess = { args: argsList[7] };
export const Workshop8 = { args: argsList[8] };
export const Workshop9 = { args: argsList[9] };
export const Workshop10 = { args: argsList[10] };



