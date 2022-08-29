import type { HTMLProps, FC } from 'react';

/**
 * @package Blank Component Template
 * @description Starting point for new components with suggested structure.
 *
 *
 */


interface Props extends HTMLProps<HTMLDivElement> {
  /**
   * Description of argument purpose
   */
  arg0?: boolean,
}

const CardRoot:FC<HTMLProps<HTMLDivElement>> = ({ children, className, ...props }:Props ) => {
  const baseClasses = 'card w-[400px] border shadow-lg rounded-sm space-y-4';
  const clsx = [baseClasses, className].join(' ');
  return (
    <div {...props} className={clsx}>
      {children}
    </div>
  );
};

const CardHeader:FC<HTMLProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  const baseClasses = 'flex items-center justify-center p-8 py-4 border-b';
  const clsx = [baseClasses, className].join(' ');
  return (
    <header className={clsx} {...props}>
      {children}
    </header>
  );
};

const CardFooter:FC<HTMLProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  const baseClasses = 'flex justify-between items-center p-8 py-4 border-t';
  const clsx = [baseClasses, className].join(' ');
  return (
    <footer className={clsx} {...props}>
      {children}
    </footer>
  );
};

const CardContent:FC<HTMLProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  const baseClasses = 'space-y-4 p-8 py-4';
  const clsx = [baseClasses, className].join(' ');
  return (
    <main className={clsx} {...props}>
      {children}
    </main>
  );
};


export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Footer: CardFooter,
  Content: CardContent,
});

export default Card;
