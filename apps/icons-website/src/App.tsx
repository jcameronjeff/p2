import { CheckboxCheckedIcon } from '@prism2/icons/react/prism';
import { Toolbar, Tag, Code } from 'ui-shared';


let cssCode = `
.icon {
  border: 1px solid red;
}
`
export function App() {
  return (
    <>
    <Toolbar>apps/icons-website</Toolbar>
    <main className='container text-center'>
      <div className='text-center space-y-4 py-16'>
        <CheckboxCheckedIcon className='w-20 inline-block text-gray-100' />
        <h1 className='prism-heading-1 font-alt text-blue-700'>
          apps/icons-website
        </h1>
        <button className='prism-btn'>Button</button>
        <span aria-label="I am a tooltip" className='tt'>This is styled</span>
        <Tag>alpha</Tag>
        <Code>{`
          <CheckmarkCheckedIcon />
        `}</Code>
        <Code language='css'>{cssCode}</Code>
      </div>
    </main>
    </>
  );
}

export default App;
