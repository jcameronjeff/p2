import { useMemo, useState } from 'react';
import { Tab, Button, TextInput } from '@prism2/react-components';
import { AppContext } from './context';
import { Presentation, SaveAndEdit, Home, Swatch } from './views';
import { VehicleListItem } from './partials';
import './App.css'
import KitchenSink from './partials/KitchenSink';

function App() {
  const [enabled, toggle] = useState<boolean>(true);
  const ctx = useMemo(() => ({ enabled, toggle }), [enabled]);

  return (
    <AppContext.Provider value={ctx}>
      <div className="prism-base">
        <div className={enabled ? 'prism' : ''}>
          <Tab.Group defaultIndex={3}>
            <div className="flex w-full border-b justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <h1>PRISM2</h1>
                <Tab.List className="flex gap-2 px-4 text-xs">
                  <Tab className="aux">Prose</Tab>
                  <Tab className="aux">Kitchen Sink</Tab>
                  <Tab className="aux">Kitchen Sink 2</Tab>
                  <Tab className="aux">Modals</Tab>
                  <Tab className="aux">Saving &amp; Editing</Tab>
                  <Tab className="aux">VLP</Tab>
                </Tab.List>
              </div>
              <Button variant="link" className="self-right" type="button" onClick={() => toggle(!enabled)}>
                PRISM
                {enabled ? ' enabled' : ' disabled'}
              </Button>
            </div>

            <main className="container items-center my-4 m-auto">
              <Tab.Panels className="p-4 border rounded-sm m-4">
                {[
                  <Home />,
                  <Swatch />,
                  <Presentation />,
                  <KitchenSink />,
                  <SaveAndEdit />,
                  <VehicleListItem />
                ].map(panel => (
                  <Tab.Panel>{panel}</Tab.Panel>
                ))}
              </Tab.Panels>
            </main>
          </Tab.Group>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
