import { forwardRefWithAs } from '../utils';
import { ElementType } from 'react';
import { Props } from '../types';

let DEFAULT_COMPONENT_TAG = 'div' as const;
type DTag = typeof DEFAULT_COMPONENT_TAG;
export interface RenderPropArg {
  open: boolean
}
export type CompPropsWeControl =
  | 'id'
  | 'role'
  | 'aria-describedby'
  | 'aria-labelledby';
export type MyCompPropsBase<T> = Props<T, RenderPropArg, CompPropsWeControl>;
export type CompProps<T> = MyCompPropsBase<T> & {
  arg0?: boolean
};

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


export function MyComponentRoot<TTag extends ElementType = DTag>(props: CompProps<TTag>) {
  const { as, children, ...attr } = props;
  const Component = as || 'span';
  // if (children) {
  //   return <Component {...attr}>{children}</Component>;
  // }
  return <Component {...attr}>{children}</Component>;
}

// Example of how to assign default props in this pattern.
MyComponentRoot.defaultProps = {
  arg0: true,
};

// this allows us to include a `ref` that is typed appropriated
// based on the "as" prop.
// Example: when as="div", ref will be of type Ref<HTMLDivElement>
export const MyComponent = forwardRefWithAs(MyComponentRoot);
