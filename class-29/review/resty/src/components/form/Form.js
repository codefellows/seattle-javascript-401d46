import { useState } from 'react';

function Form({ onSubmit }) {

  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    let {name, value} = e.target;
    if (name === 'url') setUrl(value);
    // if (name === 'method') setMethod(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ url });
  }

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          data-testid="url-input"
          name="url"
          onChange={handleChange}
          />
        <button
          type="submit"
          data-testid="submit-button"
          >
            Submit
          </button>
      </form>
    </div>
  )
}

export default Form;
