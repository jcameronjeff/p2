import { CrossIcon } from '@prism2/icons-react';
import { ExclamationTriangleIcon, MagnifyingGlassCircleIcon } from '@prism2/icons-react/24/outline';
import { PropsWithChildren } from 'react';


const Msg:React.FC<PropsWithChildren<{}>> = (props) => {
  return (
    <div className="flex gap-4 items-start">
      <MagnifyingGlassCircleIcon className='w-8 self-start flex-shrink-0' />
      <div className='text-left space-y-1'>
        {props.children}
      </div>
      <CrossIcon className='w-4 my-2 self-start flex-shrink-0 ml-auto fill-gray-200 hover:fill-gray-500' />
    </div>
  );
};
export function PaperPluginDemo() {
  return (
    <div className=' flex flex-wrap gap-8 items-center justify-center mb-8'>
      {['paper-green', 'paper-blue', 'paper-yellow', 'paper-indigo', 'paper-orange', 'paper-gray', 'paper-slate', 'paper-stone' ].map(i => [
        'shadow-md',
        'border-none shadow',
        'outline headings:text-xl headings:leading-8',
        'outline dark tinted',
        'dark border-none shadow icons:animate-pulse',
        'drop-shadow-lg ring dark',
        'shadow-lg ring',
        'drop-shadow-xl',
        'opacity-50',
        'tinted shadow-lg',
        'outline border-0 border-t-2 border-t-white tinted shadow',
        'outline border ring',
      ].map(x => (
        <div className='space-y-8'>
          <div className="w-400px max-w-[400px] leading-4 h-10">
            <p><small className='font-mono font-xxs tracking-tighter'>.{[i, x].join(' ').split(' ').join(' .')}</small></p>
          </div>
          <div className={`p-4 ${i} ${x} w-[400px] flex items-center gap-4`}>
            <ExclamationTriangleIcon className='w-8 flex-shrink-0' />
            This is a direct child.
            <CrossIcon className='w-4 my-1.5 flex-shrink-0 ml-auto fill-gray-200 hover:fill-gray-500' />
          </div>
          <div className={`p-4 ${i} ${x} w-[400px]`}>
            <Msg>
              <h1 className='text-base tracking-tight leading-8'>Message Title</h1>
              <p className='text-sm'>Plugins can merge their own set of configuration values.
              <small className='px-2'>Yes indeed</small>
              <br />
              </p>
            </Msg>
          </div>
          <div className={`p-4 ${i} ${x} w-[400px]`}>
            <div className="flex gap-4 items-center">
              <MagnifyingGlassCircleIcon className='w-8 flex-shrink-0' />
              <div className='text-left space-y-1'>
                  <small><p>Plugins can merge their own set of configuration values. This message is a one-off.</p></small>
              </div>
              <CrossIcon className='w-4 flex-shrink-0 ml-auto fill-gray-200 hover:fill-gray-500' />
            </div>
          </div>
          <hr className='w-full border-slate-200 border-dotted border-2' />
        </div>
      )))}
      </div>
  );
}
