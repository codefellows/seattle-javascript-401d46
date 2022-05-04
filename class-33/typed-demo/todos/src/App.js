import './App.css';
import Settings from './components/settings/Settings';
import Todo from './components/todo/Todo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/settings">Settings</Link>
        </header>
        <Routes>
          <Route path='/settings' element={<Settings />} />
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
