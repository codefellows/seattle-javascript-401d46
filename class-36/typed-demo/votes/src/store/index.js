import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import voteReducer from './votes';

let reducers = combineReducers({
  votes: voteReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}
