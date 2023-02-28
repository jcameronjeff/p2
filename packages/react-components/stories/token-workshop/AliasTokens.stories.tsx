import { PhotoIcon } from '@prism2/icons-react/24/solid';
import {  ComponentMeta, ComponentStoryObj, Story, StoryObj } from '@storybook/react';
import { HTMLAttributes } from 'react';
import { Experiment } from './TokenTemplate';
import './workshop-surfaces.css';

Experiment.displayName = 'SurfaceComponent';

export default {
  title: 'Workshop/Tokens/AliasTokens',
  component: Experiment,
} as ComponentMeta<any>;

export const Base = { args: {
  className: 'surface',
  label: 'base',
} };

export const Active = { args: {
  className: 'surface',
  label: 'surface-active',
  'data-headlessui-state': 'active',
} };

export const ActiveOpen = { args: {
  className: 'surface',
  label: 'surface-active',
  'data-headlessui-state': 'active open',
} };

export const Selected = { args: {
  className: 'surface',
  label: 'surface-selected',
  'data-headlessui-state': 'selected',
} };

export const SelectedActive = { args: {
  className: 'surface',
  label: 'surface-selected-active',
  'data-headlessui-state': 'active selected',
} };
export const ActiveDisabled = { args: {
  className: 'surface',
  label: 'surface-disabled',
  'data-headlessui-state': 'selected active disabled',
} };


export const PrimaryBase = { args: {
  className: 'primary',
  label: 'primary',
} };

export const PrimaryActive = { args: {
  className: 'primary',
  label: 'primary-active',
  'data-headlessui-state': 'active',
} };


export const PrimarySelected = { args: {
  className: 'primary-selected',
  label: 'primary-selected',
  'data-headlessui-state': 'selected',
} };


export const PrimaryActiveDisabled = { args: {
  className: 'primary',
  label: 'primary-disabled',
  disabled: true,
  'data-disabled': true,
  'data-headlessui-state': 'selected active disabled',
} };

export const PrimaryActiveOpen = { args: {
  className: 'primary',
  label: 'primary-active-open',
  'data-headlessui-state': 'active open',
} };
