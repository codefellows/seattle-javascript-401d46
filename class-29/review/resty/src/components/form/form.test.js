import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';


describe('testing our form component', () => {

  test('Shuold update values on submit', () => {

    const handleValues = jest.fn();

    render(<Form onSubmit={handleValues}/>);

    let inputEl = screen.getByTestId('url-input');
    fireEvent.change(inputEl, {target: { value: "test value"}});

    let submitBtn = screen.getByTestId('submit-button');
    fireEvent.click(submitBtn);

    expect(handleValues).toHaveBeenCalledWith({ url: 'test value' });
  });
});
