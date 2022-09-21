import React, { PropsWithChildren, useMemo } from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { CheckCircleIcon } from '@prism2/icons-react/24/solid';
import type { ExtractProps } from '../types';



export type StepGroupI = ExtractProps<typeof HeadlessTab.Group> & {
  unstyle?: boolean
};
export const StepContext = React.createContext<Pick<StepGroupI, 'selectedIndex' | 'manual'>>({
  selectedIndex: 0,
  manual: false,
});

export function StepGroup(props: StepGroupI) {
  const [selectedIndex, setSelectedIndex] = React.useState(props.defaultIndex || 0);
  const ctx = {
    selectedIndex: props.selectedIndex || selectedIndex,
    manual: props.manual,
  };
  return (
    <StepContext.Provider value={ctx}>
      <HeadlessTab.Group
        defaultIndex={0}
        onChange={setSelectedIndex}
        {...props}
        as={props.as || 'div'} />
    </StepContext.Provider>
  );
}

export type StepRootI = ExtractProps<typeof HeadlessTab> & React.PropsWithChildren & {
  index?: number;
  selectedIndex?: number;
};
export function StepRoot({ index = 0, unstyle, children, className, ...attr }: StepRootI)  {
  const { selectedIndex, manual } = React.useContext(StepContext);
  const complete = !!selectedIndex && selectedIndex > index;
  const [tabStyles, headStyle] = useMemo(() => unstyle ? [className, className] : [`
    focus-visible:outline-none flex-1 text-left uppercase text-sm
    items-center gap-1 leading-tight
    flex sm:list-item self-start
    selected:font-bold not:disabled:cursor-pointer ${className}
  `, `
    sm:h-7 items-center justify-center flex-shrink-0
    py-2 sm:py-0
    flex sm:list-item
    selected:border-blue-800
    completed:border-green-500
    border-x-2 sm:border-x-0
    border-y-0 sm:border-y-2
    selected:border-x-4 sm:selected:border-x-0 sm:selected:border-b-4
    completed:border-x-4 sm:completed:border-x-0 sm:completed:border-b-4
    flex items-center gap-2 w-10 sm:w-auto
    !border-r-transparent !border-t-transparent
    text-gray-400 selected:text-black selected:font-bold
  `], [className, unstyle]);

  return (
    <HeadlessTab disabled={manual} {...attr} className={tabStyles} as='button'>
      <div aria-selected={selectedIndex === index} aria-complete={complete} className={headStyle}>
        {complete ?
          <CheckCircleIcon className="inline h-5 my-auto text-green-500" /> :
          <div className='inline h-5 leading-5'>{index + 1}</div>}
      </div>
      <div className="sm:p-0.5">
        {children}
      </div>
    </HeadlessTab>
  );
}

const StepList = ({ className, children, ...props }: ExtractProps<typeof HeadlessTab.List> & PropsWithChildren) => {
  const clsx = ['flex flex-col sm:flex-row gap-0.5 sm:gap-1 uppercase', className].filter(Boolean).join(' ');
  return <HeadlessTab.List {...props} as='ol' className={clsx}>
    {React.Children.map(children as React.ReactElement<StepRootI>, (child, index) => {
      return React.cloneElement(child, { index: index });
    })}
  </HeadlessTab.List>;
};



export const Step = Object.assign(StepRoot, {
  Group: StepGroup,
  List: StepList,
  Panels: (props: ExtractProps<typeof HeadlessTab.Panels>) => <HeadlessTab.Panels {...props} />,
  Panel: (props: ExtractProps<typeof HeadlessTab.Panel>) => <HeadlessTab.Panel {...props} />,
});
