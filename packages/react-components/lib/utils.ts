import { forwardRef } from 'react';

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

export const transitions:TransitionPropPreset[] = [{
  enter: 'ease-out duration-100',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'ease-in duration-1000',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
}, {
  enter: 'ease-in-out duration-200',
  enterFrom: 'opacity-0 scale-95 translate-y-8',
  enterTo: 'opacity-100 scale-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95 translate-y-8',
}, {
  enter: 'ease-in-out duration-1000 ',
  enterFrom: 'opacity-100 translate-x-[500px]',
  enterTo: 'opacity-100 translate-x-0',
  leave: 'ease-in duration-1000 ',
  leaveFrom: 'opacity-100 translate-x-0',
  leaveTo: 'opacity-100 translate-x-[500px]',
}, {
  enter: 'transition ease-in-out duration-200 transform',
  enterFrom: 'translate-x-full',
  enterTo: 'translate-x-0',
  leave: 'transition ease-in-out duration-200 transform',
  leaveFrom: 'translate-x-0',
  leaveTo: 'translate-x-full',
}, {
  enter: 'transition-opacity ease-linear duration-200',
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leave: 'transition-opacity ease-linear duration-200',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
}, {
  enter: 'transition ease-in-out duration-200 transform',
  enterFrom: 'translate-x-[400px] opacity-0',
  enterTo: 'translate-x-0 opacity-100',
  leave: 'transition ease-in-out duration-200 transform',
  leaveFrom: 'translate-x-0 opacity-100',
  leaveTo: 'translate-x-[400px] opacity-0',
}];

export const fadeInOut = transitions[4];
export const slideUpDown = transitions[1];


export const slideInRight = transitions[5];

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

export default { fadeInOut, slideUpDown, sleep };
