import React, { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Card, Modal } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Checkbox } from '..';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../utils';

export default {
  title: 'Patterns/LoginWindow',
  component: Card,
  subcomponents: { Checkbox, Button, Modal, Dialog },
} as ComponentMeta<any>;


const LoginPrompt: ComponentStory<any> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalFocus = React.useRef(null);
  return (
  <div className='prism'>
    <Card>
      <Card.Header>
        <img className='h-[48px] w-[48px]' src='https://api.manheim.com/assets/images/manheimLogo.svg' />
      </Card.Header>
      <Card.Content>
        <h1 className='text-center prism-heading-1'>Sign In</h1>
        <div className='space-y-2'>
          <input name='username' type='text' className='w-full' placeholder="Username" />
          <input name='password' type='password' className='w-full' placeholder="Password" />
        </div>
        <div className='space-y-1'>
          <Checkbox checked={false} label="Remember my password" onToggle={console.log} />
          <Checkbox checked={false} label="Remember my username" onChange={console.log} onToggle={console.log} />
        </div>
        <button onClick={(e) => {
          e.preventDefault(); setIsOpen(true);
        }} className='prism-btn fill w-full center  '>Login</button>
      </Card.Content>
      <Card.Footer>
        <div className='prism-caption'>Forgot?</div>
        <div className='text-xs prism-base flex gap-2'>
          <button className='prism-btn'>Username?</button>
          <button className='prism-btn'>Password?</button>
        </div>
      </Card.Footer>
    </Card>
    <Modal as={Fragment} show={isOpen} onClose={() => setIsOpen(false)} initialFocus={modalFocus}>
      <Dialog.Title className='prism-heading-2'>
        Deactivate account
      </Dialog.Title>
      <Dialog.Description className='prism-heading-4'>
        This will permanently deactivate your account
      </Dialog.Description>
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
      <div className='pt-4 grid grid-cols-2 gap-4'>
        <button className='prism-btn' ref={modalFocus}  onClick={() => setIsOpen(false)}>Cancel</button>
        <button className='prism-btn fill' type='submit' onClick={() => setIsOpen(false)}>Dismiss</button>
      </div>
    </Modal>
  </div>
  );
};


export const Basic = LoginPrompt.bind({});
export const LoginFlow = LoginPrompt.bind({});

/**
 * @remark
 *
 * Ideally, speciments will include a `play` method which provides an
 * automated interaction preview for the given story. Below, we script
 * the login prompt form filling process, tabbing, submitting and
 * finally confirming a popup dialog. This will loop twice.
 */
LoginFlow.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const userInput = await canvas.getByPlaceholderText('Username');
  const pwInput = await canvas.getByPlaceholderText('Password');
  const opt1 = canvas.getByText(/my password/);
  const opt2 = canvas.getByText(/my username/);
  const word = 'darin@cassler.net';

  for (let i = 0; i < 2; i++) {
    /* type username into input */
    userEvent.clear(userInput);
    userEvent.clear(pwInput);
    await sleep(250);

    for (let step = 0; step < word.length; step++) {
      await sleep(25).then(() => {
        userEvent.click(userInput);
        userEvent.type(userInput, word.split('')[step]);
      });
    }

    /* type password into input */
    for (let step = 0; step < word.length; step++) {
      await sleep(25).then(() => {
        userEvent.type(pwInput, word.split('')[step]);
      });
    }

    /**
     * 1. Check remember pass
     * 2. Check remember username
     * 3. Uncheck remember pass
     * 4. Uncheck remember username
     */
    for (let opt of [opt1, opt2, opt1, opt2]) {
      userEvent.click(opt);
      await sleep(250);
    }

    for (let p = 0; p < 7; p++) {
      userEvent.tab();
      await sleep(350);
    }


    const submit = await canvas.getByText(/Login/);

    userEvent.click(submit);
    await sleep(350);


    userEvent.tab();
    await sleep(500);

    userEvent.tab();
    await sleep(500);

    userEvent.tab();
    await sleep(1000);

    userEvent.keyboard('{Enter}');



  }

};
