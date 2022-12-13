import { DiskIcon, EnvelopeIcon, PrinterIcon } from '@prism2/icons-react';
import { DocumentPlusIcon, PencilSquareIcon } from '@prism2/icons-react/24/solid';
import { ComponentStory, Meta } from '@storybook/react';
import { Menu } from '@headlessui/react';
import { Box, Button } from '../';
import { ExtractProps } from '../types';
import { MenuItem, MenuButton, MenuItems, PMenu, MenuSection } from './Menu';
import mdx from './README.mdx';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta<ExtractProps<typeof Menu>>;

export const Template: ComponentStory<any> = () => {
  return (
    <Box as='nav' className='flex items-center justify gap-2'>
      <Button className='text'><PrinterIcon /> Print Page</Button>
      <Button className='text'><EnvelopeIcon /> Email Runlist</Button>
      <PMenu>
        <MenuButton>More</MenuButton>
        <MenuItems>
          <MenuSection>
            <MenuItem><PencilSquareIcon /> Edit</MenuItem>
            <MenuItem><DocumentPlusIcon /> Duplicate</MenuItem>
            <MenuItem><DiskIcon /> Save</MenuItem>
          </MenuSection>
          <MenuSection>
            <MenuItem><PrinterIcon /> Print</MenuItem>
          </MenuSection>
        </MenuItems>
      </PMenu>
    </Box>
  );
};

export const Toolbar = Template.bind({});

export const Simple = () => {
  return (
    <PMenu>
      <MenuButton className='prism-btn'>
        Open Me
      </MenuButton>
      <MenuItems>
        <MenuSection>
          <MenuItem disabled><PencilSquareIcon /> Edit</MenuItem>
          <MenuItem><DocumentPlusIcon /> Duplicate</MenuItem>
          <MenuItem><DiskIcon /> Save</MenuItem>
        </MenuSection>
        <MenuSection>
          <MenuItem><PrinterIcon /> Print</MenuItem>
        </MenuSection>
      </MenuItems>
    </PMenu>
  );
};

export const Template2: ComponentStory<any> = (args) => {
  return (
    <PMenu>
      <Menu.Button className='inline-flex bg-blue-800 text-white font-bold tracking-tighter p-4 py-2 rounded-sm ui-open:ring-4'>
        Open Me
      </Menu.Button>
      <MenuItems className='ui-open:translate-y-2 duration-1000 delay-150 transition-transform'>
        {args.items.map((item: string) => (
          <MenuItem disabled><PencilSquareIcon /> {item}</MenuItem>
        ))}
      </MenuItems>
    </PMenu>
  );
};

export const Customizing = Template2.bind({});
Customizing.args = {
  items: ['Save', 'Edit', 'View'],
};
