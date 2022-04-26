import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  let nameInput = screen.getByTestId('name-input');
  // simulate typing into the input
  fireEvent.change(nameInput, { target: { value: 'test name' }});

  let ageInput = screen.getByTestId('age-input');
  fireEvent.change(ageInput, { target: { value: 100 } });

  let roleInput = screen.getByTestId('role-input');
  fireEvent.change(roleInput, { target: { value: 'test role' } });

  let submitButton = screen.getByTestId('submit-button');
  fireEvent.click(submitButton);

  expect(screen.getByTestId('person-name')).toHaveTextContent('test name');
  expect(screen.getByTestId('person-age')).toHaveTextContent(100);
  expect(screen.getByTestId('person-role')).toHaveTextContent('test role');
});
