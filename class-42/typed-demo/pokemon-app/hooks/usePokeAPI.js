import { useEffect, useState } from 'react';
import axios from 'axios';

function usePokeAPI() {

  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => setResponse(response.data))
      .catch(e => setError(e));
  }, []);

  return {
    ...response,
    error,
  }
}

export default usePokeAPI;
