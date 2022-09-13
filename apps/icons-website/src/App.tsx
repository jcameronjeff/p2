import { AllIcons, AllIconsMini, AllIconsOutline, AllIconsSolid, HeroBanner, IconGallery } from './comp';
import { Tab } from '@prism2/react-components';
import { Toolbar } from 'ui-shared';
import './App.css';
import { NotificationCircleIcon, SpinnerIcon } from '@prism2/icons-react';

export function App() {
  let list = [{
    title: "Prism",
    subtitle: "Icons custom for Manheim",
    usage: `import { ThreeSixtyIcon } from '@prism2/icons-react'`,
    gallery: AllIcons,
  }, {
    title: "Solid",
    subtitle: "Icons courtest of heroicons 2",
    usage: `import { AcademicCapIcon } from '@prism2/icons-react/24/solid'`,
    gallery: AllIconsSolid,
  }, {
    title: "Outline",
    subtitle: "Outlined icons from heroicons 2",
    usage: `import { AcademicCapIcon } from '@prism2/icons-react/24/outline'`,
    gallery: AllIconsOutline,
  }, {
    title: "Mini",
    subtitle: "Miniature icons for rendering at smaller sizes from heroicons 2",
    usage: `import { AcademicCapIcon } from '@prism2/icons-react/20/solid'`,
    gallery: AllIconsMini,
  }]
  return (
    <Tab.Group>
      <Toolbar>@prism2/icons</Toolbar>
      <HeroBanner />
      <Tab.List as='div' className='justify-center'>
        {list.map(i => <Tab>{i.title}</Tab>)}
      </Tab.List>
      <Tab.Panels as='div' className='p-8'>
        {list.map(args => <Tab.Panel as={IconGallery} {...args} />)}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default App;
