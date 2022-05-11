const initialState = [];

function cartReducer(state = initialState, action) {

  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(product => product.normalizedName !== action.payload.normalizedName);
    default:
      return state;
  }
}

export default cartReducer;
