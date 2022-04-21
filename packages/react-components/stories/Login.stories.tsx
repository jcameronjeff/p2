import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HTMLProps } from 'react';
import { Checkbox } from '../lib';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../lib/utils';

export default {
  title: 'Interaction/LoginPrompt',
} as ComponentMeta<any>;


/**
 *
 * TODO Find a home for these
 * TODO - pattern for encapsulating TW styling?
 *
 *
 */



export const FormRoot:React.FC<HTMLProps<HTMLFormElement>> = ({ children, className, ...props } ) => {
  const baseClasses = 'card w-[400px] border rounded-sm space-y-4';
  const clsx = [baseClasses, className].join(' ');
  return (
    <form {...props} className={clsx}>
      {children}
    </form>
  );
};

export const FormHeader:React.FC<HTMLProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  const baseClasses = 'flex items-center justify-center p-8 py-4 border-b';
  const clsx = [baseClasses, className].join(' ');
  return (
    <header className={clsx} {...props}>
      {children}
    </header>
  );
};


export const Form = Object.assign(FormRoot, {
  Header: FormHeader,
});


const Template: ComponentStory<any> = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
  <div className='prism'>
    <Form>
      <Form.Header>
        <img className='h-[48px] w-[48px]' src='https://api.manheim.com/assets/images/manheimLogo.svg' />
      </Form.Header>
      <main className='space-y-4 p-8 py-4 '>
        <h1 className='text-center prism-heading-1'>Sign In</h1>
        <div className='space-y-2'>
          <input name='username' type='text' className='w-full focus-within:shadow-lg' placeholder="Username" />
          <input name='password' type='password' className='w-full focus-within:shadow-lg' placeholder="Password" />
        </div>
        <Checkbox checked={false} label="Remember my password" onToggle={console.log} />
        <Checkbox checked={false} label="Remember my username" onChange={console.log} onToggle={console.log} />
        <button onClick={(e) => {
          e.preventDefault(); setIsOpen(true);
        }} className='prism-btn fill w-full center focus-within:shadow-lg focus-within:ring-1'>Login</button>
      </main>
      <footer className='flex justify-between items-center p-8 py-4 border-t'>
        <div className='prism-caption'>Forgot?</div>
        <div className='text-xs prism-base flex gap-2'>
          <button className='prism-btn focus-within:shadow-lg focus-within:ring-1 p-2'>Username?</button>
          <button className='prism-btn focus-within:shadow-lg focus-within:ring-1 p-2'>Password?</button>
        </div>
      </footer>
    </Form>


     <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className='prism'>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded-lg max-w-sm mx-auto card shadow-xl w-[480px] border space-y-4 p-8 px-12">
            <Dialog.Title className='prism-heading-2'>Deactivate account</Dialog.Title>
            <Dialog.Description className='prism-heading-4'>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data will
              be permanently removed. This action cannot be undone.
            </p>

            <button className='prism-btn' onClick={() => setIsOpen(false)}>Deactivate</button>
            <button className='prism-btn' onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </div>
      </div>
      </div>
    </Dialog>

  </div>
  );
};

export const Basic = Template.bind({});


// Basic.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const userInput = await canvas.getByPlaceholderText('Username');
//   const pwInput = await canvas.getByPlaceholderText('Password');
//   const opt1 = canvas.getByText(/my password/);
//   const opt2 = canvas.getByText(/my username/);
//   const word = 'darin@cassler.net';

//   for (let i = 0; i < 5; i++) {
//     /* type username into input */
//     userEvent.clear(userInput);
//     userEvent.clear(pwInput);

//     for (let step = 0; step < word.length; step++) {
//       await sleep(25).then(() => {
//         userEvent.click(userInput);
//         userEvent.type(userInput, word.split('')[step]);
//       });
//     }

//     /* type password into input */
//     for (let step = 0; step < word.length; step++) {
//       await sleep(25).then(() => {
//         userEvent.type(pwInput, word.split('')[step]);
//       });
//     }

//     /**
//      * 1. Check remember pass
//      * 2. Check remember username
//      * 3. Uncheck remember pass
//      * 4. Uncheck remember username
//      */
//     for (let opt of [opt1, opt2, opt1, opt2]) {
//       userEvent.click(opt);
//       await sleep(250);
//     }

//     for (let p = 0; p < 12; i++) {
//       userEvent.keyboard('{Tab}');
//       userEvent.tab();
//       await sleep(250);
//     }

//     userEvent.keyboard('{Tab}');
//     userEvent.keyboard('{Tab}');
//     userEvent.keyboard('{Tab}');
//     userEvent.tab();
//     userEvent.tab();
//     userEvent.tab();
//   }

// };
