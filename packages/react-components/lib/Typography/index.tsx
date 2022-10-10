import React, { ComponentType, useMemo, useState } from 'react';
import { Box } from '../Box';

export function useTailwind(utilityClass: string, propsClass: string ) {
  return useMemo(() => [utilityClass, propsClass].filter(Boolean).join(' '), [propsClass]);
}

interface WithPrismProps {
  className?: string;
  as?: React.ElementType
}

export const withPrism = <T extends React.ElementType>(clsx:string, defaultAs?: T) =>
  <P extends React.PropsWithChildren>(Component: React.ComponentType<P>) =>
    class WithPrism extends React.Component<P & WithPrismProps> {
      render() {
        const attr = {
          ...this.props,
          as: defaultAs || this.props.as,
          className: [clsx, this.props.className].filter(Boolean).join(' '),
        } as P;
        return <Component {...attr as P} />;
      }
    };


export const Banner = withPrism('', 'div')(Box);



export const Heading1 = withPrism('prism-heading-1 font-alt', 'p')(Box);
export const Heading2 = withPrism('prism-heading-2', 'p')(Box);
export const Heading3 = withPrism('prism-heading-3', 'p')(Box);
export const Heading4 = withPrism('prism-heading-4', 'p')(Box);
export const Heading5 = withPrism('prism-heading-5', 'p')(Box);
export const Heading6 = withPrism('prism-heading-6', 'p')(Box);
export const Caption = withPrism('prism-caption', 'p')(Box);
export const Label = withPrism('prism-label', 'p')(Box);
export const Anchor = withPrism('font-semibold text-blue-700')(Box);
/**
 * usage
 *
 * <H2 as='span'>My span styled as prism-heading-2</H2>
 */
export const Typography = { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Caption, Label, Anchor };
