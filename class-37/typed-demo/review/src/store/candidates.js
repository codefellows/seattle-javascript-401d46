const initialState = [
  {name: 'Bob', votes: 0},
  {name: 'Mary', votes: 0},
  {name: 'Jamie', votes: 0}
]

export default function candidateReducer(state = initialState, action) {

  switch(action.type) {
    case 'INCREMENT':
      return state.map(candidate => candidate.name === action.payload.name
          ? {...candidate, votes: candidate.votes + 1 }
          : candidate
        );
    default:
      return state
  }

}
