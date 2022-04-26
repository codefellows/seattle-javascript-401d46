import React from 'react';

function DisplayPerson({ person })  {
  return (
    <div id="display-person">
      <h3 data-testid="person-name">{person.name}</h3>
      <p data-testid="person-age">{person.age}</p>
      <p data-testid="person-role">{person.role}</p>
    </div>
  )
}

export default DisplayPerson;
