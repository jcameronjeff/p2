import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import Radio from './Radio';
import { RadioGroup } from '@headlessui/react';

export default {
  title: 'Components/Checkboxes & Radios',
  component: Checkbox,
} as ComponentMeta<any>;




export const Template: ComponentStory<any> = () => {
  return (
    <fieldset>
    <div >
      <div className="prism prism-form-check">
        <Checkbox name='check1'/>
        <label  htmlFor="check1" className="prism prism-label prism-form-check-label inline-block" >
            Default radio
        </label>
      </div>
      <div className="prism prism-form-check">
        <Radio  name='radio1'/>
        <label htmlFor='radio1' className='prism-label prism-form-check-label inline-block'> Default</label>
      </div>
    </div>
    </fieldset>
  );
};

export const NormalHTML: ComponentStory<any> = () => {

  const [current, setCurrent] = React.useState<string>('no selection');
  function updateState(evt:React.ChangeEvent<HTMLInputElement>) {
    setCurrent(evt.currentTarget.value);
  }
  return (
      <div className='prism'>
        <h2>{current}</h2>
        <fieldset>
          <input type="radio" id="contactChoice1" name="contact" value="email" onChange={updateState} />
          <label htmlFor="Choice1">Email</label>
          <input type="radio" id="contactChoice2" name="contact" value="phone" onChange={updateState} />
          <label htmlFor="Choice2">Phone</label>
          <input type="radio" id="contactChoice3" name="contact" value="mail" onChange={updateState} />
          <label htmlFor="Choice3">Mail</label>

        </fieldset>
    </div>
  );
};

interface HUIArgs {
  items:string[],
  title?: string,
  inline: boolean
}
const HeadlessUIExample: ComponentStory<any> = (args:HUIArgs) => {
  const { items, title, inline } = args;

  let [plan, setPlan] = useState(items[0]);

  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label className='prism-label'>{title || 'Plan'}</RadioGroup.Label>
      <div className={inline ? 'flex gap-4' : ''}>
      {items.map(item => (
        <RadioGroup.Option value={item}>
          {({ checked }) => (
            <label className='prism-radio-option' htmlFor={item}>
              <input name={item} type='radio' className='prism-form-radio transition duration-200' checked={checked} />
              <div className='capitalize'>{item}</div>
            </label>
          )}
        </RadioGroup.Option>
      ))}
      </div>
    </RadioGroup>
  );
};


export const HUI = HeadlessUIExample.bind({});
HUI.args = {
  title: 'Plan Options',
  items: ['business', 'pro', 'deluxe'],
  inline: false,
};
