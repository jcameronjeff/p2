import { HeartIcon } from '@prism2/icons/react/prism';

export const HeroBanner = () => (
  <div className='flex justify-center bg-blue-600 from-blue-900 bg-gradient-to-br p-12 text-white flex-col items-center space-y-4 '>
    <div className='text-center'>
      <h1 className='text-4xl font-medium font-sans tracking-tighter'>
        <span className='opacity-25 font-light'>@prism2/</span>
        <span>icons</span>
      </h1>
    </div>
    <div className='text-xs tracking-tight w-[540px] bg-slate-900 text-slate-300 rounded font-mono p-4 shadow-lg'>
      <span className='opacity-50'>// install</span><br />
      <span className='opacity-25'>$</span> pnpm add @prism2/icons<br />
      <span className='opacity-50'>// import</span><br />
      {'import { HeartIcon } from \'@prism2/icons/react/prism\''}<br />
      <span className='opacity-50'>// insert</span><br />
      {'<HeartIcon className="w-12 text-red-400 animate-pulse" />'}
    </div>
    <HeartIcon className="w-12 text-red-400 animate-pulse" />
  </div>
)
