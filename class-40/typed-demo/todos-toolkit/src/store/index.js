import { configureStore } from '@reduxjs/toolkit';

// import todoSlice from './todos.slice';
import todoReducer from './todos';

export default function createStore() {
  return configureStore({
    reducer: {
      todos: todoReducer,
    }
  });
}
