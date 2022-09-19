import { Tab } from '@headlessui/react';
import { QuestionMarkCircleIcon, StarIcon } from '@prism2/icons-react/24/solid';
import React from 'react';
import { useMemo, useState } from 'react';
import { Modal } from '../../lib/Modal';
import { Indicator } from './TabContent';


const items = [{
  title: 'BMW 5 SERIES 530I XDRIVE LUXURY LINE',
  vin: 'WBAJA7C5XKWW0595128',
  mileage: '393mi',
  drivetrain: 'AWD 2.0L 4/G/A',
  bid: '$35,800',
}, {
  title: 'BMW M8 M8 2D CONVERTIBLE',
  vin: 'WBSDZ0C04LCD5455634',
  mileage: 34202,
  drivetrain: 'AWD 4.4L 8/G/A',
  bid: '$89,950',
}, {
  title: 'BMW M6 M6 4D SEDAN GRAN COUPE',
  vin: 'WBS6E9C56KG80842724',
  mileage: 24938,
  drivetrain: '2WD 4.4L 8/G/A',
  bid: '$71,800',
}, {
  title: 'BMW 5 SERIES 530I XDRIVE M SPORT LINE',
  vin: 'WBAJA7C50KG91272033',
  mileage: 33019,
  drivetrain: 'AWD 2.0L 4/G/A',
  bid: '$40,300',
}, {
  title: 'BMW M4 COMPETITION XDRIV',
  vin: 'EWBS43AZ04NCH713232',
  mileage: 2289,
  drivetrain: 'AWD 3.0L 6/G/A',
  bid: '$95,300',
}, {
  title: 'BMW X5 XDRIVE40I',
  vin: '5UXCR6C08L9B6451832',
  mileage: 32169,
  drivetrain: 'AWD 3.0L 6/G/A',
  bid: '$52,300',
}];

function randomIntFromInterval() { // min and max included
  let options = [
    'bg-blue-100', 'bg-green-600', 'bg-orange-400', 'bg-gray-600', 'bg-blue-700', 'bg-red-500',
  ];
  let item = Math.floor(Math.random() * (options.length - 1 + 1) + 1);
  return options[item];
}

const NotFound = () => (
  <div className='flex p-8 justify-center flex-col items-center gap-4'>
    <QuestionMarkCircleIcon className='w-24 text-gray-100' />
    <h1 className='text-2xl font-normal tracking-tight text-gray-400'>No matches</h1>
    <div className="flex gap-1">
    {['delay-0', 'delay-150', 'delay-500'].map((x) => (
      <div className={`
        w-5 h-5 rounded-full ${randomIntFromInterval()} ${x}
        ring-4 ring-gold-200 ring-offset-2 animate-pulse
      `} />
    ))}
    </div>
  </div>

);

const VehiclePreview = ({ item }: { item:typeof items[0] }) => {
  const [open, setOpen] = useState(false);
  return (
  <>
   <div className='bg-white p-4 rounded shadow'>
    <div className='flex justify-between w-full'>
      <div>
        <h1 className='tracking-tighter font-bold'>{item.title}</h1>
        <div className='prism-label'>{item.vin}</div>
      </div>
      <StarIcon className='w-7 h-7stroke-gold-300 text-gold-500'/>
    </div>

    <div className='py-4 text-3xl tracking-tighter'>{item.bid}</div>
    <div className='flex gap-2 justify-evenly'>
      <button className='flex-grow prism-btn text-sm' onClick={() => setOpen(true)}>Bid Now</button>
      <button className='flex-grow prism-btn text-sm'>Save</button>
    </div>
  </div>
  <Modal variant="slideout" show={open} title={item.title} onClose={() => setOpen(false)}>{item.bid}</Modal>
  </>
  );
};


export default function VLP({ query = '' }: { query: string }) {

  let currentItems = useMemo(() => items.filter(i => {
    let matcher = [i.title, i.vin, i.drivetrain].join(' ');
    return matcher.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  }), [query]);

  if (currentItems.length < 1) return <NotFound />;
  return (
    <>
    <Tab.Group manual vertical as='div' className='flex gap-4' defaultIndex={1}>
    <Tab.List className='divide-y w-full divide-gray-100 flex-grow min-h-[600px] overflow-y-scroll max-h-[800px] shadow-inner'>
      {[0, 1, 2, 3, 4, 5].map(x => currentItems.map((item, idx) =>
        <Tab as='button' className='p-2 flex items-center selected:bg-blue-100 transition-all duration-150 w-full'>
          <div className="w-16 font-semibold tracking-tight text-xs text-gray-400">OVE</div>
          <div className="w-12 flex gap-1">
            <div className={`w-3 h-3 rounded-full ${randomIntFromInterval()} ring-1 ring-gray-500`} />
            <div className={`w-3 h-3 rounded-full ${randomIntFromInterval()} ring-1 ring-gray-500`} />
          </div>
          <div className="flex-grow">
            <div className='flex items-center'>
            <h3 className='font-semibold flex gap-4 tracking-tight text-blue-800'>
              <div className='pr-2'>{item.title}</div>
            </h3>
            {x === 0 && [0, 1, 3].some(n => n === idx) && <Indicator color='blue' />}
            </div>
            <div className='flex gap-4 text-xs text-gray-500'>
              <div className='text-xs text-gray-400 flex-grow w-48 font-mono text-left font-medium'>{item.vin}</div>
              <div className='w-16 text-right'>{item.mileage} mi</div>
              <div className='w-24'>{item.drivetrain}</div>
              <div className='w-12'>
              <div className='ring-1 ring-orange-400 rounded flex text-xxs'>
                <div className='text-white font-semibold tracking-tight bg-orange-500 p-1 py-0.5'>CR
                </div>
                <div className='w-6 flex items-center justify-center'>
                  <div className='px-1 p-0.5'>4.8</div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="w-auto pl-8">
            <div className='flex w-full gap-4 text-xs text-gray-500'>
              <div className='flex-grow'>Current Bid</div>
            </div>
            <h3 className='font-semibold tracking-tight text-blue-800'>{item.bid}</h3>
          </div>
        </Tab>,
      ))}
    </Tab.List>
    <Tab.Panels>
       {[0, 1, 2, 3, 4, 5].map(() => currentItems.map((item) =>
          <Tab.Panel className='w-96 p-8 border-l h-full bg-gray-100 space-y-4'>
            <VehiclePreview item={item} />
            <p className='prism-label'>All data is for demonstration purposes. For internal use only, copyright 2022 Cox Automotive Inc.</p>
          </Tab.Panel>,
       ))}
    </Tab.Panels>
    </Tab.Group>
    <div className="w-full prism-label bg-gray-100 border-t p-4 ">Showing {currentItems.length * 6} vehicles</div>
    </>
  );
}
