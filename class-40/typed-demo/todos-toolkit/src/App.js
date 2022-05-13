import logo from './logo.svg';
import './App.css';
import useTodos from './hooks/useTodos';

function App() {

  const { todoList, addToList } = useTodos();
  console.log(todoList);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => addToList({text: 'test', id: '1234-5678' })}>Add to List</button>
      </header>
    </div>
  );
}

export default App;
