import { CheckCircleIcon, ExclamationCircleIcon, MailOpenIcon, InformationCircleIcon } from '@heroicons/react/solid';
import React from 'react';
// import { InfoIcon, CheckmarkIcon, NotificationIcon } from '../messageIcons';
import { HTMLComponent } from '../types';

/**
 * @TODO OVERVIEW TOPIC - DOCGEN COMMENTS
 * --------------------------------------------------
 * @remark The comment format below is used to support various static analysis
 * tools that insert the content into VSCode autocompletion, Storybook, TypeDoc
 * and similar.
 */

export type MessageVariantName = 'info' | 'error' | 'alert' | 'success';
export type MessageVariant = Record<MessageVariantName, string>;
export type IconType = 'info' | 'error' | 'alert' | 'success';

// export default Message;
interface Props {
  /**
   * named variant value for this message.
   */
  variant?: keyof MessageVariant,
  /**
   * title text for message
   */
  title?: string
}

export const Message:HTMLComponent<Props> = ({ variant, as = 'div', title, children, className, ...htmlProps }) => {

  let getVariant = () => {
    if (variant === 'info') return ['bg-blue-200 text-blue-900', InformationCircleIcon];
    if (variant === 'error') return ['bg-red-200 text-red-900', ExclamationCircleIcon];
    if (variant === 'alert') return ['bg-yellow-200 text-red-900', ExclamationCircleIcon];
    if (variant === 'success') return ['bg-green-200 text-green-900', CheckCircleIcon];
    return ['bg-gray-100 text-gray-800', InformationCircleIcon];
  };
  const { cx, Icon } = React.useMemo(() => ({
    Icon: getVariant()[1],
    cx: [
      getVariant()[0],
      'p-4 pr-6 rounded min-w-[200px]',
      'grid grid-cols-[min-content,1fr] gap-x-1 items-start',
      className,
    ].join(' '),
  }), [variant, className]);

  const Component = as || 'div';
  return (
    <Component {...htmlProps} className={cx}>
      <Icon className='w-5 h-5 scale-90' />
      {!!title && <>
        <div className='font-bold'>{title}</div>
        <div className='w-6' />
      </>}
      <div>{children}</div>
    </Component>
  );
};
