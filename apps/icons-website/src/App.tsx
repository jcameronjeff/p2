import { AllIcons, AllIconsMini, AllIconsOutline, AllIconsSolid, HeroBanner, IconGallery, AllInterstateIcons } from './comp';
import { Button, Tab } from '@prism2/react-components';
import { Toolbar } from 'ui-shared';
import './App.css';
import { ArrowLeftIcon, ArrowRightIcon, BellIcon, BlockedIcon, BoltIcon, CancelCircleIcon, CarIcon, CheckmarkCircleIcon, NotificationCircleIcon, SpinnerIcon } from '@prism2/icons-react';
import { ArrowDownCircleIcon, ArrowDownIcon, ArrowUpCircleIcon, ArrowUpIcon, BellAlertIcon } from '@prism2/icons-react/20/solid';

export function App() {
  let list = [
    {
      title: "Interstate",
      subtitle: "Icons for Manheim's Interstate Design System",
      usage: `import { ThreeSixtyIcon } from '@prism2/icons-react'`,
      gallery: AllInterstateIcons,
    }, 
    {
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
        <Tab>Samples</Tab>
      </Tab.List>
      <Tab.Panels as='div' className='p-8'>
        {list.map(args => <Tab.Panel as={IconGallery} {...args} />)}
        <Tab.Panel as='div' className='container m-auto text-center'>
          <div className="inline-flex items-center p-2 border rounded-sm gap-0.5 m-4 text-gray-600 icons:h-6 icons:p-1 icons:bg-gray-50 icons:border icons:border-gray-100 icons:rounded icons:shadow-sm icons:text-blue-700">
            <div className='text-sm font-semibold text-blue-700 font-alt'>Actions</div>
            <ArrowLeftIcon />
            <ArrowRightIcon />
            <ArrowDownIcon />
            <CarIcon />
            <CheckmarkCircleIcon />
            <ArrowUpCircleIcon />
            <ArrowDownCircleIcon />
            <CancelCircleIcon />
            <NotificationCircleIcon />
            <BlockedIcon />
            <ArrowUpIcon />
            <BoltIcon />
            <BellIcon />
            <BellAlertIcon />
          </div>
          <div className="icons:h-4">
            <Button prepend={<CarIcon />} label="Vehicle Details" />
            <Button prepend={<BoltIcon />} label="Get Updates" />
          </div>
        </Tab.Panel>
      </Tab.Panels>

    </Tab.Group>
  );
}

export default App;
