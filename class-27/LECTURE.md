# Class 27: useState Hook

## Warm Up

Prompt: Swap 2 node values in a Binary Tree.

- Thanks for the solution Beau!

## Review

React Components: UI thing with one responsibility that can be reused.

- A class or function (What javascript thinks our components).

What's the difference between a function component / class component?

- Classes require inherited component properties / methods.
- Functions allows devs to select the properties / methods.
  - Functions are potentially more DRY!
    - State is not coupled to an object.
- When do we use functions vs classes??
  - Personal preference.
  - Better support for functions.

Hooks: What are hooks?

- Functions that do something or "hook" into the React API.
  - Any data that the API is aware will trigger re-renders.
- Allows you do all the the built in React features do.

## Application State

Any data (objects / string / numbers) that our Application needs to function.

- Application state can live in many places.
- React cares a lot about these values.
  - We need predictable ways of managing this.

`useState` => functions that allows us to create state values.

- ANy value passed becomes a part of application state.

Component State vs Application State

- Application State: Values that sibling components may need across the whole application.
- Component State: values that a single component or direct children need.

## TDD: Form Components with State

## Deployment - GH Pages
