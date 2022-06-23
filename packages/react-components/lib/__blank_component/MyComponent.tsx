import React from 'react';
import { PrismFC } from '../types';

/**
 * @package Blank Component Template
 * @description Starting point for new components with suggested structure.
 *
 * We use the `PrismFC` type to apply our base component properties, mainly the
 * the "as" prop and inheriting HTML attributes accordingly. We then overload
 * it with our specific props.
 *
 * Valid Example:
 * <Box as="button" type="submit">Submit</Box>
 *
 * Invalid: type is not valid attribute for 'div'
 * <Box as="div" type="submit">Submit</Box>
 *
 */


interface Props {
  /**
   * Description of argument purpose
   */
  arg0?: boolean,
}

// export function MyComponent({ arg0, ...props }: Props):React.ReactElement {
export const MyComponent:PrismFC<Props> = ({ as, arg0, ...props }) => {
  const { children, className } = props;
  const baseClass = 'bg-transparent border border-blue-300 ring-0';
  const clsx = [baseClass, className].join(' ');
  const Component = as || 'span';
  return (
    <Component {...props} className={clsx}>{children}</Component>
  );
};

MyComponent.defaultProps = {
  arg0: true,
};

export default MyComponent;
