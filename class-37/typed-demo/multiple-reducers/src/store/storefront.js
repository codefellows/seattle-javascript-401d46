// what state will look like
const initialState = {
  activeCategory: '',
  categories: [{
    normalizedName: 'electronics',
    displayName: 'Electronics',
    description: 'Things that use electricity',
  }],
  products: [{
    name: 'Roll of Film',
    category: 'electronics',
    description: '',
    price: 10,
    inventory: 100
  }]
}


// reducer function
function storefrontReducer(state = initialState, action) {

  console.log(action);
  switch(action.type) {

    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: action.payload, } // what is our new state?
    default:
      return state
  }
}

// action creator
export const selectCategory = (category) => {

  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
}

export const filterResults = () => {

}

export default storefrontReducer;
