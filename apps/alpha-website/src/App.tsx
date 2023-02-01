import { AppHeader } from './layout/AppHeader';
import './App.css';
import { SearchFacet } from './components/SearchFacet';
import { SearchResults } from './layout/SearchResults';

export function App() {
  return (
    <div className='text-center'>
      <AppHeader />
      <div className="container mt-20 sm:grid sm:grid-cols-[140px,1fr] md:grid-cols-[200px,1fr] gap-8">
        <aside>
          <h2 className='prism-heading-2 uppercase tracking-tight'>192,782 vehicles</h2>
          <div className="search-facet space-y-2">
            <SearchFacet label='Saved Searches' />
            <SearchFacet label='Highlights' />
            <SearchFacet label='Inventory Source' />
            <SearchFacet label='VehicleType' />
            <SearchFacet label='Make' />
            <SearchFacet label='Model' />
            <SearchFacet label='Transmission' />
          </div>
        </aside>
        <main>
          <SearchResults />
        </main>
      </div>
    </div>

  );
}

export default App;
