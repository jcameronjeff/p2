import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Chip, Button, Box, Toggle } from '../lib';

export default {
  title: 'Demo/Layout',
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
    <header role='banner' className='sticky bg-primary-dark w-full text-white border-t-4 border-yellow-500'>
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
          <div className='grid grid-cols-2 gap-4'>
          <Box as='div' className='p-4 border border-blue-100 rounded-lg w-64 space-y-1'>
            <h3 className='text-sm font-bold'>
              Text Black
            </h3>
            <p className='text-sm'>This is a normal paragraph</p>
            <p className='text-xs text-gray-400'>And this is a caption</p>
          </Box>
          <Box as='div' className='p-4 border border-black bg-blue-1000 text-gray-200 rounded-lg w-64 space-y-1'>
            <h3 className='text-sm font-bold text-white'>
              bg-blue-1000, text-white
            </h3>
            <p className='text-sm'>This is a normal paragraph, gray-200</p>
            <p className='text-xs text-gray-400'>And this is a caption, gray-400</p>
          </Box>
          <Box as='div' className='p-4 border bg-blue-50 border-blue-100 rounded-lg w-64 space-y-1 text-blue-800'>
            <h3 className='text-sm text-black font-bold'>
              bg-blue-50, text-black
            </h3>
            <p className='text-sm'>text-blue-800 This is a normal paragraph slightly tinted to bg</p>
            <p className='text-xs text-blue-400'>And this is a caption, tinted</p>
          </Box>
          <Box as='div' className='p-4 border bg-blue-800 border-blue-900 rounded-lg w-64 space-y-1 text-blue-200'>
            <h3 className='text-sm text-white font-bold'>
              bg-blue-800, text-white
            </h3>
            <p className='text-sm'>text-blue-200, This is a normal paragraph slightly tinted to bg</p>
            <p className='text-xs text-blue-400'>And this is a caption, blue-400</p>
          </Box>

          <Box as='div' className='p-4 border bg-sky-50 border-sky-100 rounded-lg w-64 space-y-1 text-sky-800'>
            <h3 className='text-sm text-black font-bold'>
              bg-sky-50, text-black
            </h3>
            <p className='text-sm'>text-sky-800, This is a normal paragraph slightly tinted to bg</p>
            <p className='text-xs text-sky-400'>sky-400, And this is a caption, tinted</p>
          </Box>
          <Box as='div' className='p-4 border bg-sky-800 border-sky-900 rounded-lg w-64 space-y-1 text-sky-200'>
            <h3 className='text-sm text-white font-bold'>
              bg-sky-800, text-white
            </h3>
            <p className='text-sm'>sky-200, This is a normal paragraph slightly tinted to bg</p>
            <p className='text-xs text-sky-400'>sky-400, And this is a caption, sky-400</p>
          </Box>

          <Box as='div' className='p-4 border bg-yellow-50 border-yellow-100 rounded-lg w-64 space-y-1 text-yellow-800'>
            <h3 className='text-sm text-black font-bold'>
              bg-yellow-50, text-black
            </h3>
            <p className='text-sm'>yellow-800, This is a normal paragraph slightly tinted to yellow-800</p>
            <p className='text-xs text-yellow-400'>And this is a caption, tinted yellow-400</p>
          </Box>
          <Box as='div' className='p-4 border bg-yellow-800 border-yellow-900 rounded-lg w-64 space-y-1 text-yellow-200'>
            <h3 className='text-sm text-white font-bold'>
              bg-yellow-800, text-white
            </h3>
            <p className='text-sm'>text-yellow-200, This is a normal paragraph slightly tinted to yellow-200</p>
            <p className='text-xs text-yellow-400'>yellow-400 And this is a caption</p>
          </Box>




          </div>
        </Content>
      </Box>
      <Footer />
    </Box>
  );
};

export const Layout = LayoutTemplate.bind({});
