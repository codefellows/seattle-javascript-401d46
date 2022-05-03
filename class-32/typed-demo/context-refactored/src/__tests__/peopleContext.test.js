import { render, screen, fireEvent } from '@testing-library/react';
import PeopleProvider, { PeopleContext } from '../context/people';

test('Should render a short list on instantiation', () => {

  render(
    <PeopleProvider>
      <PeopleContext.Consumer>
        {({ people }) => {
          return (
            <p>{people[0].name}</p>
          )
        }}
      </PeopleContext.Consumer>
    </PeopleProvider>
  );

  const shortList = screen.getByText(/jacob/i);
  expect(shortList).toBeInTheDocument();
});

test('Should be able to add a person', () => {
  render(
    <PeopleProvider>
      <PeopleContext.Consumer>
        {({ people, addPeople }) => {
          return (
            <>
              <button
                data-testid="add-person"
                onClick={() => addPeople({
                  name: 'test',
                  age: 20
                })}
              ></button>
              <p>{people[people.length - 1].name}</p>
            </>
          )
        }}
      </PeopleContext.Consumer>
    </PeopleProvider>
  );

  const button = screen.getByTestId('add-person');
  fireEvent.click(button);

  const lastPerson = screen.getByText(/test/i);
  expect(lastPerson).toBeInTheDocument();
});
