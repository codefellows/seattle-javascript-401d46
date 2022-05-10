const initialState = {
  total: 0,
}

export default function voteReducer(state = initialState, action) {

  switch (action.type) {
    case 'INCREMENT':
      return {
        total: state.total + 1
      }
    default:
      return state
  }
}
