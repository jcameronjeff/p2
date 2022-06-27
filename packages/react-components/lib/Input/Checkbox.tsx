import { Box } from '../Box';
import { HTMLComponent } from '../types';

interface IProps {
  /**
   * Callback function that accepts `label` and `checked` arguments.
   */
  onToggle?: (arg0: [string, boolean]) => unknown,
  label: string,
}

export const Checkbox:HTMLComponent<IProps>  = ({ className, label, ...props }) => {
  const baseClasses = 'flex gap-2 items-center text-sm';
  const clsx = [baseClasses, className].join(' ');

  return (
      <Box as='label' className={clsx}>
        <Box as='input' type='checkbox' {...props} className='prism-form-checkbox transition duration-200' />
        <Box as='span'>{label}</Box>
      </Box>
  );
};

export default Checkbox;
