import { Transition } from '@headlessui/react';
import { BlockedIcon, EditIcon, StarEmptyIcon, StarFullIcon } from '@prism2/icons-react';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, ExclamationCircleIcon, HeartIcon } from '@prism2/icons-react/24/outline';
import { Button, Modal, popIn } from '@prism2/react-components';
import { createContext, useContext, HTMLAttributes, useState } from 'react';
import { newAutoSrpVehicles as srpVehicles } from '../lib/_mockResultsAuto';
import { SRPContext } from '../SRPContext';
export type VehicleInterface = typeof srpVehicles.items[0];
export type SingleVehicleProps = HTMLAttributes<HTMLDivElement> & VehicleInterface;
export const SingleVehicleContext = createContext<VehicleInterface>(srpVehicles.items[0]);

export function AutocheckScores() {
  const { autocheck } = useContext(SingleVehicleContext);
  const { compareScoreRangeHigh, compareScoreRangeLow } = autocheck;
  const similarVehicleScore = compareScoreRangeHigh + compareScoreRangeLow > 0
    ? `${compareScoreRangeLow} - ${compareScoreRangeHigh}`
    : '-';
  const IconStatus = ({ label, value }: { label: string, value: boolean | string | number | JSX.Element }) => (
    <div className='text-xxs p-1 overflow-hidden w-1/8 items-center flex md:block justify-between'>
      <div className='font-bold text-gray-600 tracking-tighter  px-2'>{label}</div>
      <div className='ml-auto'>
        {value === true && <CheckCircleIcon className='text-green-400 w-5 mx-auto' />}
        {value === false && <ExclamationCircleIcon className='text-gold-500 w-5 mx-auto' />}
        <div className='leading-5 px-2 text-xs font-medium'>{typeof value !== 'boolean' && value}</div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 border-t divide-x divide-y bg-gradient-to-b from-gray-50 to-transparent flex-grow">
      <IconStatus label="Score" value={autocheck.score} />
      <IconStatus label="Similar" value={similarVehicleScore} />
      <IconStatus label="Accidents" value={autocheck.numberOfAccidents} />
      <IconStatus label="Owners" value={autocheck.ownerCount} />
      <IconStatus label="Titles/Probs" value={autocheck.titleAndProblemCheckOK} />
      <IconStatus label="ODO" value={autocheck.odometerCheckOK} />
      <IconStatus label="Use/Events" value={autocheck.vehicleUseAndEventCheckOK} />
      <IconStatus label="Carfax" value={<ArrowTopRightOnSquareIcon className='h-5 sm:mx-auto text-blue-600 inline sm:block -mx-2' />} />
    </div>
  );
}


export function VehicleTitle(props:HTMLAttributes<HTMLHeadingElement>) {
  const { year, sourceMake, models, trims } = useContext(SingleVehicleContext);
  const title = `${year} ${sourceMake} ${models.join(', ')} ${trims.join(', ')}`;
  return <span {...props}>{title}</span>;
}

export function VehicleStatline(props:HTMLAttributes<HTMLDivElement>)  {
  const { odometer, odometerUnits, driveTrain, engineType } = useContext(SingleVehicleContext);
  return <div {...props} className='text-xs [&>span]:px-1 [&>span]:text-gray-400 [&>span]:text-xxs leading-5'>
        {odometer} {odometerUnits}<span>&bull;</span>
        {driveTrain}<span>&bull;</span>
        {engineType}
      </div>;
}
export function VehicleDescription(props: HTMLAttributes<HTMLDivElement>)  {
  const {  vin } = useContext(SingleVehicleContext);

  return (
    <div {...props}>
      <h3 className='uppercase text-blue-700 font-bold tracking-tight leading-snug'>
        <VehicleTitle />
      </h3>
      <h6 className='text-gray-400 text-xs capitalize font-medium pb-2 tracking-tight'>
        Decoded: <VehicleTitle />
      </h6>
      <p className='text-xs text-gray-600'>{vin}</p>
      <VehicleStatline />
    </div>
  );
}

