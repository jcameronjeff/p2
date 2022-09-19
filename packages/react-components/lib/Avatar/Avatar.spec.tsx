import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

/**
 * @example Component Tests
 *
 * This file can be used as an example when creating additional test
 * coverage for Prism2. See inline comments below for more info about what
 * we're doing here.
 *
 * @TODO -Interaction with play function
 * @see https://storybook.js.org/addons/@storybook/testing-react
 *
 * **************************
 * Generally, prefer importing stories rather than the component itself.
 * You may want to import multiple stories with different JSX. This example
 * includes only one for clarity.
 */
import * as stories from './Avatar.stories';
import { getInitials } from './Avatar';

/**
 * We are importing the speciments from `Avatar.stories.tsx` directly
 * and then use `composeStories` to convert into a test-ready JSX tag.
 *
 * We use the `args` convention from Storybook to compose different variations.
 * of our tests by passing different sets of props to a single JSX
 * template.
 */
const { Template } = composeStories(stories);

// Group "general" tests into their own describe block
describe('Example smoketests', () => {
  /**
   * Render our component only once if possible using the imported
   * storybook examples. First, define our arguments as an object to
   * reference later.
   */
  const args = {
    name: 'Darin Cassler',
    'data-testid': 'mx',
    src: '//www.fillmurray.com/128/128',
  };
  /**
   * This is simply rendering our Storybook story. As a result, we can
   * limit the amount of JSX written specifically for tests, and thus
   * reduce maintanance overhead.
   *
   * What's more, we can visually inspect the example being tested.
   * That way we always know the *actual* output of the code we are
   * testing by visually inspecting it in the browser.
   * The example below can be viewed in Storybook under 'Avatar/Sample'
   */
  beforeEach(() => {
    render(<Template {...args} />);
  });

  // keep tests simple and functional
  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  // always include this test! Anyone using our components will need
  // to be able to pass testids like this for their applications.
  test('inherits the given test ID', () => {
    expect(screen.getByTestId('mx')).toBeDefined();
  });

  // for TDD, write your tests as a todo.
  test.todo('includes todo tests');

  // for unimplemented tests, use 'skip'
  test.skip('includes skipped tests');
});

/**
 * If appropriate, provide a block for testing our methods. Generally this
 * is not necessary but is provided here as an example. More specifically,
 * this is outside the Testing Library Guiding Principles
 * @see https://testing-library.com/docs/guiding-principles/)
 */
describe('Method tests', () => {
  test('It converts full names to initials', () => {
    expect(getInitials('Darin Cassler')).toEqual('DC');
  });
});

/**
 * Generally, we want a "describe" block for each variation
 * of props we want to test. This means we define our new props and
 * as an object and render again.
 */
describe('Avatar with only name', () => {
  const args = {
    name: 'Darin Cassler',
    'data-testid': 'mx',
  };

  beforeEach(() => {
    render(<Template {...args} />);
  });
  // test for behaviors and computed outputs
  test('should display inititals', () => {
    expect(screen.getByText(/DC/i)).toBeDefined();
  });
  // generally, 1 `test` = 1 `expect`
  test('should not display full name', () => {
    expect(screen.queryByText(/Darin/i)).toBeNull();
  });
});

describe('Avatar with src', () => {
  const args = {
    alt: 'Darin Cassler',
    src: '//www.fillmurray.com/128/128',
    name: 'Darin Cassler',
    'data-testid': 'mx',
  };
  beforeEach(() => {
    render(<Template {...args} />);
  });
  // We can even inspect our Storybook instance to cross-check outputs.
  test('should include alt text', () => {
    let img = screen.getByAltText(args.alt);
    expect(img).toBeDefined();
    expect(img.getAttribute('alt')).toEqual(args.alt);

  });
  test('should get image', async () => {
    let img = screen.getByAltText(/Darin Cassler/i);
    expect(img.getAttribute('src')).toEqual(args.src);
  });
});

describe('Avatar with broken src', () => {
  const args = {
    src: '//123.net/128/128',
    name: 'James Cameron',
    alt: 'James Cameron',
    'data-testid': 'mx2',
  };
  beforeEach(() => {
    render(<div><Template {...args} /></div>);
  });
  // Generally, its easy to keep this clean by referencing
  // our args object directly.
  test('tries to load given src', async () => {
    let img = screen.getByAltText(args.alt);
    expect(img.getAttribute('src')).toEqual(args.src);
  });
  // Again, create a function that returns our qyery instead of
  // assigning that return to a const.
  // - *DONT*: `const elem = screen.queryByText(/DC/i);`
  // - *DO*: `const getElem = () => screen.queryByText(/DC/i);`
  test('displays initials after image error', async () => {
    let queryInitials = () => screen.queryByText(/JC/i);
    await waitFor(() => {
      expect(queryInitials()).toBeInTheDocument();
    });
    // Wait for the onError behavior to trigger and the
    // fallback behavior to render.


  });
});
