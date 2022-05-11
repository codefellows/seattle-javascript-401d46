export const addToCart = (product) => {

  // await axios.post('/cart').send(product); redux doens't like this.

  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}
