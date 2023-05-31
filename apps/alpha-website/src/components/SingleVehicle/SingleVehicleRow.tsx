import { Chip } from '@prism2/react-components';
import { useContext } from 'react';
import { SingleVehicleContext, VehicleStatline, VehicleTitle } from './SingleVehicleDetail';

export function VehicleTableRow() {
  const { source, vin, odometer, year, odometerUnits, bidPrice, allowBuyNow } = useContext(SingleVehicleContext);
  return (
    <tr className='flex [&_td]:leading-6 [&_td]:px-4 divide-x text-xs tracking-tighter font-semibold border-b'>

      <td className='w-16'>
        {year}
      </td>
      <td className='text-left flex-grow text-sm text-blue-700 uppercase tracking-tighter flex justify-start gap-2'>
        <VehicleTitle className='flex-shrink-0'/>

      </td>
      <td className='font-normal text-gray-500 w-64 text-left'>
          <VehicleStatline className=''/>
        </td>

      <td className='w-20 text-xs tracking-tighter font-semibold text-right'>
        {odometer} {odometerUnits.slice(0, 2) || 'mi'}
      </td>
      <td className='w-24 flex-shrink-0 flex items-center gap-1 px-0 '>
        {bidPrice ? (
          <>
            <span className='pl-2'>${bidPrice?.toLocaleString()}</span>
            <div className="w-2 h-2 self-center bg-orange-400 animate-pulse rounded-full flex-shrink-0"></div>
          </>
        ) : (
          <span className='mx-auto'>-</span>
        )}

      </td>
      <td className='w-32'>
        {allowBuyNow
          ? <Chip variant='light' className='flex-grow-0 inline-flex py-0.5 text-xxs bg-gray-50 hover:bg-blue-200 cursor-pointer'>Buy Now</Chip>
          : <Chip variant='light' className='flex-grow-0 inline-flex py-0.5 text-xxs bg-blue-100 hover:bg-blue-200 cursor-pointer'>Submit Bid</Chip>}
      </td>
      <td className='w-40 text-xs font-mono'>
        {vin}
      </td>
      <td className='w-20'>
        {source}
      </td>
    </tr>
  );
}
