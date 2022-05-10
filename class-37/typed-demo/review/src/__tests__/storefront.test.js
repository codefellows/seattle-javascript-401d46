import reducer, { selectCategory } from '../store/storefront';
import { legacy_createStore as createStore } from 'redux';


describe('Testing redux store for store front', () => {
  const store = createStore(reducer);

  test('Reducer should return valid initial state', () => {
    const state = store.getState();

    console.log(state);
    expect(state.activeCategory).toBeFalsy();
    expect(state.activeCategory).toBe('');
  });


  test('select category action should activate a category', () => {
    store.dispatch(selectCategory('test'));

    const state = store.getState();
    console.log(state);
    expect(state.activeCategory).toBe('test');
  });
});


