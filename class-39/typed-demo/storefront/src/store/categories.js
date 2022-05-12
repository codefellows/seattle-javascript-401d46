import axios from "axios"

const initialState = {
  activeCategory: '',
  categories: {},
};

export default function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_CATEGORY":
      console.log(action.payload);
      return {
        ...state,
        categories: {...action.payload}
      }
      case "ACTIVE_CATEGORY":
        return {
          categories: state.categories,
          activeCategory: action.payload,
        }
      default:
        return state;
  }
}

export const activeCategory = (category) => {
  return {
    type: "ACTIVE_CATEGORY",
    payload: category,
  };
}

export const getCategory = () => async (dispatch, getState) => {
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(setCategory(response.data));
  } catch (e) {
    console.log('get category error', e);
  }
}

export const setCategory = (data) =>{
  return {
    type: "GET_CATEGORY",
    payload: data
  }
}
