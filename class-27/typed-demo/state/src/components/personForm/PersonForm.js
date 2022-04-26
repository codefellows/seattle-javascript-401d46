import { useState } from 'react';

function PersonForm({ onSubmit }) {

  let [name, setName] = useState('');
  let [age, setAge] = useState(0);
  let [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, role);
    onSubmit({name, age: parseInt(age), role});
  }

  const onChange = (e) => {
    let {name, value} = e.target;
    if (name === 'name') setName(value);
    if (name === 'age') setAge(value);
    if (name === 'role') setRole(value);
  }

  return (
    <form onSubmit={handleSubmit} id="person-form">
      <input name="name" data-testid="name-input" onChange={onChange}/>
      <input name="age" data-testid="age-input" onChange={onChange} />
      <input name="role" data-testid="role-input" onChange={onChange} />
      <button data-testid="submit-button" type="submit">Submit Me!</button>
    </form>
  )
}

export default PersonForm;
