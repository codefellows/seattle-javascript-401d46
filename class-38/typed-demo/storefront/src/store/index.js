import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
import thunk from '../store/middleware/thunk';

import todoReducer from './todo';

const reducers = combineReducers({
  todos: todoReducer,
});

export default function initializeStore() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
