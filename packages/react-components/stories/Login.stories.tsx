import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { ReactEventHandler } from 'react';
import { HTMLProps } from 'react';
import { Checkbox } from '../lib/Checkbox';

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
    <header className={clsx}>
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
          <input type='text' className='w-full' placeholder="Username" />
          <input type='password' className='w-full' placeholder="Password" />
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
