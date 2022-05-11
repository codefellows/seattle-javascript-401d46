import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './store/todo';

function App() {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos()); // when we dispatch something, we need an object passed into the reducer.
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {todos.count}
        </p>
          {todos.results.map(todo => (
            <div key={todo._id}>
              <p>{todo.text}</p>
              <p>{todo.assignee}</p>
            </div>
          ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