export function StarRating(props:HTMLAttributes<HTMLDivElement>) {
  const { sellerRating } = useContext(SingleVehicleContext);
  const [open, setOpen] = useState<boolean>(false);
  return <div {...props}>
    <Button
      variant='text'
      className='gap-0 py-1 p-2 text-xs icons:-mr-[2px] underline text-blue-700 focus:ring-0'
      onClick={() => setOpen(true)}
    >
      <StarFullIcon className='text-gold-500' />
      <StarFullIcon className='text-gold-500' />
      <StarFullIcon className='text-gold-500' />
      <StarEmptyIcon className='text-gray-300' />
      <StarEmptyIcon className='text-gray-300' />
      <span className='px-1'>{sellerRating}</span>
    </Button>
    <Modal variant='modal' show={open} onClose={() => setOpen(false)}>
      Dealer reviews
      <Button variant='text'  className='text-xs underline text-blue-700 px-2' onClick={() => setOpen(true)}>Dismiss</Button>
    </Modal>
  </div>;
}

export function VehicleToolbar(props:HTMLAttributes<HTMLDivElement>) {
  const { toggleHideItem, toggleWorkbookItems, workbookItems } = useContext(SRPContext);
  const { id } = useContext(SingleVehicleContext);
  const isWorkbook = workbookItems.includes(id);
  return <div {...props}>
    <Button className='outline p-2 bg-white uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'>
      <EditIcon />
      Add Note
    </Button>
    <Button
      className={'outline p-2 bg-white uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'}
      onClick={() => toggleWorkbookItems(id)}
    >
      <HeartIcon className={`${isWorkbook ? 'fill-blue-300 animate-pulse' : 'fill-transparent'} transition-colors duration-100`} />
      {isWorkbook ? 'In Workbook' : 'Add to Workbook'}
    </Button>
    <Button
      className='outline p-2 bg-white uppercase text-xxs sm:text-xs tracking-tight font-bold pr-3'
      onClick={() => toggleHideItem(id)}
    >
      <BlockedIcon />
      Hide
    </Button>
  </div>;
}

export function AuctionUI(props:HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>
    <div className="bg-blue-900 text-white h-6"></div>
    <div className='p-4 text-center text-sm text-gray-800 space-y-4'>
      <p className='text-sm'>Simulcast | 3 / 1</p>
      <p className='uppercase text-blue-700'>Make offer</p>
    </div>
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

export function VehicleOverview(props:HTMLAttributes<HTMLDivElement>) {
  const { exteriorColor, interiorColor } = useContext(SingleVehicleContext);
  return <div {...props}>
    <div className="flex gap-0">
      <div className="w-1/4 p-2">
        <VehicleImage />
        <div className="grid sm:grid-cols-2 gap-2 text-xs py-2 text-center">
          <div>{interiorColor}</div>
          <div>{exteriorColor}</div>
        </div>
      </div>
      <div className="p-1 w-3/4 text-left space-y-2 pb-4">
        <VehicleDescription className='px-2 py-1' />
        <SellerInfo className="grid grid-cols-2 text-sm " />
      </div>
    </div>
    <AutocheckScores />
  </div>;
}


export function SingleVehicle(props: SingleVehicleProps) {
  return (
    <Transition {...popIn} appear show>
    <SingleVehicleContext.Provider value={props}>
      <div className='w-full shadow border border-gray-100 rounded overflow-clip' key={props.id}>
        <div className='md:flex'>
          <VehicleOverview className='flex-grow' />
          <AuctionUI className='md:w-48 border flex-shrink-0 ml-auto hidden sm:block' />
        </div>
        <VehicleToolbar className='bg-gray-100 p-2 flex gap-3 justify-start border-t' />
      </div>
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
