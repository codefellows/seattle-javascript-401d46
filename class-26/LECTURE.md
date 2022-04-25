# Class 26 - Component Based UI (React)

## Announcements

* Major focus on the front end on the second (80%).
  * Client side (Phone / Browser).
* Whiteboard Prep - finals being in week 9.
  * Instructors will schedule you during our lab time (2 - 6).
  * No set limit for re-takes. (typically 2 - 3 rounds before the course ends).

## Warm Up

Prompt: Traversing a linked list of integers and returning the lowest value in the linked list

## UI Components

Components can be thought of as "atomic" building blocks.

## Re-introduction to React

Every "component" is either a class or a function.

* Classes are instatiated / functions are executed with jsx : <App/ >
  * The syntax for using a function vs a class is the same (other than declaring a function vs a class)

* Functions have some benefits:
  * Efficiency and saving memory.
  * Instantiating a ton of objects is not great at scale.
  * Invoking functions that return our content is easier to manage, and faster.
  * No more contextual this.

* How do we survive without "this"?
  * State lives here
  * My component methods have a single place to live.

* Hooks / Context??
  * Both Props and "High Order State Managment"
  * Organisms > Molecules > atoms.

* Sass - CSS with superpowers
  * Variables
  * nested rules - we can organize differently with sass!
  * mixins / include

## TDD: Hooks / Testing
