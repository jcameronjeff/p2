import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Chip, Button, Box, Toggle } from '../lib';

export default {
  title: 'Patterns/Layout',
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

  let Content = (props) => (
    <main className={['space-y-4 p-4', props.className].join(' ')}>
      <article className='prism-prose'>
        {props.children}
      </article>
    </main>
  );

  let Footer = (props) => React.useMemo(() => (
    <footer className={['prism-caption', props.className].join(' ')}>
      <p>My footer content</p>
    </footer>
  ), []);

  let Aside = (props) => (
    <aside className={['p-4 bg-gray-50 rounded-sm border border-gray-100', props.className].join(' ')}>
      <div className='prism-link-sm p-1'>
        Option One
      </div>
      <div className='prism-link-sm p-1'>
        Option One
      </div>
      <div className='prism-link-sm p-1'>
        Option One
      </div>
    </aside>
  );
  return (
    <Box as='div' className='w-screen items-center'>
      <Header />
      <Box as='div' className='container m-auto flex my-8 gap-8'>
        <Aside className='w-[200px] divide-y' />
        <Content>
          <Box as='h1' className='prism-heading-1'>Templates</Box>
        </Content>
      </Box>
      <Footer />
    </Box>
  );
};

export const Layout = LayoutTemplate.bind({});
