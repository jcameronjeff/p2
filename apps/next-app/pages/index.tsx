import { Button, Chip as Tag } from '@prism2/react-components';
import { Toolbar } from 'ui-shared';

export default function Web() {
  return (
    <>
    <Toolbar>apps/next-app</Toolbar>
    <main className='app w-full min-h-screen flex flex-col space-y-16 items-center justify-center bg-white'>
      <h1 className='prism-heading-1 text-8xl tracking-tighter'>Hello from<br/> Prism in NextJS</h1>
    </main>
    </>
  )
}
