import React, { useState } from 'react';

export const PeopleContext = React.createContext();

function PeopleProvider({children}) {

  const [list, setList] = useState([{name: 'Jacob', age: 32}]);

  const addPeople = (person) => {

    if (person && person.name && person.age) {
      setList([...list, person]);
    } else {
      console.error('Invalid person');
    }
  }

  return (
    <PeopleContext.Provider value={{ people: list, addPeople }}>
      {children}
    </PeopleContext.Provider>
  )
}

export default PeopleProvider;
