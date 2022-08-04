import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// import { userEvent } from '@storybook/testing-library';

import * as stories from './Tabs.stories';
import { userEvent } from '@storybook/testing-library';

const { BasicTemplate } = composeStories(stories);


describe('Tabs smoketest', () => {
  let args = {
    enableIcons: false,
    vertical: false,
  };

  beforeEach(() => {
    render(<BasicTemplate {...args} />);
  });
  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  test('it assigns IDs to tabs', () => {
    expect(screen.getByTestId('panel-0')).toBeDefined();
  });
  test('it assigns IDs to panels', () => {
    expect(screen.getByTestId('panel-0')).toBeDefined();
  });
});

describe('Tabs smoketest', () => {
  let args = {
    enableIcons: false,
    vertical: false,
  };

  beforeEach(() => {
    render(<BasicTemplate {...args} />);
  });
  test('renders all tabs', () => {
    expect(screen.queryByTestId('tab-0')).toBeDefined();
    expect(screen.queryByTestId('tab-1')).toBeDefined();
    expect(screen.queryByTestId('tab-2')).toBeDefined();
  });
  test('renders only first panel', () => {
    expect(screen.queryByTestId('panel-0')).toBeDefined();
    expect(screen.queryByTestId('panel-1')).toBeNull();
    expect(screen.queryByTestId('panel-2')).toBeNull();
  });
  test('swaps visible panel on click', async () => {
    expect(await screen.queryByTestId('panel-2')).toBeNull();
    userEvent.click(screen.getByTestId('tab-2'));
    expect(await screen.queryByTestId('panel-1')).toBeNull();
    expect(await screen.queryByTestId('panel-2')).not.toBeNull();
  });
  test('moves to next panel on arrow', async () => {
    userEvent.click(screen.getByTestId('tab-0'));
    expect(await screen.queryByTestId('panel-1')).toBeNull();
    userEvent.keyboard('{Arrowright}');
    expect(await screen.queryByTestId('panel-1')).not.toBeNull();
    userEvent.keyboard('{Arrowright}');
    expect(await screen.queryByTestId('panel-1')).toBeNull();
    expect(await screen.queryByTestId('panel-2')).not.toBeNull();
    userEvent.keyboard('{Arrowleft}');
    expect(await screen.queryByTestId('panel-1')).not.toBeNull();
  });
});
