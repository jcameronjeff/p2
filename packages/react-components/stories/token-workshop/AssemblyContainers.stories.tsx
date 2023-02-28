import {  ComponentMeta } from '@storybook/react';
import { Experiment } from './TokenTemplate';


export default {
  title: 'Workshop/Tokens/Containers',
  component: Experiment,
} as ComponentMeta<any>;


export const Base = { args: {
  className: 'text-black bg-gray-50 inline-flex p-0',
  label: 'base',
  containerClass: 'bg-white [&>div]:shadow [&>div]:inline-flex [&>div]:bg-gray-50 [&>div]:items-center ',
} };


export const Snug = { args: {
  className: 'p-0.5',
  label: 'container-snug',
  containerClass: Base.args.containerClass,
} };

export const Tighter = { args: {
  className: 'p-1',
  label: 'container-tighter',
  containerClass: Base.args.containerClass,
} };

export const Tight = { args: {
  className: 'p-2',
  label: 'container-tight',
  containerClass: Base.args.containerClass,
} };

export const TargetTighter = { args: {
  className: 'p-0.5 px-2 text-xs',
  label: 'target-tighter',
  containerClass: Base.args.containerClass,
} };

export const TargetTight = { args: {
  className: 'p-1 px-4 text-sm',
  label: 'target-tight',
  containerClass: Base.args.containerClass,
} };

export const Target = { args: {
  className: 'p-2 px-4 text-base',
  label: 'target',
  containerClass: Base.args.containerClass,
} };

export const TargetLoose = { args: {
  className: 'p-4 text-lg',
  label: 'target-loose',
  containerClass: Base.args.containerClass,
} };
