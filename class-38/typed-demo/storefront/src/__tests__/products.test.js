import productsReducer from '../store/products';
import { addToCart, removeFromCart } from '../store/action';
import logger from '../store/middleware/logger';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';

describe('Testing the products reducer', () => {

  const store = createStore(productsReducer, applyMiddleware(logger));

  test('The add to cart action can decrement our inventory', () => {

    let state = store.getState();

    let product = state[0];
    store.dispatch(addToCart(product));

    state = store.getState();

    expect(state[0].inventory).toBe(499);
  });

  test('The remove from cart action can increment', () => {
    let state = store.getState();

    let product = state[0];
    store.dispatch(removeFromCart(product));

    state = store.getState();

    expect(state[0].inventory).toBe(500);
  });
});
