import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';



export interface ModalProps {
  /**
   *  Use the show prop to control whether the content should be
   *  visible or hidden.
   *  @default false
   */
  show?: boolean;
  /**
   * If true, element will transition on initial render. Useful for
   * conditional rendering or animating initial page load.
   * @default false
   */
  appear?: boolean;
  /**
   * Callback to fire when modal is dismissed
   */
  onClose?: (value:boolean) => void;
  /**
   * Optionally use a custom element, default: Fragment.
   * @default Fragment
   */
  as?: React.ElementType<any> | undefined,
  /**
   * If you'd like something other than the first focusable element
   * to receive initial focus when your dialog is initially rendered,
   * you can use the initialFocus ref:
   */
  initialFocus?: React.MutableRefObject<HTMLElement | null>
}


export const Modal:React.FC<ModalProps> = ({ children, initialFocus, onClose = () => {}, as = Fragment, show = false }) => {

  return (
  <Transition as={as} show={show}>
    <Dialog onClose={onClose} open={show} initialFocus={initialFocus}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200 delay-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex items-center justify-center min-h-screen backdrop-blur-sm backdrop-opacity-95 backdrop-grayscale">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-100 delay-100"
            enterFrom="opacity-0 scale-95 translate-y-8"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 translate-y-8"
          >
          <div className="relative ring-1 ring-black/10 bg-white rounded-lg max-w-sm mx-auto card shadow-xl w-[480px] border space-y-4 p-8 px-12">
            {children}
          </div>
          </Transition.Child>
        </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
  );
};
