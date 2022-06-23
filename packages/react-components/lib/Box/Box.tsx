import React from 'react';
import { PrismFC } from '../types';


export const Box:PrismFC = ({ as, ...props }) => {
  const Component = as || 'span';
  return <Component {...props} />;
};
