import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    add(state, action) {
      return { list: [...state.list, action.payload] };
    },
  }
});

export default todoSlice;
