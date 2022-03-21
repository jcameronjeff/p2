import { useMemo, useState } from 'react';

import { Home, Swatch } from './views/Home';
import { AppContext } from './context/AppContext';
import { Button, Tab } from '../lib/main';
import Presentation from './views/Presentation';
import '../lib/Styles/tailwind.css';

function App() {
  const [enabled, toggle] = useState<boolean>(true);
  const ctx = useMemo(() => ({ enabled }), [enabled]);

  return (
    <AppContext.Provider value={ctx}>
      <div className="prism-base">
        <div className={enabled ? 'prism' : ''}>
          <Tab.Group>
            <div className="flex w-full border justify-between items-center p-4">
              <div className="flex items-center gap-4">
                <h1>PRISM2</h1>
                <Tab.List className="flex gap-2 px-4 text-xs">
                  <Tab className="aux">Prose</Tab>
                  <Tab className="aux">Kitchen Sink</Tab>
                  <Tab className="aux">Tab 3</Tab>
                </Tab.List>
              </div>
              <Button className="self-right" type="button" onClick={() => toggle(!enabled)}>
                PRISM
                {enabled ? ' enabled' : ' disabled'}
              </Button>
            </div>
            <main className="container items-center my-4 m-auto">
              <Tab.Panels className="p-4 border rounded-sm m-4">
                <Tab.Panel><Home /></Tab.Panel>
                <Tab.Panel><Swatch /></Tab.Panel>
                <Tab.Panel><Presentation /></Tab.Panel>
              </Tab.Panels>
            </main>
          </Tab.Group>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
