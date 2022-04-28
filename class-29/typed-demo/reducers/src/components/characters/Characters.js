import { useReducer } from "react";

export const initialState = {
  name: 'Sesame Street',
  // backwards: [],
  // forwards: [],
  lastCharacter: 'Big Bird',
  characters: ['Big Bird'],
}

export const reducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return { ...state, lastCharacter: payload, characters: [...state.characters, payload] }
    case 'REMOVE':
      return { ...state, characters: state.characters.filter(char => char !== action.payload) }
    default:
      return state;
  }
}

function Characters() {

  // let [name, setName] = useState('Sesame Street');
  // let [characters, setCharacters] = useState([]);

  // state = the object that represents App state, dispatch is a funciton that needs an 'action'
  let [state, dispatch] = useReducer(reducer, initialState);

  let addCharacter = (character) => {
    dispatch({ type: 'ADD', payload: character });
  }

  return (
    <div id="characters">
      {state.characters.map(char => <p>{char}</p>)}
      <button onClick={() => addCharacter('Ryan')}>Add Character</button>
    </div>
  );
}

export default Characters;
