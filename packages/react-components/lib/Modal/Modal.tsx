import { Dialog, Transition } from '@headlessui/react';
import React, { ElementType, Fragment, MutableRefObject, Ref, useRef } from 'react';
import { forwardRefWithAs, fadeInOut, slideUpDown, slideInRight, TransitionPropPreset, slideInLeft } from '../utils';
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
   * Optionally select an alternate preconfigured layout/behavior
   * @default "modal"
   */
  variant?: 'modal' | 'slideout-left' | 'slideout' | 'fullscreen' | 'panel'
  /**
   * If true, output logging info about the component in the console.
   */
  __debug?: boolean

};


/**
 * Provide useful feedback to developers by throwing descriptive
 * errors for predictable mistakes. This can mimic feedback already provided
 * by Typescript.
 */
function modalValidations(componentProps: any) {
  let isDebug = componentProps.hasOwnProperty('__debug') && componentProps.__debug === true;
  if (!isDebug) return;
  let hasShow = componentProps.hasOwnProperty('show');
  let hasOnClose = componentProps.hasOwnProperty('onClose');
  let hasInitialFocus = componentProps.hasOwnProperty('initialFocus');
  let hasInnerTransition = componentProps.hasOwnProperty('innerTransition');
  let hasOuterTransition = componentProps.hasOwnProperty('outerTransition');



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

  if (hasInnerTransition || hasOuterTransition) {
    let t = componentProps.innerTransition;
    let o = componentProps.outerTransition;
    if (typeof t !== 'object') {
      throw new Error(
        'Your provided an innerTransition prop but it is not an object.',
      );
    }
    if (typeof o !== 'object') {
      throw new Error(
        'Your provided an outerTransition prop but it is not an object.',
      );
    }
    let validKeys = ['enter', 'enterFrom', 'enterTo', 'leave', 'leaveFrom', 'leaveTo'];
    let tk = Object.keys(t).every(k => validKeys.includes(k));
    let ok = Object.keys(o).every(k => validKeys.includes(k));

    if (!tk || !ok) {
      throw new Error(
        `Check your transition props. Invalid key detected. Accepted values are ${JSON.stringify(validKeys)}`,
      );
    }
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

}



export function ModalRoot<TTag extends ElementType = typeof DEFAULT_MODAL_TAG>(
  props: ModalProps<TTag>,
  ref: Ref<HTMLHeadingElement>,
) {

  function getAttributesFromVariant() {
    let clsx, outerAnimate, innerAnimate;
    switch (props.variant) {
      case 'modal':
        clsx = 'prism-dialog-box';
        outerAnimate = fadeInOut;
        innerAnimate = slideUpDown;
        break;
      case 'slideout':
        clsx = 'prism-slideout-box';
        outerAnimate = fadeInOut;
        innerAnimate = slideInRight;
        break;
      case 'slideout-left':
        clsx = 'prism-slideout-box from-left';
        outerAnimate = fadeInOut;
        innerAnimate = slideInLeft;
        break;
      case 'fullscreen':
        clsx = 'prism-dialog-box w-full h-full top-0 bottom-0 left-0 right-0 fixed max-w-full';
        outerAnimate = fadeInOut;
        innerAnimate = slideUpDown;
        break;
      case 'panel':
        clsx = 'prism-dialog-box w-auto h-auto top-4 bottom-4 left-4 right-4 fixed max-w-full shadow-xl';
        outerAnimate = fadeInOut;
        innerAnimate = slideUpDown;
        break;
      default:
        clsx = 'prism-dialog-box';
        outerAnimate = fadeInOut;
        innerAnimate = slideUpDown;
        break;
    }

    return {
      clsx: [clsx, 'space-y-4', props.className].join(' '),
      outerAnimate: { ...outerAnimate, ...props.outerTransition },
      innerAnimate: { ...innerAnimate, ...props.innerTransition },
    };
  }

  const closeRef = useRef(null);
  const focus = props.initialFocus || useRef(null);
  const { outerAnimate, innerAnimate, clsx } = getAttributesFromVariant();

  React.useEffect(() => modalValidations(props), []);

  return (
    <Transition show={props.show} ref={ref} appear={true}>
      <Dialog onClose={props.onClose} initialFocus={focus}>
        <Dialog.Panel>
        <div className="prism-dialog-frame">
          <Transition.Child as={Fragment} {...outerAnimate} appear={true}>
            <div className='prism-dialog-backdrop'>
              <Dialog.Overlay className="prism-dialog-overlay" />
              <Transition.Child as={Fragment} {...innerAnimate} appear={true}>
                <div ref={closeRef} className={clsx}>
                  {props.title ? (
                    <Dialog.Title className='prism-heading-2'>
                      {props.title}
                    </Dialog.Title>
                  ) : null}
                  {props.description ? (
                    <Dialog.Description className='prism-heading-3'>
                      {props.description}
                    </Dialog.Description>
                  ) : null}
                  {props.content ? <>{props.content}</> : null}
                  {props.children ? <>{props.children}</> : null}
                  {props.footer ? <>{props.footer}</> : null}
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

