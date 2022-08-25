import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// import { userEvent } from '@storybook/testing-library';

import * as stories from './Accordion.stories';
import { userEvent } from '@storybook/testing-library';
import { mocks } from './__mock';

const { Default, ControlledState } = composeStories(stories);


describe('Accordion smoketest', () => {
  let args = {
    items: mocks.items,
  };

  let title1 = () => screen.getByText(/When can I submit/);
  let title2 = () => screen.getByText(/Where should I send it/);
  let title3 = () => screen.getByText(/Who will review/);
  let content1 = () => screen.getByText(/Anytime/);
  let content2 = () => screen.getByText(/Right here, thanks/);

  beforeEach(() => {
    render(<Default {...args} />);
  });
  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  test('Shows the given items', () => {
    expect(title1()).toBeDefined();
    expect(title2()).toBeDefined();
    expect(title3()).toBeDefined();
  });

  test('Item content is accessible', async () => {
    expect(content1()).toBeDefined();
  });
  test('Item content is not initially visible', async () => {
    expect(content1()).not.toBeVisible();
  });
  test('Item appears when title is clicked', async () => {
    expect(content1()).not.toBeVisible();
    userEvent.click(title1());
    expect(content1()).toBeVisible();
  });
  test('Only clicked item is toggled', async () => {
    userEvent.click(title1());
    expect(content2()).not.toBeVisible();
  });
  test('Accepts focus', async () => {
    await userEvent.tab();
    expect(title1().parentElement).toHaveFocus();
  });
  test('Tabs focus across items', async () => {
    await userEvent.tab();
    expect(title1().parentElement).toHaveFocus();
    await userEvent.tab();
    expect(title2().parentElement).toHaveFocus();
    await userEvent.tab();
    expect(title3().parentElement).toHaveFocus();
  });
  test('Toggles with Enter key', async () => {
    await userEvent.tab();
    expect(content1()).not.toBeVisible();
    expect(title1().parentElement).toHaveFocus();
    await userEvent.keyboard('[Enter]');
    await waitFor(() => {
      expect(content1()).toBeVisible();
    });
  });
  test('Toggles with Space key', async () => {
    await userEvent.tab();
    expect(content1()).not.toBeVisible();
    expect(title1().parentElement).toHaveFocus();
    await userEvent.keyboard('[Space]');
    await waitFor(() => {
      expect(content1()).toBeVisible();
    });
  });
});


describe('Autocollapse behavior', () => {
  let args = {
    items: mocks.items,
    autoCollapse: true,
  };
  let title1 = () => screen.getByText(/When can I submit/);
  let arrow1 = () => title1().nextSibling;
  let title2 = () => screen.getByText(/Where should I send it/);
  let openBtn = () => screen.getByText(/Open All/);
  let content1 = () => screen.getByText(/Anytime/);
  let content2 = () => screen.getByText(/Right here, thanks/);
  let content3 = () => screen.getByText(/We all will/);

  beforeEach(() => {
    render(<ControlledState {...args} autoCollapse={true} />);
  });
  test('Item appears when title is clicked', async () => {
    expect(content1()).not.toBeVisible();
    userEvent.click(title1());
    expect(content1()).toBeVisible();
  });
  test('Only clicked item is toggled', async () => {
    userEvent.click(title1());
    expect(content1()).toBeVisible();
    expect(content2()).not.toBeVisible();
    userEvent.click(title2());
    await waitFor(() => expect(content2()).toBeVisible());
    await waitFor(() => expect(content1()).not.toBeVisible());
  });
  test('All items open when "All" button is clicked', async () => {
    expect(content1()).not.toBeVisible();
    expect(content2()).not.toBeVisible();
    expect(content3()).not.toBeVisible();
    userEvent.click(openBtn());
    expect(content1()).toBeVisible();
    expect(content2()).toBeVisible();
    expect(content3()).toBeVisible();
  });
  test('Arrow rotates when toggled', () => {
    expect(arrow1()).not.toHaveClass('rotate-90');
    userEvent.click(title1());
    expect(arrow1()).toHaveClass('rotate-90');
  });
});
