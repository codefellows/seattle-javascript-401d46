// what is a thunk?
//   do something after somethign else has already
//   return our action after a function has run?
const thunk = (store) => (next) => (action) => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
}

export default thunk;
