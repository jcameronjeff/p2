import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Interaction/LoginPrompt',
} as ComponentMeta<any>;


const Template: ComponentStory<any> = () => (
  <div className='prism'>
    <form className='card w-[400px] border rounded-sm space-y-4'>
      <header className='flex items-center justify-center p-8 py-4 border-b'>
        <img className='h-[48px] w-[48px]' src='https://api.manheim.com/assets/images/manheimLogo.svg' />
      </header>
      <main className='space-y-4 p-8 py-4 '>
        <h1 className='text-center prism-heading-1'>Sign In</h1>
        <div className='space-y-2'>
          <input type='text' className='w-full' placeholder="Username" />
          <input type='password' className='w-full' placeholder="Password" />
        </div>
        <div className='flex gap-2 items-center'>
          <input type='checkbox' checked />
          <span className='prism-label'>Remember my username</span>
        </div>
        <button type='submit' className='prism-btn w-full center'>Login</button>
      </main>
      <footer className='flex justify-between items-center p-8 py-4 border-t'>
        <div className='prism-caption'>Forgot?</div>
        <div className='text-xs prism-base flex gap-2'>
          <button className='prism-btn p-2'>Username?</button>
          <button className='prism-btn p-2'>Password?</button>
        </div>
      </footer>
    </form>
  </div>
);

export const Basic = Template.bind({});
