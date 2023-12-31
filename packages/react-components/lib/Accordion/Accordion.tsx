import { Transition } from '@headlessui/react';
import { ChevronRightIcon } from '@prism2/icons-react/24/solid';
import { useState, useEffect } from 'react';
import { Box } from '../Box';
import { fadeInDownOutUp } from '../utils';
import type { ReactNode } from 'react';

export const IndicatorChevron:React.FC<{ enabled?:boolean }> = ({ enabled }) => (
  <ChevronRightIcon className={`w-5 h-5 transition-all duration-200 transform ui-open:-rotate-90 ui-not-open:rotate-90 ${enabled ? '-rotate-90' : 'rotate-90'}`} />
);

export interface AccordionItemProps {
  /**
   * Text to display when collapsed.
   */
  label: string | ReactNode,
  /**
   * Content to display when expanded.
   */
  content: string | ReactNode,
  /**
   * Initial open state, defaults to false.
   */
  defaultOpen?: boolean,
  /**
   * Optional callback to fire when visiblity changes.
   */
  onChange?(arg0:boolean): void
  /**
   * class to be injected on *title* element only. Child classes can be
   * passed directly in the label and content props respectively.
   */
  className?: string,
  variant?: 'filter' | 'menu'
}



export function AccordionItem({ label, content, className, variant, defaultOpen, onChange = () => {} }:AccordionItemProps) {
  const [enabled, setEnabled] = useState(defaultOpen || false);
  useEffect(() => {
    setEnabled(defaultOpen || false);
  }, [defaultOpen]);

  function handleChange(val:boolean) {
    onChange(val);
    setEnabled(val);
  }

  const isFilter = variant === 'filter';

  const titleClass = [
    'text-left min-w-full',
    'bg-white flex items-center text-blue-700 font-medium text-left py-2',
    isFilter ? 'justify-start' : 'justify-between',
    className,
  ].join(' ');


  return (
    <div>
      <Box as="button" className={titleClass} onClick={() => handleChange(!enabled)}>
        {variant !== 'filter' && <h4>{label}</h4>}
        <IndicatorChevron enabled={enabled} />
        {variant === 'filter' && <h4>{label}</h4>}
      </Box>
      <Transition unmount={false} appear={true} show={enabled} {...fadeInDownOutUp}>
        {typeof content === 'string' ? <div className='py-1 mb-1'>{content}</div> : content}
      </Transition>
    </div>
  );
}

export interface AccordionProps {
  /**
   * Array of props to be passed to children, same as AccordionItem props.
   */
  items: AccordionItemProps[],
  /**
   * If true, opening an item will collapse its peers
   * @default false
   */
  autoCollapse?: boolean,
  /**
   * Parent classnames
   */
  className?: string,
  variant?: 'filter' | 'menu',
  onChange?(arg0: any): void;
}


function updateAtIndex<T = object>(list: T[], idx: number, data: Partial<T>): T[] {
  return [
    ...list.slice(0, idx),
    { ...list[idx], ...data },
    ...list.slice(idx + 1, 9999),
  ];
}

export function Accordion({
  items,
  className,
  autoCollapse = false,
  variant,
  onChange,
}:AccordionProps) {


  const clsx = ['divide-y divide-gray-100', className].join(' ');

  function updateItem(idx: number, val:boolean) {
    if (onChange) {
      if (autoCollapse) {
        onChange(items.map((i, index) => ({ ...i, defaultOpen: idx === index })));
      } else {
        onChange(updateAtIndex(items, idx, { defaultOpen: val }));
      }
    }
  }

  return <Box as="div" className={clsx}>
    {items.map((item, idx) => (
      <AccordionItem
        variant={variant || item.variant }
        defaultOpen={item.defaultOpen}
        className={item.className}
        key={`item-${idx.toString()}`}
        label={item.label}
        content={item.content}
        onChange={(val) => updateItem(idx, val)}
        />
    ))}

  </Box>;
}

export default AccordionItem;
