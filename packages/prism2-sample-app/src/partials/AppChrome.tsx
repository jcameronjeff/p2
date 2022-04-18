import { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Button, Tab } from '@prism2/react-components';

export function TabBar() {
  return null
}

export function AppHeader() {
  const { toggle, enabled } = useContext(AppContext)
  return (
    <div className="flex w-full border justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <h1>PRISM2</h1>
        <TabBar />
      </div>
      <Button className="self-right" type="button" onClick={() => toggle(!enabled)}>
        PRISM
        {enabled ? ' enabled' : ' disabled'}
      </Button>
    </div>
  )
}
