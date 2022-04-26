import { useState } from 'react';
import './App.css';
import PersonForm from './components/personForm/PersonForm';

function App() {

  // we receive an array with a getter and setter
  let [person, setPerson] = useState('Jacob'); // function that allows us to change the value stored in


  // DO NOT ALLOW CHILDREN to do this -> setPerson({name: 'Jacob'}); // mutation of state to a new thing

  // always create a function for mutating state consistently
  function updatePerson(name) {
    if (typeof name !== 'string') {
      console.error('Please provide a string');
    } else {
      setPerson(name);
    }
  }

  return (
    <div className="App">
      <h1>{person}</h1>
      <PersonForm onSubmit={updatePerson} />
    </div>
  );
}

export default App;
