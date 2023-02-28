import { PhotoIcon } from '@prism2/icons-react/24/solid';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Experiment = (args:HTMLAttributes<HTMLDivElement> & {
  previous: string,
  current: string,
  label?: string,
  containerClass?: string,
  'data-headlessui-state'?: string,
}) => {

  // the same as above but in typescript as a one liner
  const byAlpha = (a:string, b:string) => a > b ? 1 : -1;
  const toAlpha = (cx:string) => cx.split(' ').sort(byAlpha).join(' ');
  let title = toAlpha(twMerge(args.current)) || args.label || 'Element';
  let current = toAlpha(twMerge(args.current)).split(' ');
  let utilities = [args.label, ...current].filter(Boolean);
  // let titleTag = 'p-1 px-4 tracking-tighter ring-1 rounded-full bg-blue-50 inline-block';
  let titleTag = 'p-1 px-2 rounded-sm bg-blue-700 text-white font-medium';
  let utilityTag = 'rounded-full py-0.5 px-2 bg-slate-50 ring-1 ring-slate-200';
  let divTag = toAlpha(twMerge('p-6', args.containerClass));

  let headlessState = args['data-headlessui-state'] || '';
  let headlessStates:string[] = headlessState.split(' ').filter(Boolean);
  return (
    <div className="w-screen flex justify-center">
    <div className='grid grid-cols-2 w-[800px] items-start justify-center'>
        <div className={divTag}>
          <div {...args} className={twMerge('shadow p-4 icons:w-[1em] flex gap-4', twMerge(args.className))}>
              <div className='space-y-1'>
                <div className="text-xs uppercase font-semibold tracking-loose opacity-60">
                  Kicker Text opacity-60
                </div>
                <div className='font-medium leading-5 flex flex-wrap'>{title.split(' ').map(word =>
                  <div className='whitespace-nowrap'>{word}&nbsp;</div>,
                )}</div>
                <div className="opacity-75 text-sm font-normal">This is subtle opacity-75</div>
                <div className="opacity-50 text-xs font-normal">This is muted opacity-50</div>
              </div>
              <PhotoIcon className='ml-auto'/>
          </div>

        </div>
        <div className='p-6 space-y-4'>
          <div className='font-mono leading-snug tracking-tighter font-bold flex flex-wrap gap-2'>
            {utilities.map(c => (
              <div className={titleTag}>{c}</div>
            ))}
          </div>
          <div className='font-mono text-xs leading-snug text-gray-500 flex gap-1 flex-wrap'>
            {toAlpha(twMerge(args.className))?.split(' ').map((c) => (
              <span className={utilityTag}>{c}</span>
            ))}
            {headlessStates.length > 0 && headlessStates.map(txt => (
              <span className={twMerge(utilityTag, 'bg-orange-100 ring-orange-200 text-orange-700')}>{txt}</span>
            ))}
          </div>

        </div>
    </div>
  </div>
  );
};
