import { HTMLComponent } from '../types';

export const H1:HTMLComponent<{}> = ({ as, children, className, ...args }) => {
  const Component = as || 'span';
  const clsx = ['prism-heading-1', className].filter(Boolean).join(' ');
  return <Component {...args} className={clsx}>{children}</Component>;
};

export const H2:HTMLComponent<{}> = ({ as, children, className, ...args }) => {
  const Component = as || 'span';
  const clsx = ['prism-heading-2', className].filter(Boolean).join(' ');
  return <Component {...args} className={clsx}>{children}</Component>;
};

export const H3:HTMLComponent<{}> = ({ as, children, className, ...args }) => {
  const Component = as || 'span';
  const clsx = ['prism-heading-3', className].filter(Boolean).join(' ');
  return <Component {...args} className={clsx}>{children}</Component>;
};

export const H4:HTMLComponent<{}> = ({ as, children, className, ...args }) => {
  const Component = as || 'span';
  const clsx = ['prism-heading-4', className].filter(Boolean).join(' ');
  return <Component {...args} className={clsx}>{children}</Component>;
};

export const H5:HTMLComponent<{}> = ({ as, children, className, ...args }) => {
  const Component = as || 'span';
  const clsx = ['prism-heading-5', className].filter(Boolean).join(' ');
  return <Component {...args} className={clsx}>{children}</Component>;
};

export const H6:HTMLComponent<{}> = ({ as, children, className, ...args }) => {
  const Component = as || 'span';
  const clsx = ['prism-heading-6', className].filter(Boolean).join(' ');
  return <Component {...args} className={clsx}>{children}</Component>;
};


export const Typography = { H1, H2, H3, H4, H5, H6 };
