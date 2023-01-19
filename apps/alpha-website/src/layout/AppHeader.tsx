import { CheckmarkCircleIcon  } from '@prism2/icons-react';

export const AppHeader = () => (
  <div className='fixed z-50 inset-x-0 top-0 bg-blue-100 p-4'>
    <h4 className="section-header">
      <CheckmarkCircleIcon />
      <div>Saved Searches</div>
      <div className='aux-button'>View All</div>
    </h4>
  </div>
);
