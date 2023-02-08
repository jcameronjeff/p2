import { useContext } from 'react';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, ExclamationCircleIcon } from '@prism2/icons-react/24/outline';
import { SingleVehicleContext } from './SingleVehicleDetail';

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
