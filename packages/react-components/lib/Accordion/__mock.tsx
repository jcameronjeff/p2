import { ChevronRightIcon } from '@prism2/icons/react/solid';
import { Box } from '../';

export const mocks = {
  items: [
    {
      label: 'When can I submit?',
      content: 'Anytime',
    }, {
      label: 'Where should I send it?',
      content: 'Right here, thanks',
    }, {
      label: 'Who will review my entry?',
      content: 'We all will',
    },
  ],
  customItems: [
    {
      label: 'How can I get support?',
      content: <p className='p-4'>Ok</p>,
      defaultOpen: true,
      className: 'rounded-sm text-lg font-bold bg-blue-500',
      onChange: (val:boolean) => console.log('item1 open', val),
    },
    {
      label: 'When can I submit?',
      content: 'Yes',
      className: 'rounded-sm',
      onChange: (val:boolean) => console.log('item2 open', val),
    },
    {
      label: 'Is team pricing available?',
      content: 'Yes',
      className: 'rounded-sm',
      onChange: (val:boolean) => console.log('item3 open', val),
    },
    {
      label: (
          <div className='flex gap-1 items-center'>
            <ChevronRightIcon className='w-[1em] h-[1em]' />Node as title
          </div>
      ),
      content: (
          <Box as="div" className='m-1 p-4 bg-gray-50 rounded'>
            Customized output of this item
          </Box>
      ),
      defaultOpen: true,
      className: 'bg-red-500 text-white rounded',
      onChange: (val:boolean) => console.log('item4 open', val),
    },
  ],
};
