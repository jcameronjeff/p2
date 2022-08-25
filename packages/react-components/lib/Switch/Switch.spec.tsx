import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// import { userEvent } from '@storybook/testing-library';

import * as stories from './Switch.stories';
import { TestTemplate } from './Switch.stories';
import { userEvent } from '@storybook/testing-library';
import { Switch, useToggle } from './Switch';
const {  } = composeStories(stories);

const props = {
  label: 'Test Switch',
  className: '',
  onChange: () => {},
};
describe('Switch smoketest', () => {

  let getSwitch = () => screen.getByTestId('switch');
  beforeEach(() => {
    render(<TestTemplate {...props} />);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  test('Styles the group by default', () => {
    expect(screen.getByTestId('group')).toHaveClass('flex');
  });
  test('It toggles when clicked', () => {

    expect(getSwitch()).toBeChecked();
    userEvent.click(getSwitch());
    expect(getSwitch()).not.toBeChecked();
  });

  test('Switch is labelled by Label', () => {
    let labelText = screen.getByTestId('label').textContent;
    expect(labelText).toEqual(props.label);
    expect(labelText).not.toBeNull();
    expect(getSwitch()).toHaveAccessibleName(`${labelText}`);
  });

});


describe('Switch Customization', () => {
  test('It scales with text', () => {
    render(<TestTemplate className='text-2xl' />);
    expect(screen.getByTestId('group')).toHaveClass('text-2xl');
  });
  test('It scales with text', () => {
    const Controlled = () => {
      const attr = useToggle();
      return <Switch data-testid='switch' {...attr} className='text-2xl' />;
    };
    render(<Controlled />);
    expect(screen.getByTestId('switch')).toHaveClass('text-2xl');
  });
});
