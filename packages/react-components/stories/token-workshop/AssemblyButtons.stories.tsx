import { ComponentMeta } from '@storybook/react';
import { Experiment } from './TokenTemplate';
import { twMerge } from 'tailwind-merge';

export default {
  title: 'Workshop/Tokens/Buttons',
  component: Experiment,
} as ComponentMeta<any>;


// create an empty array for our args
const argsList:{ className:string, current:string }[] = [];
let sequence = [
  '',
  'icons:w-6 inline-flex items-center gap-2 icons:text-blue-700 icons:flex-shrink-0',
  'bg-blue-900 text-white icons:text-blue-300',
  'rounded font-semibold px-4 py-3 text-lg',
  'w-full icons:ml-auto',
  'bg-white text-blue-700 icons:text-blue-700',
  'outline outline-blue-700 icons:text-current',
  'bg-blue-50',
  'bg-gray-100 text-gray-400 outline-gray-400',
  'bg-white text-blue-700 icons:text-blue-700',
  'outline-current rounded-xs border-current icons:text-current border-l-8',
  'text-red-500',
  'text-green-500',
];



sequence.reduce((acc, item) => {
  let className = twMerge(acc, item);
  argsList.push({ className, current: item });
  return className;
});


export const ContentLayout = { args: argsList[0] };
export const Primary = { args: argsList[1] };
export const ButtonBox = { args: argsList[2] };
export const ButtonBlock = { args: argsList[3] };
export const TextButton = { args: argsList[4] };
export const Outline = { args: argsList[5] };
export const Active = { args: argsList[6] };
export const Disabled = { args: argsList[7] };
export const Message = { args: argsList[9] };
export const MessageError = { args: argsList[10] };
export const MessageSuccess = { args: argsList[11] };



