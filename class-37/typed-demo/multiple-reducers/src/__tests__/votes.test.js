import voteReducer from '../store/votes';
import candidateReducer from '../store/candidates';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { vote } from '../store/actions';

describe('Testing the voting redux state features', () => {

  const reducers = combineReducers({
    votes: voteReducer,
    candidates: candidateReducer,
  });

  const store = createStore(reducers);

  test('Store should have a vote total, and list of candidates', () => {

    const state = store.getState();
    expect(state.votes.total).toBe(0);
  });

  test('Vote action should increment total votes and votes for a candidate', () => {

    let { candidates } = store.getState();

    store.dispatch(vote(candidates[0]));

    let state = store.getState();
    expect(state.votes.total).toBe(1);
    expect(state.candidates[0].votes).toBe(1);
  });
});
