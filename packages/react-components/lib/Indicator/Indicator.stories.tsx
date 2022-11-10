import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Indicator, Flag } from './Indicator';

export default {
  title: 'Components/Indicator',
  component: Indicator,
  subcomponents: { Indicator, Flag },
} as ComponentMeta<typeof Indicator>;


const IndicatorLights: ComponentStory<typeof Indicator> = (args) => {
  return <Indicator {...args} />;
};


export const AuctionLights: ComponentStory<typeof Indicator> = () => {
  return (
    <>
      <div className='container w-[400px] gap-4 flex justify-center mb-4'>
        <IndicatorLights className='asis' />
        <IndicatorLights className='caution' />
        <IndicatorLights className='' />
        <IndicatorLights className='rounded-none' />
      </div>
      <div className='container w-[400px] gap-4 flex justify-center'>
        <IndicatorLights className='bg-red-500' />
        <IndicatorLights className='bg-yellow-500' />
        <IndicatorLights className='bg-green-300' />
        <IndicatorLights className='bg-sky-500 rounded-none' />
      </div>
    </>
  );
};
export const RibbonFlags: ComponentStory<typeof Flag> = () => {
  return (
    <div>
      <Flag>As-Is</Flag>
      <Flag danger>My Label</Flag>
      <Flag colorClass='bg-gold-300 text-black'>Caution</Flag>
      <Flag>Guarantee</Flag>
    </div>
  );
};

export const SingleIndicator = IndicatorLights.bind({});
SingleIndicator.args = {
  variant: 'asis',
};


const Flags: ComponentStory<typeof Flag> = (args) => <Flag {...args}>{args.children}</Flag>;

export const SingleFlag = Flags.bind({});
SingleFlag.args = {
  children: 'As-Is',
};
export const CustomFlag = Flags.bind({});
CustomFlag.args = {
  danger: true,
  children: 'Custom',
  colorClass: 'bg-orange-300 text-white',
};



// export const CornerRibbon: ComponentStory<typeof Flag> = (...props) => {

//   return (
//     <div className='corner-ribbon-wrapper inline-block border border-black w-24 h-24'>
//       <Flag className='-rotate-45 transform'>AS-is</Flag>
//     </div>
//   );
// };
