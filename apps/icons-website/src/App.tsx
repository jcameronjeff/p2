import { AllIcons, AllIconsMini, AllIconsOutline, AllIconsSolid, HeroBanner, IconGallery } from './comp';
import { Tab } from '@prism2/react-components';
import { Toolbar } from 'ui-shared';
import './App.css';

export function App() {
  return (
    <Tab.Group>
      <Toolbar>@prism2/icons</Toolbar>
      <HeroBanner />
      <Tab.List as='div' className='justify-center'>
        <Tab>Prism</Tab>
        <Tab>Solid</Tab>
        <Tab>Outline</Tab>
        <Tab>Mini</Tab>
      </Tab.List>
      <Tab.Panels as='div' className='p-8'>
        <Tab.Panel as={IconGallery}
          title="Prism Icons"
          subtitle="Icons custom for Manheim"
          usage={`import { ThreeSixtyIcon } from '@prism2/icons/react/prism'`}
          gallery={AllIcons} />
        <Tab.Panel as={IconGallery}
          title="Heroicons Solid"
          subtitle="Icons courtest of heroicons 2"
          usage={`import { AcademicCapIcon } from '@prism2/icons/react/24/solid'`}
          gallery={AllIconsSolid} />
        <Tab.Panel as={IconGallery}
          title="Heroicons Outline"
          subtitle="Outlined icons from heroicons 2"
          usage={`import { AcademicCapIcon } from '@prism2/icons/react/24/outline'`}
          gallery={AllIconsOutline} />
        <Tab.Panel as={IconGallery}
          title="Heroicons Mini"
          subtitle="Miniature icons for rendering at smaller sizes from heroicons 2"
          usage={`import { AcademicCapIcon } from '@prism2/icons/react/20/solid'`}
          gallery={AllIconsMini} />
      </Tab.Panels>
    </Tab.Group>
  );
}

export default App;
