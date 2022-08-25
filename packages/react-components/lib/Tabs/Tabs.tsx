import React, { ComponentType, createContext, Fragment, ReactComponentElement, ReactElement, useContext, useMemo } from 'react';
import { Tab as HeadlessTab } from '@headlessui/react';
import { ExtractProps } from '../types';

// Context creation
type TabConfigSettings = {
  /**
   * When true, the orientation of the Tab.List will be vertical, otherwise it will be horizontal.
   */
  vertical?: boolean
  /**
   * If true, all custom classes will be removed and only the headless
   * component returned.
   */
  unstyle?: boolean
  /**
   * When true, the user can only display a panel via the keyboard by first navigating to it
   * using the arrow keys, and then by pressing Enter or Space. By default, panels
   * are automatically displayed when navigated to via the arrow keys. Note that this
   * prop has no affect on mouse behavior.
   */
  manual?: boolean
  /**
   * A function called whenever the active tab changes.
   */
  onChange?: (index: number) => void
  /**
   * **RENDER PROP** The selected index if you want to use the Tabs component as a controlled component.
   */
  selectedIndex?: number
  /**
   * The default selected index
   */
  defaultIndex?: number
  /**
   * The element or component the Tabs should render as.
   */
  as?: string | React.Component
};

export const TabConfig = createContext<TabConfigSettings>({
  vertical: false,
  unstyle: false,
});

export type TabGroupProps = ExtractProps<typeof HeadlessTab.Group> & Partial<TabConfigSettings>;
export function TabGroup({ vertical, unstyle, ...props }: TabGroupProps) {
  // add your own logic here
  const ctx = useMemo(() => ({ vertical, unstyle }), [vertical, unstyle]);
  return (
    <TabConfig.Provider value={ctx}>
      <HeadlessTab.Group {...props} />
    </TabConfig.Provider>
  );
}
TabGroup.defaultProps = {
  as: Fragment,
  defaultIndex: 0,
  vertical: false,
  manual: false,
};

export type TabListProps = ExtractProps<typeof HeadlessTab.List>;
export function TabList({ className, children, ...props }: TabListProps) {
  const { vertical, unstyle } = useContext(TabConfig);
  const clsx = !unstyle ? [
    'items-center gap-2',
    !!vertical ? 'flex-column border-r justify-end' : 'flex border-b',
    className,
  ].join(' ') : className;
  return (
    <HeadlessTab.List {...props} className={clsx}>
      {children}
    </HeadlessTab.List>
  );
}

export function TabRoot(props: ExtractProps<typeof HeadlessTab> & {
  icon?: React.ElementType | null | undefined | false
}) {
  // add your own logic here
  const { vertical, unstyle } = useContext(TabConfig);
  const { as, children, disabled, className, ...attr } = props;
  const Component = as || 'button';
  const Icon = props.icon || null;
  return (
    <HeadlessTab as={Fragment}>
      {({ selected }) => (
         <Component {...attr} disabled={disabled} className={!unstyle ? `
          ${selected && 'selected'}

            prism-tab
            ${vertical && 'vertical'}
            ${className}
        ` : className}>
          {Icon && <Icon className='h-[1em]' />}
          {children}
        </Component>
      )}
    </HeadlessTab>
  );
}

export function TabPanels(props: ExtractProps<typeof HeadlessTab.Panels>) {
  // add your own logic here
  return <HeadlessTab.Panels {...props} />;
}

export function TabPanel(props: ExtractProps<typeof HeadlessTab.Panel>) {
  // add your own logic here
  return <HeadlessTab.Panel {...props} />;
}



export const Tab = Object.assign(TabRoot, {
  Group: TabGroup,
  List: TabList,
  Panels: TabPanels,
  Panel: TabPanel,
});
