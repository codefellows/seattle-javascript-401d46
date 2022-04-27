import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    console.log('Request captured!!');
    return res(ctx.json({ results: [{name: 'test'}] }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders learn react link', async () => {
  render(<App />);

  let toggleBttn = screen.getByTestId('toggle-list');
  fireEvent.click(toggleBttn);

  // let listEl = screen.getByTestId('people-list'); // If we are waiting for a request to finish, we will need to wait a bit for our target text to show up.

  let listEl = await screen.findByText(/test/im); // this will wait for 1 sec for our target text to appear in our render.

  expect(listEl).toBeInTheDocument();
});
