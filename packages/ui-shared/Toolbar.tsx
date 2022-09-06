import React from 'react';
import type { ReactNode } from 'react';

export function Toolbar({children, className}:{children:ReactNode, className?: string}) {
  return (
    <div className={['bg-gray-900 font-regular font-alt tracking-tighter py-2.5 text-white px-4 text-sm', className].join(' ')}>
      <div className=''>{children}</div>
    </div>
  )
}
