import { Prism } from '../types';

export const Box:Prism.HTMLComponent = ({ as, children, ...props }) => {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
};
