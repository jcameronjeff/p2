import { Disclosure, Transition } from '@headlessui/react';
import { BlockedIcon, CarIcon, EditIcon, OdometerIcon, PaintDropIcon } from '@prism2/icons-react';
import { HeartIcon } from '@prism2/icons-react/24/outline';
import { Button, popIn, popInOut } from '@prism2/react-components';
import { createContext, useContext, HTMLAttributes, useRef, useState } from 'react';
import { useInterval } from 'react-use';
import { newAutoSrpVehicles as srpVehicles } from '../../lib/_mockResultsAuto';
import { SRPContext } from '../../SRPContext';
import { AuctionUI } from './AuctionUI';
import { AutocheckScores } from './Autocheck';
import { VehicleTableRow } from './SingleVehicleRow';
import { StarRating } from './StarRating';

export type VehicleInterface = typeof srpVehicles.items[0];
export type SingleVehicleProps = HTMLAttributes<HTMLDivElement> & VehicleInterface;
export const SingleVehicleContext = createContext<VehicleInterface>(srpVehicles.items[0]);

export function VehicleTitle(props:HTMLAttributes<HTMLHeadingElement>) {
  const { year, sourceMake, models, trims } = useContext(SingleVehicleContext);
  const title = `${year} ${sourceMake} ${models.join(', ')} ${trims.join(', ')}`;
  return <span {...props}>{title}</span>;
}

export function VehicleStatline(props:HTMLAttributes<HTMLDivElement>)  {
  const { odometer, odometerUnits, driveTrain, engineType } = useContext(SingleVehicleContext);
  return <div {...props} className='text-xs [&>span]:px-1 [&>span]:text-gray-400 [&>span]:text-xxs leading-6'>
    {odometer} {odometerUnits}<span>&bull;</span>
    {driveTrain}<span>&bull;</span>
    {engineType}
  </div>;
}
export function VehicleDescription(props: HTMLAttributes<HTMLDivElement>)  {
  const {  vin } = useContext(SingleVehicleContext);
  return <div {...props}>
    <h3 className='uppercase text-blue-700 font-bold tracking-tight leading-6'>
      <VehicleTitle />
    </h3>
    <h6 className='text-gray-400 text-xs capitalize font-medium pb-2 tracking-tight'>
      Decoded: <VehicleTitle />
    </h6>
    <p className='text-xs text-gray-600'>{vin}</p>
    <VehicleStatline />
  </div>;
}

export function VehicleToolbar(props:HTMLAttributes<HTMLDivElement>) {
  const { toggleHideItem, toggleWorkbookItems, workbookItems } = useContext(SRPContext);
  const { id, source } = useContext(SingleVehicleContext);
  const isWorkbook = workbookItems.includes(id);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [count, setCount] = useState(0);
  useInterval(() => {
    if (inputRef.current) {
      setCount(inputRef.current.value.length);
    }
  }, 250);
  return <div {...props}>
    <Disclosure>
      <div className="flex gap-2">
      <Disclosure.Button as={Button} className='p-2 bg-white uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'>
        <EditIcon />
        Add Note
      </Disclosure.Button>
      <Button
        className={'outline p-2 uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'}
        onClick={() => toggleWorkbookItems(id)}
      >
        <HeartIcon
          data-workbook={isWorkbook}
          className="data-[workbook=true]:fill-red-300 data-[workbook=true]:stroke-red-500"
        />
        {isWorkbook ? 'In Workbook' : 'Add to Workbook'}
      </Button>
      <Button
        className='outline p-2 bg-white uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'
        onClick={() => toggleHideItem(id)}
      >
        <BlockedIcon />
        Hide
      </Button>
      {source === 'Simulcast' && (
        <Button
          className={'outline p-2 uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'}>
            <CarIcon />
          Lane Alerts
        </Button>
      )}
      </div>
    <Transition {...popInOut}>
      <Disclosure.Panel as='div' className='py-2' unmount={false}>
        {({ close }) => (
          <>
          <textarea
            ref={inputRef}
            onChange={() => console.log(inputRef.current ? inputRef.current.value : '')}
            placeholder="Enter comments here"
            rows={2}
            className='w-full prism-input invalid:bg-red-50'
            maxLength={250}
          />
          <div className="flex justify-end gap-2 items-center">
            <span className='prism-label'>{250 - count} characters remaining.</span>
            <Button variant='outline' className='text-xs uppercase' onClick={() => close()} >Save & Close</Button>
          </div>
          </>
        )}
      </Disclosure.Panel>
    </Transition>
    </Disclosure>
  </div>;
}

export function SellerInfo(props:HTMLAttributes<HTMLDivElement>) {
  const { sellerName, pickupLocation } = useContext(SingleVehicleContext);
  return <div {...props}>
    <Button variant='text' className='gap-2 py-1 p-2 font-regular block md:flex text-left text-ellipsis overflow-hidden'>
      <span className='inline prism-label text-xs'>Pickup</span><br className='sm:hidden' />
      <span className='text-xs'>{pickupLocation}</span>
    </Button>
    <Button variant='text' className='gap-2 py-1 p-2 font-regular block md:flex text-left text-ellipsis overflow-hidden'>
      <span className='inline prism-label text-xs'>Seller</span><br className='sm:hidden' />
      <span className='text-xs'>{sellerName}</span>
    </Button>
    <StarRating className="flex items-center icons:h-4 icons:-mr-[2px]" />
  </div>;
}

export function VehicleImage(props:HTMLAttributes<Omit<HTMLImageElement, 'src'>>) {
  const { mainImage } = useContext(SingleVehicleContext);
  return mainImage !== null
    ? <img {...props} src={mainImage.largeUrl} />
    : <img {...props} src='//via.placeholder.com/320x200' />;
}

