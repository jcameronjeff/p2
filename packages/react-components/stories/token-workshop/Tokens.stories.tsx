import { PhotoIcon } from '@prism2/icons-react/24/solid';
import {  ComponentMeta, ComponentStoryObj, Story, StoryObj } from '@storybook/react';
import { HTMLAttributes } from 'react';
import { Experiment } from './TokenTemplate';


export default {
  title: 'Workshop/Tokens/Surfaces',
  component: Experiment,
} as ComponentMeta<any>;


export const Base = { args: {
  className: 'text-black',
  label: 'base',
} };
export const BaseActive = { args: {
  className: 'text-black bg-blue-50',
  label: 'base-active',
} };
export const BaseSelected = { args: {
  className: 'text-white bg-blue-900',
  label: 'base-selected',
} };
export const BaseDisabled = { args: {
  className: 'text-gray-400',
  label: 'base-disabled',
} };

export const Surface = { args: {
  className: 'bg-white text-gray-900',
  label: 'surface',
} };
export const SurfaceActive = { args: {
  className: 'bg-blue-50 text-gray-900',
  label: 'surface-active',
} };
export const SurfaceSelected:StoryObj<typeof Experiment> = {
  args: {
    className: 'bg-blue-900 text-white',
    label: 'surface-selected',
  },
};
export const SurfaceMuted = { args: {
  className: 'bg-white text-gray-400',
  label: 'surface-disabled',
} };
export const SurfaceDisabled = { args: {
  className: 'bg-gray-100 text-gray-400',
  label: 'surface-disabled-alt',
} };

export const PrimaryContainer = { args: {
  className: 'bg-blue-700 text-white',
  label: 'primary-container',
} };
export const PrimaryContainerSelected = { args: {
  className: 'bg-blue-900 text-white',
  label: 'primary-container-selected',
} };
export const PrimaryContainerActive = { args: {
  className: 'bg-blue-600 text-white',
  label: 'primary-container-active',
} };
export const PrimaryContainerDisabled = { args: {
  className: 'bg-gray-100 text-gray-400',
  label: 'primary-container-disabled',
} };

export const Primary = { args: {
  className: 'text-blue-700 font-semibold',
  label: 'primary',
} };
export const PrimaryActive = { args: {
  className: 'text-blue-700 bg-blue-50 font-semibold',
  label: 'primary-active',
} };
export const PrimarySelected = { args: {
  className: 'text-blue-900 font-semibold',
  label: 'primary-selected',
} };
export const PrimaryDisabled = { args: {
  className: 'bg-transparent text-gray-400 font-semibold',
  label: 'primary-disabled',
} };




