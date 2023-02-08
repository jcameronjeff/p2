import { StarEmptyIcon, StarFullIcon } from '@prism2/icons-react';
import { Button, Modal } from '@prism2/react-components';
import { useContext, useState, HTMLAttributes } from 'react';
import { SingleVehicleContext } from './SingleVehicleDetail';

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
