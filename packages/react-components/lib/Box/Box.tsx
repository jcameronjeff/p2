import React from 'react';
import { HTMLComponent } from '../types';


export const Box:HTMLComponent = ({ as, ...props }) => {
  const Component = as || 'span';
  return <Component {...props} />;
};

