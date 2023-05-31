import { Button } from '@prism2/react-components';
import { HTMLAttributes, useContext, useState } from 'react';
import { useInterval } from 'react-use';
import { PriceDisplay, SingleVehicleContext } from './SingleVehicleDetail';

export function useCountdown(arg0:string) {
  const [count, setCount] = useState(() => Date.parse(arg0) - Date.now());
  const countdown = new Date(count);
  const pad2 = (n:number) => `${(n < 10 ? '0' : '') + n}`;
  useInterval(() => setCount(count - 1000), 1000);
  const times = {
    hh: pad2(countdown.getHours()),
    mm: pad2(countdown.getMinutes()),
    ss: pad2(countdown.getSeconds()),
  };
  return { countdown, ...times, timestamp: `${times.hh}:${times.mm}:${times.ss}` };
}

export function AuctionCountdown(props:HTMLAttributes<HTMLDivElement> & { until: string }) {
  const { hh, mm, ss } = useCountdown(props.until);
  return (
    <span {...props}>
      <span>{hh}{':'}</span>
      <span>{mm}{':'}</span>
      <span>{ss}</span>
    </span>
  );
}
export function AuctionUI(props:HTMLAttributes<HTMLDivElement>) {
  const { buyNowPrice, startingBidPrice, auctionEndTime, allowBuyNow, source, laneNumber, runNumber } = useContext(SingleVehicleContext);
  return <div {...props}>
    <div className="hidden bg-blue-800 text-white h-6 text-xs leading-6 sm:block">{source}</div>
    <div className='text-center text-sm text-gray-800 space-y-4 flex md:block'>
      <div className="p-4 flex md:block items-center w-full gap-4 justify-evenly">
        {source === 'Simulcast' && <>
          <p className='md:mb-2'><span className='pr-1'>Simulcast</span> {laneNumber} / {runNumber}</p>
          <Button variant='text' className='uppercase font-light lg:text-base'>Enter Sale</Button>
          <Button variant='text' className='uppercase font-normal lg:text-base'>Proxy Bid</Button>
        </>}
        {startingBidPrice && <PriceDisplay label='Starting Bid' value={startingBidPrice} />}
        {allowBuyNow && buyNowPrice && <PriceDisplay label='Buy Now' value={buyNowPrice} />}
      </div>
    </div>
    <div className="border-t mt-auto p-2 flex md:block items-center justify-evenly gap-4 md:space-y-2">
      <div className="flex items-center gap-1 justify-center flex-wrap">
        <span className='prism-label text-xs'>{'Ends in'}</span>
        <AuctionCountdown className='text-lg tracking-tight inline-block' until={auctionEndTime} />
      </div>
      <Button variant='fill' className='bg-blue-800 text-white uppercase font-normal text-sm' >Make offer</Button>
    </div>
  </div>;
}
