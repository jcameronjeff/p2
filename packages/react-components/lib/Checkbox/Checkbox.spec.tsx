import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// import { userEvent } from '@storybook/testing-library';

import * as stories from './Checkbox.stories';
import { userEvent } from '@storybook/testing-library';

const { BasicCheckbox } = composeStories(stories);


describe('Checkbox smoketest', () => {

  beforeEach(() => {
    render(<BasicCheckbox  />);
  });
  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  test('it assigns IDs to tabs', () => {
    expect(screen.getByTestId('cb-1')).toBeDefined();
  });
});
