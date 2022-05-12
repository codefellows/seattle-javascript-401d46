import { waitFor } from '@testing-library/react';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer, { activeCategory, setCategory, getCategory } from '../store/categories';
import productReducer, { setProducts,  filterProducts, removeFromStock } from '../store/products';
import thunk from 'redux-thunk';

describe('Testing the redux store', () => {

  const reducers = combineReducers({
    products: productReducer,
    categories: categoryReducer,
  });
  const store = createStore(reducers, applyMiddleware(thunk));

  test('Should be able to activate a category', () => {

    let categoryState = store.getState();
    store.dispatch(activeCategory('category'));

    categoryState = store.getState();
    console.log(categoryState);

    expect(categoryState.categories.activeCategory).toBe('category');
  });

  test('Should be able to set categories', () => {
    let categoryState = store.getState();
    expect(categoryState.categories.categories).toEqual({});
    // {activeCategory: 'category', categories: []}
    store.dispatch(setCategory({results: ['category', 'potato', 'patoto']}))

    categoryState = store.getState();
    expect(categoryState.categories.categories).toEqual({results: ['category', 'potato', 'patoto']});
  });

  test('Should be able to filter products', () => {
    // let { products } = store.getState();

    store.dispatch(setProducts([
      { category: 'food', name:'banana', quantity: 10 },
      { category: 'test', name: 'test', quantity: 10 },
    ]));

    store.dispatch(filterProducts('test'));

    let { products } = store.getState();

    expect(products.filteredProducts[0].name).toBe('test');
    expect(products.products[1].name).toBe('test');
    expect(products.products[0].name).toBe('banana');
  });

  test('Should be able to remove product stock', () => {

    // let's grab a product from state!
    let { products } = store.getState();
    let product = products.products[0];
    let quantity = 2;

    // dispatch our action
    store.dispatch(removeFromStock(product, quantity));

    // check our updated state
    // get current state
    let productState = store.getState().products;
    let productsArray = productState.products;
    let productFromArray = productsArray[0];
    expect(productFromArray.quantity).toBe(8);
  });

  test('Should fetch categories from API', async () => {

    // we need a thunk
    // we need to delay our dispatch
    await waitFor(() => store.dispatch(getCategory()));

    let { categories } = store.getState();
    expect(categories.categories.results.length).toBeTruthy();
    // expect(false).toBe(true);
  });
});
