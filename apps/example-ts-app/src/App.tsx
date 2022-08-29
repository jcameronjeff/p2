import { CheckboxCheckedIcon } from '@prism2/icons/react/prism';
import { Toolbar, Tag } from 'ui-shared';
export function App() {
  return (
    <>
    <Toolbar>apps/example-ts-app</Toolbar>
    <main className='container text-center'>
      <div className='text-center space-y-4 py-16'>
        <CheckboxCheckedIcon className='w-20 inline-block text-gray-100' />
        <h1 className='prism-heading-1 font-alt text-blue-700'>
          apps/example-ts-app
        </h1>
        <Tag>alpha</Tag>
      </div>
    </main>
    </>
  );
}

export default App;
