import './App.css';
import { ArrowDownIcon } from '@prism2/icons-react';
import { buttonClasses, Layout } from './layout/Layout';
import { DarkmodeSwitch, Search } from './components/QuickSearch';
import { LogoMenu, PopoverMenu } from './components/Popover';
import { SearchPanel } from './layout/SearchPanel';
import { AccountMenu } from './components/AccountMenu';
import { useState } from 'react';

export function App() {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <Layout.Wrap dark={darkMode}>
      <Layout.AppBanner className='dark:bg-black/25 bg-white'>
        <Layout.FlexRow className='container items-center grid grid-cols-3 md:flex sm:flex xs:flex gap-4 w-full justify-between'>
          <nav className='flex gap-1 items-center'>
            <LogoMenu />
            <div className={buttonClasses}>Buy <ArrowDownIcon  /></div>
            <div className={buttonClasses}>Sell <ArrowDownIcon  /></div>
            <div className={buttonClasses}>Solutions <ArrowDownIcon  /></div>
          </nav>
          <Search />
          <Layout.FlexRow className='justify-end gap-2'>
            <DarkmodeSwitch checked={darkMode} onChange={toggleDarkMode} />
            <PopoverMenu className='flex icons:h-4'/>
            <AccountMenu />
          </Layout.FlexRow>
        </Layout.FlexRow>
      </Layout.AppBanner>
      <div className="pt-8">

        <SearchPanel />
        <div className="container px-4">


        </div>
      </div>

    </Layout.Wrap>
  );
}

export default App;

