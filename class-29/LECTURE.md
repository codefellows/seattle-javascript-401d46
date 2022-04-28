# Class 29: Reducers and the useReducer Hook

## Warm Up

Quick Sort Algorithm



## Code Review

- Application State
- Component Life Cycle

Tee: Testing Components
Jeffrey: Getting the `fireEvent.change`

- Simulating an `onChange` event.

Andres: Using MSW.

- fireEvent.submit.

## Reducer Pattern

Hopefully you have all used the reduce method on an array!  This prettyprevalent.

- Reducer: is a pure function, that returns new objects.
  - What is pure? No side effects / mutations to the objects that the reducer has access to.
  - JavaScript passed all object as references to new variables.
  - takes an initial State object, and a callback that tells the reducer how to change that object.

```javascript

let initialState = {
  name: 'Sesame Street',
  characters: [],
}

// initialState.characters.push('Big Bird'); not pure way of updating something in js

function reducer(state, payload) {

  return {...state, characters: [...state.character, payload]};

}

let updatedState = reducer(initialState, 'big bird');

```

react realizes that managing individual state variables is really difficult across tons of components.

- Each component just needs to know what to give the reducer to update state without mutations.

## TDD: Managing State with useReducer
