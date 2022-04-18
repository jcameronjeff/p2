import { useState } from 'react'
import { Button, Dialog, Transition } from '@prism2/react-components';

export function Presentation() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <>
    <Button onClick={() => setIsOpen(!isOpen)}>Open Dialog</Button>
    <Transition
      show={isOpen}
      enter="transition duration-200 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-200 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
     <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto prism"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-sm mx-auto w-[400px] p-4 space-y-4">
          <Dialog.Title as="h3">Complete your order</Dialog.Title>
          <Dialog.Description>This is the description my friends</Dialog.Description>
          <Dialog.Description className='flex gap-2 justify-end'>
            <button className='aux' onClick={() => setIsOpen(false)}>Cancel</button>
            <button className='aux' type="submit" onClick={() => setIsOpen(false)}>Ok</button>
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
    </Transition>
    </>
  )
}


export default Presentation
