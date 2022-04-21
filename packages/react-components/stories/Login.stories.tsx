import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HTMLProps } from 'react';
import { Checkbox } from '../lib';
import { userEvent, within } from '@storybook/testing-library';
import { sleep } from '../lib/utils';

export default {
  title: 'Interaction/LoginPrompt',
} as ComponentMeta<any>;

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

const Template: ComponentStory<any> = () => (
  <div className='prism'>
    <Form>
      <Form.Header>
        <img className='h-[48px] w-[48px]' src='https://api.manheim.com/assets/images/manheimLogo.svg' />
      </Form.Header>
      <main className='space-y-4 p-8 py-4 '>
        <h1 className='text-center prism-heading-1'>Sign In</h1>
        <div className='space-y-2'>
          <input name='username' type='text' className='w-full' placeholder="Username" />
          <input name='password' type='password' className='w-full' placeholder="Password" />
        </div>
        <Checkbox checked={false} label="Remember my password" onToggle={console.log} />
        <Checkbox checked={false} label="Remember my username" onChange={console.log} onToggle={console.log} />
        <button type='submit' className='prism-btn w-full center'>Login</button>
      </main>
      <footer className='flex justify-between items-center p-8 py-4 border-t'>
        <div className='prism-caption'>Forgot?</div>
        <div className='text-xs prism-base flex gap-2'>
          <button className='prism-btn p-2'>Username?</button>
          <button className='prism-btn p-2'>Password?</button>
        </div>
      </footer>
    </Form>
  </div>
);

export const Basic = Template.bind({});


Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const userInput = await canvas.getByPlaceholderText('Username');
  const pwInput = await canvas.getByPlaceholderText('Password');
  const opt1 = canvas.getByText(/my password/);
  const opt2 = canvas.getByText(/my username/);
  const word = 'darin@cassler.net';

  for (let i = 0; i < 999; i++) {
    /* type username into input */
    userEvent.clear(userInput);
    userEvent.click(userInput);
    for (let step = 0; step < word.length; step++) {
      await sleep(25).then(() => {
        userEvent.type(userInput, word.split('')[step]);
      });
    }

    userEvent.tab();

    /* type password into input */
    userEvent.clear(pwInput);
    for (let step = 0; step < word.length; step++) {
      await sleep(25).then(() => {
        userEvent.type(pwInput, word.split('')[step]);
      });
    }

    /* click remember pass */
    userEvent.click(opt1);
    await sleep(250);

    /* click remember username */
    userEvent.click(opt2);
    await sleep(250);

    /* click disable rememebr pass */
    userEvent.click(opt1);
    await sleep(250);

    /* click disable rememeber username */
    userEvent.click(opt2);
    await sleep(250);
  }

};
