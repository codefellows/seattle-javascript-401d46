import axios from 'axios';

const initialState = {
  // state goes here
  products: [],
  filteredProducts: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type){
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
        }
    case 'FILTER_PRODUCTS':
      return {
          ...state,
          filteredProducts: state.products.filter(product => product.category === action.payload)

      }
    case 'REMOVE_FROM_STOCK':
        // On second thought, I think the .map is a better solution - jeffrey
        // I am always a fan of seeing multiple ways to achieve the same thing tho - Andres
        // :+1:
        const index = state.products.findIndex((product) => product === action.payload.product)
        const updatedProducts = [...state.products];
        updatedProducts[index].quantity -= action.payload.quantity;
        return {
          ...state,
          products: updatedProducts,
        }
    default:
        return state;
    }



}


export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get() //url goes in parens
  dispatch(setProducts(response.data.results))
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data
  }
}

export const filterProducts = (category) => {
    return {
        type: 'FILTER_PRODUCTS',
        payload: category,
    }
}

export const removeFromStock = (product, quantity /*params wip*/) => {
    return {
        type: 'REMOVE_FROM_STOCK',
        payload:{ product, quantity },
    }
};

export default productReducer;
