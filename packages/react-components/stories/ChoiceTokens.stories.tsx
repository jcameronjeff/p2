import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Demo/Choice Tokens',
} as ComponentMeta<any>;

let ipsum2 = 'Nullam dignissim diam vitae quam consectetur.';
let ipsum3 = 'Curabitur sit amet ligula lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.';

const BoxToken: ComponentStory<any> = (args) => (
  <div className='w-full flex flex-wrap gap-8 justify-around  items-center'>
    {/* <div className='space-y-8'> */}
      <div className={`p-4 pl-2 pr-4 w-[400px] rounded-sm ${args.bg} ${args.body} border-l-4 ${args.border} shadow-sm hover:ring-2 ring-gray-400 transition-all duration-100 cursor-pointer active:scale-[98%]`}>
        <div className='grid grid-cols-[min-content,1fr] items-top gap-x-2 gap-y-1'>
          <div className='flex items-center animate-pulse'>
            <ArrowCircleRightIcon />
          </div>
          <div className='flex items-center'>
            <h3 className={`font-bold text-base ${args.title}`}>Example Box Variant</h3>
          </div>
          <div />
          <div className='col-span-1'>
            <p className='text-xs'>{ipsum3}</p>
          </div>
          <div />
          <div className='col-span-1'>
            <p className={`text-xxs ${args.caption}`}>{ipsum2}</p>
          </div>
        </div>
      </div>
      <div className='text-xs leading-[12px]'>
        {['bg', 'border', 'title', 'body', 'caption'].map(k => (
          <div className='flex gap-2'>
            <div className='text-muted w-12'>{k}</div>
            <div className={'font-mono font-semibold w-32'}>{args[k]}</div>
            <div className={`font-mono font-semibold w-32 ${args[k]}`}>{args[k]}</div>
          </div>
        ))}
      </div>
    {/* </div> */}
  </div>
);

const combinations = [
  { bg: 'bg-blue-700', title: 'text-white', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-900',
    label: 'Primary Blue Box' },
  { bg: 'bg-blue-900', title: 'text-blue-50', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-700',
    label: 'Navy Box' },
  { bg: 'bg-blue-1000', title: 'text-blue-50', body: 'text-blue-100', caption: 'text-blue-400',  border: 'border-blue-800',
    label: 'Navy Dark Box' },
  { bg: 'bg-yellow-500', title: 'text-gray-900', body: 'text-yellow-900', caption: 'text-yellow-700',  border: 'border-yellow-700',
    label: '' },
  { bg: 'bg-gray-500', title: 'text-gray-50', body: 'text-gray-200', caption: 'text-gray-300',  border: 'border-gray-700',
    label: '' },
  { bg: 'bg-gray-200', title: 'text-gray-900', body: 'text-gray-600', caption: 'text-gray-400',  border: 'border-gray-400',
    label: '' },
  { bg: 'bg-yellow-50', title: 'text-yellow-900', body: 'text-yellow-800', caption: 'text-yellow-500',  border: 'border-yellow-100',
    label: '' },
  { bg: 'bg-green-50', title: 'text-green-900', body: 'text-green-800', caption: 'text-green-600',  border: 'border-green-100',
    label: '' },
  { bg: 'bg-gray-50', title: 'text-green-900', body: 'text-gray-500', caption: 'text-gray-400',  border: 'border-green-200',
    label: '' },
  { bg: 'bg-ocean-50', title: 'text-ocean-900', body: 'text-ocean-800', caption: 'text-ocean-600',  border: 'border-ocean-100',
    label: '' },
  { bg: 'bg-gray-50', title: 'text-red-900', body: 'text-gray-500', caption: 'text-gray-400',  border: 'border-red-200',
    label: '' },
  { bg: 'bg-red-50', title: 'text-red-900', body: 'text-red-800', caption: 'text-red-400',  border: 'border-red-100',
    label: '' },
  { bg: 'bg-red-700', title: 'text-red-50', body: 'text-red-100', caption: 'text-red-400',  border: 'border-red-500',
    label: '' },
];

export const PrimaryBlue = BoxToken.bind({});
PrimaryBlue.args = combinations[0];
export const NavyBox = BoxToken.bind({});
NavyBox.args = combinations[1];
export const NavyDarkBox = BoxToken.bind({});
NavyDarkBox.args = combinations[2];
export const WarningBoxDark = BoxToken.bind({});
WarningBoxDark.args = combinations[3];
export const NeutralDarkBox = BoxToken.bind({});
NeutralDarkBox.args = combinations[4];
export const NeutralLightBox = BoxToken.bind({});
NeutralLightBox.args = combinations[5];
export const WarningBox = BoxToken.bind({});
WarningBox.args = combinations[6];
export const SuccessBox = BoxToken.bind({});
SuccessBox.args = combinations[7];
export const SuccessBoxAlternate = BoxToken.bind({});
SuccessBoxAlternate.args = combinations[8];
export const InfoBox = BoxToken.bind({});
InfoBox.args = combinations[9];
export const DangerBoxAlternate = BoxToken.bind({});
DangerBoxAlternate.args = combinations[10];
export const DangerBoxLight = BoxToken.bind({});
DangerBoxLight.args = combinations[11];
export const DangerBoxDark = BoxToken.bind({});
DangerBoxDark.args = combinations[12];

const Combos: ComponentStory<any> = () => (
  <div className='space-y-4 flex flex-wrap gap-2 justify-center p-8'>
    {combinations.map(i => (
      <div className='flex w-full gap-16 justify-between items-center'>
        <div className={`p-4 pl-2 pr-4 w-[400px] rounded-sm ${i.bg} ${i.body} border-l-4 ${i.border} shadow-sm hover:ring-2 ring-gray-400 transition-all duration-100 cursor-pointer active:scale-[98%]`}>
          <div className='grid grid-cols-[min-content,1fr] items-top gap-x-2 gap-y-1'>
            <div className='flex items-center animate-pulse'>
              <ArrowCircleRightIcon />
            </div>
            <div className='flex items-center'>
              <h3 className={`font-bold text-base ${i.title}`}>Example Box Variant XOXO</h3>
            </div>
            <div />
            <div className='col-span-1'>
              <p className='text-xs'>{ipsum3}</p>
            </div>
            <div />
            <div className='col-span-1'>
              <p className={`text-xxs ${i.caption}`}>{ipsum2}</p>
            </div>
          </div>
        </div>
        <div className='text-xs leading-[12px]'>
          {['bg', 'border', 'title', 'body', 'caption'].map(k => (
            <div className='flex gap-2'>
              <div className='text-muted w-12'>{k}</div>
              <div className={'font-mono font-semibold w-32'}>{i[k]}</div>
              <div className={`font-mono font-semibold w-32 ${i[k]}`}>{i[k]}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
export const ChoiceTokenSample = Combos.bind({});
