const initialState = [
  {
    displayName: 'Toaster',
    normalizedName: 'toaster',
    inventory: 500,
    price: 20
  }
];

function productsReducer(state = initialState, action) {

  switch(action.type) {
    case 'ADD_TO_CART':
      return state.map(product => {
        // find the product in state
        if (product.normalizedName === action.payload.normalizedName) {
          // decrement the inventory
          product.inventory = product.inventory - 1;
        }
        return product;
      });
    case 'REMOVE_FROM_CART':
      return state.map(product => {
        // find the product in state
        if (product.normalizedName === action.payload.normalizedName) {
          // increment the inventory
          product.inventory = product.inventory + 1;
        }
        return product;
      });
    default:
      return state;
  }

}

export default productsReducer;
