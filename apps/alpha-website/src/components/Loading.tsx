import { SpinnerIcon } from '@prism2/icons-react';
import { HTMLAttributes } from 'react';

export function LoadingComponent(props:HTMLAttributes<HTMLDivElement>) {
  return (
  <div {...props}>
    <SpinnerIcon className='animate-loading w-8 inline' />{' '}
    <span className='animate-pulse'>Loading...</span>
  </div>
  );
}
