import './App.css'
import { Button, Heading3, TextInput } from '@prism2/react-components'
import { ArrowDownIcon, ChevronDownIcon, LocationIcon, ManheimIcon, NotificationCircleIcon, SearchIcon } from '@prism2/icons-react'


function ProfileButton({className = ''}) {
  const clsx = ['bg-blue-800 rounded-full border-2 border-blue-800 inline-flex gap-2 items-center text-xs font-semibold text-white pr-4', className].join(' ')
  return (
    <div className={clsx}>
      <div className="h-7 w-7 rounded-full bg-gray-50 border-2 border-gold-500 text-center leading-6 text-gray-500 text-xxs tracking-tighter">DC</div>
      <div className="text-gold-400">Good morning, HANK!</div>
      <div className="flex items-center gap-0.5">Your Manheim Account <ChevronDownIcon className='h-[1em]' /></div>
    </div>
  )
}

function AppHeader() {
  return (
    <div className="w-full py-4 bg-white border-b-8 border-gold-400">
      <div className="container flex gap-8 items-center ">
        <ManheimIcon className='h-12 text-blue-700' />
        <nav className="prism-heading-2 items-center flex gap-1 font-alt tracking-tighter uppercase text-blue-700">
          {['Buy','Sell','Solutions'].map(text => (
            <div className='p-2 inline-flex items-center gap-0.5'>
              {text}
              <ChevronDownIcon className='h-5' />
            </div>
          ))}
        </nav>
        <div className="ml-auto space-y-2">
          <div className='flex gap-1 items-center'>
            <Button variant='text' className='text-xs'>
              <LocationIcon className='h-6' />
              Manheim Locations
            </Button>
            <NotificationCircleIcon className='h-6' />
            <ProfileButton />
          </div>
          <div className="flex gap-2 items-center justify-end text-sm ">
            <Button variant='fill' className='bg-gold-400 tracking-tight'>
              <SearchIcon /> Find Vehicles
            </Button>
            <Button>
              MMR
            </Button>
            <input type="text" className='rounded-xs text-sm border-gray-200' />
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchMode() {
  let headerText = 'text-2xl font-medium tracking-tight text-blue-900'
  return (
    <div className="shadow-xl bg-white text-left border grid grid-cols-3 [&>div]:p-6 [&>div]:ring-1">
      <div className="bg-gray-50 row-span-2 space-y-12">
        <p className={headerText}>Recent Searches</p>
        <p className={headerText}>Saved Searches</p>
      </div>
      <div className="bg-white col-span-2">
        <p className={headerText}>Start a new search</p>
      </div>
      <div className="bg-white">
        Start a new search
      </div>
      <div className="bg-white">
        Start a new search
      </div>
    </div>
  )
}

export function App() {
  return (
    <div>
      <AppHeader />
      <main className='container text-center'>
        <SearchMode />
        <div className='text-center space-y-4 py-16'>
          <h1 className='prism-heading-1 font-alt text-blue-700'>
            <span>apps/example</span>-ts-app
          </h1>
        </div>
      </main>
    </div>
  );
}

export default App
