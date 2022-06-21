import { Prism } from '../types';

export const Box:Prism.HTMLComponent = ({ as, ...props }) => {
  const Component = as || 'div';
  return <Component {...props} />;
};
