import {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './components/form/Form';
import './App.css';

function App() {

  const [request, setRequest] = useState({});
  const [response, setResponse] = useState({});

  const handleRequest = () => {
    // call axios using request params
    if (request.url) {
      axios({
        url:request.url,
        method: request.method || 'GET',
        data: request.body || {}
      }).then(response => {
        setResponse(response);
      });// set response object when it's fullfilled.
    }
  }

  useEffect(handleRequest, [request]);

  const handleSubmit = ({url, method, body}) => {
    setRequest({ url, method, body });
  }

  return (
    <div className="App">
     <Form onSubmit={handleSubmit} />
     <p data-testid="results">{JSON.stringify(response.data)}</p>
    </div>
  );
}

export default App;
