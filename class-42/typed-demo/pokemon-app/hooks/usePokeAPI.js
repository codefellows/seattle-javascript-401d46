import { useEffect, useState } from 'react';
import axios from 'axios';

function usePokeAPI() {

  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  const fetch = (url) => {
    axios.get(url)
      .then(response => setResponse(response.data))
      .catch(e => setError(e));
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  return {
    ...response,
    error,
    fetch
  }
}

export default usePokeAPI;
