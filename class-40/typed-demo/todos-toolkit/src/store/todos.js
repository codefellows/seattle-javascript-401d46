import { createAction, createReducer } from '@reduxjs/toolkit';

const ADD_TODO = 'ADD_TODO';
export const addTodo = createAction(ADD_TODO);

export const createTodo = todo => dispatch => {
  // make you async function calls here
  dispatch(addTodo(todo));
}

const todoReducer = createReducer({
  list: []
}, {
  [ADD_TODO]: (state, action) => ({
    list: [...state.list, action.payload],
  }),
});

export default todoReducer;
