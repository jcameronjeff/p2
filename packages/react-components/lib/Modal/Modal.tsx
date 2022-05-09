import { Dialog, Transition } from '@headlessui/react';
import React, { ElementType, Fragment, MutableRefObject, Ref, useRef } from 'react';
import { forwardRefWithAs, fadeInOut, slideUpDown, TransitionPropPreset } from '../utils';
import { Features, PropsForFeatures, Props } from '../types';

/**
 * @TODO OVERVIEW TOPIC - DOCGEN COMMENTS
 * --------------------------------------------------
 * @remark The comment format below is used to support various static analysis
 * tools that insert the content into VSCode autocompletion, Storybook, TypeDoc
 * and similar.
 */
let DEFAULT_MODAL_TAG = 'div' as const;
let ModalRenderFeatures = Features.RenderStrategy | Features.Static;

/**
 * These are to be provided as render props to the final output.
 */
interface ModalRenderPropArg {
  open: boolean
}

/**
 * For any HTML attributes that will be handled by our final React component.
 * Enumerating them here prevents passed props from getting mixed up with our
 * computed output.
 *
 * Translation - since our component handles the children, we should list it
 * here to protect against conflicts.
 *
 * See `type Props` in /lib/types.ts for more.
 *
 */
type ModalPropsWeControl =
  | 'id'
  | 'role'
  | 'aria-modal'
  | 'aria-describedby'
  | 'aria-labelledby'
  | 'children'
  | 'onClick';

/**
 * Use our utility types to inject typings for props:
 *
 * 1. HTML attributes for the element corresponding "as" (default: div)
 * 2. Provice `static`, `unmount`, and "as" props determinsitcally.
 * 3. Remove their passed props that we will control.
 */
type ModalPropBase<T> = Props<T, ModalRenderPropArg, ModalPropsWeControl> & PropsForFeatures<typeof ModalRenderFeatures>;

/**
 * Merge ModalPropBase with our component API to get
 * a full set of prop types. The generic <T> is used to inherit typings
 * based on the element indicated in the "as" argument.
 */
export type ModalProps<T> = ModalPropBase<T> & {
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
  /**
   * Optionally provide children via a content prop.
   */
  content?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * Optionally provide a footer to be appended after children/content.
   */
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
  /**
   * If true, output logging info about the component in the console.
   */
  __debug?: boolean

};

export function ModalRoot<TTag extends ElementType = typeof DEFAULT_MODAL_TAG>(
  props: ModalProps<TTag>,
  ref: Ref<HTMLHeadingElement>,
) {
  /**
   * @TODO OVERVIEW TOPIC - THROW DESCRIPTIVE ERRORS
   * --------------------------------------------------
   * @example Provide useful feedback to developers by throwing descriptive
   * errors for predictable mistakes. This can mimic feedback already provided
   * by Typescript.
   * @remark Should this be a self-invoked function?
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

    if (typeof componentProps.onClose !== 'function') {
      throw new Error(
        `You provided an \`onClose\` prop to the \`Modal\`, but the value is not a function. Received: ${componentProps.onClose}`,
      );
    }

    if (hasInitialFocus && typeof componentProps.initialFocus !== 'object') {
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
      console.log('Props', { ...componentProps });
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

  const {
    outerTransition, innerTransition, initialFocus, className,
    show, onClose, title, description, footer, children, content,
  } = props;
  const closeRef = useRef(null);
  const focus = initialFocus || useRef(null);
  const clsx = ['prism-dialog-box space-y-4', className].join(' ');
  const outerAnimate = { ...fadeInOut, ...outerTransition };
  const innerAnimate = { ...slideUpDown, ...innerTransition };

  return (
    <Transition show={show} ref={ref}>
      <Dialog onClose={onClose} open={show} initialFocus={focus}>
        <Dialog.Panel>
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
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
export const Modal = forwardRefWithAs(ModalRoot);
