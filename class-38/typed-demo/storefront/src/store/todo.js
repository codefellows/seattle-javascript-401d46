import axios from 'axios';

const initialState = {
  count: 1,
  results: [{
    complete: false,
    text: 'Do the laundary',
    difficulty: 2,
    assignee: 'Jacob'
  }]
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload;
    default:
      return state;
  }
}

// our async action creator
export const getTodos = () => async (dispatch, getState) => {
  // fetch from our API // do anything asynchronous
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');

  // return our action
  dispatch(setTodos(response.data));
}

export const setTodos = (data) => {
  return {
    type: 'GET_TODOS',
    payload: data
  }
}

export default todoReducer;
