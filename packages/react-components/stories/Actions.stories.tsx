import { DiskIcon, EnvelopeIcon, PrinterIcon } from '@prism2/icons-react';
import { DocumentPlusIcon, PencilSquareIcon } from '@prism2/icons-react/24/solid';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, Transition } from '@headlessui/react';
import { Box, Button } from '../';
import { Fragment } from 'react';
import { IndicatorChevron, popIn } from '../lib';
export default {
  title: 'Components/Actions',
  component: Box,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = () => {

  const UpCarat = () => <div className='w-2 h-2 bg-white absolute -top-1 rotate-45 right-[22px] border-t border-l border-blue-200' />;
  const Action = (props :React.HTMLAttributes<HTMLButtonElement>) => (
    <Menu.Item>
      <button {...props} className='ui-active:bg-gray-50 ui-selected:bg-blue-200 group text-blue-600 flex w-full hover:bg-gray-50 ui-active:text-blue-700 items-center rounded-xs p-1 pr-2 text-sm whitespace-nowrap font-medium icons:h-[1em] gap-2'>
        {props.children}
      </button>
    </Menu.Item>
  );
  return (
  <Box as='nav' className='flex items-center justify-end gap-0.5'>
    <Button variant='text' prepend={<PrinterIcon />}>Print Page</Button>
    <Button variant='text' prepend={<EnvelopeIcon />}>Email Runlist</Button>
    <Menu as={Box} className="relative inline-block text-left">
      {({ open }) => (
      <>
        <Menu.Button as={Button} variant='text' className={'ui-open:ring-1 justify-between'}>
          More
          <IndicatorChevron enabled={open} />
        </Menu.Button>
        <Transition as={Fragment} {...popIn}>
          <Menu.Items className='absolute right-0 min-w-full origin-top-right divide-y divide-gray-100 rounded-xs shadow-sm border focus:outline-none bg-white'>
            <UpCarat />
            <div className="p-1 ">
              <Action><PencilSquareIcon /> Edit</Action>
              <Action><DocumentPlusIcon /> Duplicate</Action>
              <Action><DiskIcon /> Save</Action>
            </div>
            <div className="p-1">
              <Action><PrinterIcon /> Print</Action>
            </div>
          </Menu.Items>
        </Transition>
      </>
      )}
    </Menu>
  </Box>
  );
};

export const Basic = Template.bind({});
