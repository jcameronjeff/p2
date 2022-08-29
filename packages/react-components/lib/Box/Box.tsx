import React from 'react';
import { HTMLComponent } from '../types';


export const Box:HTMLComponent<{
  skip?: boolean
}> = ({ skip = false, as, children, ...props }) => {
  if (skip) return null;
  const Component = as || 'span';
  if (children) {
    return <Component {...props}>{children}</Component>;
  }
  return <Component {...props} />;
};

