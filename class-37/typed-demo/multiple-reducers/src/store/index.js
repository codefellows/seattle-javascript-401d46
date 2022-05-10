import { legacy_createStore as createStore, combineReducers } from 'redux';
import voteReducer from '../store/votes';
import candidateReducer from '../store/candidates';
import { composeWithDevTools } from '@redux-devtools/extension';

let reducers = combineReducers({
  votes: voteReducer,
  candidates: candidateReducer,
});

const initializeStore = () => {
  return createStore(reducers, composeWithDevTools());
};

export default initializeStore;
