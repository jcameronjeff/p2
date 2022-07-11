import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// import { userEvent } from '@storybook/testing-library';

import * as stories from './Modal.stories';
import { userEvent } from '@storybook/testing-library';

const { TestTemplate, Default } = composeStories(stories);


describe('Modal smoketest', () => {
  let args = {};

  beforeEach(() => {
    render(<TestTemplate {...args} />);
  });
  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  test('inherits the given test ID', () => {
    expect(screen.getByTestId('modal-trigger')).toBeDefined();
  });
});

describe('Accessibility and titles', () => {
  let args = {
    title: 'Modal Title',
    description: 'Modal description',
    content: 'This is a content',
  };
  beforeEach(() => {
    render(<Default {...args} />);
  });

  let dialog = () => screen.getByRole('dialog');
  let description = () => screen.getByRole('contentinfo');
  let title = () => screen.getByRole('heading');

  test('applies aria-title to dialog', () => {
    expect(dialog()).toHaveAccessibleName(args.title);
  });
  test('applies aria-description to dialog', () => {
    expect(dialog()).toHaveAccessibleDescription(args.description);
  });
  test('has visible title text', () => {
    expect(title()).toBeVisible();
    expect(title()).toHaveTextContent(args.title);
  });
  test('has visible description', () => {
    expect(description()).toBeVisible();
    expect(description()).toHaveTextContent(args.description);
  });
  test('renders children', () => {
    expect(screen.getByText(args.content)).toBeVisible();
  });
});

describe('Keyboard interactions', () => {
  beforeEach(() => {
    render(<TestTemplate />);
  });
  let toggleElem = () => screen.getByTestId('modal-trigger');
  let dialogElem = () => screen.queryByRole('dialog');
  test('is opened by hitting enter', () => {
    toggleElem().focus();
    expect(dialogElem()).toBeNull();
    userEvent.keyboard('{Enter}');
    expect(dialogElem()).not.toBeNull();
  });
  test('is dismissed with escape key', () => {
    userEvent.click(toggleElem());
    userEvent.keyboard('{Escape}');
    expect(dialogElem()).toBeNull();
  });

});

describe('Open and close behavior', () => {

  beforeEach(() => {
    render(<TestTemplate />);
  });
  // define some getter functions for readability
  let toggleElem = () => screen.getByTestId('modal-trigger');
  let dialogElem = () => screen.queryByRole('dialog');
  let toggle = () => userEvent.click(toggleElem());

  test('does not initially render modal content', async () => {
    expect(dialogElem()).toBeNull();
  });
  test('renders modal content after click', async () => {
    await toggle();
    expect(dialogElem()).not.toBeNull();
  });
  test('hides after another click', async () => {
    toggle();
    expect(dialogElem()).not.toBeNull();
    toggle();
    expect(dialogElem()).toBeNull();
  });
  test('hides on confirmation button', () => {
    toggle();
    userEvent.click(screen.getByText('Confirm'));
    expect(dialogElem()).toBeNull();
  });

});
