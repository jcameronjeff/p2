import { ReactNode, ReactElement } from 'react';

/**
 * A unique placeholder we can use as a default. This is nice because we can use this instead of
 * defaulting to null / never / ... and possibly collide with actual data. Ideally we use a
 * unique symbol here.
 *
 * @see https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/types.ts
 */
/* eslint-disable */
let __ = '1D45E01E-AF44-47C4-988A-19A94EBAF55C' as const;
export type __ = typeof __;
/* eslint-enable */

export type Expand<T> = T extends infer O ? { [K in keyof O] : O[K] } : never;

export type PropsOf<TTag = any> = TTag extends React.ElementType
  ? React.ComponentProps<TTag>
  : never;

type PropsWeControl = 'as' | 'children' | 'refName' | 'className';

// Resolve the props of the component, but ensure to omit certain props that we control
type CleanProps<TTag, TOmitableProps extends keyof any = __> = TOmitableProps extends __
  ? Omit<PropsOf<TTag>, PropsWeControl>
  : Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>;

// Add certain props that we control
type OurProps<TTag, TSlot = any> = {
  as?: TTag
  children?: ReactNode | ((bag: TSlot) => ReactElement)
  refName?: string
};

// Conditionally override the `className`, to also allow for a function
// if and only if the PropsOf<TTag> already define `className`.
// This will allow us to have a TS error on as={Fragment}
type ClassNameOverride<TTag, TSlot = any> = PropsOf<TTag> extends { className ? : any }
  ? { className ? : string | ((bag: TSlot) => string) }
  : {};

// Provide clean TypeScript props, which exposes some of our custom API's.
export type Props<TTag, TSlot = any, TOmitableProps extends keyof any = __> = CleanProps<
TTag,
TOmitableProps
> &
OurProps<TTag, TSlot> &
ClassNameOverride<TTag, TSlot>;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends __
  ? never
  : T extends __
    ? U
    : U extends __
      ? T
      : T | U extends object
        ? (Without<T, U> & U) | (Without<U, T> & T)
        : T | U;

export enum Features {
  /** No features at all */
  None = 0,

  /**
   * When used, this will allow us to use one of the render strategies.
   *
   * **The render strategies are:**
   *    - **Unmount**   _(Will unmount the component.)_
   *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
   */
  RenderStrategy = 1,

  /**
   * When used, this will allow the user of our component to be in control. This can be used when
   * you want to transition based on some state.
   */
  Static = 2,
}

export enum RenderStrategy {
  Unmount,
  Hidden,
}

type PropsForFeature<TPassedInFeatures extends Features, TForFeature extends Features, TProps> = {
  [P in TPassedInFeatures]: P extends TForFeature ? TProps : __
}[TPassedInFeatures];

export type PropsForFeatures<T extends Features> = XOR<
PropsForFeature<T, Features.Static, { static?: boolean }>,
PropsForFeature<T, Features.RenderStrategy, { unmount?: boolean }>
>;

export declare module Prism {
  // Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
  // A more precise version of just React.ComponentPropsWithoutRef on its own
  export type PropsOfElem<
    C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  > = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

  type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C
  };
  /**
   * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
   * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
   * set of props.
   */
  export type ExtendableProps<
    ExtendedProps = {},
    OverrideProps = {},
  > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
  /**
   * Allows for inheriting the props from the specified element type so that
   * props like children, className & style work, as well as element-specific
   * attributes like aria roles. The component (`C`) must be passed in.
   */
  export type InheritableElementProps<
    C extends React.ElementType,
    P = {},
  > = ExtendableProps<PropsOfElem<C>, P>;
  /**
   * A more sophisticated version of `InheritableElementProps` where
   * the passed in `as` prop will determine which props can be included
   */
  type PolymorphicComponentProps<
    C extends React.ElementType,
    P = {},
  > = InheritableElementProps<C, P & AsProp<C>>;

  export type PolymorphicRef<
    C extends React.ElementType,
  > = React.ComponentPropsWithRef<C>['ref'];
  /**
   * Overloadable polymorphic props
   */

  type HTMLProps<C extends React.ElementType = 'span', P = {}> = PolymorphicComponentProps<C, P>;
  type HTMLComponent<P = {}> = <C extends React.ElementType = 'span'>(props: HTMLProps<C, P>) => React.ReactElement | null;
  type ForwardRef<P = {}> = <C extends React.ElementType = 'span'>(props: HTMLProps<C, P>, ref?: PolymorphicRef<C>) => React.ReactElement | null;

  export interface AppendPrependArgs {
    /**
     * Optionally provide a node to prepend to our component.
     */
    prepend?: ReactNode | ReactElement;
    /**
     * Optionally provide a node to append to our component.
     */
    append?: ReactNode | ReactElement;
  }

}


