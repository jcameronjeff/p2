import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Chip, Button, Box, Toggle } from '../lib';

export default {
  title: 'Elements/Layout',
  component: Chip,
  subcomponents: { Chip, Button, Box, Toggle },
} as ComponentMeta<any>;


const LayoutTemplate: ComponentStory<any> = () => {

  /**
   * @description
   * Create a memoized version of our header so that we can use
   * the computed render output repeatedly unless the underlying dependencies
   * have changed.
   *
   * @note This behavior is anachronistic in React 18.
   * @returns Static HTML Header + Navigation
   */
  let Header = () => React.useMemo(() => (
    <header role='banner' className='sticky bg-primary-dark w-full text-white border-t-4 border-gold-500'>
      <Box as='div' className='flex justify-between container p-4 m-auto items-center'>
        <h1 className='prism-heading-1 text-white'>Manheim</h1>
        <Box as='ul' className='flex gap-2'>
          <Box as='li'>One</Box>
          <Box as='li'>Two</Box>
          <Box as='li'>Three</Box>
        </Box>
      </Box>
    </header>
  ), [
    // list dependencies of header such as user, session info or view context.
  ]);

  let Content = () => (
    <main className='container m-auto space-y-4 p-4'>
      <article className='prism-prose'>
        <p>Basic longform text</p>
      </article>
    </main>
  );

  let Footer = () => React.useMemo(() => (
    <footer className='prism-caption'>
      <p>My footer content</p>
    </footer>
  ), []);

  return (
    <div className='w-screen items-center'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export const Layout = LayoutTemplate.bind({});
