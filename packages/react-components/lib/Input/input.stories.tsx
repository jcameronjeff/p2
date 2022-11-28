import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useRef } from 'react';
import { Input }  from './Input';
import { Button } from '../Button';
import { Box } from '../Box';

export default {
  title: 'Components/Inputs',
  component: Input,
} as ComponentMeta<typeof Input>;

export const TextInput: ComponentStory<typeof Input> = () => {
  return (
    <Box as='div' className='space-y-2'>
      <Box as='div' className='flex gap-2 flex-wrap'>
        <Input placeholder="Standard Text Input" type='text' label='Default' name='basic'/>
      </Box>
    </Box>
  );
};

export const WithUseRef: ComponentStory<typeof Input> = () => {
  const textInput = useRef<HTMLInputElement>(null);
  const handleClick = () => textInput.current?.focus();
  return (
    <Box as='div' className='space-y-2'>
      <Box as='div' className='flex gap-2 flex-wrap '>
        <Input placeholder="Text Input with Ref" ref={textInput} type='text' label='example' name='WithRef'/>
      </Box>
      <Box as='div' className='flex gap-2 flex-wrap'>
        <Button className='prism-button outline' onClick={handleClick}>Focus Input</Button>;
      </Box>
    </Box>
  );
};
 
export const Inline: ComponentStory<typeof Input> = () => {
  return (
    <Box as='div' className='space-y-2'>
      <Box as='div' className='gap-2'>
        <Input inline placeholder="Inline Text Input" type='text' label='Inline' name='InlineInput'/>
      </Box>
    </Box>
  );
};
 
