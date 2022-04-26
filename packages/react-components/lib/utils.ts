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


export default { fadeInOut, slideUpDown, sleep };
