import { useSelector } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import initializeStore from '../../store';
import CandidateForm from './CandidateForm';

describe('Testing our Candidate form', () => {

  test('Store should update on click', () => {

    const Test = () => {
      let total = useSelector(state => state.votes.total);

      return (
        <p data-testid='results'>{total}</p>
      )
    }

    render(
      <Provider store={initializeStore()}>
        <CandidateForm />
        <Test />
      </Provider>
    )

    const johnBttn = screen.getByText(/bob/i);
    fireEvent.click(johnBttn);

    // how to check global state.
    const results = screen.getByTestId('results');
    expect(results).toHaveTextContent('1');
  });

  // TODO: test whether header component responds to state change
});


