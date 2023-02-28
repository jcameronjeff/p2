import React, { useEffect } from 'react';
import {  ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch, SwitchRoot, useToggle } from '.';

/* eslint-disable */
export default {
  title: 'Components/Switch',
  component: Switch,
  subcomponents: {
    'Switch.Group': Switch.Group,
    'Switch.Label': Switch.Label,
    'Switch.Description': Switch.Description,
  },
} as ComponentMeta<typeof SwitchRoot>;


export const Basic:ComponentStory<typeof Switch> = () => {
  const attr = useToggle()
  return <Switch {...attr} />
}

export const WithText:ComponentStory<typeof Switch> = () => {
  const [enabled, setEnabled] = React.useState(false);
  return <div>
        <Switch.Group className='inline-flex gap-5 text-4xl'>
          <Switch.Label className='text-base'>Toggle All</Switch.Label>
          <Switch checked={enabled} onChange={setEnabled}>
            {enabled ? 'on' : 'off'}
          </Switch>
        </Switch.Group>
        </div>
}

export const TestTemplate = (props:any) => {
  const [enabled, setEnabled] = React.useState(true);
  useEffect(() => props.onChange && props.onChange(enabled), [enabled] )
  return (
    <Switch.Group data-testid='group' className='flex justify-between w-120' {...props}>
      <Switch.Label data-testid='label'>{props.label}</Switch.Label>
      <Switch data-testid='switch' className={props.label} checked={enabled} onChange={setEnabled} />
    </Switch.Group>
  )
}

export const Complex:ComponentStory<typeof Switch> = () => {
  const args = {
    id: 'af2e1c-bae91-ef0c23',
    enabled: true,
    options: [
      { label: 'Option One', value: false },
      { label: 'Option Two', value: false },
      { label: 'Option Three', value: false },
    ]
  }
  const [enabled, setEnabled] = React.useState(args.enabled);
  const [options, setOptions] = React.useState<{label:string,value:boolean}[]>(args.options);

  const toggleIndex = (index: number, value: boolean) => setOptions([
    ...options.slice(0, index),
    { ...options[index], value },
    ...options.slice(index+1)
  ])

  const post = () => ({
    id: args.id,
    enabled,
    options: options.map(o => ({...o, value: (!!enabled && o.value) }))
  })

  useEffect(() => { console.log(post())}, [options, enabled])

  return (
      <div className='w-[400px] block space-y-2 divide-y container'>
        {options.map(({label, value}, idx) => (
          <Switch.Group className='flex gap-5 pt-2 w-full justify-between'>
            <Switch.Label>{label}</Switch.Label>
            <Switch disabled={!enabled} checked={!!enabled && value} onChange={(v) => toggleIndex(idx, v)} />
          </Switch.Group>
        ))}
        <Switch.Group className='flex gap-5 pt-2 w-full justify-between'>
          <Switch.Label>Toggle All</Switch.Label>
          <Switch checked={enabled} onChange={setEnabled} />
        </Switch.Group>
      </div>
  );
};


export const KitchenSink:ComponentStory<typeof Switch> = () => {
  const sizes = [
    'text-xxs',
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl'
  ]
  const bgs = [
    'bg-sky-50', 'bg-sky-100', 'bg-sky-200', 'bg-sky-300','bg-sky-400',
    'bg-sky-500','bg-sky-600','bg-sky-700','bg-sky-800','bg-sky-900',
    'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-300','bg-green-400',
    'bg-green-500','bg-green-600','bg-green-700','bg-green-800',
    'bg-yellow-50', 'bg-gold-100', 'bg-yellow-200', 'bg-yellow-300','bg-yellow-400',
    'bg-yellow-500','bg-yellow-600','bg-yellow-700','bg-yellow-800',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300',
    'bg-orange-400','bg-orange-500','bg-orange-600','bg-orange-700','bg-orange-800',
    'bg-indigo-50', 'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300',
    'bg-indigo-400','bg-indigo-500','bg-indigo-600','bg-indigo-700','bg-indigo-800',
  ]

  const _ = Array.from(new Array(sizes.length*bgs.length));
  const attr = _.map((_, i) => useToggle(i%6!==0))

  return (
    <div className='container w-[800px] gap-2 flex justify-center items-center flex-wrap'>
      {bgs.map((size, i) => sizes.map((bg, n) => (
        <Switch className={`${size} ${bg}`} {...attr[i*sizes.length + n]} />
      )))}
    </div>
  )

}

export const Sizing:ComponentStory<typeof Switch> = () => {
  const attr = [0,1,2,3,4,5,6,7].map(() => useToggle(true))
  return (
    <div className='container w-[400px] gap-2 flex justify-center items-center'>
      <Switch {...attr[0]} className='text-xxs' />
      <Switch {...attr[1]} className='text-sm' />
      <Switch {...attr[2]} className='text-base' />
      <Switch {...attr[3]} className='text-lg' />
      <Switch {...attr[4]} className='text-xl' />
      <Switch {...attr[5]} className='text-2xl' />
      <Switch {...attr[6]} className='text-3xl' />
      <Switch {...attr[7]} className='text-4xl' />
    </div>
  )
}


export const Coloring:ComponentStory<typeof Switch> = () => {
  const attr = [0,1,2,3].map(() => useToggle(true))
  return (
    <div className='container w-[400px] gap-2 flex justify-center'>
      <Switch {...attr[0]} className='bg-blue-500' />
      <Switch {...attr[1]} className='bg-green-500' />
      <Switch {...attr[2]} className='bg-orange-500' />
      <Switch {...attr[3]} className='bg-gold-500' />
    </div>
  )
}
