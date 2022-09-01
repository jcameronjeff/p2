import React, { HTMLAttributes, HTMLProps, JSXElementConstructor, PropsWithChildren } from 'react';


interface PolymorphProps<T extends React.ElementType> extends HTMLAttributes<T> {
  as?: T;
  children?: React.ReactNode;
};

type PolyProps<T extends React.ElementType> = PolymorphProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof PolymorphProps<T>>

export function Tag<T extends React.ElementType = "span">(props: PolyProps<T>) {
  const { children, className, as, ...attr } = props;
  const classes = ['p-2 py-0.5 text-[10px] tracking-tighter ring-1 ring-blue-300/25 shadow-sm shadow-indigo-500/50 rounded-full bg-slate-700', className].join(' ');

  const Component = as || 'span';
  return (
   <Component className={classes} {...attr}>{children}</Component>
  )
}
