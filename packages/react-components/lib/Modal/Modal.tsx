import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { fadeInOut, slideUpDown, TransitionPropPreset } from '../utils';



export interface ModalProps {
  /**
   *  Use the show prop to control whether the content should be
   *  visible or hidden.
   *  @default false
   */
  show?: boolean;
  /**
   * Optionally use a custom element, default: Fragment.
   * @default Fragment
   */
  as?: React.ElementType<any> | undefined,
  /**
   * If true, element will transition on initial render. Useful for
   * conditional rendering or animating initial page load.
   * @default false
   */
  appear?: boolean;
  /**
   * Callback to fire when modal is dismissed
   */
  onClose?: () => void;

  /**
   * If you'd like something other than the first focusable element
   * to receive initial focus when your dialog is initially rendered,
   * you can use the initialFocus ref:
   */
  initialFocus?: React.MutableRefObject<HTMLElement | null>
  /**
   * Optionally provide a title via props.
   */
  title?: string;
  /**
   * Optionally provide a description via props.
   */
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  /**
   * Optionally override backdrop animation. Object will be merged with defaults.
   */
  outerTransition?: Partial<TransitionPropPreset>,
  /**
   * Optionally override container animation. Object will be merged with defaults.
   */
  innerTransition?: Partial<TransitionPropPreset>
}




export const Modal:React.FC<ModalProps> = ({
  children, description, content, footer, title, initialFocus = undefined,
  outerTransition = { ...fadeInOut }, innerTransition = { ...slideUpDown },
  onClose = () => {}, as = Fragment, show = false,
}) => {

  const closeRef = useRef(null);
  const focus = initialFocus || closeRef;

  const outerAnimate = { ...fadeInOut, ...outerTransition };
  const innerAnimate = { ...slideUpDown, ...innerTransition };

  return (
  <Transition as={as} show={show}>
    <Dialog onClose={() => onClose()} open={show} initialFocus={focus}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <Transition.Child as={Fragment} {...outerAnimate}>
          <div className='flex items-center justify-center min-h-screen backdrop-blur-sm backdrop-opacity-95 backdrop-grayscale'>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
            <Transition.Child as={Fragment} {...innerAnimate}>
              <div ref={closeRef} className='relative ring-1 ring-black/10 bg-white rounded-lg max-w-sm mx-auto card shadow-xl w-[480px] border space-y-4 p-8 px-12'>
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
                {content ? content : null}
                {children}
                {footer ? footer : null}
              </div>
            </Transition.Child>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
  );
};

