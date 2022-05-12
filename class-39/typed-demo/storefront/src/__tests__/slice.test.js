import { waitFor } from '@testing-library/react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categorySlice, { getCategories } from '../store/categories.slice';

let { set } = categorySlice.actions;

describe('Testing the redux slice', () => {

  const reducer = combineReducers({
    categories: categorySlice.reducer,
  });

  // no need to add the thunk or the devtools! Configure store comes with those things applied out of the box :)
  const store = configureStore({ reducer });

  test('Should be able to set categories', () => {

    store.dispatch(set({results: ['test']}));

    let state = store.getState();

    expect(state.categories.categories.results[0]).toEqual('test');
  });

  test('Slice should be able to fetch categories', async () => {

    await waitFor(() => store.dispatch(getCategories()));

    let { categories } = store.getState();
    expect(categories.categories.results.length).toBeTruthy();
  });
});
