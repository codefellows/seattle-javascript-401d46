import { initialState, reducer } from './Characters';

describe('testing my character reducer', () => {

  let state = null;

  test('reducer should add a character', () => {
    state = reducer(initialState, {});
    expect(state.name).toBe('Sesame Street');

    state = reducer(state, {type:'ADD', payload: 'test'});

    expect(state.characters.includes('test')).toBeTruthy();
  });

  test('Reducer shuold remove a character', () => {
    state = reducer(state, {type: 'REMOVE', payload: 'test'});

    expect(state.characters.includes('test')).toBe(false);
  });
});
