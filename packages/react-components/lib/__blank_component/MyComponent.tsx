import React from 'react';

/**
 * @package Blank Component Template
 * @description Starting point for new components with suggested structure.
 *
 *
 */


interface Props extends React.HTMLProps<HTMLDivElement> {
  /**
   * Description of argument purpose
   */
  arg0?: boolean,
}

export function MyComponent({ arg0, ...props }: Props):React.ReactElement {
  const { children, className } = props;
  const baseClass = 'bg-transparent border border-blue-300 ring-0';
  const clsx = [baseClass, className].join(' ');

  return (
    <div {...props} className={clsx}>{children}</div>
  );
}

MyComponent.defaultProps = {
  arg0: true,
};

export default MyComponent;
