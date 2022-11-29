import { Menu, Transition } from '@headlessui/react';
import { popIn } from '../utils';
import { HTMLAttributes, ReactNode } from 'react';
import { ExtractProps } from '../types';
import { IndicatorChevron } from '../Accordion';


export const PMenu = (props:ExtractProps<typeof Menu>) => {
  let attr = {
    ...props,
    className: [
      'relative inline-block',
      props.className,
    ].join(' '),
  };
  return <Menu as='div' {...attr} />;
};

export const MenuButton = ({ children, ...props }:ExtractProps<typeof Menu.Button> & { children?: ReactNode }) => {
  let attr = {
    ...props,
    className: [
      'prism-btn',
      props.className,
    ].join(' '),
  };
  return (
    <Menu.Button as='div' {...attr}>
      {children}
      <IndicatorChevron />
    </Menu.Button>
  );
};

export const MenuItems = (props:ExtractProps<typeof Menu.Items>) => {
  let attrs = {
    ...props,
    className: [
      'absolute right-0 min-w-full origin-top-right',
      'divide-y divide-gray-100 bg-white',
      'rounded-xs shadow-sm border focus:outline-none',
      props.className,
    ].join(' '),
  };
  return (
    <Transition {...popIn}>
      <Menu.Items as='div' {...attrs} />
    </Transition>
  );
};

export const MenuItem = (props:ExtractProps<typeof Menu.Item>) => {
  let attrs = {
    ...props,
    className: [
      'ui-active:bg-gray-50 ui-selected:bg-blue-200 ui-active:text-blue-700',
      'p-1 pr-2 items-center rounded-xs gap-2',
      'disabled:grayscale',
      'group text-blue-600 flex w-full hover:bg-gray-50 not-disabled:cursor-pointer',
      'text-sm whitespace-nowrap font-medium icons:h-[1em]',
      props.className,
    ].join(' '),
  };
  return <Menu.Item as='button' {...attrs} />;
};

export const MenuSection = (props:HTMLAttributes<HTMLDivElement>) => <div className='p-1'>{props.children}</div>;
