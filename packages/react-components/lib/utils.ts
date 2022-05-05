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
  leave: 'ease-in duration-200 delay-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
}, {
  enter: 'ease-in-out duration-100 delay-100',
  enterFrom: 'opacity-0 scale-95 translate-y-8',
  enterTo: 'opacity-100 scale-100',
  leave: 'ease-in duration-100',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95 translate-y-8',
}];

export const fadeInOut = transitions[0];
export const slideUpDown = transitions[1];

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
