import React, { HTMLAttributes } from 'react';
import { ClipboardIcon, InfoIcon, StarFullIcon  } from '@prism2/icons-react/prism';

interface PolymorphProps<T extends React.ElementType> extends HTMLAttributes<T> {
  as?: T;
  children?: React.ReactNode;
  language?: string
}

type PolyProps<T extends React.ElementType> =
  PolymorphProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof PolymorphProps<T>>;

export function Code(props: React.HTMLAttributes<HTMLPreElement> & { language?: string }) {
  const { children, className, language, ...attr } = props;

  return (
    <div className="text-left rounded shadow-sm overflow-hidden border border-gray-100 text-xs">
      <div className="bg-gray-50 border-b border-gray-100 text-xxs bg-gradient-to-b from-white tracking-tighter text-center p-4 py-2 text-gray-600 flex justify-between">
          <div className='font-semibold text-gray-400'>Filename.tsx</div>
          <div className='flex gap-2.5 text-gray-300'>
            <ClipboardIcon className='h-3' />
            <InfoIcon className='h-3' />
            <StarFullIcon className='h-3' />
          </div>
        </div>
        <pre className='p-2 px-8'>{children}</pre>
    </div>
  );
}

