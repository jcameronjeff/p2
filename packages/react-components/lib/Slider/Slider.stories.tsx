import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider2 } from './Slider';
import './slider.css';

export default {
  title: 'Components/Slider',
  component: Slider2,

} as ComponentMeta<typeof Slider2>;


const Template: ComponentStory<typeof Slider2> = (args) => {
  const [valueA, setValueA] = React.useState(23);
  const [valueB, setValueB] = React.useState(66);
  return (
    <div className="container max-w-sm">
      <label className='prism-label h-6 flex w-full'>Ranged Inputs</label>
      <div className='relative'>
        <Slider2
          {...args}
          defaultValue={valueA}
          isHighValue={valueA > valueB}
          onChange={(e) => setValueA(parseInt(e.currentTarget.value))} />
        <Slider2
          {...args}
          className='absolute'
          isHighValue={valueA <= valueB}
          defaultValue={valueB}
          onChange={(e) => setValueB(parseInt(e.currentTarget.value))} />
      </div>
    </div>
  );
};

const Simple: ComponentStory<typeof Slider2> = (args) => {
  return <div className="container max-w-sm"><Slider2 {...args} /></div>;
};

export const Basic = Simple.bind({});
Basic.args = {
  defaultValue: 75,
  onChange: (e) => console.log(e.currentTarget.value),
};

export const Controlled = () => {
  const [val, setVal] = React.useState(20);
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <div className="container max-w-sm">
      <Slider2 ref={ref} label="Mileage" value={val} onChange={(e) => setVal(parseInt(e.currentTarget.value))} />
      <Slider2 label="Linked Value" value={val} disabled />
      <Slider2 label="Not Linked" defaultValue={val} disabled /><br />
      <button className='prism-btn text-xs' onClick={() => setVal(80)}>Set to 80</button>
    </div>
  );
};

export const GreaterThan = Simple.bind({});
GreaterThan.args = {
  ...Basic.args,
  label: 'My Range Value',
  invert: true,
};

export const RangeWithin = Template.bind({});
RangeWithin.args = {
  min: 0,
  max: 100,
  invert: true,
};

export const RangeOutside = Template.bind({});
RangeOutside.args = {
  min: 0,
  max: 100,
  onChange: (e) => console.log(e.currentTarget.value),
};

export const MultipleSliders = () => (
  <div className="container max-w-sm">
    <Slider2 label="Value A" defaultValue={30} />
    <Slider2 label="Value B" defaultValue={50} />
    <Slider2 label="Value C" defaultValue={70} />
  </div>
);

export const Labelled = Simple.bind({});
Labelled.args = { ...Basic.args, label: 'Select a Value' };

export const ShowValues = Simple.bind({});
ShowValues.args = { ...Labelled.args, showValues: true };

export const ShowTicks = Simple.bind({});
ShowTicks.args = { ...Labelled.args, showValues: true, ticks: 10 };

export const WithStyling = Simple.bind({});
WithStyling.args = { ...ShowValues.args, className: 'w-[500px]' };

export const Disabled = Simple.bind({});
Disabled.args = { ...ShowValues.args, className: 'w-[500px]', disabled: true };

