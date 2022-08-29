import React from 'react';
import type { ReactNode } from 'react';

export function Toolbar({children}:{children:ReactNode}) {
  return (
    <div className='bg-gold-500 font-semibold tracking-tighter py-1 text-white dark:text-black dark:bg-red-500'>
      <div className=''>{children}</div>
    </div>
  )
}
