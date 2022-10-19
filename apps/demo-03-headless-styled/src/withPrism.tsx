import { ExtractProps } from "@prism2/react-components/dist/types";

/**
 * This Typescript experiment is intented to re-implment library
 * components from - for example - HeadlessUI while asserting some
 * initial default props.
 */
interface PrismProps {
  className?: string|string[],
  as?: React.ElementType
}

export type WithPrismProps = <
  P extends PrismProps,
  Props extends ExtractProps<React.ComponentType<P>> & P
>(
  Component: React.ComponentType<P>,
  inject?: Props & P
) => (props:Props) => JSX.Element;

export const withPrism:WithPrismProps = (Component, inject) => (props) => {
  function getClass() {
    const ourClass = [inject?.className] || []
    const theirClass = [props?.className] || []
    return [...ourClass, ...theirClass].flat().join(' ')
  }
  const attr = {
    className: getClass(),
    as: props?.as || inject?.as || 'div'
  }
  return <Component {...props} {...inject} {...attr} />
}
