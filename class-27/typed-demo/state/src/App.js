import { useState } from 'react';
import './App.scss';
import PersonForm from './components/personForm/PersonForm';
import DisplayPerson from './components/displayPerson/DisplayPerson';

function App() {

  // we receive an array with a getter and setter
  let [name, setName] = useState('Jacob'); // function that allows us to change the value stored in
  let [age, setAge] = useState(32);
  let [role, setRole] = useState('Instructor');


  // DO NOT ALLOW CHILDREN to do this -> setPerson({name: 'Jacob'}); // mutation of state to a new thing

  // always create a function for mutating state consistently
  function updatePerson(person) {
    if (typeof person !== 'object' && !Array.isArray(person)) {
      console.error('Please provide a valid object');
      return;
    }

    if (
      person.name &&
      typeof person.name === 'string'
    ) setName(person.name);

    if (
      person.age &&
      typeof person.age === 'number'
    ) setAge(person.age);

    if (
      person.role &&
      typeof person.role === 'string'
    ) setRole(person.role);
  }

  return (
    <div className="App">
      <DisplayPerson person={{ name, age, role }} />
      <PersonForm onSubmit={updatePerson} />
    </div>
  );
}

export default App;