export function PriceDisplay(props: { label: string, value: number | undefined }) {
  if (!props.value || props.value === 0) return null;
  return (
    <div className='text-gray-400 text-xs capitalize font-medium pb-2 tracking-tight leading-6'>
      <span className='prism-label text-xs'>{props.label}</span>
      <div className='text-lg text-gray-800 tracking-tighter items-center'>
        <span className='px-0.5 text-xs'>$</span>
        <span className='leading-6'>{props.value.toLocaleString()}</span>
      </div>
    </div>
  );
}

export function VehicleOverview(props:HTMLAttributes<HTMLDivElement>) {
  const { exteriorColor, interiorColor, valuationsMmr } = useContext(SingleVehicleContext);
  return <div {...props}>
    <div className="flex flex-col h-full">

    <div className="flex gap-2 p-1 flex-grow">
      <div className="w-1/4">
        <VehicleImage />
        <div className="grid sm:grid-cols-2 gap-2 text-xs py-2 text-center">
          {[interiorColor, exteriorColor].map( (color, idx) => (
            <div className='flex gap-2 text-center justify-center py-1' key={color + '-' + idx}>
              <div style={{ backgroundColor: color }} className='border h-4 w-4 rounded-full' />
              <span className='leading-4'>{color}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-1 w-3/4 text-left space-y-2 pb-4">

        <div className="flex px-2">
        <VehicleDescription className='' />
          <div className='ml-auto text-right p-1 px-4 space-y-4'>
            {/* <PriceDisplay label='Base MMR' value={valuationsMmr.baseValue} /> */}
            <p className='text-blue-900 text-sm'>On Sale</p>
            {valuationsMmr && valuationsMmr.adjustedValue && (
              <div>
                <PriceDisplay label='Adjusted MMR' value={valuationsMmr.adjustedValue} />
                <div className='flex icons:w-5 gap-1 justify-end'>
                  <div className='relative flex justify-center group'>
                    <OdometerIcon className='w-5 ui-active:text-blue-500 ui-open:animate-pulse cursor-pointer'/>
                    <div className='opacity-0 group-hover:block group-hover:opacity-100 bg-white p-2 absolute shadow w-40 top-full transition-opacity duration-100'>
                      <p className='text-xs text-red-600 text-center'>Mileage Adjustment: -$440</p>
                    </div>
                  </div>
                  <div className='relative flex justify-center group'>
                    <PaintDropIcon className='w-5 ui-active:text-blue-500 ui-open:animate-pulse cursor-pointer'/>
                    <div className='opacity-0 group-hover:block group-hover:opacity-100 bg-white p-2 absolute shadow w-40 top-full transition-opacity duration-100'>
                      <p className='text-xs text-red-600 text-center'>Color Adjustment: -$140</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <SellerInfo className="grid grid-cols-2 text-sm " />
      </div>
    </div>
    <div className="self-end w-full">
      <AutocheckScores />
    </div>

    </div>
  </div>;
}


export function VehicleCard({ id }: { id:string }) {
  return (
    <div className='w-full shadow border border-gray-100 rounded overflow-clip' key={id}>
      <div className='md:flex'>
        <VehicleOverview className='flex-grow' />
        <AuctionUI className='md:w-48 border-l flex-shrink-0 ml-auto hidden sm:flex-col sm:flex' />
      </div>
      <VehicleToolbar className='bg-gray-50 p-2 justify-start border-t' />
    </div>
  );
}

export function VehicleListItem() {
  const { interiorColor, exteriorColor, source, odometer, odometerUnits, driveTrain, vin } = useContext(SingleVehicleContext);
  return (
    <div className="flex items-center gap-4 border-b pb-2">
      <div className="w-20 text-left text-sm">
        {source}
      </div>
      <div className="w-12 justify-center gap-1 flex items-center">
        {[interiorColor, exteriorColor].map( (color, idx) => (
          <div className='flex gap-2 text-center justify-center py-1' key={color + '-' + idx}>
            <div style={{ backgroundColor: color }} className='border h-4 w-4 rounded-full' />
            {/* <span className='leading-4'>{color}</span> */}
          </div>
        ))}
      </div>
      <div className='text-left flex-grow'>
        <VehicleTitle className='uppercase text-base font-bold text-blue-800 leading-8' /><br />
        <div className="flex gap-4 text-sm">
          <div>{vin}</div>
          <div className='ml-auto'>{odometer}{odometerUnits}</div>
          <div>{driveTrain}</div>
        </div>
      </div>
      <div className="w-12">
        <div className="rounded-xs outline outline-orange-500 inline-flex">
          <div className="bg-orange-500 p-0.5 text-white text-xs leading-3">CR</div>
          <div className="bg-white p-0.5 px-1 text-xs leading-3">5</div>
        </div>
      </div>
      <div className="w-48">
        Buy Now
      </div>
    </div>
  );
}

export function SingleVehicle(props: SingleVehicleProps) {
  const { displayMode } = useContext(SRPContext);
  return (
    <Transition {...popIn} appear show key={props.id}>
      <SingleVehicleContext.Provider value={props}>
        {displayMode === 'list' && <VehicleListItem key={props.id} />}
        {displayMode === 'detail' && <VehicleCard id={props.id} />}
        {displayMode === 'table' && <VehicleTableRow key={props.id} />}
      </SingleVehicleContext.Provider>
    </Transition>
  );
}


export function TabularVehicle(props: SingleVehicleProps) {
  return (
    <SingleVehicleContext.Provider value={props}>
      <div className="grid grid-cols-2 w-full">
        <VehicleTitle />
        <VehicleStatline />
      </div>
    </SingleVehicleContext.Provider>
  );
}
