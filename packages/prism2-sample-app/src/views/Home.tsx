import { useContext, useMemo } from 'react';
import {
  BeakerIcon, ChevronDownIcon, ChevronRightIcon, FilterIcon, MailIcon, PrinterIcon,
} from '@heroicons/react/solid';
import { Button } from '../../lib/Button';
import { para, headings } from './sample';
import { AppContext } from '../context/AppContext';

interface Props {
  className: string
}
function Samples({ className = '' }: Props) {
  const baseClass = `${className} p-4`;

  const ActionsSample = () => useMemo(() => (
    <div className="flex">
      <Button className="action">
        <PrinterIcon />
        <span>Print</span>
      </Button>
      <Button className="action">
        <MailIcon />
        <span>Email</span>
      </Button>
      <Button className="action">
        <span>More</span>
        <ChevronDownIcon />
      </Button>
    </div>
  ), []);

  return (
    <div className={baseClass}>
      <article className="space-y-4">
        <h2>{headings[0]}</h2>
        {para.slice(0, 3).map((pa) => <p>{pa}</p>)}
        <h3>{headings[1]}</h3>
        {para.slice(3, 6).map((pa) => <p>{pa}</p>)}
        <div className="card bg-cerulean-light">
          <header className="flex justify-between items-center border-b border-cerulean">
            <h5 className="pl-4">{headings[1]}</h5>
            <Button className="action">
              <span>More</span>
              <ChevronDownIcon />
            </Button>
          </header>
          <main className="space-y-4">
            <p>{para[4]}</p>
          </main>
        </div>
        <div className="card">
          <main className="space-y-3 pb-0">
            <h3>{headings[1]}</h3>
            <p>{para[4]}</p>
          </main>
          <footer className="justify-end flex -mt-2">
            <ActionsSample />
          </footer>
        </div>
        <h3>{headings[2]}</h3>
        {para.slice(6, 9).map((pa) => <p>{pa}</p>)}
        <p />

      </article>
    </div>
  );
}

export function Swatch() {
  const ColorGrid = () => useMemo(() => (
    <div className="flex gap-2 flex-wrap justify-center text-white">
      <div className="h-24 w-24 text-center p-4 bg-navy">Navy</div>
      <div className="h-24 w-24 text-center p-4 bg-navy-dark">navy-dark</div>
      <div className="h-24 w-24 text-center p-4 bg-primary">primary</div>
      <div className="h-24 w-24 text-center p-4 bg-primary-dark">primary-dark</div>
      <div className="h-24 w-24 text-center p-4 bg-cerulean-light">cerulean-light</div>
      <div className="h-24 w-24 text-center p-4 bg-cerulean">cerulean</div>
      <div className="h-24 w-24 text-center p-4 bg-cerulean-dark">cerulean-dark</div>
      <div className="h-24 w-24 text-center p-4 bg-gold-light">gold-light</div>
      <div className="h-24 w-24 text-center p-4 bg-gold">gold</div>
      <div className="h-24 w-24 text-center p-4 bg-gold-dark">gold-dark</div>
      <div className="h-24 w-24 text-center p-4 bg-meadow-light">meadow-light</div>
      <div className="h-24 w-24 text-center p-4 bg-scarlet-light">scarlet-light</div>
    </div>
  ), []);

  const FormSample = () => useMemo(() => (
    <form className="space-y-4">
      <label htmlFor="input-0" className="flex flex-col w-48">
        <span>Label</span>
        <input name="input-0" type="text" placeholder="placeholder value" />
      </label>
      <label htmlFor="input-0" className="flex flex-col w-48">
        <span>Label</span>
        <div className="flex">
          <input name="input-0" type="text" placeholder="placeholder value" className="flex-1" />
          <button type="submit">Submit</button>
        </div>
      </label>
      <label htmlFor="cb-0">
        <input type="checkbox" defaultChecked={false} id="cb-0" />
        <span>Checkbox value</span>
      </label>
      <div className="flex gap-2">
        <Button className="text">.text</Button>
        <Button>Default Button</Button>
        <button type="submit">type = submit</button>
        <Button className="link">.link</Button>
        <Button className="aux">.aux</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="link" className="text-xs">Submit</Button>
        <Button variant="auxiliary">Submit</Button>
        <Button variant="outline" onClick={() => {}}>Submit</Button>
        <Button type="submit">oh yeah</Button>
      </div>
      <div className="flex space-x-8 items-center">
        <label htmlFor="cb-4">
          <input type="checkbox" defaultChecked={false} id="cb-4" />
          Checkbox value
        </label>
        <label htmlFor="cb-1">
          <input type="checkbox" defaultChecked={false} id="cb-1" />
          Checkbox value
        </label>
        <label htmlFor="cb-2">
          <input type="checkbox" defaultChecked={false} id="cb-2" />
          Checkbox value
        </label>
      </div>

      <div className="flex items-end space-x-2">
        <label htmlFor="input-0" className="flex flex-col w-48">
          <span>Label</span>
          <input name="input-0" type="text" placeholder="placeholder value" />
        </label>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label htmlFor="input-0" className="flex flex-col w-48">
          <span>Label</span>
          <input name="input-0" type="text" placeholder="placeholder value" />
        </label>
      </div>
    </form>
  ), []);
  const CTAButtons = () => useMemo(() => (
    <div className="flex gap-6 py-4 flex-wrap justify-center">
      <Button>
        <span>Designers</span>
        <BeakerIcon />
      </Button>
      <Button>
        <span>Developers</span>
        <ChevronRightIcon />
      </Button>
      <Button>
        Developers
      </Button>
      <Button>
        <ChevronRightIcon />
        <span>
          Product Managers
        </span>
      </Button>
      <Button type="submit">
        <span>Submit</span>
        <ChevronRightIcon />
      </Button>
      <Button className="aux">
        <span>aux icon</span>
        <ChevronRightIcon />
      </Button>
      <Button className="aux">
        <FilterIcon />
        <span>filter</span>
      </Button>
      <Button className="action">
        <FilterIcon />
        <span>action</span>
      </Button>
      <Button className="aux">aux</Button>
      <Button className="link">link</Button>
    </div>
  ), []);
  const FigureWithCaption = () => useMemo(() => (
    <figure className="w-[100%]">
      <img src="//place-hold.it/600x150" alt="placeholder" />
      <figcaption>
        {para[2]}
      </figcaption>
    </figure>
  ), []);
  return (
    <>
      <CTAButtons />
      <ColorGrid />
      <FigureWithCaption />
      <FormSample />
      <ColorGrid />
    </>
  );
}
export function Home() {
  const { enabled } = useContext(AppContext);
  return (
    <div className="space-y-8">
      <Samples className={enabled ? 'prism' : ''} />
    </div>
  );
}

export default Home;
