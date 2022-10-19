import React from 'react';
import { HTMLComponent } from '../types';


export const Box:HTMLComponent<{}> = ({ as, children, ...props }) => {
  const Component = as || 'span';
  if (children) {
    return <Component {...props}>{children}</Component>;
  }
  return <Component {...props} />;
};

