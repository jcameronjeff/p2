import { AppHeader } from './layout/AppHeader';
import './App.css';
import '@prism2/style-dictionary/build/css/cais.css';
import { SearchResults } from './layout/SearchResults';
import { AppSidebar } from './layout/Sidebar';
import { useTimeout } from 'react-use';
import { LoadingComponent } from './components/Loading';

export function App() {
  const [isReady, cancel] = useTimeout(2500);

  return (
    <div className='text-center'>
      <AppHeader />
      <div className="container mt-24 pt-4 md:grid md:grid-cols-[220px,1fr] gap-8 items-start">
        {isReady() ? [
          <AppSidebar key='app-side' className='hidden md:block' />,
          <SearchResults key='search-res'/>,
        ] : [
          <LoadingComponent key='l-left' onClick={cancel} className='flex items-center prism-heading-2 uppercase gap-2' />,
          <LoadingComponent key='l-right' className='flex-col flex icons:w-16 items-center gap-2 p-12' />,
        ]}
      </div>
    </div>
  );
}

export default App;
