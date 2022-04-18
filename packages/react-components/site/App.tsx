import KitchenSink from '../lib/HTML5';
import { Button } from '../lib';
import '../lib/styles/base.css';
import '../lib/styles/fonts.css';
import '../lib/styles/components.css';

export function App() {
  return <div className='prism'><Button variant="link" className='!ring-0 !border-none !outline-none'>Hello</Button><KitchenSink /></div>
}

export default App;
