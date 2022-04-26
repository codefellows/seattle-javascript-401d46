import { useState } from 'react';

function PersonForm({ onSubmit }) {

  let [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  }

  return (
    <form onSubmit={handleSubmit} id="person-form">
      <input onChange={(e) => {setInput(e.target.value)}}/>
      <button type="submit">Submit Me!</button>
    </form>
  )
}

export default PersonForm;
