import { useEffect, useState } from 'react';
import People from './components/people/People';
import axios from 'axios';
import './App.css';

function App() {

  let [people, setPeople] = useState(['Jacob']);
  let [name, setName] = useState('');
  let [showPeople, setShowPeople] = useState(false);

  useEffect(() => {
    // please don't do any mutations, they may run recursively
    console.log('An event has occured in App!!');
  }); // greedy, run when any event happens

  useEffect(() => {
    console.log('App has Mounted!!');
    axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
      let pokemonNames = response.data.results.reduce((acc, pokemon) => {
        acc.push(pokemon.name);
        return acc;
      }, []);
      setPeople(pokemonNames);
    });
  }, []); // give an empty array, only runs on mount

  // useEffect(() => { // is there a way to check state before running our callback?
  //   console.log('name has been updated');
  // }, [name]); // only runs when our dependency list is updated

  // useEffect(() => () => console.log('component unmounts')); // runs when component unmounts

  const togglePeople = (e) => {
    setShowPeople(!showPeople);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, name]);
  }

  return (
    <div className="App">
      <button data-testid="toggle-list" onClick={togglePeople}>Toggle People</button>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Add Person</button>
      </form>
      {showPeople ? <People list={people}/> : null}
    </div>
  );
}

export default App;
