// Redux toolkit
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: '',
    categories: {},
  },
  reducers: {
    set(state, action) {
      console.log(action);
      return {...state, categories: {...action.payload}}
    },
    activate(state, action) {
      return {
        categories: state.categories,
        activeCategory: action.payload,
      }
    }
  }
});

// what is on the slice?
// categoriesSlice.reducer
// categoriesSlice.actions.set
// categoriesSlice.actions.activate

export const getCategories = () => async (dispatch, getState) => {
  const { set } = categoriesSlice.actions;
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(set(response.data));
  } catch (e) {
    console.log('get category error', e);
  }
}

export default categoriesSlice;
