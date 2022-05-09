const initialState = {
  candidates: [
    { id: 1, name: 'Mary', votes: 0 },
    { id: 2, name: 'Bob', votes: 0 },
    { id: 3, name: 'Jamie', votes: 0 },
  ],
  totalVotes: 0
}

function votesReducer(state = initialState, action) {

  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        candidates: state.candidates.map(candidate => {
          if (candidate.name === action.payload.name) {
            return {
              name: candidate.name, votes: candidate.votes + 1,
            }
          }
          return candidate;
        }),
        totalVotes: state.totalVotes + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        candidates: state.candidates.map(candidate => {
          if (candidate.name === action.payload.name) {
            return {
              name: candidate.name, votes: candidate.votes - 1,
            }
          }
          return candidate;
        }),
        totalVotes: state.totalVotes - 1,
      }
    case 'RESET':
      return initialState;
    default:
      return state
  }
}


// Increment vote action creator
export const incrementCount = (candidate) => {

  // creators return actions {type, payload}
  return {
    type: 'INCREMENT',
    payload: candidate
  }
}

export const decrementCount = (candidate) => {
  return {
    type: 'DECREMENT',
    payload: candidate
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}

export default votesReducer;
