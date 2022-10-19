import { forwardRef } from 'react';
import { ExtractProps } from './types';

export function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export type TransitionPropPreset = {
  enter: string,
  enterFrom: string,
  enterTo: string,
  leave: string,
  leaveFrom: string,
  leaveTo: string,
};

export const fadeInOut:TransitionPropPreset = {
  enter: 'transition-all ease-in-out duration-200',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-all ease-in-out duration-200',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export const fadeInDownOutUp:TransitionPropPreset = {
  enter: 'transition-all ease-linear duration-200',
  enterFrom: 'opacity-0 -translate-y-2 scale-y-90',
  enterTo: 'opacity-100 translate-y-0 scale-y-100',
  leave: 'transition-all ease-linear duration-200',
  leaveFrom: 'opacity-100 translate-y-0 scale-y-100',
  leaveTo: 'opacity-0 -translate-y-2 scale-y-90',
};

export const slideUpDown:TransitionPropPreset = {
  // slideUpDown
  enter: 'ease-in-out duration-200',
  enterFrom: 'opacity-0 scale-95 translate-y-8',
  enterTo: 'opacity-100 scale-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95 translate-y-8',
};
export const slideUpDownAlt:TransitionPropPreset = {
  // slideUpDown
  enter: 'ease-in-out duration-200 delay-500',
  enterFrom: 'opacity-0 scale-95 translate-y-1',
  enterTo: 'opacity-100 scale-100 ',
  leave: 'ease-in duration-200 delay-200',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95 translate-y-1',
};


export const slideInRight:TransitionPropPreset = {
  enter: 'ease-in-out duration-200',
  enterFrom: 'translate-x-96 opacity-0',
  enterTo: 'translate-x-0 opacity-100',
  leave: 'transition ease-in-out duration-200 transform',
  leaveFrom: 'translate-x-0 opacity-100',
  leaveTo: 'translate-x-96 opacity-0',
};

export const slideInLeft:TransitionPropPreset = {
  enter: 'ease-in-out duration-200',
  enterFrom: '-translate-x-96 opacity-0',
  enterTo: 'translate-x-0 opacity-100',
  leave: 'transition ease-in-out duration-200 transform',
  leaveFrom: 'translate-x-0 opacity-100',
  leaveTo: '-translate-x-96 opacity-0',
};
export const popInOut:TransitionPropPreset = {
  enter:'transition ease-out duration-100',
  enterFrom:'transform opacity-0 scale-95',
  enterTo:'transform opacity-100 scale-100',
  leave:'transition ease-in duration-75',
  leaveFrom:'transform opacity-100 scale-100',
  leaveTo:'transform opacity-0 scale-95',
};

export const popIn:TransitionPropPreset = {
  enter: 'transition duration-100 ease-out',
  enterFrom: 'transform scale-95 opacity-0',
  enterTo: 'transform scale-100 opacity-100',
  leave: 'transition duration-75 ease-out delay-75',
  leaveFrom: 'transform scale-100 opacity-100',
  leaveTo: 'transform scale-95 opacity-0',
};

export const popInSlow:TransitionPropPreset = {
  enter: 'transition duration-500 ease-out',
  enterFrom: 'transform scale-95 opacity-0',
  enterTo: 'transform scale-100 opacity-100',
  leave: 'transition duration-250 ease-out delay-200',
  leaveFrom: 'transform scale-100 opacity-100',
  leaveTo: 'transform scale-95 opacity-0',
};

export const transitions:TransitionPropPreset[] = [
  slideUpDown,
  fadeInOut,
  slideInRight,
  slideInLeft,
  popIn,
  popInOut,
];

/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */
export function forwardRefWithAs<T extends { name: string; displayName?: string }>(
  component: T,
): T & { displayName: string } {
  return Object.assign(forwardRef(component as unknown as any) as any, {
    displayName: component.displayName ?? component.name,
  });
}

export interface PrismProps {
  className?: string | string[],
  as?: React.ElementType
}

export type WithPrismProps = <
  P extends PrismProps,
  Props extends ExtractProps<React.ComponentType<P>> & P,
>(
  Component: React.ComponentType<P>,
  inject?: Partial<Props & P>
) => (props:Props) => JSX.Element;

export const withPrism:WithPrismProps = (Component, inject) => (props) => {
  function getClass() {
    const ourClass = [inject?.className] || [];
    const theirClass = [props?.className] || [];
    return [...ourClass, ...theirClass].flat().join(' ');
  }
  const attr = {
    className: getClass(),
    as: props?.as || inject?.as || 'div',
  };
  return <Component {...props} {...inject} {...attr} />;
};


export default { fadeInOut, slideUpDown, sleep };

