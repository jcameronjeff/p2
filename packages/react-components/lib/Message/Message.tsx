import { CheckCircleIcon, ExclamationCircleIcon, MailOpenIcon, InformationCircleIcon } from '@heroicons/react/solid';
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
  const Component = as || 'div';

  function getVariant() {
    switch (variant) {
      case 'info':
        return ['bg-sky-200 text-sky-900', InformationCircleIcon]; break;
        // return ['bg-sky-200 text-sky-900', InfoIcon]; break;
      case 'error':
        return ['bg-red-200 text-red-900', ExclamationCircleIcon]; break;
        // return ['bg-red-200 text-red-900', NotificationIcon]; break;
      case 'alert':
        return ['bg-yellow-200 text-red-900', ExclamationCircleIcon]; break;
      case 'success':
        // Why is the font color different here from the otheres?..
        return ['bg-green-200 text-green-900', CheckCircleIcon]; break;
        // return ['bg-green-200 text-green-900', CheckmarkIcon]; break;
      default:
        return ['bg-blue-200 text-blue-900', MailOpenIcon];
    }
  }

  const cx = [getVariant()[0], 'p-4 pr-6 rounded min-w-[200px]', className].join(' ');
  const Icon = getVariant()[1];
  return (
    <Component {...htmlProps} className={cx}>
      <div className='grid grid-cols-[min-content,1fr] gap-x-1 items-start'>
        <Icon className='w-5 h-5 scale-90' />
        {!title ? (
          <div>{children}</div>
        ) : (
          <>
          <div className='font-bold'>{title}</div>
          <div className='w-6 h-6' />
          <div>{children}</div>
          </>
        )}
      </div>
    </Component>
  );
};
