import { Dialog, Transition } from '@headlessui/react';
import React, { ElementType, Fragment, MutableRefObject, Ref, useRef } from 'react';
import { forwardRefWithAs, fadeInOut, slideUpDown, TransitionPropPreset } from '../utils';
import { Features, PropsForFeatures, Props } from '../types';


export interface ModalProps {
  /**
   *  Use the show prop to control whether the content should be
   *  visible or hidden.
   *  @default false
   */
  show: boolean;

  /**
   * If true, element will transition on initial render. Useful for
   * conditional rendering or animating initial page load.
   * @default false
   */
  appear?: boolean;
  /**
   * Callback to fire when modal is dismissed
   */
  onClose(value: boolean): void

  /**
   * If you'd like something other than the first focusable element
   * to receive initial focus when your dialog is initially rendered,
   * you can use the initialFocus ref.
   *
   * @see https://headlessui.dev/react/dialog#managing-initial-focus
   */
  initialFocus?: MutableRefObject<HTMLElement | null>
  /**
   * Optionally provide a title via props instead of with a <Dialog.Title /> tag.
   * @see https://headlessui.dev/react/dialog#dialog-title
   */
  title?: string;
  /**
   * Optionally provide a description via props.
   */
  description?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /**
   * Optionally apply TW classes to the container.
   */
  className?: string,
  /**
   * Optionally override backdrop animation. Object will be merged with defaults.
   */
  outerTransition?: Partial<TransitionPropPreset>,
  /**
   * Optionally override container animation. Object will be merged with defaults.
   */
  innerTransition?: Partial<TransitionPropPreset>,
  __debug?: boolean

}

let DEFAULT_DIALOG_TAG = 'div' as const;
let DialogRenderFeatures = Features.RenderStrategy | Features.Static;
export type ModalBaseProps<T> = Props<T, { open: boolean }, 'dialog'> & PropsForFeatures<typeof DialogRenderFeatures> & ModalProps;


export function ModalRoot<TTag extends ElementType = typeof DEFAULT_DIALOG_TAG>(
  props: ModalBaseProps<TTag>,
  ref: Ref<HTMLHeadingElement>,
) {
  const {
    initialFocus,
    className,
    outerTransition,
    innerTransition,
    show,
    onClose,
    title,
    description,
    footer,
    children,
    content,
  } = props;

  const closeRef = useRef(null);

  const focus = initialFocus || useRef(null);
  const clsx = ['prism-dialog-box space-y-4', className].join(' ');
  const outerAnimate = { ...fadeInOut, ...outerTransition };
  const innerAnimate = { ...slideUpDown, ...innerTransition };



  /**
   * @TODO OVERVIEW TOPIC - THROW DESCRIPTIVE ERRORS
   * --------------------------------------------------
   * @example Provide useful feedback to developers by throwing descriptive
   * errors for predictable mistakes. This can mimic feedback already provided
   * by Typescript.
   */
  (function validations(componentProps: any) {
    let hasShow = componentProps.hasOwnProperty('show');
    let hasOnClose = componentProps.hasOwnProperty('onClose');
    let hasInitialFocus = componentProps.hasOwnProperty('initialFocus');
    let isDebug = componentProps.hasOwnProperty('__debug') && componentProps.__debug === true;

    if (!isDebug) return;

    if (!hasShow) {
      throw new Error(
        'You forgot to provide a `show` prop to the `Modal`.',
      );
    }

    if (!hasOnClose) {
      throw new Error(
        'You forgot to provide an `onClose` prop to the `Modal`.',
      );
    }

    if (typeof onClose !== 'function') {
      throw new Error(
        `You provided an \`onClose\` prop to the \`Modal\`, but the value is not a function. Received: ${onClose}`,
      );
    }

    if (hasInitialFocus && typeof initialFocus !== 'object') {
      throw new Error(
        'You provided an `initialFocus` prop, but the value is not a ref.',
      );
    }

    /**
   * @TODO OVERVIEW TOPIC - DEBUG FEATURE FLAG
   * --------------------------------------------------
   * @example We provide a `__debug` flag to enable extra logging on a
   * per-component basis. This ought to be standardized like with `as`.
   *
   * @remark Generally this ought to be hidden behind a feature flag
   */

    if (isDebug) {
      console.warn('You are viewing the `Modal` component in demo mode');
      console.group(`PRISM <Modal/> Debug for "${componentProps.title}"\n`);
      console.log('Props', { ...componentProps, innerAnimate, outerAnimate });
      console.table({
        title: componentProps.title,
        description: componentProps.description,
        className: componentProps.className,
        hasShow,
        hasOnClose,
        hasInitialFocus,
        isShowing: componentProps.show,
      });
      console.groupEnd();
    }

  }(props));


  return (
    <Transition show={show} ref={ref}>
      <Dialog onClose={onClose} open={show} initialFocus={focus}>
        <div className="prism-dialog-frame">
          <Transition.Child as={Fragment} {...outerAnimate}>
            <div className='prism-dialog-backdrop backdrop-blur-sm backdrop-opacity-95 backdrop-grayscale'>
              <Dialog.Overlay className="prism-dialog-overlay" />
              <Transition.Child as={Fragment} {...innerAnimate}>
                <div ref={closeRef} className={clsx}>
                  {title ? (
                    <Dialog.Title className='prism-heading-2'>
                      {title}
                    </Dialog.Title>
                  ) : null}
                  {description ? (
                    <Dialog.Description className='prism-heading-3'>
                      {description}
                    </Dialog.Description>
                  ) : null}
                  {content ? <>{content}</> : null}
                  {children ? <>{children}</> : null}
                  {footer ? <>{footer}</> : null}
                </div>
              </Transition.Child>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
export const Modal = forwardRefWithAs(ModalRoot);
