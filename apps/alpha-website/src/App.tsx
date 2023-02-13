import { AppHeader } from './layout/AppHeader';
import './App.css';
import { SearchResults } from './layout/SearchResults';
import { AppSidebar } from './layout/Sidebar';

export function App() {
  return (
    <div className='text-center'>
      <AppHeader />
      <div className="container mt-24 pt-4 md:grid md:grid-cols-[220px,1fr] gap-8">
        <AppSidebar className='hidden md:block' />
        <SearchResults />
      </div>
    </div>

  );
}

export default App;
